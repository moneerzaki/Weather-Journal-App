const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&APPID=85c0955723ea8d8ca16a480fd439457a&units=imperial";



const submit = document.getElementById('submit');
submit.addEventListener('click', performAction);

let data1_city;
let data2_desc; 
let data3_degree; 
let data4_feeling; 

const data1  = document.querySelector('#data1'); // city name corresponding to the zip code
const data2  = document.querySelector('#data2'); // weather description
const data3  = document.querySelector('#data3'); // degrees in celisius and fehrenheit
const data4  = document.querySelector('#data4'); // how are you feeling. 
const userinputZIP =  document.getElementById('userinputZIP');
const userinputFeel = document.getElementById('userinputFeel');



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
    data1_city = data.name; 
    data2_desc = data.weather[0].description; 
    data3_degree = data.main.temp;
    // data4_feeling = UserFeeling;

    console.log(data1_city);
    console.log(data2_desc);
    console.log(data3_degree);
    // console.log(data4_feeling);

    data1.innerHTML = `city: ${data1_city}`;
    data2.innerHTML = `weather is: ${data2_desc}`;
    data3.innerHTML = `degree: ${data3_degree}`;
    data4.innerHTML = `User Feeling: ${data4_feeling}`;
    // console.log(data);
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}



