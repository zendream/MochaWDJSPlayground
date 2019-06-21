//parse "env" parameter from process arguments
process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 0) {
        if (arg[0] === 'env') {
            var env = arg[1];
            module.exports.env = env;
        }
        if (arg[0] === 'tstconfig') {
            var config = arg[1];
            module.exports.tstconfig = config;
        }
    }
});
