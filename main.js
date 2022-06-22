let products = [
  {
    nombre:'Intel i9 12900K',
    precio: 20000,
    img:'assets/images/i9.png',
    categoria:"procesadores",
  },
  {
    nombre:'Nvidia RTX 3090ti',
    precio: 8000,
    img:'assets/images/3090.png',
    categoria:"graficas",
  },
  {
    nombre:'SSD M.2  WD Black',
    precio: 25000,
    img:'assets/images/m2.png',
    categoria:"almacenamiento",
  },
  {
    nombre:'AMD Ryzen 9 5900X',
    precio: 25000,
    img:'assets/images/ryzen9.png',
    categoria:"procesadores",
  },
  {
    nombre:'AMD Radeon RX 6950 XT',
    precio: 25000,
    img:'assets/images/6950.png',
    categoria:"graficas",
  },
  {
    nombre:'HDD Seagate 2TB',
    precio: 25000,
    img:'assets/images/seagate.png',
    categoria:"almacenamiento",
  },

]


function display(){
  for(key in products){
    let card = document.createElement("article")
    card.classList.add('card')
    card.innerHTML = `
      <h2>${products[key].nombre}</h2>
      <img src="${products[key].img}">
      <h3> $ ${products[key].precio}</h3>
    `
    let main = document.getElementsByClassName("showcase")
    main[0].appendChild(card);
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

display()