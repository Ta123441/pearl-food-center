/* =========================================================
   PEARL FOOD CENTER
   MENU + CART + WHATSAPP
========================================================= */


/* ================= WHATSAPP ================= */

const WHATSAPP_NUMBER = "923158923011";


/* ================= IMAGE HELPER ================= */

function foodImage(tags, lock) {
    return `https://loremflickr.com/800/600/${tags}?lock=${lock}`;
}


/* =========================================================
   COMPLETE MENU
========================================================= */

const menuItems = [

    /* ================= CHICKEN ROLLS ================= */

    {
        name: "Chicken Chatni Roll",
        price: 130,
        category: "Desi",
        image: foodImage("chicken,roll", 101)
    },
    {
        name: "Chicken Garlic Mayo Roll",
        price: 140,
        category: "Desi",
        image: foodImage("chicken,roll,mayo", 102)
    },
    {
        name: "Chicken Mayo Cheese Roll",
        price: 170,
        category: "Desi",
        image: foodImage("chicken,cheese,roll", 103)
    },
    {
        name: "Chicken Behari Chatni Roll",
        price: 150,
        category: "Desi",
        image: foodImage("chicken,kebab,roll", 104)
    },
    {
        name: "Chicken Behari Cheese Roll",
        price: 170,
        category: "Desi",
        image: foodImage("chicken,cheese,roll", 105)
    },
    {
        name: "Chicken Chutney Mayo Roll",
        price: 140,
        category: "Desi",
        image: foodImage("chicken,roll,sauce", 106)
    },
    {
        name: "Chicken Chapati Roll",
        price: 140,
        category: "Desi",
        image: foodImage("chicken,wrap", 107)
    },
    {
        name: "Chicken Spicy Mayo Roll",
        price: 160,
        category: "Desi",
        image: foodImage("chicken,roll,spicy", 108)
    },
    {
        name: "Chicken Cheese Roll",
        price: 150,
        category: "Desi",
        image: foodImage("chicken,cheese,roll", 109)
    },


    /* ================= MALAI BOTI ================= */

    {
        name: "Chicken Malai Kabab Roll",
        price: 140,
        category: "Desi",
        image: foodImage("chicken,kebab,roll", 110)
    },
    {
        name: "Chicken Malai Garlic Mayo Roll",
        price: 150,
        category: "Desi",
        image: foodImage("chicken,roll,mayo", 111)
    },
    {
        name: "Chicken Malai Mayo Cheese Roll",
        price: 180,
        category: "Desi",
        image: foodImage("chicken,cheese,roll", 112)
    },
    {
        name: "Chicken Malai Behari Roll",
        price: 160,
        category: "Desi",
        image: foodImage("chicken,kebab,roll", 113)
    },
    {
        name: "Chicken Juicy Malai Roll",
        price: 150,
        category: "Desi",
        image: foodImage("chicken,roll", 114)
    },
    {
        name: "Chicken Malai Chapati Roll",
        price: 160,
        category: "Desi",
        image: foodImage("chicken,wrap", 115)
    },
    {
        name: "Chicken Malai Behari Cheese Roll",
        price: 180,
        category: "Desi",
        image: foodImage("chicken,cheese,roll", 116)
    },
    {
        name: "Chicken Malai Spicy Mayo Roll",
        price: 180,
        category: "Desi",
        image: foodImage("chicken,roll,spicy", 117)
    },
    {
        name: "Chicken Malai Cheese Roll",
        price: 170,
        category: "Desi",
        image: foodImage("chicken,cheese,roll", 118)
    },


    /* ================= RESHMI KABAB ================= */

    {
        name: "Chicken Reshmi Kabab Roll",
        price: 140,
        category: "Desi",
        image: foodImage("chicken,kebab,roll", 119)
    },
    {
        name: "Chicken Reshmi Garlic Mayo Roll",
        price: 150,
        category: "Desi",
        image: foodImage("chicken,kebab,roll,mayo", 120)
    },
    {
        name: "Chicken Reshmi Mayo Cheese Roll",
        price: 180,
        category: "Desi",
        image: foodImage("chicken,kebab,cheese,roll", 121)
    },
    {
        name: "Chicken Reshmi Chapati Roll",
        price: 150,
        category: "Desi",
        image: foodImage("chicken,kebab,wrap", 122)
    },
    {
        name: "Chicken Reshmi Behari Chatni Roll",
        price: 170,
        category: "Desi",
        image: foodImage("chicken,kebab,roll", 123)
    },
    {
        name: "Chicken Reshmi Behari Cheese Roll",
        price: 180,
        category: "Desi",
        image: foodImage("chicken,kebab,cheese,roll", 124)
    },
    {
        name: "Chicken Reshmi Juicy Mayo Roll",
        price: 160,
        category: "Desi",
        image: foodImage("chicken,kebab,roll,mayo", 125)
    },
    {
        name: "Chicken Reshmi Behari Mayo Roll",
        price: 180,
        category: "Desi",
        image: foodImage("chicken,kebab,roll", 126)
    },
    {
        name: "Chicken Reshmi Cheese Roll",
        price: 170,
        category: "Desi",
        image: foodImage("chicken,kebab,cheese,roll", 127)
    },


    /* ================= BEEF BOTI ================= */

    {
        name: "Beef Boti Roll",
        price: 140,
        category: "Desi",
        image: foodImage("beef,kebab,roll", 128)
    },
    {
        name: "Beef Garlic Mayo Roll",
        price: 150,
        category: "Desi",
        image: foodImage("beef,roll,mayo", 129)
    },
    {
        name: "Beef Mayo Cheese Roll",
        price: 180,
        category: "Desi",
        image: foodImage("beef,cheese,roll", 130)
    },
    {
        name: "Beef Chapati Roll",
        price: 150,
        category: "Desi",
        image: foodImage("beef,wrap", 131)
    },
    {
        name: "Beef Juicy Roll",
        price: 150,
        category: "Desi",
        image: foodImage("beef,roll", 132)
    },
    {
        name: "Beef Behari Chatni Roll",
        price: 160,
        category: "Desi",
        image: foodImage("beef,kebab,roll", 133)
    },
    {
        name: "Beef Behari Mayo Cheese Roll",
        price: 180,
        category: "Desi",
        image: foodImage("beef,cheese,roll", 134)
    },
    {
        name: "Beef Spicy Behari Mayo Roll",
        price: 180,
        category: "Desi",
        image: foodImage("beef,roll,spicy", 135)
    },
    {
        name: "Beef Cheese Roll",
        price: 170,
        category: "Desi",
        image: foodImage("beef,cheese,roll", 136)
    },


    /* ================= BEEF KABAB ================= */

    {
        name: "Beef Kabab Chatni Roll",
        price: 130,
        category: "Desi",
        image: foodImage("beef,kebab,roll", 137)
    },
    {
        name: "Beef Kabab Garlic Mayo Roll",
        price: 140,
        category: "Desi",
        image: foodImage("beef,kebab,roll,mayo", 138)
    },
    {
        name: "Beef Kabab Cheese Roll",
        price: 160,
        category: "Desi",
        image: foodImage("beef,kebab,cheese,roll", 139)
    },
    {
        name: "Beef Kabab Juicy Roll",
        price: 130,
        category: "Desi",
        image: foodImage("beef,kebab,roll", 140)
    },
    {
        name: "Beef Kabab Chapati Roll",
        price: 130,
        category: "Desi",
        image: foodImage("beef,kebab,wrap", 141)
    },
    {
        name: "Beef Kabab Behari Chatni Roll",
        price: 150,
        category: "Desi",
        image: foodImage("beef,kebab,roll", 142)
    },
    {
        name: "Beef Kabab Behari Mayo Cheese Roll",
        price: 170,
        category: "Desi",
        image: foodImage("beef,kebab,cheese,roll", 143)
    },
    {
        name: "Beef Kabab Cheese Roll",
        price: 160,
        category: "Desi",
        image: foodImage("beef,kebab,cheese,roll", 144)
    },


    /* ================= SPECIAL ================= */

    {
        name: "Zinger Roll",
        price: 250,
        category: "Fast Food",
        image: foodImage("zinger,chicken,roll", 145)
    },
    {
        name: "Crispy Jumbo Roll",
        price: 280,
        category: "Fast Food",
        image: foodImage("crispy,chicken,roll", 146)
    },


    /* ================= BBQ ================= */

    {
        name: "Chicken Green Tikka",
        price: 320,
        category: "BBQ",
        image: foodImage("chicken,tikka,bbq", 147)
    },
    {
        name: "Chicken Tikka Leg Piece",
        price: 260,
        category: "BBQ",
        image: foodImage("chicken,tikka,bbq", 148)
    },
    {
        name: "Chicken Tikka Chest Piece",
        price: 300,
        category: "BBQ",
        image: foodImage("chicken,tikka,bbq", 149)
    },
    {
        name: "Chicken Behari Tikka",
        price: 280,
        category: "BBQ",
        image: foodImage("chicken,tikka,bbq", 150)
    },
    {
        name: "Chicken Malai Tikka",
        price: 320,
        category: "BBQ",
        image: foodImage("chicken,tikka,bbq", 151)
    },
    {
        name: "Chicken Boti Plate",
        price: 320,
        category: "BBQ",
        image: foodImage("chicken,boti,bbq", 152)
    },
    {
        name: "Chicken Malai Boti Plate",
        price: 450,
        category: "BBQ",
        image: foodImage("chicken,boti,bbq", 153)
    },
    {
        name: "Chicken Reshmi Kabab",
        price: 320,
        category: "BBQ",
        image: foodImage("chicken,kebab,bbq", 154)
    },
    {
        name: "Beef Boti Plate",
        price: 340,
        category: "BBQ",
        image: foodImage("beef,boti,bbq", 155)
    },
    {
        name: "Behari Boti Plate",
        price: 340,
        category: "BBQ",
        image: foodImage("beef,boti,bbq", 156)
    },
    {
        name: "Beef Gola Kabab Plate",
        price: 320,
        category: "BBQ",
        image: foodImage("beef,kebab,bbq", 157)
    },
    {
        name: "Beef Fry",
        price: 470,
        category: "BBQ",
        image: foodImage("beef,fry,bbq", 158)
    },
    {
        name: "Chicken Malai Fry Boti",
        price: 520,
        category: "BBQ",
        image: foodImage("chicken,boti,bbq", 159)
    },
    {
        name: "Makhmali Seekh Kabab",
        price: 420,
        category: "BBQ",
        image: foodImage("seekh,kebab,bbq", 160)
    },


    /* ================= CHICKEN BURGERS ================= */

    {
        name: "Junior Zinger Burger",
        price: 290,
        category: "Fast Food",
        image: foodImage("zinger,burger,chicken", 161)
    },
    {
        name: "Chicken Burger",
        price: 220,
        category: "Fast Food",
        image: foodImage("chicken,burger", 162)
    },
    {
        name: "Chicken with Cheese Burger",
        price: 250,
        category: "Fast Food",
        image: foodImage("chicken,cheese,burger", 163)
    },
    {
        name: "Chicken Big Burger",
        price: 310,
        category: "Fast Food",
        image: foodImage("chicken,big,burger", 164)
    },
    {
        name: "Chicken Big Cheese Burger",
        price: 340,
        category: "Fast Food",
        image: foodImage("chicken,cheese,burger", 165)
    },
    {
        name: "Chicken Hot Zinger Burger",
        price: 330,
        category: "Fast Food",
        image: foodImage("zinger,burger,chicken", 166)
    },
    {
        name: "Chicken Hot Zinger with Cheese Burger",
        price: 360,
        category: "Fast Food",
        image: foodImage("zinger,cheese,burger", 167)
    },
    {
        name: "Chicken Hot Zinger Jumbo Burger",
        price: 440,
        category: "Fast Food",
        image: foodImage("zinger,burger,chicken", 168)
    },
    {
        name: "Chicken Hot Zinger Jumbo Cheese Burger",
        price: 470,
        category: "Fast Food",
        image: foodImage("zinger,cheese,burger", 169)
    },


    /* ================= BEEF BURGERS ================= */

    {
        name: "Regular Beef Burger",
        price: 220,
        category: "Fast Food",
        image: foodImage("beef,burger", 170)
    },
    {
        name: "Beef Cheese Burger",
        price: 250,
        category: "Fast Food",
        image: foodImage("beef,cheese,burger", 171)
    },
    {
        name: "Beef Jumbo Burger",
        price: 310,
        category: "Fast Food",
        image: foodImage("beef,burger", 172)
    },
    {
        name: "Beef Jumbo Cheese Burger",
        price: 340,
        category: "Fast Food",
        image: foodImage("beef,cheese,burger", 173)
    },


    /* ================= BROAST ================= */

    {
        name: "Chicken Broast Full",
        price: 1280,
        category: "Broast",
        image: foodImage("chicken,broast", 174)
    },
    {
        name: "Chicken Broast Half",
        price: 640,
        category: "Broast",
        image: foodImage("chicken,broast", 175)
    },
    {
        name: "Chicken Broast Qtr",
        price: 310,
        category: "Broast",
        image: foodImage("chicken,broast", 176)
    },
    {
        name: "Chapata Broast Qtr",
        price: 310,
        category: "Broast",
        image: foodImage("chicken,broast", 177)
    },
    {
        name: "Chicken Cheese Broast Qtr",
        price: 360,
        category: "Broast",
        image: foodImage("chicken,broast,cheese", 178)
    },
    {
        name: "Mayo Garlic Broast Qtr",
        price: 360,
        category: "Broast",
        image: foodImage("chicken,broast", 179)
    },
    {
        name: "Chicken Broast Qtr",
        price: 350,
        category: "Broast",
        image: foodImage("chicken,broast", 180)
    },


    /* ================= CHINESE ================= */

    {
        name: "Chicken Manchurian",
        price: 300,
        category: "Chinese",
        image: foodImage("chicken,manchurian", 181)
    },
    {
        name: "Chicken Dry Chilli",
        price: 370,
        category: "Chinese",
        image: foodImage("chicken,chilli", 182)
    },
    {
        name: "Singapore Rice",
        price: 620,
        category: "Chinese",
        image: foodImage("singapore,rice", 183)
    },
    {
        name: "Chicken Sashlik",
        price: 320,
        category: "Chinese",
        image: foodImage("chicken,shashlik", 184)
    },


    /* ================= CHINESE RICE ================= */

    {
        name: "Chicken Shashlik with Vegetable Fried Rice",
        price: 570,
        category: "Chinese",
        image: foodImage("chicken,shashlik,fried,rice", 185)
    },
    {
        name: "Chicken Shashlik with Chicken Fried Rice",
        price: 620,
        category: "Chinese",
        image: foodImage("chicken,shashlik,fried,rice", 186)
    },
    {
        name: "Pearl Fried Rice",
        price: 370,
        category: "Chinese",
        image: foodImage("fried,rice", 187)
    },
    {
        name: "Vegetable Fried Rice",
        price: 300,
        category: "Chinese",
        image: foodImage("vegetable,fried,rice", 188)
    },
    {
        name: "Egg Fried Rice",
        price: 270,
        category: "Chinese",
        image: foodImage("egg,fried,rice", 189)
    },
    {
        name: "Chicken Fried Rice",
        price: 360,
        category: "Chinese",
        image: foodImage("chicken,fried,rice", 190)
    },


    /* ================= CHOWMEIN ================= */

    {
        name: "Chicken Chowmein",
        price: 400,
        category: "Chinese",
        image: foodImage("chicken,chowmein", 191)
    },
    {
        name: "Vegetable Chowmein",
        price: 340,
        category: "Chinese",
        image: foodImage("vegetable,chowmein", 192)
    },


    /* ================= FRIES ================= */

    {
        name: "Regular Fries",
        price: 120,
        category: "Fries",
        image: foodImage("french,fries", 193)
    },
    {
        name: "Cheese Fries",
        price: 170,
        category: "Fries",
        image: foodImage("cheese,fries", 194)
    },
    {
        name: "Mayo Garlic Fries",
        price: 170,
        category: "Fries",
        image: foodImage("fries,mayo", 195)
    },
    {
        name: "Masala Fries",
        price: 140,
        category: "Fries",
        image: foodImage("masala,fries", 196)
    },


    /* ================= SANDWICHES ================= */

    {
        name: "Chicken Sandwich",
        price: 260,
        category: "Fast Food",
        image: foodImage("chicken,sandwich", 197)
    },
    {
        name: "Chicken Club Sandwich",
        price: 320,
        category: "Fast Food",
        image: foodImage("chicken,club,sandwich", 198)
    },
    {
        name: "Chicken B.B.Q Sandwich",
        price: 310,
        category: "Fast Food",
        image: foodImage("chicken,bbq,sandwich", 199)
    },
    {
        name: "Chicken B.B.Q Club Sandwich",
        price: 350,
        category: "Fast Food",
        image: foodImage("chicken,bbq,club,sandwich", 200)
    },
    {
        name: "Chicken Malai Club Sandwich",
        price: 370,
        category: "Fast Food",
        image: foodImage("chicken,club,sandwich", 201)
    },
    {
        name: "Crispy Club Sandwich",
        price: 360,
        category: "Fast Food",
        image: foodImage("crispy,chicken,sandwich", 202)
    },


    /* ================= DRINKS ================= */

    {
        name: "Sting Regular",
        price: 60,
        category: "Drinks",
        image: foodImage("energy,drink", 203)
    },
    {
        name: "Cold Drink Regular",
        price: 50,
        category: "Drinks",
        image: foodImage("soft,drink", 204)
    },
    {
        name: "Cold Drink 500 ml",
        price: 80,
        category: "Drinks",
        image: foodImage("soft,drink", 205)
    },
    {
        name: "Mineral Water Small",
        price: 50,
        category: "Drinks",
        image: foodImage("water,bottle", 206)
    },
    {
        name: "Mineral Water Large",
        price: 100,
        category: "Drinks",
        image: foodImage("water,bottle", 207)
    },
    {
        name: "Regular Can",
        price: 60,
        category: "Drinks",
        image: foodImage("soft,drink,can", 208)
    },
    {
        name: "Sting Can",
        price: 70,
        category: "Drinks",
        image: foodImage("energy,drink,can", 209)
    },


    /* ================= EXTRAS ================= */

    {
        name: "Paratha Small",
        price: 40,
        category: "Extras",
        image: foodImage("paratha", 210)
    },
    {
        name: "Paratha",
        price: 60,
        category: "Extras",
        image: foodImage("paratha", 211)
    },
    {
        name: "Chapati",
        price: 15,
        category: "Extras",
        image: foodImage("chapati", 212)
    },
    {
        name: "Mayo Garlic Sauce",
        price: 50,
        category: "Extras",
        image: foodImage("garlic,mayo,sauce", 213)
    },
    {
        name: "Coleslaw",
        price: 50,
        category: "Extras",
        image: foodImage("coleslaw", 214)
    },
    {
        name: "Dining Roll (Bun)",
        price: 40,
        category: "Extras",
        image: foodImage("burger,bun", 215)
    },
    {
        name: "Chilli Sauce",
        price: 50,
        category: "Extras",
        image: foodImage("chilli,sauce", 216)
    },
    {
        name: "Cheese Slice",
        price: 40,
        category: "Extras",
        image: foodImage("cheese", 217)
    },
    {
        name: "Chicken Kabab",
        price: 120,
        category: "Extras",
        image: foodImage("chicken,kebab", 218)
    }

];


