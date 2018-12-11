function rot13(str) { // LBH QVQ VG!
	const decipher = (str) => {
		if (/[A-Z]/.test(str)) {
			let code = str.charCodeAt(0);
			if (code < 78) {
				code += 26;
			}
		return String.fromCharCode(code - 13);
		} else {
			return str;
		}
	}
  return str.split("").map(el => decipher(el)).join("")
  return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));