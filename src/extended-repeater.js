module.exports = function repeater(str, options) {
    let {
        repeatTimes = 1,
        separator = "+",
        addition,
        additionRepeatTimes = 1,
        additionSeparator = "|",
    } = options;

    result = [];
    str = String(str);

    for (let i = 0; i < repeatTimes; i++) {
        result.push(str);
        addSubStr(addition, additionRepeatTimes, additionSeparator);
        if (i < repeatTimes - 1) result.push(separator);
    };

    function addSubStr (addtn, repeats, sep) {
        for (let i = 0; i < repeats; i++) {
            if (addtn !== undefined) {
                result.push(String(addtn))
                if (i < repeats - 1) result.push(sep);
            };
        };
    };

    return result.join('');
};
  