var numbers = [2, 4, 6, 8, 10];
showArray(numbers);

function showArray(arr) {
	var str = "<table><tr>";
	for (var i = 0; i < arr.length; i++) {
		str += "<td>" + arr[i] + "</td>";
	}
	str += "</tr></table>";
	document.write(str);

	addArray(arr);
}

function addArray(arr) {
	var str = "<table><tr>";
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		str += "<td>" + arr[i] + "</td>";
		sum += arr[i];
	}
	str += "<td>" + sum + "</td></tr></table>";
	document.write(str);
}


