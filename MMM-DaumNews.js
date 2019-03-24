/* Magic Mirror
 * Module: Daum News
 *
 * By Sungje Kim 
 * 
 */

Module.register('MMM-DaumNews', {
    defaults: {
        text: "Hi",
        updateInterval: 30 * 60 * 1000
    },

    start: function(){
		this.sendSocketNotification("START", this.config);
    },

    socketNotificationReceived: function(notification, payload) {
		if(notification === "DATA"){
			this.dataFile = payload;
			this.updateDom();
		}
	},

    getScripts: function () {
        return [
            '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
        ];
    },
    getStyles: function () {
        return ["font-awesome.css"];
    },

    getDom: function(){
		var wrapper = document.createElement("div");
		if(this.dataFile){
			wrapper.innerHTML = this.dataFile;
		} else {
			wrapper.innerHTML = "No data";
		}
		return wrapper;
	}
});