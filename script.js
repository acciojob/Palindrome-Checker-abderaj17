// complete the given function

function palindrome(str){
	let reversedStr = "";
	for(let i = str.length-1; i >= 0; i--){
      pallindrom = reversedStr + str[i];		
	}
	if(str.toLowerCase() === reversedStr.toLowerCase()){
		return true;
	}
	return false;
}
module.exports = palindrome
