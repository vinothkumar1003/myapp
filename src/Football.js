function Football()
{
    const shoot = (a) =>{
        alert(a);
    }
    return (
        <button onClick={ () =>shoot("goal")}>Take a shot!</button>
    );
}

export default Football;