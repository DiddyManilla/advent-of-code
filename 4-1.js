var input = "bgvyzdsv";
function md5Hash(input) {
    var s, K = [];

    s = { 7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22, 5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20, 4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23, 6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21 };
console.log(s);

    for (var i = 0; i < 16; i++) {
        if (i % 4 == 0) {
	    s[i] = 7;
        } else if (i % 4 == 1) {
      	    s[i] = 12;
        } else if (i % 4 == 2) {
	    s[i] = 17;
        } else if (i % 4 == 3) {
	    s[i] = 22;
        }
    for (var i = 0; i < 16; i++) {
        if (i % 4 == 0) {
	    s[i] = 5;
        } else if (i % 4 == 1) {
	    s[i] = 9;
        } else if (i % 4 == 2) {
	    s[i] = 14;
        } else if (i % 4 == 3) {
	    s[i] = 20;
        }
    for (var i = 32; i < 48; i++) {
        if (i % 4 == 0) {
	    s[i] = 4;
        } else if (i % 4 == 1) {
	    s[i] = 11;
        } else if (i % 4 == 2) {
	    s[i] = 16;
        } else if (i % 4 == 3) {
	    s[i] = 23;
        }
    }
    for (var i = 48; i < 64; i++) {
        if (i % 4 == 0) {
	    s[i] = 6;
        } else if (i % 4 == 1) {
	    s[i] = 10;
        } else if (i % 4 == 2) {
	    s[i] = 15;
        } else if (i % 4 == 3) {
	    s[i] = 21;
        }
    }
    console.log(s);
}
md5Hash(input);