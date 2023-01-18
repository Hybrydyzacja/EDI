var key = prompt("Please type API")
// api key e2947680

fetch("https://my.api.mockaroo.com/streamers.json?key=" + key).then((apiData)=>{ //pobieramy dane z api z linku i zapisujemy je do parametru apiData
    return apiData.json(); //konwertujemy dane obiekty 
}).then((objectData)=>{  //po tym możemy się już dalej odnosić do obiektów
    let tableData=""; //deklarujemy zmienną tableData, która jest na razie pusta
    objectData.map((api)=>{ //używamy metody mapy, żeby wyświetlić wszystkie elementy z api, 'api' zawiera wszystkie pobrane elementy i dzięki niej będziemy mogli się odnieść do konkretnego obiektu
        tableData+=` 
        <tr>
        <td>${api.channel}</td>
        <td>${api.avg_viewers}</td>
        <td>${api.subscribers}</td>
        <td>${api.followers}</td>
        <td>${api.most_viewers}</td>
        <td>${api.last_time_live}</td>
        <td>${api.verified}</td>
        </tr>`; //bez inkrementacji dostalibyśmy tylko dane z jednego obiektu, a chcemy dostać wszystkie
                //następnie dodajemy komórki, które odnoszą się do wartości poszczególnych obiektów
    })
    document.getElementById("api_table").innerHTML=tableData; //wartości z tableData zostaną przypisane do id
}).catch((err)=>{
    console.log(err); //wyświetla w konsoli komunikat o błędzie, jeśli taki wystąpi
})