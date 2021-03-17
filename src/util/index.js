exports.isParamsUndifined = (obj, ...args) => {
    for (let key in args){
        if (!Object.keys(obj).includes(args[key])) {
            return false
        }
    }
    return true
};

exports.isParamsNull = (obj, ...args) => {
    for (let key in args){
        if (obj[args[key]] != null && obj[args[key]] != '') {
            return false
        }
    }
    return true
};
