var searchButton =  document.getElementById("search-btn"),
    searchInput = document.getElementById("search-ipt"),
    cityName = document.getElementById("city-name"),
    icon = document.getElementById("icon"),
    temperature = document.getElementById("temp"),
  humidity = document.getElementById("humidity");

  searchButton.addEventListener('click',findWeather);
  searchInput.addEventListener('keyup',enterPressed);

  function enterPressed(event){
    if (event.key === "Enter"){
      findWeather();
    }
  }
  function findWeather(){
    if (searchInput.value ===""){
    }else{
      var searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value
      + "&appid=26900035d8c6e44f1ba2ef3efdb88074";
      httpRequestAsync(searchLink,theResponse);
    }
  }
  function theResponse(response){
    var jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src ="http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML ="Temperature:"+ parseInt(jsonObject.main.temp - 273)+"°";
    humidity.innerHTML ="Humidity:" + jsonObject.main.humidity +"%";
  }
  function httpRequestAsync(url,callback){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange =() =>{
      if (httpRequest.readyState ==4 && httpRequest.status == 200)
        callback(httpRequest.responseText);
    }
    httpRequest.open("GET",url,true);
    httpRequest.send();
  }
