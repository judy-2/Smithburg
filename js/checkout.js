function toggleDelivery(clickedButton) {
    const buttons = document.querySelectorAll(".delivery-btn");

    buttons.forEach(button => {
    button.classList.remove("active")
    })

clickedButton.classList.add("active");
} 

function toggleButton(clickedButton) {
    const buttons = document.querySelectorAll(".selection-btn");

    buttons.forEach(button => {
    button.classList.remove("active")
    })

clickedButton.classList.add("active");
} 