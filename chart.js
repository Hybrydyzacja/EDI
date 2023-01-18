var key = prompt("Please type API")

async function apiData(){
    const apiLink = 'https://my.api.mockaroo.com/streamers.json?key=' + key; // api key e2947680

    const response = await fetch(apiLink)
    const datapoints = await response.json()

    const channel = datapoints.map((amount) => amount.channel)
    ChannelData = channel

    const mostviewers = datapoints.map((name) => name.most_viewers)
    mostViewersNumber = mostviewers
}

let mostViewersNumber = [];
let ChannelData = [];

async function drawChart(){
    await apiData()

         // setup 
    const data = {
      labels: ChannelData,
      datasets: [{
        label: 'Największa liczba widzów',
        data: mostViewersNumber,
        backgroundColor: [
          'rgba(0, 0, 128, 0.8)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1
      }]
    };

    // config 
    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    }

    drawChart()

