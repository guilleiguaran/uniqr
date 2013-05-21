var draw_qrcode = function(text, typeNumber, errorCorrectLevel) {
	document.write(create_qrcode(text, typeNumber, errorCorrectLevel) );
};

var create_qrcode = function(text, typeNumber, errorCorrectLevel, table) {
	var qr = qrcode(typeNumber || 4, errorCorrectLevel || 'M');
	qr.addData(text);
	qr.make();

	return qr.createImgTag();
};

var update_qrcode = function() {
	$('.qr').each(function() {
		var text = $(this).text(); 
		$(this).html(create_qrcode(text));
	});
};

$(document).ready(function() {
	update_qrcode();
});