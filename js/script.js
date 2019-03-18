var openMap = document.querySelector(".location-map");
var bigMap = document.querySelector(".big-map");
var writeOpen = document.querySelector(".write-to-us");
var write = document.querySelector(".write-us");
var closeMap = document.querySelector(".location-map__close");
var closeWrite = document.querySelector(".write-us-form__close");
var fullName = document.querySelector(".write-us-login");
var eMail = document.querySelector(".write-us-email");
var text = document.querySelector(".write-us-text");
var forma = document.querySelector(".write-us-form");
var storage = localStorage.getItem("fullName");


openMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	bigMap.classList.add("big-map--show");
});


writeOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	write.classList.add("write-us--show");
	
	if (storage) {
		fullName.value = storage;
		eMail.focus();
		} else {
			fullName.focus();
		}
});


closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	bigMap.classList.remove("big-map--show");
});


closeWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	write.classList.remove("write-us--show");
	forma.classList.remove("modal-error");
});


forma.addEventListener("submit", function (evt) {
	if (!fullName.value || !eMail.value || !text.value) {
	evt.preventDefault();
	forma.classList.add("modal-error");
} else {
	localStorage.setItem("fullName", fullName.value);	
}
});


window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (write.classList.contains("write-us--show")) {
			evt.preventDefault();
			write.classList.remove("write-us--show");
			forma.classList.remove("modal-error");
		}
	}
});


window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (bigMap.classList.contains("big-map--show")) {
			evt.preventDefault();
			bigMap.classList.remove("big-map--show");
		}
	}
});


