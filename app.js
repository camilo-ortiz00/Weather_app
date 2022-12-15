window.addEventListener('load', ()=> {
    let lon
    let lat
    let tempv = document.getElementById('tempv')  
    let tdesc = document.getElementById('tdesc')  
    let location = document.getElementById('location')  
    let humidity = document.getElementById('humidity') 
    
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude

           const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d0ff7d0eb27891ebc6398e6b78131a54`

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {
                console.log(data)
                
                let temp = Math.round(data.main.temp)
                tempv.textContent = `${temp} °C`
                let desc = data.weather[0].description
                tdesc.textContent = desc.toUpperCase()
                location.textContent = data.name
                humidity.textContent = `${data.main.humidity} %`
                
               //Iconos
                console.log(data.weather[0].icon)
                let iconCode = data.weather[0].icon
                const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                icono.src = urlIcon

            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})
