const getAdviceButton = document.getElementById("button");
const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    document.getElementById("title").innerHTML = `Advice #${data.slip.id}`
    document.getElementById("text").innerHTML = `"${data.slip.advice}"`
}

window.addEventListener("load", fetchAdvice)

getAdviceButton.addEventListener("click", fetchAdvice)