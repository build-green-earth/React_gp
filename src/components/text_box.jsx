// const list_1 = () => {
//     return <div>sdfksdjf</div>
// }

// export default list_1

let ls = [3, 5, 7] // 3, 5, 7
let lsmul2 = ls.map( item => item * 2 ) // [6, 10, 14]

// another case
let jsxlist = ls.map( (item, index)=> <li key={index}>{item}</li> )

export default jsxlist