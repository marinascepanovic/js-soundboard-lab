const buttons = document.querySelectorAll(".sound-button")


buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
    const clickedButtonId = e.target.id
    const audio = new Audio(`sounds/${clickedButtonId}.wav`)
    audio.play()
    })
})