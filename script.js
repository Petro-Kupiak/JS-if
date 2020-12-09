const firstName = prompt("Enter you Name");
const secondCity = prompt("Enter you City");
const mathAge = parseInt(prompt("Enter you age"));
if(!firstName || !secondCity || !mathAge ||  
    typeof firstName != "string" || typeof secondCity != "string" || typeof mathAge != "number" ){
        alert("Invalid type of data");
} else if (mathAge>=21 && mathAge<45 )
{
    alert(`Welcome to the club in the city: ${secondCity}`);
} 
else if (mathAge<21 || mathAge>45 )
{
    if (mathAge<18){
        alert(`The city ${secondCity} police department tried to get a person under the age of 18 into the facility`);
    }
    else if(mathAge>=18 && mathAge<21)
    {
        alert("Not enough age to enter the club");
    }
    else {
        alert("You are old for this club");
    }
} 