let orderCount = 0;
const takeOrder = (topping, crustType) => {
  orderCount ++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');


const getSubTotal = (itemCount) => {
  	return itemCount * 7.5;
}

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}

console.log(getSubTotal(orderCount));
console.log(getTotal());

//output: Order: thin crust pizza topped with mushroom
// 		  Order: whole wheat pizza topped with spinach
//		  Order: brooklyn style pizza topped with pepperoni
//		  22.5
// 		  23.85