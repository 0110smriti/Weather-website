const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e9f1f0fd2883f2b8297347ccc3301773/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si&lang=en'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Please Check your network connection', undefined)
        }
        else if(body.error){
            callback('Unable to connect to server.', undefined)
        }
        else{
            const res = body
            const data = res.daily.data[0].summary + 'It is currenlty '+ res.currently.temperature + ' degrees out.' + 'The high today is '+ res.daily.data[0].temperatureMax + ' and the low today is '+ res.daily.data[0].temperatureMin + '.There is a '+ res.currently.precipProbability +'% chance of rain.' 
            callback(undefined, data)
        }
    })
}

module.exports =  forecast