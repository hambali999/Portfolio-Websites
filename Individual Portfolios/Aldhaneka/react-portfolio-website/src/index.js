import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

const Nav = props => {
    return (
        <nav>
            <h2 class="logo">{props.name}</h2>
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    )
}
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="headerNavbar">
                <Nav name="< Aldhan />" />
            </header>
        )
    }
}

const Introduction = props => {
    return (
        <div className="introduction">
            <h1>Hello, I'm <span className="blue-text"> {props.name}</span>.</h1>
            <h1>A <span className="yellow-text">{props.jobs}</span> from <span className="red-text">{props.country}</span>.</h1>
            <p>
                {props.desc}
            </p>
        </div>
    )
}
Introduction.defaultProps = {
    name: "John Doe",
    jobs: "Font End Developer",
    country: "Mars"
}
// html for welcome page
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="header">
                <div className="container">
                    <Introduction country={this.props.country} name={this.props.name} jobs={this.props.jobs} desc="I'm Aldhan, and I'm a self taught programmer from Indonesia!" />
                    <a href="#">Contact</a>
                    <a href="#" className="white">Projects</a>
                </div>
            </section>
        )
    }
}
// html for about section
class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h4>Hello 👋</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa molestiae iure excepturi illum, sit consequatur. Quibusdam nihil excepturi voluptatem blanditiis optio et repellat voluptatum dolore? Facere accusamus iusto veritatis asperiores corporis aut ea provident aliquam, quod expedita repellat molestias eligendi vero nobis, aliquid quae sequi aperiam atque, velit tempora natus magnam impedit earum omnis? Deleniti autem debitis voluptates officia dolorum dolore mollitia corrupti soluta, repellat ut quibusdam, a ab!</p>

                    <div className="skills">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-sass"></i>
                        <i className="fab fa-git-alt"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
            </section>
        )
    }
}

// const ProjectCard = (props) => {
//     return (
//         <div className="card">
//             <div className="imageWrapper">
//                 <img src={props.src} alt="" />
//                 <div className="bg">
//                     <a href={props.link} className="View">See Demo</a>
//                 </div>
//             </div>
//             <h3 className="title"><a href="">{props.title}</a></h3>
//             <p className="tag">{props.tag}</p>
//         </div>
//     )
// }

// class Projects extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <section id="Projects">
//                 < ProjectCard src="https://res.cloudinary.com/daaj49exo/image/upload/v1603188528/my%20projects%20/Screen_Shot_2020-10-20_at_16.26.34_fbvvbw.png" title="Tribute page" tag="website" />
//                 < ProjectCard src="https://res.cloudinary.com/daaj49exo/image/upload/v1603188528/my%20projects%20/Screen_Shot_2020-10-20_at_16.26.34_fbvvbw.png" title="Tribute page" tag="website" />
//             </section>
//         )
//     }
// }
const SocialMediaOnFooter = props => {
    return (
        <div className="socialMedia">
            <a href=""><i class="fab fa-github"></i></a>
            <a href=""><i class="fab fa-dev"></i></a>
            <a href=""><i class="fab fa-free-code-camp"></i></a>
            <a href=""><i class="fab fa-hackerrank"></i></a>
        </div>
    )
}
const FooterTop = props => {
    return (
        <div className="top">
            <div className="contact">
                <h2>Interested in collaborating?</h2>
                <a href="">Get in touch</a>
            </div>
            <SocialMediaOnFooter />
        </div>
    )
}
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <FooterTop />
                <div className="bottom">
                    ©2020 by Aldhaneka
                </div>
            </footer>
        )
    }
}

class MainComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="rootChild">
                <Navbar />
                <main className="main">
                    <Header country="Indonesia" name="Aldhan" id="Home" link="https://codepen.io/aldhaneka/full/xxOVmmO" />
                    < About />
                    {/* <Projects /> */}
                    <Footer />
                </main>
            </div>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
