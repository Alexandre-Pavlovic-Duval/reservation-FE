// Display the trips

// fetch('http://localhost:3000/trips')
// .then(response => response.json())
// .then(data => {
//     // console.log(data.trips[0]);
//     for (let i = 0; i < data.trips.length ; i++){
//         console.log(data.trips[i])
//     }
// });


document.querySelector('.btnSearch').addEventListener("click", function() {
    let departure = document.querySelector('.departure').value;
    let arrival = document.querySelector('.arrival').value;
    let date =  document.querySelector('.dateTrip').value
    
    // fetch('http://localhost:3000/trips', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({ departure, arrival }),
    // })
    fetch('http://localhost:3000/trips')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.trips.length; i++){
            if (data.trips[i].departure === departure && data.trips[i].arrival === arrival ){
                // console.log(data.trips[i].departure)
                // console.log(data.trips[i].arrival)
                console.log(data.trips[i].date)
            }
            // console.log(i);
            // console.log(data.trips[i].departure);
        }
    })
});