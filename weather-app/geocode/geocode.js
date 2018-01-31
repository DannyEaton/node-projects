request = require("request");

let geocodeAddress = (address)=>{

    const filteredAddress = encodeURIComponent(address);

    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${filteredAddress}`,(error,response,body)=>{
        let location = JSON.parse(body);
        if(error){
            console.log("There was an error retrieving Address Coordinates");
        } else if(body.status === "ZERO_RESULTS"){
            console.log("There were no results generated from that address");
        }else if(location.results) {
            console.log("Address " + location.results[0].formatted_address);
            console.log("Latitude " + location.results[0].geometry.location.lat);
            console.log("Longitude " + location.results[0].geometry.location.lng);
        }
    });

};

module.exports = {
    geocodeAddress
};