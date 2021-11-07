const menu = () => {
  // const restaurant = "food-band";
  const cardsMenu = document.querySelector(".cards-menu");

  const changeTitle = (restaurant) => {
    const restaurantTitle = document.querySelector(".restaurant-title");
    const category = document.querySelector(".category");
    const price = document.querySelector(".price");
    restaurantTitle.textContent = restaurant.name;
    category.textContent = restaurant.kitchen;
    price.textContent = `От ${restaurant.price} ₽`;
    console.log(restaurant);
  };
  const renderItems = (data) => {
    data.forEach(({ description, id, image, name, price }) => {
      const card = document.createElement("div");
      // console.log(item);
      card.classList.add("card");
      card.innerHTML = `
    	<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="ingredients">${description}
								</div>
							</div>
							<!-- /.card-info -->
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
    `;
      cardsMenu.append(card);
    });
  };

  // console.log(localStorage.getItem("restaurant"));
  if (localStorage.getItem("restaurant")) {
    const restaurant = JSON.parse(localStorage.getItem("restaurant"));
    changeTitle(restaurant);
    fetch(`./db/${restaurant.products}`)
      .then((response) => response.json())
      .then((data) => {
        renderItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    window.location.href = "/";
  }
};

export default menu;
