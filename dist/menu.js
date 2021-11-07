(()=>{"use strict";var __webpack_modules__={823:()=>{eval('\n;// CONCATENATED MODULE: ./src/modules/auth.js\nconst auth = () => {\r\n  const buttonAuth = document.querySelector(".button-auth");\r\n  const modalAuth = document.querySelector(".modal-auth");\r\n  const buttonOut = document.querySelector(".button-out");\r\n  const userName = document.querySelector(".user-name");\r\n  const closeAuth = document.querySelector(".close-auth");\r\n  const logInForm = document.getElementById("logInForm");\r\n  const inputLogin = document.getElementById("login");\r\n  const inputPassword = document.getElementById("password");\r\n\r\n  const login = (user) => {\r\n    buttonAuth.style.display = "none";\r\n    buttonOut.style.display = "flex";\r\n    userName.style.display = "flex";\r\n    userName.textContent = user.login;\r\n    modalAuth.style.display = "none";\r\n  };\r\n  const logout = () => {\r\n    buttonAuth.style.display = "flex";\r\n    buttonOut.style.display = "none";\r\n    userName.style.display = "none";\r\n    userName.textContent = "";\r\n    localStorage.removeItem("user");\r\n  };\r\n\r\n  buttonAuth.addEventListener("click", () => {\r\n    // console.dir(modalAuth);\r\n    modalAuth.style.display = "flex";\r\n  });\r\n  closeAuth.addEventListener("click", () => {\r\n    modalAuth.style.display = "none";\r\n  });\r\n  buttonOut.addEventListener("click", () => {\r\n    logout();\r\n  });\r\n\r\n  logInForm.addEventListener("submit", (event) => {\r\n    event.preventDefault();\r\n    const user = {\r\n      login: inputLogin.value,\r\n      password: inputPassword.value,\r\n    };\r\n    localStorage.setItem("user", JSON.stringify(user));\r\n    login(user);\r\n  });\r\n\r\n  if (localStorage.getItem("user")) {\r\n    login(JSON.parse(localStorage.getItem("user")));\r\n  }\r\n};\r\n\r\n/* harmony default export */ const modules_auth = (auth);\r\n\n;// CONCATENATED MODULE: ./src/modules/menu.js\nconst menu = () => {\r\n  // const restaurant = "food-band";\r\n  const cardsMenu = document.querySelector(".cards-menu");\r\n\r\n  const changeTitle = (restaurant) => {\r\n    const restaurantTitle = document.querySelector(".restaurant-title");\r\n    const category = document.querySelector(".category");\r\n    const price = document.querySelector(".price");\r\n    restaurantTitle.textContent = restaurant.name;\r\n    category.textContent = restaurant.kitchen;\r\n    price.textContent = `От ${restaurant.price} ₽`;\r\n    console.log(restaurant);\r\n  };\r\n  const renderItems = (data) => {\r\n    data.forEach(({ description, id, image, name, price }) => {\r\n      const card = document.createElement("div");\r\n      // console.log(item);\r\n      card.classList.add("card");\r\n      card.innerHTML = `\r\n    \t<img src="${image}" alt="${name}" class="card-image" />\r\n\t\t\t\t\t\t<div class="card-text">\r\n\t\t\t\t\t\t\t<div class="card-heading">\r\n\t\t\t\t\t\t\t\t<h3 class="card-title card-title-reg">${name}</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\x3c!-- /.card-heading --\x3e\r\n\t\t\t\t\t\t\t<div class="card-info">\r\n\t\t\t\t\t\t\t\t<div class="ingredients">${description}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\x3c!-- /.card-info --\x3e\r\n\t\t\t\t\t\t\t<div class="card-buttons">\r\n\t\t\t\t\t\t\t\t<button class="button button-primary button-add-cart">\r\n\t\t\t\t\t\t\t\t\t<span class="button-card-text">В корзину</span>\r\n\t\t\t\t\t\t\t\t\t<span class="button-cart-svg"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<strong class="card-price-bold">${price} ₽</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n    `;\r\n      cardsMenu.append(card);\r\n    });\r\n  };\r\n\r\n  // console.log(localStorage.getItem("restaurant"));\r\n  if (localStorage.getItem("restaurant")) {\r\n    const restaurant = JSON.parse(localStorage.getItem("restaurant"));\r\n    changeTitle(restaurant);\r\n    fetch(`./db/${restaurant.products}`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        renderItems(data);\r\n      })\r\n      .catch((error) => {\r\n        console.log(error);\r\n      });\r\n  } else {\r\n    window.location.href = "/";\r\n  }\r\n};\r\n\r\n/* harmony default export */ const modules_menu = (menu);\r\n\n;// CONCATENATED MODULE: ./src/menu.js\n\r\n\r\n\r\nmodules_auth();\r\nmodules_menu();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBZSxJQUFJLEVBQUM7OztBQ25EcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTSxTQUFTLEtBQUs7QUFDckM7QUFDQTtBQUNBLGdEQUFnRCxLQUFLO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBZSxJQUFJLEVBQUM7OztBQzVEaUI7QUFDQTtBQUNyQztBQUNBLFlBQUk7QUFDSixZQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW5zLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIiwid2VicGFjazovL2ludGVucy8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCIsIndlYnBhY2s6Ly9pbnRlbnMvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWF1dGhcIik7XHJcbiAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1hdXRoXCIpO1xyXG4gIGNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW91dFwiKTtcclxuICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1uYW1lXCIpO1xyXG4gIGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYXV0aFwiKTtcclxuICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ0luRm9ybVwiKTtcclxuICBjb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luO1xyXG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9O1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICB9O1xyXG5cclxuICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmRpcihtb2RhbEF1dGgpO1xyXG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KTtcclxuICBjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcbiAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9KTtcclxuXHJcbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgbG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcbiAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xyXG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHJlc3RhdXJhbnQgPSBcImZvb2QtYmFuZFwiO1xyXG4gIGNvbnN0IGNhcmRzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtbWVudVwiKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGl0bGUgPSAocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50LXRpdGxlXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpO1xyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaWNlXCIpO1xyXG4gICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5uYW1lO1xyXG4gICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmtpdGNoZW47XHJcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGDQntGCICR7cmVzdGF1cmFudC5wcmljZX0g4oK9YDtcclxuICAgIGNvbnNvbGUubG9nKHJlc3RhdXJhbnQpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgZGF0YS5mb3JFYWNoKCh7IGRlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlIH0pID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgIFx0PGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIiR7bmFtZX1cIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gLy5jYXJkLWhlYWRpbmcgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+JHtkZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gLy5jYXJkLWluZm8gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX0g4oK9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgYDtcclxuICAgICAgY2FyZHNNZW51LmFwcGVuZChjYXJkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVzdGF1cmFudFwiKSk7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVzdGF1cmFudFwiKSkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXN0YXVyYW50XCIpKTtcclxuICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xyXG4gICAgZmV0Y2goYC4vZGIvJHtyZXN0YXVyYW50LnByb2R1Y3RzfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHJlbmRlckl0ZW1zKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iLCJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGguanNcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51LmpzXCI7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///823\n')}},__webpack_exports__={};__webpack_modules__[823]()})();