let num_array = [1, 2, 3, 4, 5, 6];
let reducer = (accumulator, current_value) => (<li>{accumulator + " " + current_value}</li>);

let arr = [{id: 1, price: 10}, {id:2, price: 20}, {id:3, price: 30}]
let reducerr = (accumulator, currentValue) => ({ totalPrice: accumulator.totalPrice + currentValue.price})

let res = arr.reduce(reducerr, {totalPrice: 0})

export default res