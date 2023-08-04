let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filtered = num_array.filter(temp => (temp > 4 ? temp : null))

let passed = filtered.map(temp => <li>{temp}</li>)

export default passed;