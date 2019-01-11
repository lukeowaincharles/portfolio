
class Nav extends React.Component {
    render() {
        return (
            <header className="section-margin">
                <nav>
                    <ul className="text-align__center">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
};

ReactDOM.render(
    <Nav />,
    document.getElementById('nav')
);