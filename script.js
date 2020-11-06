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
var mealArray = [];
var recentList = document.querySelector(".recents");
var fetchButton = document.querySelector(".button");
init ();

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

var mealInput = document.querySelector(".input-group-field");
// fetch function for search input ===============
function getMeal (meal) {

    var meal = mealInput.value;
    var mealSearch = "https://www.themealdb.com/api/json/v1/1/search.php?s="+ meal;
    fetch(mealSearch)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data);
        // $('#result').empty();
        if (meal === "") {
          console.log("bad input"); // let's put a modal alert here that says - "please input some text to search"
        } else if (data.meals === null) {
          console.log("try again"); // let's put another modal alert here that reads "Sorry, meal not found. Try again"
        } else {
        // anchor tag that takes user to a div tag with a specific ID, smooth scroll takes user to page 2, allows for return navigation by using "back"
          for (var i = 0; i < data.meals.length; i++) {
            location.href ="index.html#results";
            var grid = $('#gridTarget');
            var cell = $('<article>');
            var card = $('<article>');
            var cardBody = $('<article>');
            cell.addClass('cell');
            card.addClass('card');
            cardBody.addClass('card-body');
            grid.append(cell);
            cell.append(card);
            card.append(cardBody);
            cardBody.attr('id', 'result'+ [i]);
            $('#result'+[i]).text(data.meals[i].strMeal);
            $('#result'+[i]).on('click', function(event) {
              event.preventDefault();
              location.href = "index.html#resultSingle";
              var resImg = $('<img>');
              $('#gridTarget2').append(cell);
              cell.append(card);
              card.append(resImg);
              cell.addClass('cell');
              card.addClass('card');
              card.attr('id','resultCard');
              resImg.attr('id','resultImg');
              $('#resultCard').text(this.innerHTML);
              // $('#resultImg').attr('src', this.strMealThumb);
              chuckQuote();
            });
           // takes the last input item and adds it the recent list, removes the oldest once 7 items are listed, up to 7 recent items for now
            mealArray.push(meal); {
              if (mealArray.length > 7) {
                mealArray.shift();
                mealArray.length = Math.min(mealArray.length, 7);
                mealInput.value = ""; // resets the search field
                storeRecent();
                listRecent();
              } else {
                mealInput.value = "";
                storeRecent();
                listRecent();
              }
            }
          }
        };
        recents();
        listRecent();
      });
}
// creates the results page
// function renderCell () {
//   location.href ="index.html#results";
//   var grid = $("#gridTarget");
//   var cell = $("<section>");
//   var card = $("<section>");
//   var cardBody = $("<section>");

//   cell.addClass("cell");
//   card.addClass("card");
//   cardBody.addClass("card-body");

//   grid.append(cell);
//   cell.append(card);
//   card.append(cardBody);
// }


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

function chuckQuote () {
    var chuckTarget = $('#chuckT');
    var chuckCell = $('<article>')
    var chuckCard = $('<article>')
    var chuckH3 = $('<h3>');
    chuckCell.addClass('cell');
    chuckCard.addClass('card');
    chuckH3.attr('id', 'chuck');
    chuckTarget.append(chuckCell);
    chuckCell.append(chuckCard);
    chuckCard.append(chuckH3);
    fetch(norrisFoodQuotes)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.value);
        $('#chuck').text(data.value);
      });
}

// localStorage feature goes here ========================
// stores recent searches in localStorage
function storeRecent() {
  localStorage.setItem("recentMeals", JSON.stringify(mealArray));
  recents();
};
// retrieves recents from localStorage
function init() {
  var storedMeals = JSON.parse(localStorage.getItem("recentMeals"));
  if (storedMeals !== null) {
    mealArray = storedMeals;
    recents ();
  }
}
// creates the list items from recent searches
function recents() {
  $('li').remove();
  for (var i = 0; i < mealArray.length; i++) {
    var liN1 = document.createElement("li");
    recentList.appendChild(liN1);
    liN1.textContent = mealArray[i];
  }
}
// makes the recent list clickable, and goes to the results page
function listRecent () {
  var clickList = $("li");
  var clickMeal = ""
  if (clickList.length > 0) {
    for (var i = 0; i < clickList.length; i++) {
      clickList[i].addEventListener("click", function () {
        clickMeal = this.innerHTML;
        console.log(clickMeal);
        getMeal(clickMeal);
      });
    }
  }
}

fetchButton.addEventListener('click', getMeal);

listRecent();