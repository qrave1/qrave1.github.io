let goods = {
    "Hubba Bubba" : 380,
    "Jelly Belly" : 360,
    "Juicy Fruit" : 260,
    "M&M's" : 270,
    "Marukawa" : 180,
    "Milka cookies" : 240,
    "Morinaga" : 320,
    "Oreo" : 230,
    "Shock 2 Shock" : 570,
    "Wispa" : 200,
    "7 UP" : 200,
    "Arizona" : 280,
    "Chupa Chups" : 140,
    "Fanta" : 240,
    "Milkis Dora" : 180,
    "Mtn Dew" : 220,
    "Dr. Pepper Cherry" : 190,
    "Schweppes" : 160,
    "Vinut Grape" : 190,
    "CorinCorn Popcorn" : 280,
    "Glico Pocky" : 240,
    "Лапша Naruto" : 300,
    "Лапша Nissin" : 260,
    "Лапша Nongshim" : 140,
    "Луковые кольца Nongshim" : 220,
    "Чипсы Salto" : 250,
    "Лапша Samyang" : 200,
    "Набор для девочек" : 1980,
    "Набор Мармелад шоу" : 845,
    "Набор из Японии" : 540,
    "Новогодний набор" : 2140
}

let arr = {};

function butt(data_name, data_price){
    let item = data_name;    
    let price = data_price;
    let arr1 = {"name" : item,"price" : price};
    if (arr1["price"] != undefined) {
        arr[arr1.name] = arr[arr1.name] + 1 || 1;
        print();
    }
    
}

function cart_clear () {
    arr = {};
    document.querySelector('.cart-content').innerHTML = `<div class="cart-item">Корзина пустая</div>`;
}

function print () {
    let out = '';
    for (let key in arr) {
        out += `<div class="cart-item">
                    <p class="name"> Товар: ${key} <br> </p>
                    <p class="cost"> Цена: ${goods[key] * arr[key]} <br> </p>
                    <p class="amount"> Количество: ${arr[key]} </p>
                </div>`;
    }
    out += `<button class="buy" type="submit" onclick="cart_clear();">Купить</button>`;
    document.querySelector('.cart-content').innerHTML = out;
}


function onLoad() {
    var task1 = document.querySelector(".to-cart");
    task1.addEventListener("click", butt)

    var task2 = document.querySelector(".buy");
    task2.addEventListener("click", cart_clear)
}

window.addEventListener("load", onLoad)