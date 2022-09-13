const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&APPID=85c0955723ea8d8ca16a480fd439457a&units=imperial";



// global variables.
let city;
let newDate;
let description; 
let degree; 
let feeling;

// defining elements in the web
const data1  = document.querySelector('#data1'); // city name corresponding to the zip code
const data2  = document.querySelector('#data2'); // date
const data3  = document.querySelector('#data3'); // weather description
const data4  = document.querySelector('#data4'); // degrees in celisius and fehrenheit
const data5  = document.querySelector('#data5'); // how are you feeling. 

const userinputZIP =  document.getElementById('userinputZIP');
const userinputFeel = document.getElementById('userinputFeel');

const navMoreSymb = document.querySelector('.material-symbols-outlined');
const navItems = document.querySelector('#nav-items');

let d = new Date();
newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


function performAction(e){

  const ZIPcode =  userinputZIP.value;
  const UserFeeling = userinputFeel.value;
  getWeather(baseURL,ZIPcode, apiKey);

}

const getWeather = async (baseURL, ZIPcode, key)=>{

  const res = await fetch(baseURL+ZIPcode+key)
  try {

    const data = await res.json();
    console.log(data);
    city = data.name; 
    description = data.weather[0].description; 
    degree = data.main.temp;
    // feeling = UserFeeling;

    console.log(city);
    console.log(description);
    console.log(degree);
    console.log(feeling);

    data1.innerHTML = `city: ${city}`;
    data2.innerHTML = `Date: ${newDate}`;
    data3.innerHTML = `weather is: ${description}`;
    data4.innerHTML = `degree: ${degree}`;
    data5.innerHTML = `User Feeling: ${feeling}`;
    // console.log(data);
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const getData = async (url ='') =>
{
  try{
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  catch(error){
    console.log("error ", error);
  }
}



// Start the job
const submit = document.getElementById('submit');
submit.addEventListener('click', performAction);

console.log("symb clicked");

navMoreSymb.addEventListener('click', ()=>{
  navItems.classList.toggle('nav-items-activate');
  console.log("symb clicked");
  // navItems.
  console.log(navItems);
  // navItems.style.backgroundColor = "red";
  // navItems.getElementsByClassName.tranform(translateX('20vw'));
  // navItems.style.transform = "translateX(0%)";
  // myElement.style.transform = "translateX(" + (-200) + "px) scaleX(" + 1.6 + ") scaleY(" + 1.2 + ")";
});
