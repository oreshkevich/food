/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth.js */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBcUM7QUFDQTtBQUNyQztBQUNBLDREQUFJO0FBQ0osNERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnMvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aC5qc1wiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnUuanNcIjtcclxuXHJcbmF1dGgoKTtcclxubWVudSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n  const buttonAuth = document.querySelector(\".button-auth\");\r\n  const modalAuth = document.querySelector(\".modal-auth\");\r\n  const buttonOut = document.querySelector(\".button-out\");\r\n  const userName = document.querySelector(\".user-name\");\r\n  const closeAuth = document.querySelector(\".close-auth\");\r\n  const logInForm = document.getElementById(\"logInForm\");\r\n  const inputLogin = document.getElementById(\"login\");\r\n  const inputPassword = document.getElementById(\"password\");\r\n\r\n  const login = (user) => {\r\n    buttonAuth.style.display = \"none\";\r\n    buttonOut.style.display = \"flex\";\r\n    userName.style.display = \"flex\";\r\n    userName.textContent = user.login;\r\n    modalAuth.style.display = \"none\";\r\n  };\r\n  const logout = () => {\r\n    buttonAuth.style.display = \"flex\";\r\n    buttonOut.style.display = \"none\";\r\n    userName.style.display = \"none\";\r\n    userName.textContent = \"\";\r\n    localStorage.removeItem(\"user\");\r\n  };\r\n\r\n  buttonAuth.addEventListener(\"click\", () => {\r\n    // console.dir(modalAuth);\r\n    modalAuth.style.display = \"flex\";\r\n  });\r\n  closeAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"none\";\r\n  });\r\n  buttonOut.addEventListener(\"click\", () => {\r\n    logout();\r\n  });\r\n\r\n  logInForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    const user = {\r\n      login: inputLogin.value,\r\n      password: inputPassword.value,\r\n    };\r\n    localStorage.setItem(\"user\", JSON.stringify(user));\r\n    login(user);\r\n  });\r\n\r\n  if (localStorage.getItem(\"user\")) {\r\n    login(JSON.parse(localStorage.getItem(\"user\")));\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVucy8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hdXRoXCIpO1xyXG4gIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYXV0aFwiKTtcclxuICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vdXRcIik7XHJcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmFtZVwiKTtcclxuICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWF1dGhcIik7XHJcbiAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dJbkZvcm1cIik7XHJcbiAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgfTtcclxuXHJcbiAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5kaXIobW9kYWxBdXRoKTtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcbiAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pO1xyXG4gIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbG9nb3V0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcclxuICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  // const restaurant = \"food-band\";\r\n  const cardsMenu = document.querySelector(\".cards-menu\");\r\n\r\n  const changeTitle = (restaurant) => {\r\n    const restaurantTitle = document.querySelector(\".restaurant-title\");\r\n    const category = document.querySelector(\".category\");\r\n    const price = document.querySelector(\".price\");\r\n    restaurantTitle.textContent = restaurant.name;\r\n    category.textContent = restaurant.kitchen;\r\n    price.textContent = `От ${restaurant.price} ₽`;\r\n    console.log(restaurant);\r\n  };\r\n  const renderItems = (data) => {\r\n    data.forEach(({ description, id, image, name, price }) => {\r\n      const card = document.createElement(\"div\");\r\n      // console.log(item);\r\n      card.classList.add(\"card\");\r\n      card.innerHTML = `\r\n    \t<img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n\t\t\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">${name}</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /.card-heading -->\r\n\t\t\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t\t\t<div class=\"ingredients\">${description}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /.card-info -->\r\n\t\t\t\t\t\t\t<div class=\"card-buttons\">\r\n\t\t\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<strong class=\"card-price-bold\">${price} ₽</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n    `;\r\n      cardsMenu.append(card);\r\n    });\r\n  };\r\n\r\n  // console.log(localStorage.getItem(\"restaurant\"));\r\n  if (localStorage.getItem(\"restaurant\")) {\r\n    const restaurant = JSON.parse(localStorage.getItem(\"restaurant\"));\r\n    changeTitle(restaurant);\r\n    fetch(`./db/${restaurant.products}`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        renderItems(data);\r\n      })\r\n      .catch((error) => {\r\n        console.log(error);\r\n      });\r\n  } else {\r\n    window.location.href = \"/\";\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNLFNBQVMsS0FBSztBQUNyQztBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVucy8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHJlc3RhdXJhbnQgPSBcImZvb2QtYmFuZFwiO1xyXG4gIGNvbnN0IGNhcmRzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtbWVudVwiKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGl0bGUgPSAocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50LXRpdGxlXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpO1xyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaWNlXCIpO1xyXG4gICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5uYW1lO1xyXG4gICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmtpdGNoZW47XHJcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGDQntGCICR7cmVzdGF1cmFudC5wcmljZX0g4oK9YDtcclxuICAgIGNvbnNvbGUubG9nKHJlc3RhdXJhbnQpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgZGF0YS5mb3JFYWNoKCh7IGRlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlIH0pID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgIFx0PGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIiR7bmFtZX1cIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gLy5jYXJkLWhlYWRpbmcgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+JHtkZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gLy5jYXJkLWluZm8gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX0g4oK9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgYDtcclxuICAgICAgY2FyZHNNZW51LmFwcGVuZChjYXJkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVzdGF1cmFudFwiKSk7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVzdGF1cmFudFwiKSkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXN0YXVyYW50XCIpKTtcclxuICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xyXG4gICAgZmV0Y2goYC4vZGIvJHtyZXN0YXVyYW50LnByb2R1Y3RzfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHJlbmRlckl0ZW1zKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;