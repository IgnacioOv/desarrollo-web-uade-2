//Ignacio Oliva Velez


let products = [
  {
    id:0,
    nombre:'Intel i9 12900K',
    precio: 80000,
    img:'assets/images/i9.png',
    categoria:"procesadores",
    descripcion:"El procesador tope de gama de la marca intel en su mas reciente generacion",
    destacado:1,
  },
  {
    id:1,
    nombre:'Nvidia RTX 3090ti',
    precio: 700000,
    img:'assets/images/3090.png',
    categoria:"graficas",
    descripcion:"La placa grafica mas potente del mercado",
    destacado:1,
  },
  {
    id:2,
    nombre:'SSD M.2  WD Black',
    precio: 25000,
    img:'assets/images/m2.png',
    categoria:"almacenamiento",
    descripcion:"Almacenamiento de alta velocidad",
    destacado:0,
  },
  {
    id:3,
    nombre:'AMD Ryzen 9 5900X',
    precio: 70000,
    img:'assets/images/ryzen9.png',
    categoria:"procesadores",
    descripcion:"El procesador tope de gama de la marca AMD en mas reciente generacion",
    destacado:0,
  },
  {
    id:4,
    nombre:'AMD Radeon RX 6950 XT',
    precio: 600000,
    img:'assets/images/6090.png',
    categoria:"graficas",
    descripcion:"La grafica mas potente de AMD",
    destacado:0,
  },
  {
    id:5,
    nombre:'HDD Seagate 2TB',
    precio: 10000,
    img:'assets/images/seagate.png',
    categoria:"almacenamiento",
    descripcion:"Puro almacenamiento de la marca lider del mercado",
    destacado:1,
  },
  {
    id:6,
    nombre:'Asus Prime B650',
    precio: 20000,
    img:'assets/images/prime.png',
    categoria:"placas",
    descripcion:"Motherboard linea prime para la ultima generacion de procesadores intel",
    destacado:0,
  },
  {
    id:7,
    nombre:'Corsair RM 850W',
    precio: 8000,
    img:'assets/images/rm850.png',
    categoria:"fuentes",
    descripcion:"Fuente certificada de 850W",
    destacado:0,
  },
  {
    id:8,
    nombre:'Gabinete NZXT H510',
    precio: 25000,
    img:'assets/images/h510.png',
    categoria:'gabinete',
    descripcion:"Gabinete de una de las marcas lideres en refrigeracion",
    destacado:1,
  },
  {
    id:9,
    nombre:'CoolerMaster ML240',
    precio: 25000,
    img:'assets/images/ml240.png',
    categoria:"cooler",
    descripcion:"Water cooler dual fan CoolerMaster",
    destacado:0,
  },
  {
    id:10,
    nombre:'Keychron K2 V2 Keyboard',
    precio: 30000,
    img:'assets/images/keychronk2.png',
    categoria:"peripherals",
    descripcion:"Teclado mecanico switches gateron",
    destacado:1,
  },
  {
    id:11,
    nombre:'Razer Viper Pro',
    precio: 12000,
    img:'assets/images/viperpro.png',
    categoria:"peripherals",
    descripcion:"Uno de los mouse mas utilizados por jugadores competitivos en el mundo",
    destacado:1,
  },

]


//Inicio carrito

let carrito = {
    productId: [],
    productName: [],
    cantidades: [],
    total: 0,
};


//Verifico si existe el carrito en local storage y lo pide, sino lo crea

if (localStorage.carrito) {
    carrito = JSON.parse(localStorage.carrito);
} else {
    localStorage.carrito = JSON.stringify(carrito);
}

//funcionalidad para obtener url de la pagina donde estoy

var path = window.location.pathname;
var page = path.split("/").pop();

//mostrar productos del array

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
      <button class="button-6 add"  onclick="add_remove(this)"data-op="-" data-id="${products[key].id}" data-val="${products[key].precio}" data-cat="1" >-</button>
      <button class="button-6 add"  onclick="add_remove(this)"data-op="+" data-id="${products[key].id}" data-val="${products[key].precio}" data-cat="1" >+</button>
      <a class="button-6" href="detalle.html?key=${products[key].id}">Ver detalle</a>

       `

    if(page == "products.html"){

      allProducts[0].appendChild(card)

    }

    if(products[key].destacado == 1 && page == "index.html"){
      showcase[0].appendChild(card);

    }
  
  }
}

	
//cargar el detalle

	if(page == 'detalle.html'){


		window.onload = () =>{
		
			const queryString = window.location.search;

			const urlParams = new URLSearchParams(queryString);
			let key =  urlParams.get('key')
			console.log(key)
			let detail = document.getElementById("detail-container")
			detail.innerHTML = `
			<div id="img-title">
				<img src="${products[key].img}">
				<div id="title-buttons">
				<h1>${products[key].nombre}</h1>
				<button class="button-6 add"  onclick="add_remove(this)"data-op="+" data-id="${products[key].id}" data-val="${products[key].precio}" data-cat="1" >Add to cart</button>

				</div>
			</div>
			<p>${products[key].descripcion}</p>


			`
			
		}

}

//muestro el carrito, renderizo los items del local storage

function mostrarCarrito(){
    let cart = document.getElementById("cart")
    
    cart.innerHTML = 
    `	<li>Productos: ${carrito.productName}</li>
    	<li>Cantidades: ${carrito.cantidades} (${carrito.cantidades.reduce((acum, n) => acum + n, 0)})</li>
    	<li>Total: $${carrito.total}</li>
    	<button class="button-6">Finalizar compra</button>
    	<button class="button-6" onclick="emptyCart()">Vaciar carrito</button>
    	`
    	;
    }

//funcion para agregar/sacar items del carrito

function add_remove(this_object){
  let id = this_object.getAttribute("data-id")
  let price = this_object.getAttribute("data-val")
  let op = this_object.getAttribute("data-op")
  let index = carrito.productId.indexOf(id);
  price = parseInt(price)
  let name = products[id].nombre
  if(op == '+'){
	  if(!carrito.productId.includes(id)){
	    carrito.productId.push(id)
	    carrito.cantidades.push(1)
	    carrito.productName.push(name)
	    carrito.total = parseInt(carrito.total) + price
	  }else{
	    carrito.cantidades[index]++
	    carrito.total = parseInt(carrito.total) + price
	  }
	}else{
		 if (index != -1) {
         
            if (carrito.cantidades[index] > 0) {
                
                carrito.cantidades[index]--;
               
                carrito.total = parseInt(carrito.total) - price;
            }
         	if(carrito.cantidades[index] == 0){
         		carrito.productId.splice(index,1)
         		carrito.productName.splice(index,1)
         		carrito.cantidades.splice(index,1)	
         	}
        }
	}

 localStorage.carrito = JSON.stringify(carrito);
 if(page == 'cart.js'){
  mostrarCarrito()
	} 
}


//vaciar carrito

function emptyCart(){
    localStorage.clear();
    location.reload();
};

//funcion para el responsiveness del nav

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


