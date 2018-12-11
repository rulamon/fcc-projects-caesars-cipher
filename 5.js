function rot13(str) { // LBH QVQ VG!
	const decipher = L => {
		let code = L.charCodeAt() % 26 + 65
		return String.fromCharCode(code)
	}
return str.replace(/[A-Z]/g, L => decipher(L))
}

// Change the inputs below to test
console.log(rot13("LBH QVQ VG!"));