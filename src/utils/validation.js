export const validationRules = {
    required: {
        test: (val) => (val !== null && val !== undefined && val.toString().trim().length > 0),
        message: (name) => `${name} is a required field`
    },
    min: {
        test: (val, len) => val.length >= parseInt(len),
        message: (name, len) => `${name} must be ${len} or more characters.`
    },
    max: {
        test: (val, len) => val.length <= parseInt(len),
        message: (name, len) => ` ${name} cannot exceed ${len} characters.`
    },
    email: {
        test: (val) => {
            const emailRegex = RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            return (emailRegex.test(val))
        },
        message: (name) => ` ${name} should be in ${name}@${name}.com format`
    },
    validDate: {
        test: (val) => {
            let today = new Date()
            let year = today.getFullYear().toString().substr(-2);
            let month = today.getMonth();
            let dateSplitter = val.split('/')
            let dateCheck = (dateSplitter[0] > month && dateSplitter[1] >= year) ? true : false;
            return dateCheck;
        },
        message: (name) => ` ${name} should be in valid date`
    }
};
