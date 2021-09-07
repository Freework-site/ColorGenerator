// 16777216

function colorchnage() {
    const Container = document.getElementsByClassName("main")[0]
    const Button = document.getElementsByClassName("btn")[0]

    Button.addEventListener("click", () => {
        Container.style.backgroundColor = "#" + RandomColor;
    })

    var RandomColor = (Math.floor(Math.random() * 16777216)).toString(16);

    console.log(RandomColor);

    var text = document.getElementById("text");
    text.innerText = "#" + RandomColor;
}