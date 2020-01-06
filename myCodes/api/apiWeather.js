cityName = document.querySelector("#cityName");
showResult = document.querySelector("#showResult");
img = document.querySelector("#img");
apikey = "Yx4xTbNCYhXNLvEsoZQPqfCbcx03JIda"

getWeatherInfo = async function(cityCode){
        baseUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityCode}`
        url = `${baseUrl}?apikey=${apikey}`;
        weatherData = await fetch(url).then(res=>res.json());
        return weatherData[0];
}
getCityKey  = async function(city){
        baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
        url = `${baseUrl}?q=${city}&apikey=${apikey}`
        let data = await fetch(url).then(response=>response.json());
        return data[0];

}

cityName.addEventListener('keyup',(e)=>{
        let cityCode;
        if(e.key=='Enter'){
            city = cityName.value;
            getCityKey(city).then(data=>{
                return getWeatherInfo(data.Key);
            }).then(data =>{
                console.log(data);
                showResult.innerHTML = data.WeatherText;
                if(data.WeatherText==="Partly sunny")

      {
        var x = document.createElement("IMG");
        x.setAttribute("src", "data:image/jpeg;base64,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");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }
      else if(data.WeatherText==="Mostly cloudy")
      {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVR7qLVHVJnktmYtQVOjC5w0iq8qLAMwS1enLLZSY804PBCxDTQ&s");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);

      }
      else if(data.WeatherText==="Mostly sunny")
      {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://webstockreview.net/images/cloudy-clipart-pleasant-weather-3.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);

      }
      else if(data.WeatherText==="Sunny")
      {
        var x = document.createElement("IMG");
        x.setAttribute("src", "http://www.iconarchive.com/download/i6336/custom-icon-design/weather/Sunny.ico");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);

      }
            
            }).catch(error=>{
                console.log(error);
            })

        }
})
