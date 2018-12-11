function rot13(str) { // LBH QVQ VG!
	const decipher = (str) => {
		let code = str.charCodeAt(0);
		if (code >= 65 && code <= 90) {
			return code < 78 ? String.fromCharCode(code + 13) : String.fromCharCode(code - 13);
		} else {
			return str;
		}
	}
	let solution = "";
	for (let i = 0; i < str.length; i++) {
		solution += decipher(str[i])
	}
  return solution;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));