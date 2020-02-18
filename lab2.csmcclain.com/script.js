document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=c2bc53085ed5170904a5d928a5d2a279";
    fetch(url)
        .then(function(response) {
        return response.json();
        }).then(function(json) {
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) {
          results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h3>' + json.main.temp + " &deg;F</h3>"
            results += "<p>"

            //below is where the we grab the description of current weather forecast.
            for (let i=0; i < json.weather.length; i++) {
          results += json.weather[i].description
          if (i !== json.weather.length - 1)
            results += ", "
            }
            
            
            results += "<br>Feels like: " + json.main.feels_like + "&deg;F";
            results += "<br> High: " + json.main.temp_max + "&deg;F";
            results += "<br> Low: " + json.main.temp_min + "&deg;F";

            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
    });

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=c2bc53085ed5170904a5d928a5d2a279";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let forecast = "";
            forecast += "<table class='projected'>";
            forecast += "<caption>5 Day Forecast</caption>";
            forecast += "<tr>";
            forecast += "<th></th>";
            for (let i=0; i < 8; i++) {
                forecast += "<th>" + moment(json.list[i].dt_txt).format('h:mm a') + "</th>";
            }
            forecast += "</tr>";
            
            forecast += "<tr>";
            let currentHours = 24;
            forecast += "<td><strong>Next " + currentHours + " Hours</strong></td>";
            currentHours += 24;

            for (let i = 0; i < json.list.length; i++)
            {
                forecast += "<td>";
                if (moment(json.list[i].dt_txt).format('h:mm a') === "12:00 am")
                {
                    forecast += "<p><strong>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</strong></p>";
                }
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                forecast += "<p>High: " + json.list[i].main.temp_max + "&deg;F" + "</p>";
                forecast += "<p>Low: " + json.list[i].main.temp_min + "&deg;F" + "</p>";
                forecast += "</td>";
                if ((i % 8) === 7)
                    {
                        forecast += "</tr>";
                        if (i !== 39)
                        {
                            forecast += "<tr>";
                            forecast += "<td><strong>Next " + currentHours + " Hours</strong></td>";
                            currentHours += 24
                        }
                        
                    }
            }

            forecast += "</table>";

            document.getElementById("forecastResults").innerHTML = forecast;
    });

  });