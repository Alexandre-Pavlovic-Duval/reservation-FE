document.querySelector(".btnSearch").addEventListener("click", function () {
  let departure = document.querySelector(".departure").value.toLowerCase();
  let arrival = document.querySelector(".arrival").value.toLowerCase();
  let rawDate = document.querySelector(".dateTrip").value.toLowerCase();
  rawDate = moment(rawDate).format("YYYY-MM-DD");

  if (document.querySelector(".tripContainer") !== null){
    const dataToDelete = document.querySelector('.tripContainer');
    dataToDelete.innerHTML = '';
    };

  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((data) => {
        let found = false
      for (let i = 0; i < data.trips.length; i++) {
        let newDate = data.trips[i].date;
        let newDateFormated = moment(newDate).format("YYYY-MM-DD");

        if (
          data.trips[i].departure.toLowerCase() === departure &&
          data.trips[i].arrival.toLowerCase() === arrival &&
          newDateFormated === rawDate
        ) {
            found = true
          newDateFormated = moment(newDate).format("HH:mm");
          document.querySelector(".tripContainer").innerHTML += `
                    <div class="trip">
                        <p class="trips">${departure} > ${arrival}</p>
                        <p class="hours">${newDateFormated}</p>
                        <p class="price">${data.trips[i].price}€</p>
                        <div class="bookATrip">
                            <button type="button" class=bookATrip>Book</button>
                        </div>
                    </div>`;
        }
      }

      if(!found){
        document.querySelector(".tripContainer").innerHTML += `
        <div class="noTrip">
            <img src="./images/notfound.png" class="image">
            <p>It's time to book your future trip</p>
          </div>` 
      }

      document.querySelector(".tripContainer").addEventListener("click", function (event) {
        if (event.target.classList.contains("bookATrip")) {
          let tripContainerParent = event.target.closest(".trip");
          let tripsToSend = tripContainerParent.querySelector(".trips").textContent;
          let hoursToSend = tripContainerParent.querySelector(".hours").textContent;
          let priceToSend = tripContainerParent.querySelector(".price").textContent;

          fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ trips: { tripsToSend, hoursToSend, priceToSend } }),
          })
        }
      });

    });
  document.querySelector(".departure").value = "";
  document.querySelector(".arrival").value = "";
  document.querySelector(".dateTrip").value = "";
});