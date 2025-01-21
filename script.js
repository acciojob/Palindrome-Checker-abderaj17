// complete the given function

function palindrome(str){
	let pallindrom = "";
	for(let i = str.length-1; i >= 0; i--){
      pallindrom = palindrom + str[i];		
	}
	if(str.toLowerCase() === pallindrom.toLowerCase()){
		return true;
	}
	return false;
}
module.exports = palindrome
