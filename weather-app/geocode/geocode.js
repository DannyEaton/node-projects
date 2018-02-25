request = require("request");

let geocodeAddress = (address,callback)=>{

    const filteredAddress = encodeURIComponent(address);

    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${filteredAddress}`,(error,response,body)=>{
        let location = JSON.parse(body);
        if(error){
            callback("There was an error retrieving Address Coordinates");
        } else if(location.status === "ZERO_RESULTS"){
            callback("There were no results generated from that address");
        }else if(location.status === "OK") {
            callback(undefined, {
                address: location.results[0].formatted_address,
                latitude: location.results[0].geometry.location.lat,
                longitude: location.results[0].geometry.location.lng
            });
        }
    });

};

module.exports = {
    geocodeAddress
};
