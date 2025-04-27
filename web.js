let button = document.getElementById("search-button");
let input = document.getElementById("city");
let cityName = document.getElementById('city-name');
let cityTime = document.getElementById("city-time");
let cityTemp = document.getElementById("city-temp");

async function getData(cityName){
   let promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=23395baa2d2a4961aab132223243007&q=${cityName}&aqi=no`);
   return await promise.json();
}
button.addEventListener("click",async () =>
{
 let value = input.value;
 let result = await getData(value);
 console.log(result);
 cityName.innerText = `${result.location.name},${result.location.country}`;
 cityTime.innerText =  result.location.localtime;
 cityTemp.innerText = result.current.temp_c + " c";
});

