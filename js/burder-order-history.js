let orderTableBody = document.querySelector("#order-table-body");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

if (orders.length === 0) {
  alert("hali hichnima zakaz qimagansiz");
}

let ingredients = {
  cheese: {
    price: 2,
    calory: 101,
  },
  meat: {
    price: 5,
    calory: 225,
  },
  onion: {
    price: 1,
    calory: 20,
  },
  tomato: {
    price: 1,
    calory: 8,
  },
  pickle: {
    price: 1,
    calory: 5,
  },
  salad: {
    price: 1,
    calory: 3,
  },
};

orders.forEach((order, index) => {
  let tr = document.createElement("tr");
  let numberTd = document.createElement("td");
  let orderNumberTd = document.createElement("td");
  let layersTd = document.createElement("td");
  let totalPriceTd = document.createElement("td");
  let dateTimeTd = document.createElement("td");

  // Number
  numberTd.innerText = index + 1 + ".";

  // Order Number
  orderNumberTd.innerText = order.orderNumber;

  // Layer
  let layerKeys = Object.keys(order.layers);
  layersTd.innerHTML = `
    <ul class="list-group">
      ${layerKeys
        .map((layerKey) => {
          return `<li class="list-group-item">${layerKey}: ${
            order.layers[layerKey]
          } X $${ingredients[layerKey].price} = $${
            order.layers[layerKey] * ingredients[layerKey].price
          } (${order.layers[layerKey] * ingredients[layerKey].calory}cal)</li>`;
        })
        .join("")}
    </ul>
  `;

  // Total
  totalPriceTd.innerText = `$${order.total} (${layerKeys.reduce(
    (prev, curr) => {
      return prev + order.layers[curr] * ingredients[curr].calory;
    },
    0
  )}cal)`;

  // Date
  let date = new Date(order.date);
  let day = date.getDate().toString(10).padStart(2, 0);
  let month = (date.getMonth() + 1).toString(10).padStart(2, 0);
  let year = date.getFullYear();

  let hour = date.getHours().toString(10).padStart(2, 0);
  let minute = date.getMinutes().toString(10).padStart(2, 0);
  let second = date.getSeconds().toString(10).padStart(2, 0);

  dateTimeTd.innerText = `${hour}:${minute}:${second}
  ${day}/${month}/${year}`;

  // Display TD's
  tr.append(numberTd, orderNumberTd, layersTd, totalPriceTd, dateTimeTd);
  orderTableBody.append(tr);
});
