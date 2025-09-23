function Random(){
    let number = Math.random()*10;
     return <h1 style={{'backgroundColor' : 'aqua'}}>Random Number is {Math.floor(number)}</h1>
}
export default Random;