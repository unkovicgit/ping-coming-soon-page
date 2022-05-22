const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const formElem = document.querySelector(".form__elem");
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.onsubmit = submitForm;

function submitForm(event) {
	event.preventDefault();

	const { value } = email;

	formElem.classList = ["form__elem"];

	if (value === "") {
		formElem.classList.add("empty");
	} else if (!emailReg.test(value)) {
		formElem.classList.add("error");
	} else {
		formElem.classList.remove("empty");
	}
}
