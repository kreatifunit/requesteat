const restaurantData = [
  {
    id: 1,
    name: "Chuff Pozzy Kota",
    image: "uploads/restaurants/restaurant002/thumbnail.jpg",
    description: "Full On Kota place in tembisa to feed your cravings - Hunger Killer.",
    rating: { average: 4.5, count: 120 },
    address: "Iapetus St, Maŝemong, Thembisa, 1628",
    mapLink: "https://maps.app.goo.gl/B6y3oshEFC3MLXmr9?g_st=aw",
    contact: "068 109 5385",
    tradingHours: "Mon–Sun: 10am – 10pm",
    cuisine: "Ekasi Cuisine",
    menu: [
      {
        name: "Saucy Kota Feast",
        price: "R22.99",
        image: "uploads/restaurants/restaurant002/1.jpg",
        description: "Toasted Bread, Chips, BBQ Sauce and Russian.",
        rating: 4.3
      },
      {
        name: "Schnitzel Kasi Taste",
        price: "R44.99",
        image: "uploads/restaurants/restaurant002/2.jpg",
        description: "Chips, Polony, Chicken Schnitzel, Melted Cheese and Russian.",
        rating: 5.0
      },
      {
        name: "Sunnyside Kota",
        price: "R29.99",
        image: "uploads/restaurants/restaurant002/3.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Ketchup Kota",
        price: "R28.99",
        image: "uploads/restaurants/restaurant002/4.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Killer Deal Kota",
        price: "R39.99",
        image: "uploads/restaurants/restaurant002/5.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Sunday Chill Kota",
        price: "R19.99",
        image: "uploads/restaurants/restaurant002/6.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Monate Flava Kota",
        price: "R22.99",
        image: "uploads/restaurants/restaurant002/7.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Flex Breakfast Kota",
        price: "R26.99",
        image: "uploads/restaurants/restaurant002/8.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Becon Strips Kota",
        price: "R49.99",
        image: "uploads/restaurants/restaurant002/9.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 3.2
      },
      {
        name: "Golden Rush Kota",
        price: "R24.99",
        image: "uploads/restaurants/restaurant002/10.jpg",
        description: "Chips, Polony, Beef Patty, Cheese and Vienna.",
        rating: 4.2
      }
    ]
  },
  {
    id: 2,
    name: "Mama Africa Eatery",
    image: "uploads/restaurants/restaurant003/thumbnail.jpg",
    description: "For the love of Mzansi, for the love of true African Cuisines.",
    rating: { average: 4.2, count: 98 },
    address: "45 Madiba Street, Tembisa",
    mapLink: "https://maps.google.com/?q=45+Heritage+Ave+Pretoria",
    contact: "+27 65 000 1234",
    tradingHours: "Mon–Sat: 11am – 9pm",
    cuisine: "African Cuisine",
    menu: [
      {
        name: "Pap & Steak",
        price: "R74.99",
        image: "uploads/restaurants/restaurant003/1.jpg",
        description: "Enjoy ekasi street cuisine with a mouthwatering 200g traditionally prepared steak with chakalaka & spinach.",
        rating: 5.0
      },
      {
        name: "Grilled Pork Chops",
        price: "R64.99",
        image: "uploads/restaurants/restaurant003/2.jpg",
        description: "Tender flame grilled township style pork chops from mama africa's eatery served hot with mild chakalaka.",
        rating: 4.6
      },
      {
        name: "Grilled Steak Chops",
        price: "R69.99",
        image: "uploads/restaurants/restaurant003/3.jpg",
        description: "Spicy steak chops served with red chakalaka and BBQ sauce.",
        rating: 4.8
      },
      {
        name: "Pap & Kota Chicken",
        price: "R54.99",
        image: "uploads/restaurants/restaurant003/4.jpg",
        description: "Deliciously cooked meal for kasi served with three sides - Creamy Spinach, Gravy & Homemade Chakalaka.",
        rating: 4.1
      },
      {
        name: "Pure Mogodu Meal",
        price: "R64.99",
        image: "uploads/restaurants/restaurant003/5.jpg",
        description: "It's a 'Mmmmmnandi Taste for kasi memories - Pap and Mogodu.",
        rating: 5.0
      }
    ]
  },
  {
    id: 3,
    name: "Burger Express",
    image: "uploads/restaurants/restaurant004/thumbnail.jpg",
    description: "Quick burgers, fries, and shakes.",
    rating: { average: 4.0, count: 76 },
    address: "88 Burger Lane, Durban",
    mapLink: "https://maps.google.com/?q=88+Burger+Lane+Durban",
    contact: "+27 78 456 7890",
    tradingHours: "Everyday: 9am – 11pm",
    cuisine: "Fast Food",
    menu: [
      {
        name: "Cheeseburger",
        price: "R40",
        image: "uploads/restaurants/restaurant004/menu1.jpg",
        description: "Juicy beef patty with melted cheese and fresh veggies.",
        rating: 4.1
      },
      {
        name: "Fries",
        price: "R20",
        image: "uploads/restaurants/restaurant004/menu2.jpg",
        description: "Crispy golden fries seasoned to perfection.",
        rating: 4.0
      }
    ]
  },
  {
    id: 4,
    name: "Pizza Hotbox",
    image: "uploads/restaurants/restaurant001/thumbnail.jpg",
    description: "Fast, cheesy, delicious pizza.",
    rating: { average: 4.3, count: 105 },
    address: "12 Crusty Road, Cape Town",
    mapLink: "https://maps.google.com/?q=12+Crusty+Road+Cape+Town",
    contact: "+27 79 999 0001",
    tradingHours: "Mon–Sun: 12pm – 12am",
    cuisine: "Fast Food",
    menu: [
      {
        name: "Pepperoni Pizza",
        price: "R90",
        image: "uploads/restaurants/restaurant001/menu1.jpg",
        description: "Classic pepperoni with mozzarella on tomato base.",
        rating: 4.5
      },
      {
        name: "Veggie Pizza",
        price: "R85",
        image: "uploads/restaurants/restaurant001/menu2.jpg",
        description: "Fresh vegetables on a cheesy pizza crust.",
        rating: 4.2
      }
    ]
  }
];

