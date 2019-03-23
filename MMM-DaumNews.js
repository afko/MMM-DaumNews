/* Magic Mirror
 * Module: Daum News
 *
 * By Sungje Kim 
 * 
 */

module.register('MMM-DaumNews', {
    defaults: {
        text: "Hi"
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
        return wrapper;
    }
});