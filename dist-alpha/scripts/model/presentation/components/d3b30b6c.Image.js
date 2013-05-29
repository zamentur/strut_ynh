
/*
@author Tantaman
*/


(function() {

  define(["./Component", "common/FileUtils"], function(Component, FileUtils) {
    return Component.extend({
      initialize: function() {
        var src;
        Component.prototype.initialize.apply(this, arguments);
        this.set("type", "ImageModel");
        src = this.get("src");
        this.set("imageType", FileUtils.imageType(src));
        this.on("change:src", this._updateCache, this);
        this.cachedImage = new Image();
        return this._updateCache();
      },
      _updateCache: function() {
        return this.cachedImage.src = this.get("src");
      },
      toBase64: function() {},
      constructor: function ImageModel() {
			Component.prototype.constructor.apply(this, arguments);
		}
    });
  });

}).call(this);