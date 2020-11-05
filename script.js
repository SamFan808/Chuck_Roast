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

// when click on an image, it fetches the appropriate api
$("#random").on("click", function () {
  window.location = "index2.html";
  fetch(randomMeal)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("random meal ----------------");
      console.log(data);
    });
});

$("#chicken").on("click", function () {
  // window.location = "index2.html";
  fetch(mealsChicken)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("chicken dish ----------------");
      console.log(data);
    });
});

$("#beef").on("click", function () {
  window.location = "index2.html";
  fetch(mealsBeef)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("meals by beef -----------");
      console.log(data);
    });
});

$("#lamb").on("click", function () {
  window.location = "index2.html";
  fetch(mealsLamb)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("meals by lamb -----------");
      console.log(data);
    });
});

$("#pork").on("click", function () {
  window.location = "index2.html";
  fetch(mealsPork)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("meals by pork -----------");
      console.log(data);
    });
});

$("#seafood").on("click", function () {
  window.location = "index2.html";
  fetch(mealsSeafood)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("meals by seafood -----------");
      console.log(data);
    });
});

// chuck norris api fetch call commented out for now.

// fetch(norrisFoodQuotes)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("random Norris food quote");
//     console.log(data);
//   });

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
