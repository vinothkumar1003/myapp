function Car(props)
{
    return <h2>Hi, i am a {props.brand},{props.name}</h2>
}
function Garage(){
    return (
        <>
        <h1>who lives in my garage?</h1>
        <Car brand="Ford" name="suresh"/>
        </>

    );
}

export default Garage;
