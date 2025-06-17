const randomTexts = [
    "u sure mary?",
    "woah !",
    "don't be silly",
    "plz mary please ?",
    "wow ?",
    "don't make me sad",
    "no no please",
    "think twice plz",
    "WHAT ?",
    "i beg u please ?",
    "u dont love me ?",
    "don't say no",
    "please dont click me",
    "mary plz ?",
    "plz click yes",
    "say yes!",
    "im crying pookie plz",
    "hmp",
    "why not ?",
    "just say maybe",
    "come on mary 😢",
    "pretty please?",
    "clicking no is evil",
    "ur joking right?",
    "pls reconsider 🥺",
    "love please ???"
  ];
  
  document.getElementById("yesButton").addEventListener("click", function () {
    showModal("OMG I LOVE YOU MARY 💜");
  });
  
  document.getElementById("noButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    const randomText = randomTexts[randomIndex];
    document.getElementById("noButton").innerText = randomText;
  });
  
  function showModal(message) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-content">${message}</div>`;
    document.body.appendChild(modal);
  
    const closeModalButton = document.createElement("button");
    closeModalButton.textContent = "whatever !";
    closeModalButton.className = "close-button";
    closeModalButton.addEventListener("click", function () {
      document.body.removeChild(modal);
    });
  
    modal.appendChild(closeModalButton);
  }
  