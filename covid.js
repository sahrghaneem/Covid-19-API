let coronaAPIURL = 'https://corona-api.com/countries',
countriesAPIURL = 'https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1';
let coronaData=[], countriesData=[], chart;
let countryNames = [], deathData = [], recoveredData = [], confirmedData = [], criticalData = [];
const continents = { Asia: {}, Europe: {}, Africa: {}, Americas: {}, Oceania: {} }
// function randomColors() {
//   let array = [];
//   countryNames.forEach(country => {
//     array.push(`rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)}`);
//   })
//   return array;
// }
function updateChart(chartType='line') {
  if(chart)
    chart.destroy();
  chart = new Chart(document.querySelector('#myChart'), {
    // The type of chart we want to create
    type: chartType,
    // The data for our dataset
    data: {
      labels: countryNames,
      datasets: [
        {
          label: 'number of Deaths',
          data: deathData,
          // backgroundColor: randomColors(),
          backgroundColor: 'rgb(0,0,0)',
          fill: false,
          borderColor: 'rgb(0,0,0)'
        },
        {
          label: 'number of Confirmed Cases',
          data: confirmedData,
          // backgroundColor: randomColors(),
          backgroundColor: 'rgb(255,255,0)',
          fill: false,
          borderColor: 'rgb(255,255,0)'
        },
        {
          label: 'number of recovered',
          data: recoveredData,
          // backgroundColor: randomColors(),
          backgroundColor: 'rgb(0,255,0)',
          fill: false,
          borderColor: 'rgb(0,255,0)'
        },
        {
          label: 'number of critical',
          data: criticalData,
          // backgroundColor: randomColors(),
          backgroundColor: 'rgb(255,0,0)',
          fill: false,
          borderColor: 'rgb(255,0,0)'
        },
      ],
    },
    // Configuration options go here
    options: {
      maintainAspectRatio: false,
      responsive: true,
    }
  });
}
function RegionButtons() {
  const regions = ['Global', ...Object.keys(continents)];
  const regionContainer = document.querySelector('.region_name');
  regions.forEach(region => {
    const regionBtn = document.createElement('button');
    regionBtn.classList.add('regionBtn');
    regionBtn.id = region;
    regionBtn.textContent = region;
    regionContainer.appendChild(regionBtn);
    regionBtn.addEventListener('click', handleRegionClick);
  });
}
// async function handleRegionClick(e) {
//   // console.log(e.target);
//   currentState.currentRegion = e.target.getAttribute('name');
//   // console.log(currentState.currentRegion);
//   let extension = (currentState.currentRegion === "global") ? ' ' : `region/${currentState.currentRegion}` // get the last part of the url (region/name or " " for global)
//   // console.log(extension);
//   datalabels = [];
//   deathData = [];
//   recoveredData = [];
//   confirmedData = [];
//   criticalData = [];
//   totalConfirmedCases=[];
//   totalActiveCasesToday=[];
//   totalDeathCases=[];
//   totalRecoveredCases=[];
//   totalNewDeathsToday=[];
//   InCriticalCondition=[];
//   var countryCode = "";
//   const url2 = await (await fetch('https://api.allorigins.win/raw?url=' + 'https://restcountries.herokuapp.com/api/v1/' + extension)).json();
//   const CountriesContainer = document.querySelector('.country_name');
//   CountriesContainer.innerHTML = ""; 
//   for (i = 0; i < url2.length; i++) {
//     if (url2[i].cca2 != "XK") {
//       let countryName = url2[i].name.common;
//       countryCode = url2[i].cca2
//       datalabels.push(countryName);

//       //  creating buttons for countries 
      
//       const countryBtn = document.createElement('button');
//       countryBtn.classList.add('countryBtn');
//       countryBtn.textContent = countryName;
//       countryBtn.setAttribute('code', countryCode); // button holds the data for the specific country code
//       CountriesContainer.appendChild(countryBtn);
//       countryBtn.addEventListener('click', handleCountryClick);
//       // end of creating buttons
     
