let products = [
  {
    id:0,
    nombre:'Intel i9 12900K',
    precio: 20000,
    img:'assets/images/i9.png',
    categoria:"procesadores",
  },
  {
    id:1,
    nombre:'Nvidia RTX 3090ti',
    precio: 8000,
    img:'assets/images/3090.png',
    categoria:"graficas",
  },
  {
    id:2,
    nombre:'SSD M.2  WD Black',
    precio: 25000,
    img:'assets/images/m2.png',
  },
  {
    id:3,
    nombre:'AMD Ryzen 9 5900X',
    precio: 25000,
    img:'assets/images/ryzen9.png',
    categoria:"procesadores",
  },
  {
    id:4,
    nombre:'AMD Radeon RX 6950 XT',
    precio: 25000,
    img:'assets/images/6950.png',
    categoria:"graficas",
  },
  {
    id:5,
    nombre:'HDD Seagate 2TB',
    precio: 25000,
    img:'assets/images/seagate.png',
    categoria:"almacenamiento",
  },

]

let carrito = {
    productId: [],
    cantidades: [],
    total: 0,
};

  
function display(){
  for(key in products){
    let card = document.createElement("article")
    card.classList.add('card')
    card.innerHTML = `
      <h2>${products[key].nombre}</h2>
      <img src="${products[key].img}">
      <h3> $ ${products[key].precio}</h3>
      <button class="button-6 add"  onclick="add(this)" data-id="${products[key].id}" data-val="${products[key].precio}" data-cat="1" >Add to cart</button>
    `
    let main = document.getElementsByClassName("showcase")
    main[0].appendChild(card);
  }
}

const mostrarCarrito = (id) => {
    let cart = document.getElementById("cart")
    let product = document.createElement("article")
    let key = carrito.productId.indexOf(id)
    product.setAttribute('id',id)
    product.innerHTML = `
    <h3>
      ${products[id].nombre}
    </h3>
    <h4>
      ${carrito.cantidades[key]}
    </h4>
    `
    if (carrito.productId.includes[id]){
      carrito.cantidades++
    }
    cart.appendChild(product)
};

function add(this_object){
  let id = this_object.getAttribute("data-id")
  let price = this_object.getAttribute("data-val")
  price = parseInt(price)

  if(!carrito.productId.includes(id)){
    carrito.productId.push(id)
    carrito.cantidades.push(1)
    carrito.total = parseInt(carrito.total) + price
  }else{
    carrito.cantidades[id]++
    carrito.total = parseInt(carrito.total) + price
  }

  mostrarCarrito(id)
}


function navResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

display()
