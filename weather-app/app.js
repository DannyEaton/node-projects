request = require("request");
yargs = require("yargs");
geocode = require("./geocode/geocode");
weather = require("./weather/weather");

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

geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            } else{
                console.log("Temp: "+ weatherResults.temperature);
            }
        });
    }
});


//muh key
//39cb94ca4dcdc4eb06f03f393bd27e06