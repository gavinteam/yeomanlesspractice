/*!
 * Adapted from Bootstrap docs JavaScript
 */


!function ($) {

  $(function () {

    // IE10 viewport hack for Surface/desktop Windows 8 bug
    //
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }

    var $window = $(window)
    var $body   = $(document.body)

    //var navHeight = $('.navbar').outerHeight(true) + 10

    $body.scrollspy({
      target: '.sidebar'
      //offset: navHeight
    });

    $window.on('load', function () {
      $body.scrollspy('refresh')
    });

    $('.docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    // back to top
    setTimeout(function () {
      var $sideBar = $('.sidebar')

      // 这里有一个问题，如果把bottom用动态的方法生成，容易产生错误，不知道为什么。
      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          },
          bottom: 291
        }
      })
    }, 100);

/*    setTimeout(function () {
      $('.top').affix()
    }, 100);*/

  })

}(jQuery)
