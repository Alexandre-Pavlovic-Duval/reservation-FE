function updateCart () {
  if(document.querySelector("#tripContainer").children.length === 0){
    document.querySelector("#container").style.display = "none";
    document.querySelector("#emptyCart").style.display = "flex";
  }else{
    document.querySelector("#container").style.display = "flex";
    document.querySelector("#emptyCart").style.display = "none";
  }
}

fetch("http://localhost:3000/cart")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector("#tripContainer");
    let total = 0;

    for (let i = 0; i < data.cart.length; i++) {
      const trip = data.cart[i];
      container.innerHTML += `
        <div class="trip">
          <p class="trips">${trip.departure} > ${trip.arrival}</p>
          <p class="hours">${trip.date}</p>
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
            fetch(`http://localhost:3000/cart/${data.cart[i]._id}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.result) {
                  this.parentNode.remove();
                }
                let newTotal = 0;
                document.querySelectorAll(".totalprix").forEach((price) => {
                  newTotal += Number(price.textContent.replace("€", "").trim());
                });
                document.querySelector(".total").textContent = `Total: ${newTotal}€`
                
              });
      
        let newTotal = 0;
        document.querySelectorAll(".totalprix").forEach((price) => {
          newTotal += Number(price.textContent.replace("€", "").trim());
        });
        document.querySelector(".total").textContent = `Total: ${newTotal}€`;
      });
    }
    updateCart()
  });

document.querySelector('#achat').addEventListener("click", function () {

  let trips = document.querySelector('.trips').textContent; 
  let hours = document.querySelector('.hours').textContent; 
  let price = document.querySelector('.price').textContent;


  fetch("http://localhost:3000/cart", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trips, hours, price }),
  });
  window.location.assign('./booking.html')
});
  
