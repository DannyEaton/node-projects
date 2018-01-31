request = require("request");
yargs = require("yargs");
geocode = require("./geocode/geocode");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            string: true,
            describe: "Used by user to enter in their address on the command line"
        }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.address);