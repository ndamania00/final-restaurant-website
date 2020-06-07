$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

var dc = {};

var homeHtmlUrl = "snippets/home-snippet.html";
<<<<<<< HEAD
var allCategoriesUrl =
  "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl =
=======
var allCategoriesUrl = 
  "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl = 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
  "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

<<<<<<< HEAD
// Return substitute of '{{propName}}'
// with propValue in given 'string'
=======
// Return substitute of '{{propName}}' 
// with propValue in given 'string' 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
<<<<<<< HEAD
};
=======
}
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970

// Remove the class 'active' from home and switch to Menu button
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
<<<<<<< HEAD
  if (classes.indexOf("active") === -1) {
=======
  if (classes.indexOf("active") == -1) {
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
<<<<<<< HEAD

// TODO: STEP 0: Look over the code from
// *** start ***
// to
// *** finish ***
=======
  
// TODO: STEP 0: Look over the code from 
// *** start *** 
// to 
// *** finish *** 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
// below.
// We changed this code to retrieve all categories from the server instead of
// simply requesting home HTML snippet. We now also have another function
// called buildAndShowHomeHTML that will receive all the categories from the server
// and process them: choose random category, retrieve home HTML snippet, insert that
// random category into the home HTML snippet, and then insert that snippet into our
// main page (index.html).
//
<<<<<<< HEAD
// TODO: STEP 1: Substitute [...] below with the *value* of the function buildAndShowHomeHTML,
=======
// TODO: STEP 1: Substitute [...] below with the *value* of the function buildAndShowHomeHTML, 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
// so it can be called when server responds with the categories data.

// *** start ***
// On first load, show home view
<<<<<<< HEAD

showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitly setting the flag to get JSON from server processed into an object literal
});

// *** finish **

// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {

  // Load home snippet page
  $ajaxUtils.sendGetRequest(homeHtmlUrl,
=======
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl, 
  buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});
// *** finish **


// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {
  
  // Load home snippet page
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
    function (homeHtml) {

      // TODO: STEP 2: Here, call chooseRandomCategory, passing it retrieved 'categories'
      // Pay attention to what type of data that function returns vs what the chosenCategoryShortName
      // variable's name implies it expects.
<<<<<<< HEAD
      var chosenCategoryShortName =  chooseRandomCategory(categories).short_name;

=======
      
      var chosenCategoryShortName = chooseRandomCategory(categories).short_name;      
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970

      // TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home html snippet with the
      // chosen category from STEP 2. Use existing insertProperty function for that purpose.
      // Look through this code for an example of how to do use the insertProperty function.
      // WARNING! You are inserting something that will have to result in a valid Javascript
      // syntax because the substitution of {{randomCategoryShortName}} becomes an argument
      // being passed into the $dc.loadMenuItems function. Think about what that argument needs
      // to look like. For example, a valid call would look something like this:
      // $dc.loadMenuItems('L')
      // Hint: you need to surround the chosen category short name with something before inserting
      // it into the home html snippet.
      //
<<<<<<< HEAD
      chosenCategoryShortName=  chosenCategoryShortName  ;
       var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml , "randomCategoryShortName", chosenCategoryShortName);

      


      // TODO: STEP 4: Insert the the produced HTML in STEP 3 into the main page
      // Use the existing insertHtml function for that purpose. Look through this code for an example
      // of how to do that.
      insertHtml("#main-content",homeHtmlToInsertIntoMainPage);

=======

      chosenCategoryShortName = "'" + chosenCategoryShortName + "'";
      var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", chosenCategoryShortName);
      

      // TODO: STEP 4: Insert the the produced HTML in STEP 3 into the main page
      // Use the existing insertHtml function for that purpose. Look through this code for an example
      // of how to do that. 
      // ....

      insertHtml("#main-content", homeHtmlToInsertIntoMainPage);      
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}


// Given array of category objects, returns a random category object.
function chooseRandomCategory (categories) {
  // Choose a random index into the array (from 0 inclusively until array length (exclusively))
  var randomArrayIndex = Math.floor(Math.random() * categories.length);

  // return category object with that randomArrayIndex
  return categories[randomArrayIndex];
}


// Load the menu categories view
dc.loadMenuCategories = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    buildAndShowCategoriesHTML);
};


// Load the menu items view
// 'categoryShort' is a short_name for a category
dc.loadMenuItems = function (categoryShort) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    menuItemsUrl + categoryShort,
    buildAndShowMenuItemsHTML);
};


