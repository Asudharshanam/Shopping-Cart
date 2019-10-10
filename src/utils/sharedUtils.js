import { validationRules } from './validation'

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