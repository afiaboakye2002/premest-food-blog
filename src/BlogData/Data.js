var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random");

req.query({
	"number": "1",
	"tags": "vegetarian,dessert"
});

req.headers({
	"x-rapidapi-key": "d1cb81f35bmsh25ccf13803a8c71p17d4c4jsn2a005bfeb206",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});