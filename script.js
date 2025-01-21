// complete the given function

function palindrome(str){
	let pallindrom = "";
	for(let i = str.length; i > 0; i--){
      pallindrom = palindrome + str[i];		
	}
	if(str.toLowerCase() === pallindrom.toLowerCase()){
		return true;
	}
	return false;
}
module.exports = palindrome
