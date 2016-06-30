var input = "bgvyzdsv";
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
	for (i = 0; i < 
}
md5Hash(input);