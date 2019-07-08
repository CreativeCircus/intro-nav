console.log(`Nav exercise!`)

// 0. Note: you will find countless ways to make a hamburger navigation work online.
// We're going to do it with vanilla JS, and CSS classes. 

// 1. make it so when the user clicks the hamburger menu icon, the navigation appears.
// The UL in there is already hidden (display: none). Use the classList property.
// You'll have to make another class in the CSS that represents the nav in its "open" state.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
document.querySelector(".hamburger").addEventListener('click', function() {
	console.log('click hamburger');
	document.querySelector("nav ul").classList.add("nav_open")
})

// 2. Using CSS, style the newly visible navigation to look nice.

// 3. Make it so that when you click the hamburger again, the nav closes (reverts back to normal).

// 4. Use similar logic to #1 to make the hamburger icon itself look different when its 
// clicked, and revert when its clicked again.