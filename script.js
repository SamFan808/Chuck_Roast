var randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
var foodCategory = "https://www.themealdb.com/api/json/v1/1/categories.php";
var mealsByCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"; //this will be changed to be dynamic to food categories or make it specific to which categories we want

var norrisFoodQuotes = "https://api.chucknorris.io/jokes/random?category=food";

fetch(randomMeal)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("random meal ----------------");
    console.log(data);
  });

fetch(mealsByCategory)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("meals by category -----------");
    console.log(data);
  });

fetch(norrisFoodQuotes)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("random Norris food quote");
    console.log(data);
  });
