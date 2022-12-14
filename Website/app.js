// Personal API Key for OpenWeatherMap API
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&APPID=ffa9c1595c9fd044e860eb766e798b78&units=imperial";


// routes (get, post requests)
const postWeatherData = async ( url = '', data = {})=>
{
    console.log(data);
    const response = await fetch( url, {
                                        method: 'POST', 
                                        credentials: 'same-origin',
                                        headers: {'Content-Type': 'application/json',},
                                        // Body data type must match "Content-Type" header
                                        body: JSON.stringify({
                                          city: data.city,
                                          citnewDatey : data.citnewDatey ,
                                          description: data.description,
                                          degree: data.degree,
                                          UserFeeling: data.UserFeeling
                                        }), 
                                        }
                                        
    );
      try {
        const newData = await response.json();
        // console.log(newData);
        return newData;
      }catch(error) {
      console.log("error line 27", error);
      }
}
  
// get request (if needed). 
const getWeatherData = async (url = '') =>
{
  try{
    const res = await fetch(url);
    const data = await res.json();
    return data; 
  }
  catch(error)
  {console.log("error", error);}
}



// global variables.
let city;
let citnewDatey ;
let description; 
let degree; 
// let feeling;

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
citnewDatey  = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
let UserFeeling;


function performAction(e){

  const ZIPcode =  userinputZIP.value;
  UserFeeling = userinputFeel.value;
  getWeather(baseURL,ZIPcode, apiKey);

}

// the main function. 
        const getWeather = async (baseURL, ZIPcode, key)=>{

          const res = await fetch(baseURL+ZIPcode+key)
          try {

            const data = await res.json();
            console.log(data);
            city = data.name; 
            description = data.weather[0].description; 
            degree = data.main.temp;
            // feeling = UserFeeling.value;

            console.log(city);
            console.log(description);
            console.log(degree);
            console.log(UserFeeling);

            postWeatherData('http://localhost:3000/send_weather_data',{city: city, citnewDatey : citnewDatey , description:description, degree:degree, UserFeeling:UserFeeling });
            const ServerData = await getWeatherData('http://localhost:3000/get_weather_data');

            // console.log(ServerData);

            data1.innerHTML = `city: ${ServerData.city}`;
            data2.innerHTML = `Date: ${ServerData.citnewDatey }`;
            data3.innerHTML = `weather is: ${ServerData.description}`;
            data4.innerHTML = `degree: ${ServerData.degree}`;
            data5.innerHTML = `User Feeling: ${ServerData.UserFeeling}`;
            // console.log(data);
            return data;
          }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
          }
        }

// const getData = async (url ='') =>
// {
//   try{
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   }
//   catch(error){
//     console.log("error ", error);
//   }
// }



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
