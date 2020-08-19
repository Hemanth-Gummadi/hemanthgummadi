import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Grid, Cell } from 'react-mdl';
import logo from './Logo.png'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/downloads">Downloads</Link>
                <Link to="/certifications">Certifications</Link>

            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/downloads">Downloads</Link>
              <Link to="/certifications">Certifications</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>

    <Grid className="landing-grid">
      <Cell col={12}>
        <img
          src={logo}
          alt="avatar"
          className="avatar-img"
          />

        <div className="banner-text">
          <h1>Java Full Stack Developer</h1>

        <hr/>

      <p>Java(1.11) | Spring MVC/boot | Web services | Oracle sql | React Native | Devops | Maven | Gradle</p>

    <div className="social-links">

      {/* LinkedIn */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
      </a>

      {/* Freecodecamp */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-free-code-camp" aria-hidden="true" />
      </a>

      {/* Youtube */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-youtube-square" aria-hidden="true" />
      </a>

    </div>
        </div>
      </Cell>
    </Grid>


    </div>
);
  }
}

export default App;
