var exports = module.exports = {};

module.exports['add'] = (arguments) => {
    var sum =0;
    arguments.forEach(element => {
        sum+=Number(element);
    });
    return sum;
}

module.exports['diff'] = (arguments) => {
    var diff = Number(arguments[0]);
    arguments = arguments.splice(1);
    arguments.forEach(element => {
        diff-=Number(element);
    });
    return diff;
}