function showMobileContent() {
	document.getElementById("dropdown-mobile").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches(".mobile-navigation__dropdown")) {
		let dropdowns = document.getElementsByClassName("mobile-content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};
