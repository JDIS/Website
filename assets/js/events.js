// Hide all past events.
document.querySelectorAll(".event").forEach(
	(value, key, number, parent) => {
		if(value.dataset.timestamp < Date.now()) {
			value.style.display = "none"
		}
	}
)