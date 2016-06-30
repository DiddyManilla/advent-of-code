var input = "bgvyzdsv";
function leftRotate(x, c) {
	return (x << c) | (x >> (32 - c));
}
function md5Hash(input) {
    var s = []
	var K = [];

    s = [ 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,  4, 11, 16, 23, 6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21 ];
	
    for (var i = 0; i < 64; i++) {
		K[i] = Math.floor(Math.pow(2, 32) * Math.abs(Math.sin(i + 1)));
	}
	
	var a0 = 0x67452301;  //A
	var b0 = 0xefcdab89;  //B
	var c0 = 0x98badcfe;  //C
	var d0 = 0x10325476;  //D
	input = input << 1;
	input |= 1;
	while ((input.length * 16) % 512 != 448) {
		input = input << 1;
	}
	
	var toAppend = (input.length * 16) % Math.pow(2, 64);
	input = input << toAppend.toString(2).length;
	input = input | toAppend;
	var b2Input = input.toString(2);
	for (i = 0; i < b2Input.length; i+= 512) {
		var chunk = b2Input.substring(b2Input.length - 512, b2Input.length);
		var A = a0;
		var B = b0;
		var C = c0;
		var D = d0;
		for (var j = 0; j < 64; j++) {
			var K;
			var g;
			if (j < 16) {
				F = (B & C) | ((~B) & D);
				g = j;
			} else if (j < 32) {
				F = (D & B) | ((~D) & C);
				g = (5 * j + 1) % 16;
			} else if (j < 48) {
				F = B ^ C ^ D;
				g = (3 * j + 5) % 16;
			} else {
				F = C ^ (B | (~D));
				g = (7 * j) % 16;
			}
			var dtemp = D;
			D = C;
			C = B;
			B = B + leftrotate((A + F + K[j] + M[g]), s[j]);
		}
		a0 += A;
		b0 += B;
		c0 += C;
		d0 += D;
	}
	var temp = a0 << b0.toString(2).length;
	temp = temp | b0;
	
	temp = temp << c0.toString(2).length;
	temp = temp | c0;
	
	temp = temp << d0.toString(2).length;
	temp = temp | d0;
	
	return temp;
}
console.log(md5Hash(input));