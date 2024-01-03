sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Quickstart.App", {
		onPress: function () {

			dweetio.get_latest_dweet_for("pedrothehoodesp8266", function (err, dweet) {

				var dweet = dweet[0]; // Dweet is always an array of 1
				try {
					console.log(dweet.thing); // The generated name
					console.log(dweet.content); // The content of the dweet
					console.log(dweet.created); // The create date of the dweet
					MessageToast.show("Temperatur: " + dweet.content.temperature + "C Feuchtigkeit: " + dweet.content.humidity + "%");

				} catch (error) {
					MessageToast.show("Keine Daten gefunden (Sensor hat mind. 24 Std. nicht gesendet)")
				}
			}
			);

			//	MessageToast.show("Temperatur: " + dweet.content.temperature + "C Feuchtigkeit: " +  dweet.content.humidity + "%");
		}
	});

});