function renderRestaurants() {
  const container = document.getElementById('restaurant-container');
  restaurantData.forEach(restaurant => {
    const restaurantHTML = `
      <div class="restaurant">
        <h2>${restaurant.name}</h2>
        <img src="${restaurant.image}" alt="${restaurant.name}" style="width: 200px;" />
        <p>${restaurant.description}</p>
        <p><strong>Rating:</strong> ${restaurant.rating.average} (${restaurant.rating.count} reviews)</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>Contact:</strong> ${restaurant.contact}</p>
        <p><strong>Hours:</strong> ${restaurant.tradingHours}</p>
        <div class="menu-list" id="menu-${restaurant.id}"></div>
      </div>
    `;
    container.innerHTML += restaurantHTML;

    // Render menu items
    const menuContainer = document.getElementById(`menu-${restaurant.id}`);
    restaurant.menu.forEach(item => {
      const menuItemHTML = `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}" style="width: 100px;" />
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <p>${item.price}</p>
          <button onclick='addToCartFromUI(${JSON.stringify(item)})'>Add to Cart</button>
        </div>
      `;
      menuContainer.innerHTML += menuItemHTML;
    });
  });
}

function renderRestaurants() {
  const container = document.getElementById('restaurant-container');

  restaurantData.forEach((restaurant, restaurantIndex) => {
    const restaurantHTML = `
      <div class="restaurant">
        <h2>${restaurant.name}</h2>
        <img src="${restaurant.image}" alt="${restaurant.name}" style="width: 200px;" />
        <p>${restaurant.description}</p>
        <p><strong>Rating:</strong> ${restaurant.rating.average} (${restaurant.rating.count} reviews)</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>Contact:</strong> ${restaurant.contact}</p>
        <p><strong>Hours:</strong> ${restaurant.tradingHours}</p>
        <div class="menu-list" id="menu-${restaurant.id}"></div>
      </div>
    `;
    container.innerHTML += restaurantHTML;

    const menuContainer = document.getElementById(`menu-${restaurant.id}`);
    restaurant.menu.forEach((item, itemIndex) => {
      const menuItemHTML = `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}" style="width: 100px;" />
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <p>${item.price}</p>
          <button class="add-to-cart-btn"
            data-restaurant-index="${restaurantIndex}"
            data-item-index="${itemIndex}">
            Add to Cart
          </button>
        </div>
      `;
      menuContainer.innerHTML += menuItemHTML;
    });
  });

  // Attach event listeners to Add to Cart buttons after rendering
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const restaurantIndex = parseInt(this.dataset.restaurantIndex);
      const itemIndex = parseInt(this.dataset.itemIndex);
      const item = restaurantData[restaurantIndex].menu[itemIndex];
      addToCartFromUI(item);
    });
  });
}

function addToCart(itemName) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find full item from the menu using name
  const fullItem = restaurantData
    .flatMap(r => r.menu)
    .find(i => i.name === itemName);

  if (!fullItem) {
    alert("Item not found.");
    return;
  }

  const existing = cart.find(i => i.name === itemName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: fullItem.name,
      price: fullItem.price,  // <-- now included
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(itemName + " added to cart.");
}function addToCart(itemName) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find full item from the menu using name
  const fullItem = restaurantData
    .flatMap(r => r.menu)
    .find(i => i.name === itemName);

  if (!fullItem) {
    alert("Item not found.");
    return;
  }

  const existing = cart.find(i => i.name === itemName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: fullItem.name,
      price: fullItem.price,  // <-- now included
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(itemName + " added to cart.");
}

  function viewCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Cart is empty.");
    } else {
      let msg = "Cart:\n";
      cart.forEach(item => {
        msg += `• ${item.name} x${item.quantity}\n`;
      });
      alert(msg);
    }
  }

  function viewFavourites() {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    if (favs.length === 0) {
      alert("No favourites yet.");
    } else {
      alert("Favourites:\n• " + favs.join("\n• "));
    }
  }
