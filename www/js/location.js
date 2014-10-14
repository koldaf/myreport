// JavaScript Document
 // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);
    // Cordova is ready
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
		$('#geoLoc').html('<input type="hidden" name="geoLoc" value='+ locVar+'/>');
    }
    // onSuccess Geolocation
    function onSuccess(position) {
		var longtitude = position.coords.longitude;
		var latitude = position.coords.latitude;
		var latLong = new google.maps.LatLng(latitude, longitude);		
		var mapOptions = {
			center: latLong,
			Zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var locVar = {"mssg":"Success",
					  "val":mapOptions
					 }
		return locVar;
    }
    // onError Callback receives a PositionError object
    function onError(error) {
       errorCode = 'code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n';
			  var locVar = {"mssg":"Failed",
					  "val":errorCode
					 }
		return locVar
    }
