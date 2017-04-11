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
                    reject(Error('Network Error'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBpLmpzIiwic3JjL2pzL21haW4uanMiLCJzcmMvanMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDQ1U7QUFDRixtQkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEI7QUFDekMsb0JBQUksVUFBVSxJQUFJLGNBQUosRUFBZDtBQUNBLHdCQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLGlCQUFwQjs7QUFFQSx3QkFBUSxNQUFSLEdBQWlCLFlBQU07QUFDbkI7QUFDQSx3QkFBSSxRQUFRLE1BQVIsS0FBbUIsR0FBdkIsRUFBNEI7QUFDeEI7QUFDQSxnQ0FBUSxLQUFLLEtBQUwsQ0FBVyxRQUFRLFFBQW5CLENBQVI7QUFDSCxxQkFIRCxNQUdPO0FBQ0g7QUFDQSwrQkFBTyxNQUFNLFFBQVEsVUFBZCxDQUFQO0FBQ0g7QUFDSixpQkFURDs7QUFXQSx3QkFBUSxPQUFSLEdBQWtCLFlBQU07QUFDcEI7QUFDQSwyQkFBTyxNQUFNLGVBQU4sQ0FBUDtBQUNILGlCQUhEOztBQUtBLHdCQUFRLElBQVI7QUFDSCxhQXJCTSxDQUFQO0FBc0JIOzs7Ozs7Ozs7OztBQ3hCTDs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU0sa0JBQVEsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQVIsQ0FBVjtBQUNBLElBQUksTUFBTSxtQkFBVjs7QUFFQSxJQUFJLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFKLEVBQXFDO0FBQUE7QUFDakMsWUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsWUFBSSxLQUFLLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBSixFQUFtQztBQUMvQjtBQUNBLGdCQUFJLEdBQUosR0FBVSxJQUFWLENBQWUsVUFBUyxRQUFULEVBQW1CO0FBQzlCO0FBQ0Esb0JBQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSw0QkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLE1BQTFCOztBQUVBLG9CQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQW5CO0FBQ0EsNkJBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixPQUEzQjtBQUNBLDZCQUFhLFNBQWIsR0FBeUIsU0FBUyxLQUFsQztBQUNBLDRCQUFZLFdBQVosQ0FBd0IsWUFBeEI7O0FBRUEsb0JBQUkscUJBQXFCLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLG1DQUFtQixTQUFuQixHQUErQixTQUFTLFdBQXhDO0FBQ0EsNEJBQVksV0FBWixDQUF3QixrQkFBeEI7O0FBRUEscUJBQUssV0FBTCxDQUFpQixXQUFqQjtBQUNILGFBZkQ7QUFnQkg7QUFwQmdDO0FBcUJwQzs7Ozs7Ozs7Ozs7Ozs7QUMxQkcsb0JBQVksT0FBWixFQUFxQjtBQUFBOztBQUNqQixZQUFJLE9BQU8sSUFBWDtBQUNBLGFBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUssT0FBTCxHQUFlLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxhQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFDLENBQUQsRUFBTztBQUMxQztBQUNBLGlCQUFLLE1BQUw7QUFDSCxTQUhEOztBQUtBLGFBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUMsQ0FBRCxFQUFPO0FBQzFDO0FBQ0EsaUJBQUssT0FBTCxDQUFhLEtBQWI7QUFDSCxTQUhEO0FBSUg7O0FBRUQ7Ozs7O2lDQUNTO0FBQ0wsZ0JBQUksT0FBTyxJQUFYO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixDQUFDLEtBQUssU0FBdkI7O0FBRUEsZ0JBQUksS0FBSyxTQUFULEVBQW9CO0FBQ2hCLHFCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0gsYUFGRCxNQUVPO0FBQ0g7QUFDQSwyQkFBVyxZQUFNO0FBQ2IseUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSDs7QUFFRDtBQUNBLGdCQUFJLFlBQVksU0FBaEI7QUFDQSxnQkFBSSxLQUFLLE9BQUwsQ0FBYSxTQUFqQixFQUE0QjtBQUN4QixxQkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixTQUE5QjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJLFVBQVUsS0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixLQUF2QixDQUE2QixHQUE3QixDQUFkO0FBQ0Esb0JBQUksZ0JBQWdCLFFBQVEsT0FBUixDQUFnQixTQUFoQixDQUFwQjs7QUFFQSxvQkFBSSxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsNEJBQVEsTUFBUixDQUFlLGFBQWYsRUFBOEIsQ0FBOUI7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsNEJBQVEsSUFBUixDQUFhLFNBQWI7QUFDSDs7QUFFRCxxQkFBSyxPQUFMLENBQWEsU0FBYixHQUF5QixRQUFRLElBQVIsQ0FBYSxHQUFiLENBQXpCO0FBQ0g7QUFDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCAnLi9hcGkvbW9jay5qc29uJyk7XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggdGhlIHBhcnNlZCByZXNwb25zZSB0ZXh0IChhc3N1bWVzIEpTT04pXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3IgcmV0cmlldmluZyBmaWxlXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXF1ZXN0LnN0YXR1c1RleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbmV0d29yayBlcnJvcnNcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoJ05ldHdvcmsgRXJyb3InKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IE5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgQXBpIGZyb20gJy4vYXBpJztcblxubGV0IG5hdiA9IG5ldyBOYXYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpKTtcbmxldCBhcGkgPSBuZXcgQXBpKCk7XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIGlmIChtYWluLmdldEF0dHJpYnV0ZSgnZGF0YS1nZXQnKSkge1xuICAgICAgICAvLyBzaW11bGF0ZSBhIGNhbGwgdG8gdGhlIEFQSVxuICAgICAgICBhcGkuZ2V0KCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBlbGVtZW50IGFuZCB1cGRhdGUgdGhlIFVJXG4gICAgICAgICAgICBsZXQgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlLnRpdGxlO1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSByZXNwb25zZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHNlbGYub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgIHNlbGYuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgc2VsZi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgb3ZlcmxheSBvbiBjbGljayBvZiB0aGUgYnVyZ2VyIGljb25cbiAgICAgICAgICAgIHNlbGYudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBzaW11bGF0ZSBhIGNsaWNrIHRvIGhpZGUgdGhlIG92ZXJsYXlcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0b2dnbGUgdGhlIG92ZXJsYXkgYW5kIHRoZSBzdGF0ZSBvZiB0aGUgbmF2aWdhdGlvblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmlzVmlzaWJsZSA9ICFzZWxmLmlzVmlzaWJsZTtcblxuICAgICAgICBpZiAoc2VsZi5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHNlbGYub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlbGF5IGhpZGluZyB0aGUgZWxlbWVudCB0byBzaG93IGFuaW1hdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3MgJ3Zpc2libGUnXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAndmlzaWJsZSc7XG4gICAgICAgIGlmIChzZWxmLm92ZXJsYXkuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICBzZWxmLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsYXNzZXMgPSBzZWxmLm92ZXJsYXkuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdJbmRleCA9IGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLm92ZXJsYXkuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

//# sourceMappingURL=script.js.map
