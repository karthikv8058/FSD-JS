// fn statement
function calculateDeliveryCharge(distance) {
  return distance > 5 ? 50 : 20;
}
// fn expression + default parameter ( discount = 0) , 0.10
const applyDiscount = (amount, discount = 0) => amount - amount * discount;

// HOF
function placeYourOrder(order, discountType, callbackFn) {
  // Destructuring
  const { customerName, items, distance = 2 } = order;

  const totalPrice = items.reduce(
    (sum, { price, quantity = 1 }) => sum + price * quantity,
    0,
  );
  const discountedPrice = discountType(totalPrice);
  const finalAmount = discountedPrice + calculateDeliveryCharge(distance);

  callbackFn(customerName, finalAmount);
}

// Sample Order
const order = {
  customerName: "Rahul",
  distance: 8,
  items: [
    { name: "Pizza", price: 300, quantity: 2 },
    { name: "Burger", price: 150 },
  ],
};

const festivalDiscount = (total) => applyDiscount(total, 0.1);
const footballFinalDiscount = (total) => applyDiscount(total, 0.5); // callback fn

const orderConfirmation = (name, finalAmount) => {
  console.log(`Order confirmed for ${name}. Pay Rs.${finalAmount}`);
};

placeYourOrder(order, footballFinalDiscount, orderConfirmation);
// placeYourOrder(order, footballFinalDiscount, (name, finalAmount) => {
//   console.log(`Order confirmed for ${name}. Pay Rs.${finalAmount}`);
// });
