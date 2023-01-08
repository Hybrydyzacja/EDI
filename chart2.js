async function apiData(){
    const apiLink = 'http://192.168.0.73:2137/streamers.json';

    const response = await fetch(apiLink)
    const datapoints = await response.json()

    const verified = datapoints.map((amount) => amount.verified)
    VerifiedAccounts = verified

}

async function drawChart(){
    await apiData()

    const arr = VerifiedAccounts
    const count_true = arr.filter(Boolean).length;
    const count_false = VerifiedAccounts.length - count_true

     // setup 
     const data = {
        labels: [
          'Zweryfikowane',
          'Niezweryfikowane',
        ],
        datasets: [{
          label: 'Liczba kont',
          data: [count_true, count_false],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      };

// render init block
const config = {
    type: 'doughnut',
    data: data,
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

drawChart()