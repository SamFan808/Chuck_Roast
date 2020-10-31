var randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
var foodCategory = "https://www.themealdb.com/api/json/v1/1/categories.php";
// var category = "";
// var mealsByCategory =
//   "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category; //this will be changed to be dynamic to food categories or make it specific to which categories we want
var mealsChicken =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken";
var mealsBeef = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
var mealsPork = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork";
var mealsLamb = "https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb";
var mealsSeafood =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood";
var norrisFoodQuotes = "https://api.chucknorris.io/jokes/random?category=food";

fetch(randomMeal)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("random meal ----------------");
    console.log(data);
  });

fetch(mealsChicken)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("meals by chicken -----------");
    console.log(data);
  });

fetch(mealsBeef)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("meals by beef -----------");
    console.log(data);
  });

fetch(mealsLamb)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("meals by lamb -----------");
    console.log(data);
  });

fetch(mealsPork)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("meals by pork -----------");
    console.log(data);
  });

fetch(mealsSeafood)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("meals by seafood -----------");
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

// $(".cell").on("click", function (event) {
//   event.preventDefault();

//   if ($("id") === "chicken") {
//     category = "chicken";
//   }
//   if ($("id") === "beef") {
//     category = "beef";
//   }
//   if ($("id") === "pork") {
//     category = "pork";
//   }
//   if ($("id") === "lamb") {
//     category = "lamb";
//   }
//   // if($("id") === "random"){
//   //   category = ""
//   // }
//   if ($("id") === "seafood") {
//     category = "seafood";
//   }

//   console.log(category);
// });
