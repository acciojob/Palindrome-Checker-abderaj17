// complete the given function

function palindrome(str){
	let pallindrom = "";
	for(let i = 0 ; i<= str.length; i++){
		palindrome = palindrome + str[i];
	}
	if(str === palindrome){
		return true;
	}
	return false;

}
module.exports = palindrome
