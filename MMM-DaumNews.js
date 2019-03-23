/* Magic Mirror
 * Module: Daum News
 *
 * By Sungje Kim 
 * 
 */

Module.register('MMM-DaumNews', {
    defaults: {
        text: "Hi"
    },
    start: function () {
        var self = this;
        setInterval(function () {
            self.updateDom(); // no speed defined, so it updates instantly.
        }, 1000); //perform every 1000 milliseconds.
    },

    getScripts: function () {
        return [
            '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
            'news_test.js'
        ];
    },

    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.id = "news";
        wrapper.innerHTML = this.config.text;
        getNews();
        console.log("There is no problem");
        Log.error('error');
        return wrapper;
    }
});