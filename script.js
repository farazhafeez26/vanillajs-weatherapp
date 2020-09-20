// create event listener to the keypress
document.getElementById("search-bar").addEventListener("keyup", (e) => {
    if (e.key == "enter") {
        //  fetch
    }

    const response = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=53d200bcaf9af02e7c2c5af27ef46713").then((res => response.json().then(data => console.log())



// if the button type is enter fetch the fityrom api
// get the value of the input field (search bar)
// 





    // fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=53d200bcaf9af02e7c2c5af27ef46713").then((res) => res.json()).then(body => {
    //     document.getElementById("location").innerText = body.name
    // })




// get the value of the search-bar and store the value on console 
// I have to provide value to request made through fetch
