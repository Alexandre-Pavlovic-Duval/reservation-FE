document.querySelector("#tripContainer").innerHTML += `<div class="trip">
                    <p class="trips">sdqsdqs>sdqsdq</p>
                    <p class="hours">14:25</p>
                    <p class="price">564</p>
                    <div class="delete">
                        <button class="btnButton">X</button>
                    </div>
                </div>`;

document.querySelector("#tripContainer").innerHTML += `<div class="trip">
                <p class="trips">sdqsdqs>sdqsdq</p>
                <p class="hours">14:25</p>
                <p class="price">10000</p>
                <div class="delete">
                    <button class="btnButton">X</button>
                </div>
            </div>`;

for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
  document
    .querySelectorAll(".delete")
    [i].addEventListener("click", function () {
      this.parentNode.remove();
      const messagesCount = document.querySelectorAll("p").length;
      document.querySelector("#count").textContent = messagesCount;
    });
}

let total = 0;

document.querySelectorAll(".price").forEach((price) => {
  total += Number(price.textContent);
});

document.querySelector(".totalprix").textContent += ` ${total}€`

