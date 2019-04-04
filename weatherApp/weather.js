


var http = require('http');
var printer = require('./printer');
 


function get (city) {
	
	var request = http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=0daf02a86e024ac8dbb7ce07078e582f", function (response) {
		

		var body = "";

		response.on('data', function (chunk) {
			
		// console.log("BODY: " + chunk);

		body += chunk;
	});

		response.on('end', function () {
			


			if (response.statusCode === 200) {
				try {
					var data_weather = JSON.parse(body);

					printer.printMessage(city, data_weather.main.temp, data_weather.main.pressure);
				} catch (error) {
					printer.printError(error);

				}
			} else {
				printer.printError({message: "Ooops on ne connait pas cette ville"})
			}

		});


	});

	request.on('error', printer.printError);

}


module.exports.get = get;


