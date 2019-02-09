

function Projects(props) {
    var projectContent = props.posts.map(function (post) {
        return React.createElement(
            "div",
            { className: post.classes, key: post.id },
            React.createElement(
                "div",
                { className: "col-4 section-margin" },
                React.createElement(
                    "h2",
                    { className: "title" },
                    post.title
                ),
                React.createElement(
                    "p",
                    { className: "text" },
                    post.text
                ),
                React.createElement(
                    "div",
                    { className: "device-icons_wrapper" },
                    React.createElement("img", { className: "device-icons device-icons_desktop", src: "dist/assets/img/icons/desktop_icon.svg", alt: "desktop icon" }),
                    React.createElement(
                        "div",
                        { className: "device-icons_grouped", id: "devicesGrouped" },
                        React.createElement("img", { className: "device-icons device-icons_ipad", src: "dist/assets/img/icons/ipad_icon.svg", alt: "ipad icon" }),
                        React.createElement("img", { className: "device-icons device-icons_mobile", src: "dist/assets/img/icons/mobile_icon.svg", alt: "mobile icon" })
                    )
                ),
                React.createElement(
                    "a",
                    { className: "web-link", href: post.href, target: "_blank" },
                    "View live site",
                    React.createElement("div", { className: "arrow_right" })
                )
            ),
            React.createElement(
                "div",
                { className: "col-6 section-margin_sides" },
                React.createElement(
                    "div",
                    { className: "project-image_wrapper" },
                    React.createElement("div", { className: "project-image_background default" }),
                    React.createElement("div", { className: "project-image_background device-image" })
                )
            )
        );
    });
    return React.createElement(
        "div",
        null,
        projectContent
    );
}
var br = React.createElement("br", null);
var posts = [{
    id: 1, classes: 'projects_wrapper macallan', title: 'The Macallan', text: 'The Masters of Photography was a really great project for me, it included one of my passions Photography and I also like the odd whisky on occasion.' + br + ' This project taught me a few new things too: better naming conventions for classes(BEM), building initial layouts using Handlebars and re- using components which sped up the build.This project also taught me to make sure my code and comments were at a high standard due to commiting changes to the clients repository.', href: 'https://bit.ly/2PB9ik0'
}, {
    id: 2, classes: 'projects_wrapper mulberry', title: 'Mulberry Japan', text: 'Mulberry Japan was an interesting project, there were a lot of people involved and rather a large time difference to think about. But even with a large team, language barriers and time differences there was good communication and logical thinking which pushed this project on. I mainly worked on the CSS for this project, making sure the quality of the site was true to the quality of Mulberry as a brand. (Sadly I didn\'t learn any Japanese).', href: 'https://jp.mulberry.com/'
}, {
    id: 3, classes: 'projects_wrapper forage-notes', title: 'Forage Notes', text: 'Forage Notes is a personal project which is a collaboration with a digital designer. Working on this project has allowed me to research and begin to learn different technologies and languages that I may not normally use, such as Craft Cms, Twig, composer (to install Craft) and this project also helped me learn how to set up a gulpfile from scratch too. While we finalise parts of the design you can view the holding page to find out more about Forage Notes.', href: 'https://foragenotes.com/'
}, {
    id: 4, classes: 'projects_wrapper run', title: 'Run Digital', text: 'Run Digital tasked me with designing and developing their portfolio website. The aim was to create a single page site that felt sleek, modern and full of rich content. This was an early project for me, it introduced me to PHP, HTML5 and CSS3.The part of this project I enjoyed most was building my design and seeing how adding certain interactions in CSS gave the project life. Using Wordpress meant that they would be able to keep the site fresh with new current projects.The gold and grey colours offer a level of sophistication to go alongside the rest of the sites styling.', href: 'https://rundigital.co.uk/'
}, {
    id: 5, classes: 'projects_wrapper citrus', title: 'Citrus Enterprise', text: 'Citrus Enterprise is a hands-on business coaching company that looks to grow their clients businesses long term. With their different approach to business growth, Citrus Enterprise required a website that stood out from the rest of the industry competition. I designed this website using Sketch and the build uses Wordpress as a CMS so that the client is able to keep the site up to date.The client and I had worked together on a previous corporate project which was quite rigid to this field but meant that we already had a good rapport.It wasn\'t until we worked on this project that I understood how important it was to have clear communication.', href: 'https://citrusenterprise.com/'
}];

ReactDOM.render(React.createElement(Projects, { posts: posts }), document.getElementById('projects'));