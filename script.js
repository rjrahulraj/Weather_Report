console.log("Welcome to Weather Report")

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';


// // // variables declared//
  let cloud_pct =document.getElementById("cloud_pct")
  let temp =document.getElementById("temp")
  let feels_like =document.getElementById("feels_like")
  let humidity =document.getElementById("humidity")
  let min_temp =document.getElementById("min_temp")
  let  max_temp =document.getElementById("max_temp")
  let wind_speed =document.getElementById("wind_speed")
  let wind_degrees =document.getElementById("wind_degrees")
  let  sunrise =document.getElementById("sunrise")
  let  submit =document.getElementById("submit")
  let  city =document.getElementById("city")
  let  cityName =document.getElementById("cityName")
  


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec9673afa2msh1e9d73246da9271p1dfa92jsn96166c167b67',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city) =>{

	cityName.innerHTML=city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		// console.log(response)
		
		
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		
	})
	.catch(err => console.error(err));
}

getWeather('Delhi');

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})


// variable derclared for Mumbai

let cloud_pctM =document.getElementById("cloud_pctM");
let tempM =document.getElementById("tempM");
let feels_likeM =document.getElementById("feels_likeM");
let humidityM =document.getElementById("humidityM");
let min_tempM =document.getElementById("min_tempM");
let max_tempM =document.getElementById("max_tempM");
let wind_speedM =document.getElementById("wind_speedM");
let wind_degreesM =document.getElementById("wind_degreesM");
let sunriseM =document.getElementById("sunriseM");
let sunsetM =document.getElementById("sunsetM");


const weatherMumbai=()=>{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		// console.log(response)
		
		
		cloud_pctM.innerHTML = response.cloud_pct
		tempM.innerHTML = response.temp
		feels_likeM.innerHTML = response.feels_like
		humidityM.innerHTML = response.humidity
		min_tempM.innerHTML = response.min_temp
		max_tempM.innerHTML = response.max_temp
		wind_speedM.innerHTML = response.wind_speed
		wind_degreesM.innerHTML = response.wind_degrees
		sunriseM.innerHTML = response.sunrise
		sunsetM.innerHTML = response.sunset
		
		
	})
	.catch(err => console.error(err));
}
weatherMumbai()
	



// Varibles declared for Kolkata
let cloud_pctK = document.getElementById("cloud_pctK");
let tempK = document.getElementById("tempK");
let feels_likeK = document.getElementById("feels_likeK");
let humidityK = document.getElementById("humidityK");
let min_tempK = document.getElementById("min_tempK");
let max_tempK = document.getElementById("max_tempK");
let wind_speedK = document.getElementById("wind_speedK");
let wind_degreesK = document.getElementById("wind_degreesK");
let sunriseK = document.getElementById("sunriseK");
let sunsetK = document.getElementById("sunsetK");

const weatherKolkata=()=>{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		// console.log(response)
		
		
		cloud_pctK.innerHTML = response.cloud_pct
		tempK.innerHTML = response.temp
		feels_likeK.innerHTML = response.feels_like
		humidityK.innerHTML = response.humidity
		min_tempK.innerHTML = response.min_temp
		max_tempK.innerHTML = response.max_temp
		wind_speedK.innerHTML = response.wind_speed
		wind_degreesK.innerHTML = response.wind_degrees
		sunriseK.innerHTML = response.sunrise
		sunsetK.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
}
weatherKolkata();




	
// variables for Bangalore
let cloud_pctB=document.getElementById("cloud_pctB")
let tempB=document.getElementById("tempB")
let feels_likeB=document.getElementById("feels_likeB")
let humidityB=document.getElementById("humidityB")
let min_tempB=document.getElementById("min_tempB")
let max_tempB=document.getElementById("max_tempB")
let wind_speedB=document.getElementById("wind_speedB")
let wind_degreesB=document.getElementById("wind_degreesB")
let sunriseB=document.getElementById("sunriseB")
let sunsetB=document.getElementById("sunsetB")


const weatherBangalore=()=>{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {
		// console.log(response)
		
		
		cloud_pctB.innerHTML = response.cloud_pct
		tempB.innerHTML = response.temp
		feels_likeB.innerHTML = response.feels_like
		humidityB.innerHTML = response.humidity
		min_tempB.innerHTML = response.min_temp
		max_tempB.innerHTML = response.max_temp
		wind_speedB.innerHTML = response.wind_speed
		wind_degreesB.innerHTML = response.wind_degrees
		sunriseB.innerHTML = response.sunrise
		sunsetB.innerHTML = response.sunset
		
		
	})
	.catch(err => console.error(err));
}
weatherBangalore();
	
	

// variables for Ranchi

let cloud_pctR=document.getElementById("cloud_pctR");
let tempR=document.getElementById("tempR");
let feels_likeR=document.getElementById("feels_likeR");
let humidityR=document.getElementById("humidityR");
let min_tempR=document.getElementById("min_tempR");
let max_tempR=document.getElementById("max_tempR");
let wind_speedR=document.getElementById("wind_speedR");
let wind_degreesR=document.getElementById("wind_degreesR");
let sunriseR=document.getElementById("sunriseR");
let sunsetR=document.getElementById("sunsetR");

const weatherRanchi=()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ranchi', options)
	.then(response => response.json())
	.then(response => {
		// console.log(response)
		
		
		cloud_pctR.innerHTML = response.cloud_pct
		tempR.innerHTML = response.temp
		feels_likeR.innerHTML = response.feels_like
		humidityR.innerHTML = response.humidity
		min_tempR.innerHTML = response.min_temp
		max_tempR.innerHTML = response.max_temp
		wind_speedR.innerHTML = response.wind_speed
		wind_degreesR.innerHTML = response.wind_degrees
		sunriseR.innerHTML = response.sunrise
		sunsetR.innerHTML = response.sunset
		
		
	})
	.catch(err => console.error(err));
}
weatherRanchi();




// try {
// 	const 	response =  fetch(url, options);
// 	const 	result = response.text;
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


