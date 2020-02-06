alva.Utils = function() {
	var clientSessionParameters = {};
	var sessionParameters;
	return {
		loadMasterPageWidgets: function(config) {
			var leftBar = new alva.common.LeftBar(config);
			var rightBar = new alva.common.RightBar(config);
			var header = new alva.common.Header(config);

			$(window).resize(function() {
				alva.Utils.resizeWidgets();
			});
		},
		resizeWidgets: function() {
			var headerHeight = $('#headerContainer').height();
			var leftBarWidth = $('#leftBar-wrapper').width();
			var rightBarWidth = $('#rightBar-wrapper').width();
			$("#page-content-wrapper").css("height", $(window).height() - headerHeight);
			$("#page-content-wrapper").css("width", $(window).width() - leftBarWidth - rightBarWidth);
			$("#page-content-wrapper").css("left", $('#leftBar-wrapper').position().left + leftBarWidth);
			$("#leftBar-wrapper").css("height", $(window).height() - headerHeight);			
			$("#rightBar-wrapper").css("height", $(window).height() - headerHeight);			
		},
		showSpinner: function(visible) {
			if (visible == true) {
				var spinner = new alva.common.Spinner({
					containerSelector: "#spinnerContainer"
				});
			} else {
				$("#spinnerContainer").empty();
			}
		},
		showConfirmPopup: function(config) {
			var alert = new alva.common.ConfirmPopup(config);
		},		
		/**
         Types of alerts -- "alert-error","alert-success","alert-info","alert-warning"
		 alertContainer -- empty div with this id - target place for alert notification
         **/
		showAlert: function(message, alertType, timeout) {
			var alert = new alva.common.Alert(message, alertType, timeout);
		},

		getApplicationData: function(key) {
			if (key === undefined) {
				return $.parseJSON(alva.Index.data);
			}
			return $.parseJSON(alva.Index.data)[key];
		},

		loadApplicationData: function(callback) {
//			$.ajax({
//				method: "GET",
//				url: "services/applicationData",
//				success: $.proxy(function(response) {
//					alva.Index.data = response;
//					alva.Utils.loadSessionParameters(function(){
//						callback();
//					});
//				}, this),
//				error: $.proxy(function(response) {
//					alva.Utils.showAlert("Couldn`t load the application properties. Try again", alva.Constants.ALERT_TYPE_ERROR);
//				}, this)
//			});

			callback();
		},

		/**
		 * Use Mustache to send parameters to view
		 */
		template: function(selector, data) {
			var template = $(selector).html();
			var html = Mustache.to_html(template, data);
			$(selector).html(html);
		},
		getMessage: function(key) {
			var lang = alva.Utils.getLanguage();
			if(lang.toUpperCase() == 'EN'){
				return alva.MessagesEn[key];
			}else if(lang.toUpperCase() == 'RO'){
				return alva.MessagesRo[key];
			}
		},
		getLanguage: function() {
//			var lang = alva.Utils.getSessionParameter(alva.Constants.SESSION_PARAMETER_LANGUAGE);
			var lang;
			var langParam = alva.Utils.getUrlParameter('lang');

			if(langParam){
				lang = langParam;
			}

			if(!lang){
				lang = 'en';
			}

			return lang.toUpperCase();
		},			
		getUrlParameter: function(name) {
		    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		    var results = regex.exec(location.search);
		    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		},	
		getDateWithoutTime: function(date) {
			var d = date;
		    d.setHours(0, 0, 0, 0, 0);
		    return d;		
		},
		sortArray: function(array, member, order) {
			array.sort(function(a, b) {
				// if they are equal, return 0 (no sorting)
				if (a[member] == b[member]) {
					return 0;
				} else if (a[member] > b[member]) {
					// if a should come after b, return 1
					return 1*order;
				} else {
					// if b should come after a, return -1
					return -1*order;
				}
			});
		},

		setClientSessionParameter: function(parameter, value) {
			clientSessionParameters[parameter] = value;
		},
		
		getClientSessionParameter: function(parameter) {
			if (clientSessionParameters[parameter] != undefined) {
				return clientSessionParameters[parameter];
			} else {
				return false;
			}
		},	
		saveSessionParameters: function(data, callback) {
		    $.ajax({
		        method: "POST",
		        url: "services/saveSessionParameters",
		        data: data,
		        success: function(response) {
		        	sessionParameters = JSON.parse(response);
		        	if(callback!=undefined){
		        		callback();
		        	}
		        },
		        error: function() {}
		    });			
		},

		loadSessionParameters: function(callback) {
			$.ajax({
				method: "POST",
				url: "services/loadSessionParameters",
				success: function(response) {
					sessionParameters = JSON.parse(response);
					if(callback!=undefined){
		        		callback();
		        	}					
				},
				error: function() {}
			});
		},

		getSessionParameters: function() {
			return sessionParameters;
		},

		getSessionParameter: function(parameterName) {
			if(parameterName!=undefined){
				for (index = 0 ; index < sessionParameters.length; index++) {
					if (sessionParameters[index].name == parameterName) {
						return sessionParameters[index].value;
					}
				}
			}
			return null;
		},			
		findObject: function(array, fields, value){
	    	return $.grep(array, function(obj, i){
	    		var flag = false;
				for (var index = 0; index < fields.length; index++) {
					var field = fields[index];
					var search = obj[''+field+''];
					if(search!=undefined && search instanceof Array){
						search = search[0];
					}
					if(search!=undefined && search.toLowerCase().indexOf(value.toLowerCase()) >= 0){
						flag = true;
						break;
					}
				}
    		  	return flag;
   			});
		},		
	};
}();