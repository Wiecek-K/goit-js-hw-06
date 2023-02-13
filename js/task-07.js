const body = document.body;
const input = body.querySelector("#font-size-control");
const text = body.querySelector("#text");

text.style.fontSize = `${input.value}px`;
input.addEventListener("input", (event) => {
	text.style.fontSize = `${event.currentTarget.value}px`;
});
