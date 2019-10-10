import { validationRules } from './validation'

export function getCardType(ccNum) {

    let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    let amexpRegEx = /^(?:3[47][0-9]{13})$/;
    let discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (visaRegEx.test(ccNum)) {
        return "visa"
    } else if (mastercardRegEx.test(ccNum)) {
        return "masterCard"
    } else if (amexpRegEx.test(ccNum)) {
        return "americanExpress"
    } else if (discovRegEx.test(ccNum)) {
        return "discover"
    } else {
        return ""
    }
}

export function splitter(name = "") {
    const [rule, subRule] = name.split(':');
    return { rule, subRule };
}

export function validate(rules, value, fieldName = "") {
    if (!rules) { return "" }
    const invalidRules = rules.find(name => {
        const { rule, subRule } = splitter(name);
        const isSuccess = validationRules[rule].test(value, subRule);
        return !isSuccess ? true : false;
    });
    const { rule, subRule } = splitter(invalidRules);
    return !invalidRules ? '' : validationRules[rule].message(fieldName, subRule);
}

export function isAllFieldsValid(data) {
    const isEmpty = Object.values(data).find(value => !!value)
    return !isEmpty ? false : true
}

export function getFormFieldsValidated(ruleSet, values, fieldName) {
    const error = {}

    for (let key in values) {
        error[key] = validate(ruleSet[key], values[key], fieldName)
    }
    return error
}