const form=document.getElementById("weather");
const city=document.getElementById("input-city");
const cityname=document.getElementById("city");
const FeelsLike=document.getElementById("Feels-Like")
const temperature=document.getElementById("temperature");
const weather=document.getElementById("show-weather");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const pressure=document.getElementById("pressure")
const cloudiness=document.getElementById("cloudiness");
const visibility=document.getElementById("visibility");
const sunset=document.getElementById("sunset");
const sunrise=document.getElementById("sun-rise");

const error_message=document.getElementById("error-message");
const loading = document.getElementById("loading");
form.addEventListener("submit",(e)=>{
e.preventDefault();
if(city.value==""){
    console.log("Please ! input the city name ")
}
else{
    const cityEntered = city.value.trim();
console.log(cityEntered);


if(cityEntered===""){
    return;
}

loading.style.display = "block";
const apiKey = "YOUR_OPENWEATHER_API_KEY";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityEntered}&appid=${apiKey}&units=metric`;

fetch(apiUrl)

.then(response => {
if (!response.ok) {
            throw new Error("City not found");
        }
    return response.json()

})

.then(data => {
    loading.style.display = "none";
console.log(data.name);
cityname.textContent=data.name;
console.log(data);
console.log(data.main.temp);
temperature.textContent=`Temperature : ${data.main.temp}  ° C `;
console.log(data.main.feels_like)
FeelsLike.textContent=`Feels Like ${data.main.feels_like} ° C`;
console.log(data.main.humidity)
humidity.textContent=`Humidity : ${data.main.humidity}%`;
console.log(data.main.pressure)
pressure.textContent=`Pressure :${data.main.pressure}hpa` ;
console.log(data.clouds.all);
cloudiness.textContent=`Clouds : ${data.clouds.all}%`;
console.log(data.visibility);

const visibilityKm = data.visibility / 1000;

visibility.textContent = `Visibility : ${visibilityKm} km`;
console.log(data.wind.speed);


wind.textContent=`Wind Speed : ${data.wind.speed}m/s`;
const sunriseTime=new Date(data.sys.sunrise*1000);

console.log(data.sys.sunrise);


const SunSetTime=new Date(data.sys.sunset*1000);
console.log(data.sys.sunset);
sunrise.textContent = `Sunrise : ${sunriseTime.toLocaleTimeString()}`;
sunset.textContent = `Sunset : ${SunSetTime.toLocaleTimeString()}`;
console.log(data.weather[0].main);
console.log("WEATHER ELEMENT:", weather);
console.log("WEATHER VALUE:", data.weather[0].main);
weather.textContent=`Weather ${data.weather[0].main}`;

})
.catch(error=>
{
    loading.style.display = "none";
console.log(error.message); 
} );
}
});
    

