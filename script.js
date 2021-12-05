"use strict";
window.onload = function () {
	var i;
	var boxes = [];
	var dims = [];
	var smallBoxes = [];
	var resizeDom = window.addEventListener("resize", function () {
		for (i = 0; i < 2; i++)
		{
			dims[i].innerHTML = i == 0 ? window.innerHeight : window.innerWidth;
		}
	});
	var bigBox = document.createElement("DIV");
	bigBox.className = "bigBox";
	document.body.insertBefore(bigBox, null);
	for (i = 0; i < 3; i++)
	{
		boxes[i] = document.createElement("DIV");
		boxes[i].className = "box";
		boxes[i].id = "box" + i;
		bigBox.insertBefore(boxes[i], null);
	}
	for (i = 0; i < 2; i++)
	{
		dims[i] = document.createElement("DIV");
		dims[i].className = "dimDisplay";
		boxes[0].insertBefore(dims[i], null);
		dims[i].innerHTML = i == 0 ? window.innerHeight : window.innerWidth;
	}
	for (i = 0; i < 4; i++)
	{
		smallBoxes[i] = document.createElement("DIV");
		smallBoxes[i].className = "smallBox";
		boxes[1].insertBefore(smallBoxes[i], null);
	}
}
