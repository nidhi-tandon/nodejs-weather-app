//
//  promise
//  nodejs-weather-app
//
//  Created by nidhitandon on 28/11/18 4:22 PM
//  Copyright © 2018 nodejs-weather-app. All rights reserved.
//
//  Keep up the good work :)
//
const request = require('request');

let geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodeAddress = encodeURIComponent(address);
        request({
            url: `https://maps.google.com/maps/api/geocode/json?key=AIzaSyCR9F9zm80nAXLpAxn_qeCj6XJWYP8Gvrc&address=${encodeAddress}`,
            json: true
        }, (error, response, body) => {
            if ( error ) {
                reject('Unable to connect to Google server.')
            }
            else if ( body.status === 'ZERO_RESULTS' ) {
                reject('Unable to find the address.')
            }
            else if ( body.status === 'OK' ) {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    })
};

geoCodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch(() => {

});