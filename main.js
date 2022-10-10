const textInput = document.getElementById("textInput")
const textP = document.getElementById("textP")
const emailInput = document.getElementById("emailInput")
const emailP = document.getElementById("emailP")
const fristPasswordInput = document.getElementById("FristPasswordInput")
const fristPasswordP = document.getElementById("FristPasswordP")
const secPasswordInput = document.getElementById("SecPasswordInput")
const secPasswordP = document.getElementById("secPasswordP")
const btn = document.getElementById("btn")
const singUp = document.getElementById("singUp")
const singIn = document.getElementById("singIn")
const btnIn = document.getElementById("btnIn")
const emailSingIn = document.getElementById("emailSingIn")
const passwordSingIn = document.getElementById("passwordSingIn")
const obj = {}
btn.onclick = (e) => {
    e.preventDefault()
    let filtertext = textInput.value.toLowerCase().trim()
    let valueText = filtertext.split("").length
    let FristPasswordText = fristPasswordInput.value.split("").length
    let secPasswordText = secPasswordInput.value.split("").length
    let valueEmail = emailInput.value.toLowerCase().trim()
    if (valueText < 20 && valueText > 3) {
        textInput.style.boxShadow = "0px 0px 5px green"
        textP.innerHTML = `<i class="ri-check-line"></i>`
        textP.style.display = "block"
        textP.style.color = "green"
        obj.name = filtertext
    } else {
        textInput.style.boxShadow = "0px 0px 5px red"
        textP.innerHTML = "Min 3 char and Max 20 char"
        textP.style.display = "block"
        textP.style.color = "red"
    }
    if (valueText == 0) {
        textP.innerHTML = "Please Enter Your Name"
        textP.style.display = "block"
        textP.style.color = "red"
    }
    if (valueEmail.includes("@")) {
        emailInput.style.boxShadow = "0px 0px 5px green"
        emailP.innerHTML = `<i class="ri-check-line"></i>`
        emailP.style.display = "block"
        emailP.style.color = "green"
        obj.email = valueEmail
    } else {
        emailInput.style.boxShadow = "0px 0px 5px red"
        emailP.innerHTML = "Write @ to Continue"
        emailP.style.display = "block"
        emailP.style.color = "red"
    }
    if (valueEmail.split("").length == 0) {
        emailP.innerHTML = "Please Enter Your Email"
        emailP.style.display = "block"
        emailP.style.color = "red"
    }
    if (FristPasswordText >= 6) {
        fristPasswordInput.style.boxShadow = "0px 0px 5px green"
        fristPasswordP.innerHTML = `<i class="ri-check-line"></i>`
        fristPasswordP.style.display = "block"
        fristPasswordP.style.color = "green"
    } else {
        fristPasswordInput.style.boxShadow = "0px 0px 5px red"
        fristPasswordP.innerHTML = "Password should be 6 or bigger"
        fristPasswordP.style.display = "block"
        fristPasswordP.style.color = "red"
    }
    if (secPasswordText >= 6) {
        secPasswordInput.style.boxShadow = "0px 0px 5px green"
        secPasswordP.innerHTML = `<i class="ri-check-line"></i>`
        secPasswordP.style.display = "block"
        secPasswordP.style.color = "green"
    } else {
        secPasswordInput.style.boxShadow = "0px 0px 5px red"
        secPasswordP.innerHTML = "Password should be 6 or bigger"
        secPasswordP.style.display = "block"
        secPasswordP.style.color = "red"
    }
    if (fristPasswordInput.value != secPasswordInput.value) {
        if (secPasswordInput.value != "") {
            secPasswordInput.style.boxShadow = "0px 0px 5px red"
            secPasswordP.innerHTML = "Password does not match"
            secPasswordP.style.display = "block"
            secPasswordP.style.color = "red"
            fristPasswordInput.style.boxShadow = "0px 0px 5px red"
            fristPasswordP.innerHTML = "Password does not match"
            fristPasswordP.style.display = "block"
            fristPasswordP.style.color = "red"
        }
    } else {
        obj.password = secPasswordInput.value
        changeTo(obj)
    }
}
function changeTo(e) {
    if (Object.keys(e).length == 3) {
        let data = JSON.stringify(e)
        localStorage.setItem("infoData", data)
    }
}

if (localStorage.getItem("infoData")) {
    let data = JSON.parse(localStorage.getItem("infoData"))
    singUp.style.display = "none"
    singIn.style.display = "block"
    let knowEmail = data.email
    let knowPassword = data.password
    btnIn.onclick = () => {
        if (emailSingIn.value.toLowerCase().trim() == knowEmail && passwordSingIn.value == knowPassword) {
            console.log("saa");
            window.location.href = 'welcome.html';
        } else {
            const forget = document.getElementById("forget")
            forget.innerHTML = "Forget Number Or Email?"
        }
    }
    let welcome = document.getElementById("welcomeName")
    welcome.innerHTML = `Welcome ${data.name}`
}