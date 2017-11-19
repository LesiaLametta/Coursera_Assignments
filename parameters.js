const getAverage = (numberOne, numberTwo) => {
    const average = (numberOne + numberTwo) / 2;
    console.log(average);
};

getAverage(365, 27);
// Output: 196


const takeOrder = (topping, crustType) => {
    console.log('Order: thin crust pizza topped with ' + crustType);
};
takeOrder('mushrooms', 'mushrooms');
takeOrder('mushrooms', 'cheese');
takeOrder('mushrooms', 'vegetables');