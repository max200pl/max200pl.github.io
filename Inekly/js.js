const button = document.getElementsByClassName("ask__item-button");
const item = document.getElementsByClassName("ask__item");

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function (ev)
	{
		 button[i].parentElement.classList.toggle("active");
		this.classList.toggle("active");
		
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
