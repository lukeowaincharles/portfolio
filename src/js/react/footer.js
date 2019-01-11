
class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="about" id="about">
                    <h2 className="title">About</h2>
                    <p className="text width-restrict__medium">I'm a front-end developer, who has a keen eye for detail. I love building sites from designs making sure they are pixel perfect and seeing new creations grow as I learn new things along the journey.</p>
                </div>
                <div className="experience">
                    <h2 className="title">Experience</h2>
                    <div className="experience_wrapper">
                        <div className="col-small">
                            <ul className="text">
                                <li>HTML5</li>
                                <li>SCSS</li>
                                <li>LESS</li>
                            </ul>
                        </div>
                        <div className="col-small">
                            <ul className="text">
                                <li>Wordpress</li>
                                <li>Gulp</li>
                                <li>BEM</li>
                            </ul>
                        </div>
                        <div className="col-small">
                            <ul className="text">
                                <li>Sketch</li>
                                <li>Adobe Creative Cloud</li>
                                <li>Invision</li>
                            </ul>
                        </div>
                        <div className="col-small">
                            <ul className="text">
                                <li>Javascript/jQuery</li>
                                <li>PHP</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <h2 className="title">Contact</h2>
                    <p className="text">The best place for you to get in touch is through my email
                    <br /><a href="mailto:lukeowaincharles@gmail.com">lukeowaincharles@gmail.com</a></p>
                    <div className="social">
                        <a target="_blank" href="https://github.com/lukeowaincharles"><i className="fab fa-github-square"></i></a>
                        <a target="_blank" href="https://www.instagram.com/lzealot/"><i className="fab fa-instagram"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/luke-charles-01a58070/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);
