let doc = document;
let generateStr = doc.getElementById("generate");
let copyStrBtn = doc.getElementById('copyStr');
let genNewCodeStr = doc.getElementById('result');
let buttonState = doc.querySelector('#addSymb');
let buttonName = doc.querySelector(".check_text");


//Checking for a number of entering a string length
doc.getElementById('strLength').onkeydown = function (e) {
	return !(/^[А-ЯЁёа-яA-Za-z -!@#$%^&*('№"`~[-^)_+=;:{}\|/?><,-.]$/.test(e.key));
};

//random function
function strRnd() {
	let j = doc.getElementById('strLength').value,
		arr = [];
	for (let i = 0; i < j; i++) {
		let number = Math.floor(Math.random() * 10),
			character = String.fromCharCode(Math.floor(97 + Math.random() * 26)), //random letter. Code: 97-122
			characterUporDown = character.toUpperCase(),
			addSymbBtn = doc.getElementById('addSymb'),
			symbol;

		if (addSymbBtn.checked) {
			if (Math.random() < 0.14) {
				symbol = number;
			} else if (Math.random() >= 0.14 && Math.random() < 0.52) {
				symbol = characterUporDown;
			} else if (Math.random() >= 0.52 && Math.random() < 0.91) {
				symbol = character;
			} else {
				symbol = fn1();
			}
		} else {
			if (Math.random() < 0.16) {
				symbol = number;
			} else if (Math.random() >= 0.16 && Math.random() < 0.58) {
				symbol = characterUporDown;
			} else {
				symbol = character;
			}
		};
		arr.push(symbol);
	};
	return arr.join('');
};

//name of symbols button
buttonState.addEventListener('click', () => {
    if(buttonState.checked) {
        buttonName.textContent = "yes"
    } else {
        buttonName.textContent = "no"
    }
});

//appear copy string button
generateStr.addEventListener('click', function () {
    genNewCodeStr.innerHTML = strRnd();
    if(genNewCodeStr.textContent) {copyStrBtn.style.display = "block"};
});

//copy the string
copyStrBtn.addEventListener('click', function () {
	doc.getSelection().setBaseAndExtent(result, 0, result, result.childNodes.length);
	doc.execCommand('copy');
});

//symbols
function fn1() {
	let arrAddSymbols = [33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 61, 45, 63, 58, 59, 8470, 46, 44, 62, 124, 47, 93, 91, 123, 125];
	let ranAddSymb = arrAddSymbols[Math.floor(Math.random() * arrAddSymbols.length)];
	return String.fromCharCode(ranAddSymb);
};