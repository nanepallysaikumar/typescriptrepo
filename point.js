"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getPoint = function () {
        console.log("get the point coordinates", this.x, "", this.y);
    };
    Point.prototype.setPoint = function (point) {
        this.x = point.x;
        this.y = point.y;
    };
    return Point;
}());
exports.Point = Point;