/* =========================================================
   CART
========================================================= */

let cart = [];

let selectedItem = null;
let modalQuantity = 1;

let currentCategory = "All";


/* ================= ELEMENTS ================= */

const menuGrid = document.getElementById("menuGrid");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");

const itemModal = document.getElementById("itemModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalCategory = document.getElementById("modalCategory");
const modalQuantityText = document.getElementById("modalQuantity");

const modalMinus = document.getElementById("modalMinus");
const modalPlus = document.getElementById("modalPlus");
const modalAddCart = document.getElementById("modalAddCart");

const cartOverlay = document.getElementById("cartOverlay");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const whatsappOrder = document.getElementById("whatsappOrder");


/* =========================================================
   RENDER MENU
========================================================= */

function renderMenu() {

    const search = searchInput.value.toLowerCase().trim();

    const filteredItems = menuItems.filter(item => {

        const categoryMatch =
            currentCategory === "All" ||
            item.category === currentCategory;

        const searchMatch =
            item.name.toLowerCase().includes(search);

        return categoryMatch && searchMatch;
    });


    menuGrid.innerHTML = "";


    if (filteredItems.length === 0) {

        noResults.style.display = "block";

        return;
    }


    noResults.style.display = "none";


    filteredItems.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "food-card";

        card.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="food-info">

                <span class="food-category">
                    ${item.category}
                </span>

                <h3>
                    ${item.name}
                </h3>

                <div class="food-bottom">

                    <span class="food-price">
                        Rs. ${item.price}
                    </span>

                    <button class="view-btn">
                        View
                    </button>

                </div>

            </div>
        `;


        card.addEventListener("click", () => {

            openItemModal(item);

        });


        menuGrid.appendChild(card);

    });

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

document.querySelectorAll(".category-btn").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".category-btn")
            .forEach(btn => btn.classList.remove("active"));


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        renderMenu();

    });

});


/* ================= SEARCH ================= */

searchInput.addEventListener("input", renderMenu);


/* =========================================================
   ITEM MODAL
========================================================= */

function openItemModal(item) {

    selectedItem = item;

    modalQuantity = 1;

    modalImage.src = item.image;

    modalImage.alt = item.name;

    modalName.textContent = item.name;

    modalPrice.textContent = `Rs. ${item.price}`;

    modalCategory.textContent = item.category;

    modalQuantityText.textContent = modalQuantity;

    itemModal.classList.add("show");

}


function closeItemModal() {

    itemModal.classList.remove("show");

    selectedItem = null;

}


closeModal.addEventListener("click", closeItemModal);


itemModal.addEventListener("click", event => {

    if (event.target === itemModal) {

        closeItemModal();

    }

});


/* ================= MODAL QUANTITY ================= */

modalPlus.addEventListener("click", () => {

    modalQuantity++;

    modalQuantityText.textContent = modalQuantity;

});


modalMinus.addEventListener("click", () => {

    if (modalQuantity > 1) {

        modalQuantity--;

    }

    modalQuantityText.textContent = modalQuantity;

});


/* =========================================================
   ADD TO CART
========================================================= */

modalAddCart.addEventListener("click", () => {

    if (!selectedItem) return;


    const existingItem = cart.find(
        item => item.name === selectedItem.name
    );


    if (existingItem) {

        existingItem.quantity += modalQuantity;

    } else {

        cart.push({

            ...selectedItem,

            quantity: modalQuantity

        });

    }


    updateCart();

    closeItemModal();

    openCartPanel();

});


/* =========================================================
   CART
========================================================= */

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";

        cartCount.textContent = "0";

        return;

    }


    let total = 0;

    let totalQuantity = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;

        totalQuantity += item.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div>

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-item-price">
                    Rs. ${itemTotal}
                </div>

                <div class="cart-qty">

                    <button
                        class="cart-minus"
                        data-index="${index}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="cart-plus"
                        data-index="${index}"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                data-index="${index}"
                title="Remove"
            >
                ×
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent = total;

    cartCount.textContent = totalQuantity;


    /* PLUS */

    document
        .querySelectorAll(".cart-plus")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart[index].quantity++;

                updateCart();

            });

        });


    /* MINUS */

    document
        .querySelectorAll(".cart-minus")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);


                if (cart[index].quantity > 1) {

                    cart[index].quantity--;

                } else {

                    cart.splice(index, 1);

                }


                updateCart();

            });

        });


    /* REMOVE */

    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart.splice(index, 1);

                updateCart();

            });

        });

}


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCartPanel() {

    cartOverlay.classList.add("show");

}


function closeCartPanel() {

    cartOverlay.classList.remove("show");

}


openCart.addEventListener("click", openCartPanel);

closeCart.addEventListener("click", closeCartPanel);


cartOverlay.addEventListener("click", event => {

    if (event.target === cartOverlay) {

        closeCartPanel();

    }

});


/* =========================================================
   WHATSAPP ORDER
========================================================= */

whatsappOrder.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Please add items to your cart first.");

        return;

    }


    const customerName =
        document.getElementById("customerName")
            .value.trim();

    const customerPhone =
        document.getElementById("customerPhone")
            .value.trim();

    const customerAddress =
        document.getElementById("customerAddress")
            .value.trim();


    if (!customerName) {

        alert("Please enter your name.");

        return;

    }


    if (!customerPhone) {

        alert("Please enter your phone number.");

        return;

    }


    if (!customerAddress) {

        alert("Please enter your delivery address.");

        return;

    }


    let message =
        `*PEARL FOOD CENTER - NEW ORDER*%0A%0A`;


    message +=
        `*Customer Details*%0A`;

    message +=
        `Name: ${customerName}%0A`;

    message +=
        `Phone: ${customerPhone}%0A`;

    message +=
        `Address: ${customerAddress}%0A%0A`;


    message +=
        `*ORDER ITEMS*%0A`;

    message +=
        `--------------------------%0A`;


    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;


        message +=
            `${item.name}%0A`;

        message +=
            `Qty: ${item.quantity} x Rs. ${item.price}%0A`;

        message +=
            `Item Total: Rs. ${itemTotal}%0A%0A`;

    });


    message +=
        `--------------------------%0A`;

    message +=
        `*GRAND TOTAL: Rs. ${total}*%0A%0A`;

    message +=
        `Thank you!`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeItemModal();

        closeCartPanel();

    }

});


/* =========================================================
   START WEBSITE
========================================================= */

renderMenu();

updateCart();