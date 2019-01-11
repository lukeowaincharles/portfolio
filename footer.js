var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "about", id: "about" },
                    React.createElement(
                        "h2",
                        { className: "title" },
                        "About"
                    ),
                    React.createElement(
                        "p",
                        { className: "text width-restrict__medium" },
                        "I'm a front-end developer, who has a keen eye for detail. I love building sites from designs making sure they are pixel perfect and seeing new creations grow as I learn new things along the journey."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "experience" },
                    React.createElement(
                        "h2",
                        { className: "title" },
                        "Experience"
                    ),
                    React.createElement(
                        "div",
                        { className: "experience_wrapper" },
                        React.createElement(
                            "div",
                            { className: "col-small" },
                            React.createElement(
                                "ul",
                                { className: "text" },
                                React.createElement(
                                    "li",
                                    null,
                                    "HTML5"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "SCSS"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "LESS"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-small" },
                            React.createElement(
                                "ul",
                                { className: "text" },
                                React.createElement(
                                    "li",
                                    null,
                                    "Wordpress"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Gulp"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "BEM"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-small" },
                            React.createElement(
                                "ul",
                                { className: "text" },
                                React.createElement(
                                    "li",
                                    null,
                                    "Sketch"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Adobe Creative Cloud"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Invision"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-small" },
                            React.createElement(
                                "ul",
                                { className: "text" },
                                React.createElement(
                                    "li",
                                    null,
                                    "Javascript/jQuery"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "PHP"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Magento"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "contact", id: "contact" },
                    React.createElement(
                        "h2",
                        { className: "title" },
                        "Contact"
                    ),
                    React.createElement(
                        "p",
                        { className: "text" },
                        "The best place for you to get in touch is through my email",
                        React.createElement("br", null),
                        React.createElement(
                            "a",
                            { href: "mailto:lukeowaincharles@gmail.com" },
                            "lukeowaincharles@gmail.com"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "social" },
                        React.createElement(
                            "a",
                            { target: "_blank", href: "https://github.com/lukeowaincharles" },
                            React.createElement("i", { className: "fab fa-github-square" })
                        ),
                        React.createElement(
                            "a",
                            { target: "_blank", href: "https://www.instagram.com/lzealot/" },
                            React.createElement("i", { className: "fab fa-instagram" })
                        ),
                        React.createElement(
                            "a",
                            { target: "_blank", href: "https://www.linkedin.com/in/luke-charles-01a58070/" },
                            React.createElement("i", { className: "fab fa-linkedin" })
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

;

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));