const TypeSelector = document.querySelector("#TypSelector")
const LabelGenerator = document.querySelector("#label")
const Submit = document.querySelector("#submit")
const Adder = document.querySelector("#Data")

Submit.addEventListener("click", (e) => {
	if (e) {
	const Type = TypeSelector.value
	const Label = LabelGenerator.value
	const div = document.createElement("div")
	const dlabel = document.createElement("label")
	dlabel.innerHTML = `<label>${label.value}</label>`
	const dtype = document.createElement("input")
	dtype.type = Type
	div.appendChild(dlabel)
	div.appendChild(dtype)
	const divclass = div.classList
	divclass.add("container")
	Adder.appendChild(div)
	}

})