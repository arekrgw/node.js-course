


const weatherFrom = document.querySelector("form");
const search = document.querySelector("input");
const errorMsg = document.querySelector(".error")
const successMsg = document.querySelector(".success")

weatherFrom.addEventListener("submit", (e) => {
    e.preventDefault()
    successMsg.innerHTML = ""
    errorMsg.style.color = 'green'
    errorMsg.textContent = "Loading..."

    fetch(`http://localhost:3000/weather?address=${search.value}`).then(response => {
    response.json().then(data => {
        if(data.error) {
            errorMsg.style.color = "red";

            return errorMsg.textContent = data.error
        }
        errorMsg.textContent = ""
        successMsg.innerHTML = `<h3>${data.address}</h3><p>${data.forecast}</p>`
    })
})
})