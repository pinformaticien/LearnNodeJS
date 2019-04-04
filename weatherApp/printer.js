function printMessage (city, temperature, pressure) {
	
	console.log("A "+city+", la température est de: "+(temperature-273.15).toFixed(2)+" degrés celcius et la presion est de: "+pressure+" hPA\n");

	// hPA = hectopascal

}

function printError (error) {
	
	console.error(error.message);

}

module.exports.printMessage = printMessage;

module.exports.printError = printError;