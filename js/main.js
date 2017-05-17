// http://codifyacademy.com/wk10/

$(document).ready(function (){
	
	// var strArray = ['hello', 'my', 'name', 'is', 'danube'];
	// for (var i = 0; i < strArray.length; i++) {
	// 	if(strArray[i] != null) {
	// 		console.log(strArray[i].length);
	// 	}
	// }

	// strArray = strArray.reverse();
	// for (var i = 0; i < strArray.length; i++) {
	// 	if(strArray[i] != null) {
	// 		console.log(strArray[i].length);
	// 	}
	// }

	// sort by default sorts alphabetically. if you try to sort numbers technically 100 will come before 3 because 1 < 3.
	// Need to add compareFunction which compares each value in the array to the next value
	// if it returns positive, stays in the same position, otherwise swaps
	var numArray = [100, 3, 50, 20, 40];
	numArray = numArray.sort(function(a,b){return a-b});
	console.log(numArray);

	numArray = numArray.sort(function(a,b){return b-a});
	console.log(numArray);

	var threeStr = ['okay', 'here\'s', 'three'];
	threeStr.push('words');
	threeStr.shift();
	console.log(threeStr);
});