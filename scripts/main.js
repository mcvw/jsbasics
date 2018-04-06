var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pac-man-logo.png') {
		myImage.setAttribute ('src','images/pac-man.png');
    } else {
		myImage.setAttribute ('src','images/pac-man-logo.png');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Pac-Man is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Pac-Man is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}