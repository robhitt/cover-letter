// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });

"use strict";

window.addEventListener('load', app);

function app() {
  let coverParams = {}
  var params = window.location.search
  params = params.split('')
  params.shift();
  params = params.join('');
  var individualParamaters = params.split('&');
  
  individualParamaters.forEach( parameter => {
    parameter = parameter.replace(/%2C/gi, ',');  
    parameter = parameter.replace(/\+/gi, " ");
    parameter = parameter.split('=');    
    coverParams[parameter[0]] = parameter[1];
  });

  let companyNames = document.querySelectorAll('.main__company-name');
  companyNames.forEach( companyName => {
    companyName.innerHTML = coverParams.company;
  });

  let location = document.querySelector('.main__company-city');
  location.innerHTML = coverParams.location;

  let jobPosition = document.querySelector('.main__position');
  jobPosition.innerHTML = coverParams.position;

  let todaysDate = document.querySelector('.main__todays-date');
  let date = new Date();
  let day = date.getDate();
  let year = date.getFullYear()
  let monthArr = new Array();
  monthArr[0] = "January";
  monthArr[1] = "February";
  monthArr[2] = "March";
  monthArr[3] = "April";
  monthArr[4] = "May";
  monthArr[5] = "June";
  monthArr[6] = "July";
  monthArr[7] = "August";
  monthArr[8] = "September";
  monthArr[9] = "October";
  monthArr[10] = "November";
  monthArr[11] = "December";
  let month = monthArr[date.getMonth()];
  let currentDate = `${month} ${day}, ${year}`;

  todaysDate.innerHTML = currentDate;
}

  
  
  
  

  // for(i=0;i<params.length-1;i++) {
  //   var param = params[i].split('=');
  //   if (param == 'country') {
  //       // found it, add it first
  //       newsearchstring = '?' + params[i] + newsearchstring;
  //   } else {
  //       // found other, add it at end
  //       newsearchstring += (newsearchstring.length > 0 ? '&' : '') + params[i];
  //   }
  // }

  
  
  
  


  // document.getElementById("write").innerHTML = window.location.search;
  
  // const url = "ADD_URL_ENDPOINT_HERE";
  // fetch(url, {
  //     method: "GET"
  //   })
  //   .then(response => response.json())
  //   .then(response => renderPage(response))
  //   .catch(err => console.log(err));


// function renderPage(response) {
//   console.log("Hello, World!");
// }