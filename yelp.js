
//var accesToken = "'kfiSNSPY5AQhor82tcdQ8h5DafpzPK39lcerdvsv-muY0vEWOoSKk_LKWqorb3YtbjCBxcC6JQox24-pvJrDqHVrfRcAN67bub9SMG0uE4181-cnmu5UuDo4XTnxWXYx'";
const yelp = require('yelp-fusion');
const inquirer = require('inquirer');

var clientId= "kqutzBqNCdge7YlE3cSrHg";
var clientSecret= "46nYNtyCjTZljV72zDmVQ6wc31SJucKEUWSJk3fAAXPP1Drp1BwN194CznBCnsG4";
'use strict';
 


inquirer.prompt([
	{
		type: "input",
		message: "Type in your location",
		name: "location"
	},
	{
		type: "list",
		message: "What type of cuisine would you like?",
		choices: ["Italian","Thai", "Sushi", "Burgers", "Indian"],
		name: "cuisine"

	}
]) .then(function(answers){
		console.log(answers.cuisine)
		console.log(answers.location)
		const token = yelp.accessToken(clientId, clientSecret).then(response => {
		const client = yelp.client(response.jsonBody.access_token);
		client.search({
		 term: answers.cuisine, //answers.cuisine is what i want to save as options 1, 2, and 3
		 location: answers.location,
		 sort: 0,
		 limit: 3
		}).then(response => {
		 console.log(JSON.parse(response.body));
		}).catch(e => {
		 console.log(e);
		});
	}).catch(e => {
		console.log(e);
	});	
});



// const geocoder = require('geocoder');
// const options = { 
// 	provider: "google",

// }
// const geocode = geocoder(options)

// //save food_choice.toLowerCase().split(" ").join("+"), will this be the name of the restaurant?
// //also location.toLowerCase.split(" ").join("+")
// //can google query=food_choice.toLowerCase().split(" ").join("+") + "%2C" + location.toLowerCase.split(" ").join("+")  ???

// //url is https://google.com/maps/search/?api=1query

// inquirer.prompt([
// 	{
// 		type: "list",
// 		message: "Which of these options do you select?",
// 		choices: ["Option 1", "Option 2", "Option 3"], //this to be linked to the geocoder 
// 		name: "food_choice"
// 	}

// ]) .then(function(answer){
// 	console.log(answer)
// 	geocoder.getDetails({
// 		name: answer.food_choice
// 		location: answer.location
// 		}) .then(response => {
// 			console.log(response.jsonBody); //I also want it to show name (called name in google)
// 		})
	
// 	})

// });

