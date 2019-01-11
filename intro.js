var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Intro = function (_React$Component) {
    _inherits(Intro, _React$Component);

    function Intro() {
        _classCallCheck(this, Intro);

        return _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).apply(this, arguments));
    }

    _createClass(Intro, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "intro text-align__center section-margin" },
                React.createElement(
                    "h1",
                    null,
                    "Hello, I'm Luke. A Frontend-Developer,",
                    React.createElement("br", null),
                    "Photographer and Motorbike Rider."
                ),
                React.createElement(
                    "a",
                    { href: "#projects" },
                    React.createElement("i", { className: "fas fa-chevron-down" })
                )
            );
        }
    }]);

    return Intro;
}(React.Component);

;

ReactDOM.render(React.createElement(Intro, null), document.getElementById('intro'));