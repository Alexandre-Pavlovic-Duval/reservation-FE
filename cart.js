

fetch('http://localhost:3000/cart')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector("#tripContainer");
    let total = 0;

    for (let i = 0; i < data.cart.length; i++) {
      const trip = data.cart[i];
      container.innerHTML += `
        <div class="trip">
          <p class="trips">${trip.departure} > ${trip.arrival}</p>
          <p class="hours">${trip.departure}</p>
          <p class="price"><span class="totalprix">${trip.price}</span>€</p>
          <div class="delete">
              <button class="btnButton">X</button>
          </div>
        </div>`;
      total += Number(trip.price);
    }

    document.querySelector(".total").textContent = `Total: ${total}€`;


    const deleteButtons = document.querySelectorAll(".delete");

    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function () {
        this.parentNode.remove();
  

     let newTotal = 0;
        document.querySelectorAll(".totalprix").forEach((price) => {
          newTotal += Number(price.textContent.replace("€", "").trim());
        });
        document.querySelector(".total").textContent = `Total: ${newTotal}€`
      })}
  ;
  });
