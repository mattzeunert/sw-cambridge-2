function parseDate(str){
	var parts = str.split(" "),
		dateParts = parts[0].split("-"),
		timeParts = parts[1].split(":");
	return new Date(
		dateParts[0],
		dateParts[1] - 1,
		dateParts[2],
		timeParts[0],
		timeParts[1]
	);
}

function journeysByTime(){
	return _.sortBy(journeys, "departureTime")
}

function journeysByPrice(){
	return _.sortBy(journeys, "price")
}

function journeysByComfort(){
	var levels = ["economy", "standard", "premium"];
	return _.sortBy(journeys, function(journey){
		return -$.inArray(journey.comfortLevel, levels);
	})
}

function journeysByLength(){
	return _.sortBy(journeys, function(journey){
		return journey.arrivalTime.valueOf() - journey.departureTime.valueOf();
	});
}

var journeys = [
	{
		"id": 23,
		"departureTime": parseDate("2013-11-23 11:00"),
		"arrivalTime": parseDate("2013-11-23 8:00"),
		"price": 23.99,
		"departureStation": {name: "Lima North"},
		"arrivalStation": {name: "Cusco"},
		"providerName": "SuperBus",
		"class": "Extra great",
		"comfortLevel": "standard"
	},
	{
		"id": 25,
		"departureTime": parseDate("2013-11-23 11:00"),
		"arrivalTime": parseDate("2013-11-23 8:00"),
		"price": 29.99,
		"departureStation": {name: "Lima North"},
		"arrivalStation": {name: "Cusco"},
		"providerName": "SuperBus",
		"class": "business",
		"comfortLevel": "premium"
	},
	{
		"id": 235,
		"departureTime": parseDate("2013-11-23 12:00"),
		"arrivalTime": parseDate("2013-11-23 8:30"),
		"price": 13.99,
		"departureStation": {name: "Lima South"},
		"arrivalStation": {name: "Cusco"},
		"providerName": "BetterBus",
		"class": "Express",
		"comfortLevel": "economy"
	},
	{
		"id": 2233,
		"departureTime": parseDate("2013-11-24 18:00"),
		"arrivalTime": parseDate("2013-11-24 14:00"),
		"price": 29.99,
		"departureStation": {name: "Lima North"},
		"arrivalStation": {name: "Cusco"},
		"providerName": "UberBus",
		"class": "Bus++",
		"comfortLevel": "premium"
	},
	{
		"id": 2123423,
		"departureTime": parseDate("2013-11-24 17:00"),
		"arrivalTime": parseDate("2013-11-23 12:00"),
		"price": 10.99,
		"departureStation": {name: "Lima North"},
		"arrivalStation": {name: "Cusco"},
		"providerName": "SuperBus",
		"class": "Ok",
		"comfortLevel": "standard"
	}
]