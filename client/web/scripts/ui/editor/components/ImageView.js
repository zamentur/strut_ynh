/*
@author Tantaman
*/
define(["./ComponentView"], function(ComponentView) {
  return ComponentView.extend({
    className: "component imageView",
    tagName: "div",
    initialize: function() {
      return ComponentView.prototype.initialize.apply(this, arguments);
    },
    render: function() {
      var $img;
      ComponentView.prototype.render.call(this);
      $img = $("<img src=" + (this.model.get('src')) + "></img>");
      $img.bind("dragstart", function(e) {
        e.preventDefault();
        return false;
      });
      this.$el.find(".content").append($img);
      this.$el.css({
        top: this.model.get("y"),
        left: this.model.get("x")
      });
      return this.$el;
    }
  });
});