//
//  callbacks
//  nodejs-weather-app
//
//  Created by nidhitandon on 28/11/18 10:57 AM
//  Copyright © 2018 nodejs-weather-app. All rights reserved.
//
//  Keep up the good work :)
//

let getUser = (id, callback) => {
    let user = {
        id,
        name: 'some name'
    };
    setTimeout(()=>{
        callback(user);
    }, 3000);
};

getUser(31, (userObject) => {
    console.log(userObject)
});