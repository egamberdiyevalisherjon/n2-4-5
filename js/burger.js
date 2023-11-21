let layerBtns = document.querySelectorAll(".layer-btns .btn");
let burgerWrapper = document.querySelector(".burger");
let topBread = document.querySelector(".bread.top");
let bottomBread = document.querySelector(".bread.bottom");
let total = document.querySelector(".total");
let orderBtn = document.querySelector(".order-btn");

let ingredients = {
  cheese: 2,
  meat: 5,
  onion: 1,
  tomato: 1,
  pickle: 1,
  salad: 1,
};

layerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let layer = btn.getAttribute("data-layer");
    let price = ingredients[layer];
    let imageURL = "/burger-layers/" + layer + ".svg";
    let image = document.createElement("img");
    image.setAttribute("src", imageURL);
    image.classList.add(layer);
    burgerWrapper.insertBefore(image, topBread);
    total.innerText = +total.innerText + price;

    image.addEventListener("click", () => {
      image.remove();
      total.innerText -= price;
    });
  });
});

orderBtn.addEventListener("click", () => {
  if (+total.innerText < 8) return;
  let orderNumber = Math.floor(Math.random() * 11 + 5);
  let layerElements = burgerWrapper.querySelectorAll(":not(.bread)");
  let layers = {};

  layerElements.forEach((layerElement) => {
    let layer = layers[layerElement.className];
    if (!layer) layers[layerElement.className] = 1;
    else layers[layerElement.className]++;
  });

  let order = {
    layers,
    orderNumber,
    total: +total.innerText,
    date: Date.now(),
  };

  let orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  alert(
    "Buyurtmangiz uchun $" +
      total.innerText +
      " qabul qilindi! Sizning tartibingiz " +
      orderNumber +
      ". Bizni tanlaganingizdan xursandmiz. 📣"
  );

  burgerWrapper.innerHTML = "";
  burgerWrapper.append(bottomBread);
  burgerWrapper.append(topBread);

  total.innerHTML = 2;
});
