/**
 * 途牛旅游APP 3.7.0 发布静态页
 * 
 * @author: zhouhai (zhouhai@tuniu.com)
 * @update: 2014-03-26 16:52:34
 */

var $ = function(str) {
    return document.getElementById(str);
};

var Share = function() {};

Share.prototype.init = function() {
    this.render();
    this.setLinks();
};

Share.prototype.setLinks = function() {
    var desc = "途牛旅游特惠版本来袭，爆款，0元购，是时候下手了！3.7.0版本新上线爆款和0元购功能，让您享受旅游超低价。名额有限，爆款开卖数分钟即被抢购一空，不要错过噢亲！m.tuniu.com/topic/app3.7.0.html  @途牛旅游网",
        url  = location.href;

    var params = 'title=' + encodeURIComponent(desc) + '&' + 'url=' + encodeURIComponent(url);

    $('wb').href = "http://service.weibo.com/share/share.php?" + params;
    $('twb').href = "http://share.v.t.qq.com/index.php?c=share&a=index&" + params;
};

Share.prototype.render = function() {
    var image = new Image();
    // if(navigator.userAgent.toLowerCase().match(/micromessenger/)) {
        image.src = "img/3.7.0/wechat.jpg";
        $('twb').style.bottom = "245px";
        $('wb').style.bottom = "245px";
        $('wb').style.left = "350px";
        $('twb').style.left = "435px";
        $('download').style.bottom = "380px";
        $('download').style.right = "65px";
        $('main').style.height = '3040px';
    // } else {
    //     image.src = "img/3.7.0/weibo.jpg";
    //     $('main').style.height = '3032px';
    // }
    $('bigImage').src = image.src;
};

/**
 * 微信中分享消息
 * @return {null}
 */
Share.prototype.shareMessage = function() {
    var dataForWeixin = {
        "appid": 'wx0660297a1ddb8071',
        "img_url": 'http://img2.tuniucdn.com/site/wap/img/others/3.7.0_114.png',
        "link": 'http://m.tuniu.com/topic/app3.7.0.html',
        "title": '途牛旅游特惠版本来袭，爆款，0元购，是时候下手了！',
        "desc": '3.7.0版本新上线爆款和0元购功能，让您享受旅游超低价。名额有限，爆款开卖数分钟即被抢购一空，不要错过噢亲！'
    };

    var onBridgeReady = function() {
        try {
            // 分享給好友
            WeixinJSBridge.on('menu:share:appmessage', function(argv) {
                WeixinJSBridge.invoke('sendAppMessage', dataForWeixin, function(res) {});
            });
            // 分享到朋友圈
            WeixinJSBridge.on('menu:share:timeline', function(argv) {
                WeixinJSBridge.invoke('shareTimeline', dataForWeixin, function(res) {});
            });
            // 分享到騰訊微博
            WeixinJSBridge.on('menu:share:weibo', function(argv) {
                WeixinJSBridge.invoke('shareWeibo', dataForWeixin, function(res) {});
            });
        } catch(e) {
            alert(e);
        }
    };

    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
};

(function() {
    var share = new Share();
    share.init();

    if(navigator.userAgent.toLowerCase().match(/micromessenger/)) {
        share.shareMessage();
    }

})();
