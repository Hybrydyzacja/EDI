async function apiData(){
    const apiLink = 'https://my.api.mockaroo.com/streamers.json?key=e988e0a0';

    const response = await fetch(apiLink)
    const datapoints = await response.json()

    const channel = datapoints.map((amount) => amount.channel)
    ChannelData = channel

    const mostviewers = datapoints.map((name) => name.most_viewers)
    mostviewersNumber = mostviewers
}

