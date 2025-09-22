//your JS code here. If required.
let target  = document.getElementById('level');

let level = 0;
let current = target;

while (current) {
	level++;
	current = current.parentElement;
}

alert("the level of the element is: " + level);