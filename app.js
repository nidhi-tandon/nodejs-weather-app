//
//  app
//  nodejs-weather-app
//
//  Created by nidhitandon on 28/11/18 11:07 AM
//  Copyright © 2018 nodejs-weather-app. All rights reserved.
//
//  Keep up the good work :)
//


const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs.options({
      a: {
          demand: true,
          alias: 'address',
          describe: 'Address to fetch weather for',
          string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if ( errorMessage ) {
        console.log(errorMessage)
    }
    else {
        console.log(JSON.stringify(results, undefined, 2))
    }
});