// Builds HTML for the categories page based on the data
// from the server
function buildAndShowCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        categoryHtml,
        function (categoryHtml) {
          // Switch CSS class active to menu button
          switchMenuToActive();

<<<<<<< HEAD
          var categoriesViewHtml =
            buildCategoriesViewHtml(categories,
=======
          var categoriesViewHtml = 
            buildCategoriesViewHtml(categories, 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
                                    categoriesTitleHtml,
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}


// Using categories data and snippets html
// build categories view HTML to be inserted into page
<<<<<<< HEAD
function buildCategoriesViewHtml(categories,
                                 categoriesTitleHtml,
                                 categoryHtml) {

=======
function buildCategoriesViewHtml(categories, 
                                 categoriesTitleHtml,
                                 categoryHtml) {
  
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'>";

  // Loop over categories
  for (var i = 0; i < categories.length; i++) {
    // Insert category values
    var html = categoryHtml;
    var name = "" + categories[i].name;
    var short_name = categories[i].short_name;
<<<<<<< HEAD
    html =
      insertProperty(html, "name", name);
    html =
      insertProperty(html,
=======
    html = 
      insertProperty(html, "name", name);
    html = 
      insertProperty(html, 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
                     "short_name",
                     short_name);
    finalHtml += html;
  }

  finalHtml += "</section>";
  return finalHtml;
}



// Builds HTML for the single category page based on the data
// from the server
function buildAndShowMenuItemsHTML (categoryMenuItems) {
  // Load title snippet of menu items page
  $ajaxUtils.sendGetRequest(
    menuItemsTitleHtml,
    function (menuItemsTitleHtml) {
      // Retrieve single menu item snippet
      $ajaxUtils.sendGetRequest(
        menuItemHtml,
        function (menuItemHtml) {
          // Switch CSS class active to menu button
          switchMenuToActive();
<<<<<<< HEAD

          var menuItemsViewHtml =
            buildMenuItemsViewHtml(categoryMenuItems,
=======
          
          var menuItemsViewHtml = 
            buildMenuItemsViewHtml(categoryMenuItems, 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
                                   menuItemsTitleHtml,
                                   menuItemHtml);
          insertHtml("#main-content", menuItemsViewHtml);
        },
        false);
    },
    false);
}


// Using category and menu items data and snippets html
// build menu items view HTML to be inserted into page
<<<<<<< HEAD
function buildMenuItemsViewHtml(categoryMenuItems,
                                menuItemsTitleHtml,
                                menuItemHtml) {

  menuItemsTitleHtml =
    insertProperty(menuItemsTitleHtml,
                   "name",
                   categoryMenuItems.category.name);
  menuItemsTitleHtml =
=======
function buildMenuItemsViewHtml(categoryMenuItems, 
                                menuItemsTitleHtml,
                                menuItemHtml) {
  
  menuItemsTitleHtml = 
    insertProperty(menuItemsTitleHtml,
                   "name",
                   categoryMenuItems.category.name);
  menuItemsTitleHtml = 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
    insertProperty(menuItemsTitleHtml,
                   "special_instructions",
                   categoryMenuItems.category.special_instructions);

  var finalHtml = menuItemsTitleHtml;
  finalHtml += "<section class='row'>";

  // Loop over menu items
  var menuItems = categoryMenuItems.menu_items;
  var catShortName = categoryMenuItems.category.short_name;
  for (var i = 0; i < menuItems.length; i++) {
    // Insert menu item values
    var html = menuItemHtml;
<<<<<<< HEAD
    html =
      insertProperty(html, "short_name", menuItems[i].short_name);
    html =
      insertProperty(html,
=======
    html = 
      insertProperty(html, "short_name", menuItems[i].short_name);
    html = 
      insertProperty(html, 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
                     "catShortName",
                     catShortName);
    html =
      insertItemPrice(html,
                      "price_small",
<<<<<<< HEAD
                      menuItems[i].price_small);
=======
                      menuItems[i].price_small); 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
    html =
      insertItemPortionName(html,
                            "small_portion_name",
                            menuItems[i].small_portion_name);
<<<<<<< HEAD
    html =
=======
    html = 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
      insertItemPrice(html,
                      "price_large",
                      menuItems[i].price_large);
    html =
      insertItemPortionName(html,
                            "large_portion_name",
                            menuItems[i].large_portion_name);
<<<<<<< HEAD
    html =
      insertProperty(html,
                     "name",
                     menuItems[i].name);
    html =
      insertProperty(html,
=======
    html = 
      insertProperty(html, 
                     "name",
                     menuItems[i].name);
    html = 
      insertProperty(html, 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
                     "description",
                     menuItems[i].description);

    // Add clearfix after every second menu item
<<<<<<< HEAD
    if (i % 2 !== 0) {
      html +=
=======
    if (i % 2 != 0) {
      html += 
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
        "<div class='clearfix visible-lg-block visible-md-block'></div>";
    }

    finalHtml += html;
  }

  finalHtml += "</section>";
  return finalHtml;
}


// Appends price with '$' if price exists
function insertItemPrice(html,
                         pricePropName,
                         priceValue) {
  // If not specified, replace with empty string
  if (!priceValue) {
<<<<<<< HEAD
    return insertProperty(html, pricePropName, "");
=======
    return insertProperty(html, pricePropName, "");;
>>>>>>> 8fe9ec33d3e2785d95c244c41e9a80a9b6043970
  }

  priceValue = "$" + priceValue.toFixed(2);
  html = insertProperty(html, pricePropName, priceValue);
  return html;
}


// Appends portion name in parens if it exists
function insertItemPortionName(html,
                               portionPropName,
                               portionValue) {
  // If not specified, return original string
  if (!portionValue) {
    return insertProperty(html, portionPropName, "");
  }

  portionValue = "(" + portionValue + ")";
  html = insertProperty(html, portionPropName, portionValue);
  return html;
}


global.$dc = dc;

})(window);
