let products = [
  {
    id:0,
    nombre:'Intel i9 12900K',
    precio: 20000,
    img:'assets/images/i9.png',
    categoria:"procesadores",
    destacado:0,
  },
  {
    id:1,
    nombre:'Nvidia RTX 3090ti',
    precio: 8000,
    img:'assets/images/3090.png',
    categoria:"graficas",
    destacado:0,
  },
  {
    id:2,
    nombre:'SSD M.2  WD Black',
    precio: 25000,
    img:'assets/images/m2.png',
    destacado:0,
  },
  {
    id:3,
    nombre:'AMD Ryzen 9 5900X',
    precio: 25000,
    img:'assets/images/ryzen9.png',
    categoria:"procesadores",
    destacado:0,
  },
  {
    id:4,
    nombre:'AMD Radeon RX 6950 XT',
    precio: 25000,
    img:'assets/images/6090.png',
    categoria:"graficas",
    destacado:1,
  },
  {
    id:5,
    nombre:'HDD Seagate 2TB',
    precio: 25000,
    img:'assets/images/seagate.png',
    categoria:"almacenamiento",
    destacado:1,
  },

]


let carrito = {
    productId: [],
    productName: [],
    cantidades: [],
    total: 0,
};


if (localStorage.carrito) {
    carrito = JSON.parse(localStorage.carrito);
} else {
    localStorage.carrito = JSON.stringify(carrito);
}

  
var path = window.location.pathname;
var page = path.split("/").pop();

function display(){
  
  let allProducts = document.getElementsByClassName("allProducts")
  let showcase = document.getElementsByClassName("showcase")

  for(key in products){

    let card = document.createElement("article")
    card.classList.add('card')
    card.innerHTML = `
      <h2>${products[key].nombre}</h2>
      <img src="${products[key].img}">
      <h3> $ ${products[key].precio}</h3>
      <button class="button-6 add"  onclick="add(this)" data-id="${products[key].id}" data-val="${products[key].precio}" data-cat="1" >Add to cart</button>
    `

    if(page == "products.html"){

      allProducts[0].appendChild(card)

    }

    if(products[key].destacado == 1 && page == "index.html"){
      showcase[0].appendChild(card);
    }
  
  }
}

function mostrarCarrito(){
    let cart = document.getElementById("cart")
    
    cart.innerHTML = 
    `<li>Productos: ${carrito.productName}</li><li>Cantidades: ${carrito.cantidades} (${carrito.cantidades.reduce((acum, n) => acum + n, 0)})</li><li>Total: $${carrito.total}</li>`;
    }


function add(this_object){
  let id = this_object.getAttribute("data-id")
  let price = this_object.getAttribute("data-val")
  let index = carrito.productId.indexOf(id);
  price = parseInt(price)
  let name = products[id].nombre
  if(!carrito.productId.includes(id)){
    carrito.productId.push(id)
    carrito.cantidades.push(1)
    carrito.productName.push(name)
    carrito.total = parseInt(carrito.total) + price
  }else{
    carrito.cantidades[index]++
    carrito.total = parseInt(carrito.total) + price
  }
  localStorage.carrito = JSON.stringify(carrito);
 if(page == 'cart.js'){
  mostrarCarrito()
	}
  
}


function navResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

switch(page){
	case 'index.html':
		display()
		break;
	case 'products.html':
		display()
		break;
	case 'cart.html':
		mostrarCarrito()
		break;


}


