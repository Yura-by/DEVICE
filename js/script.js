var openMap = document.querySelector(".location-map");
var bigMap = document.querySelector(".big-map");

openMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	bigMap.classList.add("big-map--show");
	});


var writeOpen = document.querySelector(".write-to-us");
var write = document.querySelector(".write-us");

writeOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	write.classList.add("write-us--show");
	
	if (storage) {
		fullName.value = storage;
		write-us-email.focus();
		} else {
			write-us-login.focus();
		}

});

var closeMap = document.querySelector(".location-map__close");
	closeMap.addEventListener("click", function (evt) {
		evt.preventDefault();
		bigMap.classList.remove("big-map--show");
	});

var closeWrite = document.querySelector(".write-us-form__close");
closeWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	write.classList.remove("write-us--show");
});

var fullName = document.querySelector(".write-us-login");
var eMail = document.querySelector(".write-us-email");
var text = document.querySelector(".write-us-text");

var forma = document.querySelector(".write-us-form");
forma.addEventListener("submit", function (evt) {
	if (!fullName.value || !eMail.value || !text.value) {
	evt.preventDefault();
} else {
	localStorage.setItem("fullName", fullName.value);
}
});

var storage = localStorage.getItem("fullName");

/*window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (write-us.classList.contains(write-us--show)) {
			evt.preventDefault();
			write-us.classList.remove(write-us--show);
		}
	}
});*/


