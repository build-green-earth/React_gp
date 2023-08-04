function Car(prop) {
    return <li>I am a {prop}</li>
}


function Garage() {
    const cars = ['qwe', 'wer', 'rtr']

    return (
        <>
        <h1>I'm writing car names</h1>
        <>
            {cars.map((car) => Car(car))}
        </>
        </>
    )
}

export default Garage;