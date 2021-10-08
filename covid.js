
    

const currentState = {
  currentRegion: 'global',
  currentStatsType: '',

  CovidData: {
    totalConfirmedCases: 0,
    totalActiveCases: 0,
    totalRecovered: 0,
    totalDeaths: 0,
    countriesArray: [],
  }
}

const continents = {
  asia: {},
  europe: {},
  africa: {},
  americas: {},
  oceania: {},
}
function updateChart(newDataLabels, newDeathData, newConfirmedData, newRecoveredData, newCriticalData, totalConfirmedCases, totalActiveCasesToday, totalDeathCases, totalRecoveredCases, totalNewDeathsToday, InCriticalCondition) {
  const ctx = document.querySelector('#myChart').getContext('2d');
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: newDataLabels,
      datasets: [
        {
          label: 'number of Deaths',
          data: newDeathData,
          backgroundColor: [
            'rgba(155, 1, 132, 0.4)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'number of Confirmed Cases',
          data: newConfirmedData,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'number of recovered',
          data: newRecoveredData,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(1, 1, 1, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(1, 1, 1, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(1, 1, 1, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'number of critical',
          data: newCriticalData,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'total Confirmed Cases',
          data: totalConfirmedCases,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'total Active Cases Today',
          data: totalActiveCasesToday,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'total Death Cases',
          data: totalDeathCases,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'total Recovered Cases',
          data: totalRecoveredCases,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'total New Deaths Today',
          data:totalNewDeathsToday,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'In Critical Condition',
          data:InCriticalCondition,
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(222, 22, 22, 0.4)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            'rgba(222, 22, 22, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        },
      ],
    },
    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      },
      maintainAspectRatio: false,

      responsive: true,
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(205, 99, 132)'
        }
      }
    }
  });
}



function RegionButtons() {
  const regions = ['global', ...Object.keys(continents)];
  const regionContainer = document.querySelector('.region_name');
  regions.forEach(region => {
    const regionBtn = document.createElement('button');
    regionBtn.classList.add('regionBtn');
    regionBtn.textContent = region;
    regionBtn.setAttribute('name', region);
    regionContainer.appendChild(regionBtn);
    regionBtn.addEventListener('click', handleRegionClick);
  });
}
RegionButtons();

async function handleRegionClick(e) {
  console.log(e.target);
  currentState.currentRegion = e.target.getAttribute('name');
  console.log(currentState.currentRegion);
  let extName = e.target.getAttribute('name')
  let extension = (extName === "global") ? ' ' : `region/${extName}` // get the last part of the url (region/name or " " for global)
  console.log(extension);
  var datalabels = [],
  deathdata = [],
  recoveredData = [],
  confirmedData = [],
  criticalData = [],
  totalConfirmedCases=[],
  totalActiveCasesToday=[],
  totalDeathCases=[],
  totalRecoveredCases=[],
  totalNewDeathsToday=[],
  InCriticalCondition=[];

  var countryCode = "";
  const url2 = await (await fetch('https://api.allorigins.win/raw?url=' + 'https://restcountries.herokuapp.com/api/v1/' + extension)).json();
  const regionContainer = document.querySelector('.country_name');
  regionContainer.innerHTML = ""; 
  for (i = 0; i < url2.length; i++) {
    if (url2[i].cca2 != "XK") {
      let countryName = url2[i].name.common;
      countryCode = url2[i].cca2
      datalabels.push(countryName);

      // - creating buttons for countries -
      
      const countryBtn = document.createElement('button');
      countryBtn.classList.add('countryBtn');
      countryBtn.textContent = countryName;
      countryBtn.setAttribute('code', countryCode); // button holds the data for the specific country code
      regionContainer.appendChild(countryBtn);
      countryBtn.addEventListener('click', handleCountryClick);
      // end of creating buttons
     
      const url3 = await (await fetch('https://corona-api.com/countries/' + countryCode)).json();
      deathdata.push(url3.data.latest_data.deaths);
      recoveredData.push(url3.data.latest_data.recovered);
      confirmedData.push(url3.data.latest_data.confirmed);
      criticalData.push(url3.data.latest_data.critical);

      totalConfirmedCases.push(url3.data.timeline.confirmed);
      totalActiveCasesToday.push(url3.data.timeline.active)
      totalDeathCases.push(url3.data.timeline.deaths);
      totalRecoveredCases.push(url3.data.timeline.recovered);
      totalNewDeathsToday.push(url3.data.timeline.new_deaths)
      InCriticalCondition.push(url3.data.timeline.is_in_progress);

    }
  }
  updateChart(datalabels, deathdata, confirmedData, recoveredData, criticalData, totalConfirmedCases, totalActiveCasesToday, totalDeathCases, totalRecoveredCases, totalNewDeathsToday, InCriticalCondition)
}
async function handleCountryClick(e){ // function to handle the country data and send to chart
  var Countrydatalabels=[], Countrydeathdata=[], CountryconfirmedData=[], CountryrecoveredData=[], CountrycriticalData=[], CountrytotalConfirmedCases=[], CountrytotalActiveCasesToday=[], CountrytotalDeathCases=[], CountrytotalRecoveredCases=[], CountrytotalNewDeathsToday=[], CountryInCriticalCondition=[]
  let countryCode = e.target.getAttribute('code')
  const url3 = await (await fetch('https://corona-api.com/countries/' + countryCode )).json();
  Countrydeathdata.push(url3.data.latest_data.deaths);
  CountryrecoveredData.push(url3.data.latest_data.recovered);
  CountryconfirmedData.push(url3.data.latest_data.confirmed);
  CountrycriticalData.push(url3.data.latest_data.critical);

  CountrytotalConfirmedCases.push(url3.data.timeline.confirmed);
  CountrytotalActiveCasesToday.push(url3.data.timeline.active)
  CountrytotalDeathCases.push(url3.data.timeline.deaths);
  CountrytotalRecoveredCases.push(url3.data.timeline.recovered);
  CountrytotalNewDeathsToday.push(url3.data.timeline.new_deaths)
  CountryInCriticalCondition.push(url3.data.timeline.is_in_progress);

  updateChart(Countrydatalabels, Countrydeathdata, CountryconfirmedData, CountryrecoveredData, CountrycriticalData, CountrytotalConfirmedCases, CountrytotalActiveCasesToday, CountrytotalDeathCases, CountrytotalRecoveredCases, CountrytotalNewDeathsToday, CountryInCriticalCondition)

}

