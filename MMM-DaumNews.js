/* Magic Mirror
 * Module: Daum News
 *
 * By Sungje Kim 
 * 
 */

Module.register('MMM-DaumNews', {
    defaults: {
        updateNewsInterval: 3 * 1000, // 3 secs 
        fadeSpeed: 4000,
        updateInterval: 5 * 1000, // 5 secs
        newsNum: 0
    },

    start: function () {
        this.sendSocketNotification("START", this.config);
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
        return [
            "font-awesome.css",
            "MMM-DaumNews.css"
        ];
    },

    getDom: function () {

        var wrapper = document.createElement("div");
        wrapper.id = "NEWS";
        var aTag = document.createElement("a");
        aTag.id = "aTAG";


        if (this.dataFile) {
            wrapper.innerHTML = "#" + this.config.newsNum + "  ";

            aTag.href = this.dataFile[this.config.newsNum].link;
            aTag.innerHTML = this.dataFile[this.config.newsNum].title + " - " + this.dataFile[this.config.newsNum].info_news;

            wrapper.appendChild(aTag);

        } else {
            wrapper.innerHTML = "No data";
        }
        if (this.config.newsNum >= 10) this.config.newsNum = 1;
        else this.config.newsNum += 1;

        return wrapper;
    }
});