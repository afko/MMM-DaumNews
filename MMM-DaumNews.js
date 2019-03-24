/* Magic Mirror
 * Module: Daum News
 *
 * By Sungje Kim 
 * 
 */

Module.register('MMM-DaumNews', {
    defaults: {
        text: "Hi",
        updateInterval: 3000,
        fadeSpeed: 4000,
        updateInterval: 30 * 60 * 1000,
        newsNum: 1
    },

    start: function () {
        this.sendSocketNotification("START", this.config);

        setInterval(function () {
            self.updateDom(self.config.fadeSpeed);
            if (this.config.newsNum < 10) this.config.newsNum += 1;
            else this.config.newsNum = 1;
        }, this.config.updateInterval);
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "DATA") {
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

    getDom: function () {

        var wrapper = document.createElement("div");
        if (this.dataFile) {
            wrapper.innerHTML = "[" + this.config.newsNum + "] ";
            wrapper.innerHTML += this.dataFile[this.config.newsNum].title;
            wrapper.innerHTML += this.dataFile[this.config.newsNum].info_news;
        } else {
            wrapper.innerHTML = "No data";
        }
        return wrapper;
    }
});