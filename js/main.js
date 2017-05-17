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