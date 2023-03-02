let displayData = document.getElementById("display");
let allLocation = [];
let allforecast=[];

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let SearchInput = document.getElementById("search");
SearchInput.addEventListener("keyup", function (e) {
    getWeather(e.target.value);

})
async function getWeather(region) {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b4fd489afe824fefaa3171203232602&q=${region}&days=3`
    );
    let finalResult = await response.json();
    allLocation = finalResult.location;
    allforecast = finalResult.forecast.forecastday;
    // console.log(allLocation);
    // console.log(allforecast);
    display()
};
getWeather("cairo")


function display() {
    let cartona = " ";    
    for (let i = 0; i < allforecast.length; i++) {
        let date = new Date(allforecast[i].date);

        cartona += `
         <div class="col-md-4 shadow-lg ">
            <div class="header bg-gradient  text-white d-flex justify-content-around p-2 fs-1 ">
                <h3 class="fs-1">${weekday[date.getDay()]}</h3>
                <h4 class="fs-1">${date.getDate()}${month[date.getMonth()]}</h4>
            </div>
                 <div class="text-white header bg-gradient d-flex justify-content-around p-2">
                    <h3>${allLocation.name}</h3>
                    <h3>${allLocation.country}</h3>
                </div>
                <div class="ahmed text-center text-white p-2">
                                <h4>maxTemp  ${
                                  allforecast[i].day.maxtemp_c
                                } C<sup>o</sup></h4>
                                <h4>minTemp  ${
                                  allforecast[i].day.mintemp_c
                                } C<sup>o</sup></h4>
                                <p class="fs-1">${
                                  allforecast[i].day.condition.text
                                }</p>
                                <img src="${
                                  allforecast[i].day.condition.icon
                                }" class="text-center w-50" alt="">
                </div>
                </div>
                   
        `;
    }
   

    displayData.innerHTML = cartona;
}
