request = require("request");

let getWeather = (lat, long,callback) =>{
    request({
        url: `https://api.darksky.net/forecast/39cb94ca4dcdc4eb06f03f393bd27e06/${lat},${long}`,
        json: true
    }, (error,response,body)=>{

        if(!error && response.statusCode ===200){
            callback(undefined,
                {
                   temperature:body.currently.temperature
                });
        } else{
            callback("Unable to fetch weather");
        }
    });};



module.exports = {
    getWeather
};
