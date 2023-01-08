async function apiData(){
    const apiLink = 'http://192.168.0.73:2137/streamers.json';

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
          'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
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

