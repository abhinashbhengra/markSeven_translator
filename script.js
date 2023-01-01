const inputText = document.querySelector("#inputText");
const button = document.querySelector(".submit");
const outputBox = document.querySelector(".output");

const url = (textInput) =>
  `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput}`;

button.addEventListener("click", () => {
  const current_url = url(inputText.value);
  //   console.log(current_url);

  translate(current_url);
});

async function translate(current_url) {
  const response = await fetch(current_url);
  if (response.ok) {
    const data = await response.json();
    const translatedText = data.contents.translated;
    outputBox.innerText = translatedText;
  } else {
    throw Error("something went wrong!");
  }
}
