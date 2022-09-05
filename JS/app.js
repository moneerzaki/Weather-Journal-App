const baseURL = "https://api.nasa.gov/planetary/earth/assets?";
const API = "caQ2SdrXilhiQYfAgJrllMvbNrM8lwNQBop43Bco";



const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
function performAction(){
    const newAnimal =  document.getElementById('userinput').value;
    getAnimal(baseURL,newAnimal, apiKey)
}



const submit = document.getElementById('submit');
submit.addEventListener('click', performAction);
