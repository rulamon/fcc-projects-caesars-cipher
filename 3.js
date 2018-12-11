function rot13(str) { // LBH QVQ VG!
	const decipher = (val) => {
		let code = val.charCodeAt();
		if (code >= 65 && code <= 90) {
			let newCode = (code - 65 + 13) % 26 + 65;
			return String.fromCharCode(newCode);
		} else {
			return val;
		}
	}
	let solution = "";
	for (let i = 0; i < str.length; i++) {
		solution += decipher(str[i]);
	}
  return solution;
}

// Change the inputs below to test
console.log(rot13("LBH QVQ VG!"));