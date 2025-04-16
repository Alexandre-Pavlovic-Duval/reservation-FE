document.querySelector('.btnSearch').addEventListener("click", function() {
    let departure = document.querySelector('.departure').value.toLowerCase();
    let arrival = document.querySelector('.arrival').value.toLowerCase();
    let rawDate =  document.querySelector('.dateTrip').value.toLowerCase();
    rawDate = moment(rawDate).format('YYYY-MM-DD');

    // TBD
    if (document.querySelector(".tripContainer") !== null){
        console.log("test");
        const dataToDelete = document.querySelector('tripContainer');
        dataToDelete.innerHTML = '';
    }  

    
    fetch('http://localhost:3000/trips')
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.trips.length; i++){
            let newDate = data.trips[i].date;
            let newDateFormated = moment(newDate).format('YYYY-MM-DD');

            if (data.trips[i].departure.toLowerCase() === departure && data.trips[i].arrival.toLowerCase() === arrival && newDateFormated === rawDate){
                newDateFormated = moment(newDate).format('HH:mm');
                document.querySelector(".tripContainer").innerHTML += `
                    <div class="trip">
                        <p class="trips">${departure} > ${arrival}</p>
                        <p class="hours">${newDateFormated}</p>
                        <p class="price">${data.trips[i].price}€</p>
                        <div class="bookATrip">
                            <button type="button">Book</button>
                        </div>
                    </div>
                `

            }
        }
    })
    document.querySelector('.departure').value = "";
    document.querySelector('.arrival').value = "";
    document.querySelector('.dateTrip').value = "";

});