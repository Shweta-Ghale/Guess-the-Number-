document.querySelector("form").onsubmit=(e)=>{
    e.preventDefault();
    const inputValue=document.getElementById("value").value;
    if(!inputValue)
    {
        return;
    }

    const randomNumber=randomNumberGenerator();
    if(Number(inputValue)==randomNumber)
    {
        document.getElementById("result").innerHTML="your Gussed Number is Right! ";
    }
    else
    {
        document.getElementById("result").innerHTML="your Gussed Number is Wrong!  Actual Number is  "+randomNumber;






        
    }
};

const randomNumberGenerator=() =>{
    const number=Math.floor(Math.random()*100);

    return number;
};