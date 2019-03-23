/* Magic Mirror
 * Module: Daum News
 *
 * By Sungje Kim 
 * 
 */


module.register('MMM-DaumNews', {
    defaults: {
        // updateInterval: 60, // every 60 minutes
    },
    // start: function () {
    //     this.load();
    //     setInterval(
    //         this.load.bind(this),
    //         this.config.updateInterval * 60 * 1000);
    // },
    // load: function () {
    //     var jsonLocation = '/news.json';
    //     $.getJSON(jsonLocation, function (data) {
    //         $.each(data, function (I, item) {
    //             console.log(item.name);
    //         });
    //     });

      
    // },
    getScripts: function () {
        return [
            '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
            'news_test.js'
        ];
    },
    
    getDom: function(){
        var wrapper = document.createElement("div");
        wrapper.id = "news";
        wrapper.innerHTML="Hi!"

        return wrapper;
    }


});