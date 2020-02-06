/**
 * Created by itsix on 11/18/2016.
 */
alva.common.Alert = function(message, alertType, timeout) {
	this.init(message, alertType, timeout);
};

alva.common.Alert.prototype.init = function(message, alertType, timeout) {
	this.render(message, alertType, timeout);
	this.bind();
};

alva.common.Alert.prototype.render = function(message, alertType, timeout) {
	$("#alertContainer").load("views/common/alert.html", function() {
		var data = {
			alertType: alertType,
			message: message
		}
		alva.Utils.template('#alert', data);

		if (timeout === null || timeout === undefined) {
			timeout = 3000;
		}
		setTimeout(function() {
			$("#alert").remove();
		}, timeout);
	});

};

alva.common.Alert.prototype.bind = function() {
	// $("#inputEmail").on("click", $.proxy(function() {}, this));
};