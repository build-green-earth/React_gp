//utilize React Inline if with Logical && operator

function App_3() {
    const num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]

    return (
        <>
        {num_array.map((ele) => (ele > 3 && <li>{ele}</li>))}
        </>
    );
}

export default App_3;