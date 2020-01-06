

cityName = document.querySelector("#cityName");
showResult = document.querySelector("#showResult");
apikey = "5gvuZ2zKdQBcjIjNSYRJPrBFXbGML6oL"

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
            }).catch(error=>{
                console.log(error);
            })
            
        }
})