//       const url3 = await (await fetch('https://corona-api.com/countries/' + countryCode)).json();
//       deathData.push(url3.data.latest_data.deaths);
//       recoveredData.push(url3.data.latest_data.recovered);
//       confirmedData.push(url3.data.latest_data.confirmed);
//       criticalData.push(url3.data.latest_data.critical);
//       totalConfirmedCases.push(url3.data.timeline.confirmed);
//       totalActiveCasesToday.push(url3.data.timeline.active)
//       totalDeathCases.push(url3.data.timeline.deaths);
//       totalRecoveredCases.push(url3.data.timeline.recovered);
//       totalNewDeathsToday.push(url3.data.timeline.new_deaths)
//       InCriticalCondition.push(url3.data.timeline.is_in_progress);
//     }
//   }
//   updateChart()
// }
function handleRegionClick(event) {
  countryNames = [];
  deathData = [];
  recoveredData = [];
  confirmedData = [];
  criticalData = [];
  switch (event.target.innerText) {
    case 'Global':
      coronaData.forEach(element => {
        countryNames.push(element.name)
        deathData.push(element.deaths)
        recoveredData.push(element.recovered)
        confirmedData.push(element.confirmed)
        criticalData.push(element.critical)
      })
      break;
    default:
      countriesData.forEach(country => {
        if(country.region == event.target.innerText)
        {
          coronaData.forEach(element => {
            if(element.name == country.name)
            {
              countryNames.push(element.name)
              deathData.push(element.deaths)
              recoveredData.push(element.recovered)
              confirmedData.push(element.confirmed)
              criticalData.push(element.critical)
            }
          })
        }
      })
      break;
  }
  updateChart() //create chart
  document.querySelector('#country_name').innerHTML=`Countries list according to region ${event.target.innerText} :<br>`;
  countryNames.forEach(country => {
    const countryBtn = document.createElement('button');
    countryBtn.classList.add('countryBtn');
    countryBtn.textContent = country;
    document.querySelector('#country_name').appendChild(countryBtn);
    countryBtn.addEventListener('click', handleCountryClick);
  })
}
async function handleCountryClick(event){ // function to handle the country data and send to chart
  countryNames = [];
  deathData = [];
  recoveredData = [];
  confirmedData = [];
  criticalData = [];
  coronaData.forEach(country => {
    if(country.name == event.target.textContent)
    {
      countryNames.push(country.name)
      deathData.push(country.deaths)
      recoveredData.push(country.recovered)
      confirmedData.push(country.confirmed)
      criticalData.push(country.critical)
    }
  })
  updateChart('bar')
}
async function getAllCountriesCoronaDataFromAPI() {
  if(!window.localStorage.getItem('allCountriesCoronaData'))
  {
    document.querySelector('#spinnerContainer').style.zIndex = 2;
    let response = await ((await fetch(coronaAPIURL)).json())
    setTimeout(() => {
      document.querySelector('#spinnerContainer').style.zIndex = -1;
    }, 1000);
    // document.querySelector('#spinnerContainer').style.zIndex = -1;
    let cleanData = response.data.map(element => {
        return {
          name: element.name,
          population: element.population,
          confirmed: element.latest_data.confirmed,
          critical: element.latest_data.critical,
          deaths: element.latest_data.deaths,
          recovered: element.latest_data.recovered,
        }
    })
    window.localStorage.setItem('allCountriesCoronaData',JSON.stringify(cleanData))
  }
}
async function getAllCountriesData() {
  if(!window.localStorage.getItem('allCountriesData'))
  {
    let response = await ((await fetch(countriesAPIURL)).json())
    let cleanData = response.map(element => {
        return {
          name: element.name.common,
          region: element.region
        }
    })
    window.localStorage.setItem('allCountriesData',JSON.stringify(cleanData))
  }
}
window.onload = async function() {
  await getAllCountriesCoronaDataFromAPI();
  await getAllCountriesData();
  countriesData = JSON.parse(window.localStorage.getItem('allCountriesData'))
  coronaData = JSON.parse(window.localStorage.getItem('allCountriesCoronaData'))
  RegionButtons();
  document.querySelector('#Global').click();
}