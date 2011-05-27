!function ($) {

  $.ender({
    color: function (val) {
      return this.forEach(function (el) {
        color(el, val)
      })
    }
  }, true)

}(ender);
