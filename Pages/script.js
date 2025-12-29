
function load(){
   
    let URL= `https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=3998d310c12578963905a4e3b13394f3&units=metric`
     fetch(URL)
    .then(function(response){
        return response.json();
    })
     .then(function(data){
         console.log(data.main.temp)
        document.getElementById("cityName").innerText=data.name;
        document.getElementById("country").innerHTML=`<span><img src="./src/images/location-pin.png"></span><span class me-2>${data.sys.country}</span>`;
        document.getElementById("temp").innerHTML=`${data.main.temp}&deg`;
        document.getElementById("weatherType").innerText=data.weather[0].main;
        document.getElementById("skyType").innerText=data.weather[0].description;
        document.getElementById("humidity").innerText=`${data.main.humidity}%`;
        document.getElementById("visibility").innerText=`${data.visibility/1000} km`;
        document.getElementById("pressure").innerText=`${data.main.pressure} hPa`;
        document.getElementById("windSpeed").innerText=`${data.wind.speed} km/h`;
     })
}
function searchClick(){
    let inputCity=document.getElementById("inputCity").value;
    let URL= `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=3998d310c12578963905a4e3b13394f3&units=metric`;

    fetch(URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       // console.log(data.name)
        document.getElementById("cityName").textContent=data.name;
        document.getElementById("country").innerHTML=`<span><img src="./src/images/location-pin.png"></span><span class me-2>${data.sys.country}</span>`;
        document.getElementById("temp").innerHTML=`${data.main.temp}&deg`;
        document.getElementById("weatherType").innerText=data.weather[0].main;
        document.getElementById("skyType").innerText=data.weather[0].description;
        document.getElementById("humidity").innerText=`${data.main.humidity}%`;
        document.getElementById("visibility").innerText=`${data.visibility/1000} km`;
        document.getElementById("pressure").innerText=`${data.main.pressure} hPa`;
        document.getElementById("windSpeed").innerText=`${data.wind.speed} km/h`;
        document.querySelector("p")
    })

}