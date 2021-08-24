const cityname = document.getElementById('cityname')
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');

//const temp_status = document.getElementById('temp_status');
const temp_real = document.getElementById('temp_real');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if (cityVal === "") {
        city_name.innerText = `Please give your Cityname`;
        datahide.classList.add('data_hide');                 // if cityval is NULL then hide the temperature details
        
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5919b2d9da4b5e868bcf53660dcd97c6`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`; // we have name directly in data array & country inside sys:{}
            temp_real.innerText = arrData[0].main.temp;     //in the JSON data we have temp inside main: {}
            // temp_status.innerText = arrData[0].weather[0].main;  //in the JSON data we can see main is inside weather:[{}] 

            // condition to check weather image sunny, cloudy, rainy
            let tempEmo = arrData[0].weather[0].main;

            if(tempEmo == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'> </i>";
            } else if(tempEmo == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #106897;'> </i>";
            } else if(tempEmo == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #106897;'> </i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'> </i>";
            }

            datahide.classList.remove('data_hide'); 

        } catch (error) {
            city_name.innerText = `Please Enter correct Cityname`; // If incorrect city name
            datahide.classList.add('data_hide'); 
        }
    }
    

}
   

submitbtn.addEventListener('click', getInfo) 