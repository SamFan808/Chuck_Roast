var randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
var foodCategory = "https://www.themealdb.com/api/json/v1/1/categories.php";
var category = "";
var mealsByCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category; //this will be changed to be dynamic to food categories or make it specific to which categories we want
var mealsChicken =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken";
var mealsBeef = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
var mealsPork = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork";
var mealsLamb = "https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb";
var mealsSeafood =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood";
var norrisFoodQuotes = "https://api.chucknorris.io/jokes/random?category=food";



// $("#random").on("click", function () {
//   fetch(randomMeal)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("random meal ----------------");
//       console.log(data);
//     });
// });

// $("#chicken").on("click", function () {
//   fetch(mealsChicken)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("chicken dish ----------------");
//       console.log(data);
//     });
// });

// $("#beef").on("click", function () {
//   fetch(mealsBeef)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("meals by beef -----------");
//       console.log(data);
//     });
// });

// $("#lamb").on("click", function () {
//   fetch(mealsLamb)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("meals by lamb -----------");
//       console.log(data);
//     });
// });

// $("#pork").on("click", function () {
//   fetch(mealsPork)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("meals by pork -----------");
//       console.log(data);
//     });
// });

// $("#seafood").on("click", function () {
//   fetch(mealsSeafood)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("meals by seafood -----------");
//       console.log(data);
//     });
// });

// fetch(norrisFoodQuotes)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("random Norris food quote");
//     console.log(data);
//   });
// fetch function for search input ===============

$(".button").on("click", function () {
  var mealInput = document.querySelector(".input-group-field");
  var meal = mealInput.value;
  var mealSearch = "https://www.themealdb.com/api/json/v1/1/search.php?s="+ meal;
  fetch(mealSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (meal === "") {
        console.log("bad input"); // let's put a modal alert here that says - "please input some text to search"
      } else if (data.meals === null) {
        console.log("try again"); // let's put another modal alert here that reads "Sorry, meal not found. Try again"
      } else {
        // anchor tag that takes user to a div tag with a specific ID, smooth scroll takes user to page 2, allows for return navigation by using "back"
        renderCell();
      }
    });
    mealInput.value = ""; // resets the search field
});

function renderCell () {
  location.href ="index.html#results";
  var grid = $("#gridTarget");
  var cell = $("<section>");
  var card = $("<section>");
  var cardBody = $("<section>");

  cell.addClass("cell");
  card.addClass("card");
  cardBody.addClass("card-body");
  cardBody.attr("id", "result1");

  grid.append(cell);
  cell.append(card);
  card.append(cardBody);
  console.log("it's working");
}

$(".cell").on("click", function (event) {
  event.preventDefault();

  if (id === "chicken") {
    category = "chicken";
  }
  if ($("id") === "beef") {
    category = "beef";
  }
  if ($("id") === "pork") {
    category = "pork";
  }
  if ($("id") === "lamb") {
    category = "lamb";
  }
  // if($("id") === "random"){
  //   category = ""
  // }
  if ($("id") === "seafood") {
    category = "seafood";
  }

  console.log(category);
});


// localStorage feature goes here ========================