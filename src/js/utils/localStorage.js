// viet function chung vo day
var amountElement = document.querySelector("#amount");
var amount = amountElement.value;

let render = (amount) => {
  amountElement.value = amount;
};

let handlePlus = () => {
  amount++;
  render(amount);
};
let handleMinus = () => {
  if (amount > 1) {
    amount--;
  }
  render(amount);
};
amountElement.addEventListener("input", () => {
  amount = amountElement.value;
  amount = parseInt(amount);
  amount = isNaN(amount) || amount == 0 ? 1 : amount;
  render(amount);
});
// let handleMinus = () => {
//   console.log(btnMinusValue);
// };
