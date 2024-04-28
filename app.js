function getDayName(dayNumber){
    const daysWeek = ['domingo', 'lunes','martes','miercoles','jueves','viernes','sabado'];
    return daysWeek[dayNumber];
}






async function weatherCities(){
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://weather-api-t17v.onrender.com/weather/${city}`;
    
    try{
        const todayDayNumber = new Date().getDay();
        const todayDayName = getDayName(todayDayNumber);

        const promise = await fetch(apiUrl);
        const data = await promise.json();

        return displayWeather(data, city, todayDayName)

    }
    catch(error){
    alert(`error: ${error.message}`);

    }


}

    function displayWeather(data, city, todayDayName){
    const dia = document.getElementById('dia');
    const temperatura = document.getElementById('temperatura');
    const ciudad = document.getElementById('ciudad');
    const viento = document.getElementById('viento');

    dia.innerHTML = todayDayName;
    temperatura.innerHTML = data.temperature
    ciudad.innerHTML = city;
    viento.innerHTML = data.wind

    

    


}