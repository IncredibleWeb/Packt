(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'get',
        value: function get() {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('GET', './api/mock.json');

                request.onload = function () {
                    // success
                    if (request.status === 200) {
                        // resolve the promise with the parsed response text (assumes JSON)
                        resolve(JSON.parse(request.response));
                    } else {
                        // error retrieving file
                        reject(Error(request.statusText));
                    }
                };

                request.onerror = function () {
                    // network errors
                    reject(Error("Network Error"));
                };

                request.send();
            });
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],2:[function(require,module,exports){
'use strict';

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = new _nav2.default(document.getElementById('hamburger'));
var api = new _api2.default();

if (document.getElementById('main')) {
    (function () {
        var main = document.getElementById('main');
        if (main.getAttribute('data-get')) {
            // simulate a call to the API
            api.get().then(function (response) {
                // create the element and update the UI
                var itemElement = document.createElement('div');
                itemElement.classList.add('item');

                var titleElement = document.createElement('span');
                titleElement.classList.add('title');
                titleElement.innerHTML = response.title;
                itemElement.appendChild(titleElement);

                var descriptionElement = document.createElement('p');
                descriptionElement.innerHTML = response.description;
                itemElement.appendChild(descriptionElement);

                main.appendChild(itemElement);
            });
        }
    })();
}

},{"./api":1,"./nav":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(element) {
        _classCallCheck(this, _class);

        var self = this;
        self.isVisible = false;
        self.overlay = document.getElementById('overlay');
        self.element = element;

        self.element.addEventListener('click', function (e) {
            // toggle the overlay on click of the burger icon
            self.toggle();
        });

        self.overlay.addEventListener('click', function (e) {
            // simulate a click to hide the overlay
            self.element.click();
        });
    }

    // toggle the overlay and the state of the navigation


    _createClass(_class, [{
        key: 'toggle',
        value: function toggle() {
            var self = this;
            self.isVisible = !self.isVisible;

            if (self.isVisible) {
                self.overlay.classList.remove('hidden');
            } else {
                // delay hiding the element to show animation
                setTimeout(function () {
                    self.overlay.classList.add('hidden');
                }, 300);
            }

            // toggle the class 'visible'
            var className = 'visible';
            if (self.overlay.classList) {
                self.overlay.classList.toggle(className);
            } else {
                var classes = self.overlay.className.split(' ');
                var existingIndex = classes.indexOf(className);

                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                } else {
                    classes.push(className);
                }

                self.overlay.className = classes.join(' ');
            }
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBpLmpzIiwic3JjL2pzL21haW4uanMiLCJzcmMvanMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDQ1U7QUFDRixtQkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEI7QUFDekMsb0JBQUksVUFBVSxJQUFJLGNBQUosRUFBZDtBQUNBLHdCQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLGlCQUFwQjs7QUFFQSx3QkFBUSxNQUFSLEdBQWlCLFlBQU07QUFDbkI7QUFDQSx3QkFBSSxRQUFRLE1BQVIsS0FBbUIsR0FBdkIsRUFBNEI7QUFDeEI7QUFDQSxnQ0FBUSxLQUFLLEtBQUwsQ0FBVyxRQUFRLFFBQW5CLENBQVI7QUFDSCxxQkFIRCxNQUdPO0FBQ0g7QUFDQSwrQkFBTyxNQUFNLFFBQVEsVUFBZCxDQUFQO0FBQ0g7QUFDSixpQkFURDs7QUFXQSx3QkFBUSxPQUFSLEdBQWtCLFlBQU07QUFDcEI7QUFDQSwyQkFBTyxNQUFNLGVBQU4sQ0FBUDtBQUNILGlCQUhEOztBQUtBLHdCQUFRLElBQVI7QUFDSCxhQXJCTSxDQUFQO0FBc0JIOzs7Ozs7Ozs7OztBQ3hCTDs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU0sa0JBQVEsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQVIsQ0FBVjtBQUNBLElBQUksTUFBTSxtQkFBVjs7QUFFQSxJQUFJLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFKLEVBQXFDO0FBQUE7QUFDakMsWUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsWUFBSSxLQUFLLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBSixFQUFtQztBQUMvQjtBQUNBLGdCQUFJLEdBQUosR0FBVSxJQUFWLENBQWUsVUFBUyxRQUFULEVBQW1CO0FBQzlCO0FBQ0Esb0JBQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSw0QkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLE1BQTFCOztBQUVBLG9CQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQW5CO0FBQ0EsNkJBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixPQUEzQjtBQUNBLDZCQUFhLFNBQWIsR0FBeUIsU0FBUyxLQUFsQztBQUNBLDRCQUFZLFdBQVosQ0FBd0IsWUFBeEI7O0FBRUEsb0JBQUkscUJBQXFCLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLG1DQUFtQixTQUFuQixHQUErQixTQUFTLFdBQXhDO0FBQ0EsNEJBQVksV0FBWixDQUF3QixrQkFBeEI7O0FBRUEscUJBQUssV0FBTCxDQUFpQixXQUFqQjtBQUNILGFBZkQ7QUFnQkg7QUFwQmdDO0FBcUJwQzs7Ozs7Ozs7Ozs7Ozs7QUMxQkcsb0JBQVksT0FBWixFQUFxQjtBQUFBOztBQUNqQixZQUFJLE9BQU8sSUFBWDtBQUNBLGFBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUssT0FBTCxHQUFlLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxhQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFDLENBQUQsRUFBTztBQUMxQztBQUNBLGlCQUFLLE1BQUw7QUFDSCxTQUhEOztBQUtBLGFBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUMsQ0FBRCxFQUFPO0FBQzFDO0FBQ0EsaUJBQUssT0FBTCxDQUFhLEtBQWI7QUFDSCxTQUhEO0FBSUg7O0FBRUQ7Ozs7O2lDQUNTO0FBQ0wsZ0JBQUksT0FBTyxJQUFYO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixDQUFDLEtBQUssU0FBdkI7O0FBRUEsZ0JBQUksS0FBSyxTQUFULEVBQW9CO0FBQ2hCLHFCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0gsYUFGRCxNQUVPO0FBQ0g7QUFDQSwyQkFBVyxZQUFNO0FBQ2IseUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSDs7QUFFRDtBQUNBLGdCQUFJLFlBQVksU0FBaEI7QUFDQSxnQkFBSSxLQUFLLE9BQUwsQ0FBYSxTQUFqQixFQUE0QjtBQUN4QixxQkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixTQUE5QjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJLFVBQVUsS0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixLQUF2QixDQUE2QixHQUE3QixDQUFkO0FBQ0Esb0JBQUksZ0JBQWdCLFFBQVEsT0FBUixDQUFnQixTQUFoQixDQUFwQjs7QUFFQSxvQkFBSSxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsNEJBQVEsTUFBUixDQUFlLGFBQWYsRUFBOEIsQ0FBOUI7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsNEJBQVEsSUFBUixDQUFhLFNBQWI7QUFDSDs7QUFFRCxxQkFBSyxPQUFMLENBQWEsU0FBYixHQUF5QixRQUFRLElBQVIsQ0FBYSxHQUFiLENBQXpCO0FBQ0g7QUFDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCAnLi9hcGkvbW9jay5qc29uJyk7XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggdGhlIHBhcnNlZCByZXNwb25zZSB0ZXh0IChhc3N1bWVzIEpTT04pXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3IgcmV0cmlldmluZyBmaWxlXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXF1ZXN0LnN0YXR1c1RleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbmV0d29yayBlcnJvcnNcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBBcGkgZnJvbSAnLi9hcGknO1xuXG5sZXQgbmF2ID0gbmV3IE5hdihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJykpO1xubGV0IGFwaSA9IG5ldyBBcGkoKTtcblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgaWYgKG1haW4uZ2V0QXR0cmlidXRlKCdkYXRhLWdldCcpKSB7XG4gICAgICAgIC8vIHNpbXVsYXRlIGEgY2FsbCB0byB0aGUgQVBJXG4gICAgICAgIGFwaS5nZXQoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGVsZW1lbnQgYW5kIHVwZGF0ZSB0aGUgVUlcbiAgICAgICAgICAgIGxldCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gcmVzcG9uc2UudGl0bGU7XG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBzZWxmLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBvdmVybGF5IG9uIGNsaWNrIG9mIHRoZSBidXJnZXIgaWNvblxuICAgICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHNpbXVsYXRlIGEgY2xpY2sgdG8gaGlkZSB0aGUgb3ZlcmxheVxuICAgICAgICAgICAgc2VsZi5lbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHRvZ2dsZSB0aGUgb3ZlcmxheSBhbmQgdGhlIHN0YXRlIG9mIHRoZSBuYXZpZ2F0aW9uXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXNWaXNpYmxlID0gIXNlbGYuaXNWaXNpYmxlO1xuXG4gICAgICAgIGlmIChzZWxmLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgc2VsZi5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVsYXkgaGlkaW5nIHRoZSBlbGVtZW50IHRvIHNob3cgYW5pbWF0aW9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9nZ2xlIHRoZSBjbGFzcyAndmlzaWJsZSdcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICd2aXNpYmxlJztcbiAgICAgICAgaWYgKHNlbGYub3ZlcmxheS5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIHNlbGYub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IHNlbGYub3ZlcmxheS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0luZGV4ID0gY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZ0luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYub3ZlcmxheS5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

//# sourceMappingURL=script.js.map
