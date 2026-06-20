const cars = [
  {
    id:"bmw-m5",
    brand:"BMW",
    name:"BMW M5 Competition",
    price:"$65,000",
    mileage:"58,000 km",
    condition:"Не битая",
    images:[
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/2019_BMW_M5_Competition.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/BMW_M5_F90.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/BMW_M5_interior.jpg"
    ]
  },

  {
    id:"toyota-camry",
    brand:"Toyota",
    name:"Toyota Camry",
    price:"$28,000",
    mileage:"42,000 km",
    condition:"Не битая",
    images:[
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Toyota_Camry_2018.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Camry_rear.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Camry_interior.jpg"
    ]
  },

  {
    id:"lexus-lx600",
    brand:"Lexus",
    name:"Lexus LX 600",
    price:"$95,000",
    mileage:"18,000 km",
    condition:"Не битая",
    images:[
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Lexus_LX_600.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/LX_rear.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/LX_interior.jpg"
    ]
  }
];

// каталог
if(document.getElementById("catalog")){
  const catalog = document.getElementById("catalog");

  function render(list){
    catalog.innerHTML = "";
    list.forEach(car=>{
      catalog.innerHTML += `
        <div class="card">
          <img src="${car.images[0]}">
          <h3>${car.name}</h3>
          <p>${car.price}</p>
          <button onclick="openCar('${car.id}')">Подробнее</button>
        </div>
      `;
    });
  }

  render(cars);

  // поиск + фильтр
  document.getElementById("search").addEventListener("input", filter);
  document.getElementById("brand").addEventListener("change", filter);

  function filter(){
    let text = document.getElementById("search").value.toLowerCase();
    let brand = document.getElementById("brand").value;

    let result = cars.filter(c =>
      (brand === "all" || c.brand === brand) &&
      c.name.toLowerCase().includes(text)
    );

    render(result);
  }

  window.openCar = function(id){
    window.location.href = "car.html?id=" + id;
  }
}

// страница авто
if(document.getElementById("title")){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const car = cars.find(c=>c.id===id);

  document.getElementById("title").innerText = car.name;
  document.getElementById("mainImg").src = car.images[0];

  document.getElementById("info").innerHTML = `
    <p>💰 ${car.price}</p>
    <p>📍 ${car.mileage}</p>
    <p>🛠 ${car.condition}</p>
  `;

  const gallery = document.getElementById("gallery");

  car.images.forEach(img=>{
    gallery.innerHTML += `<img src="${img}" onclick="document.getElementById('mainImg').src='${img}'">`;
  });
}
