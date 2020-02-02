const request = require('request')

const geocode = (address, callback) => {
    const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29kaW5nZm9yc21yaXRpIiwiYSI6ImNrNXFudWJkZjA0Zjcza21qbjNoYmhtanAifQ.onaDqTU-_sRGvkhmlnaEaA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Please check your network connection.', undefined)
        }
        else if(body.features.length === 0){
            callback('Location not found please try again', undefined)
        }else{
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            } 
            callback(undefined, data)
        }
    })
}

module.exports = geocode