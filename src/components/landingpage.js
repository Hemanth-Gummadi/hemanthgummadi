import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './assets/Logo.png';
import AWS from './assets/AWS.png';
import ORACLE from './assets/oracle.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
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
              <br></br>



          <p>Java(1.11) | Spring MVC/boot | Web services | Oracle sql | React Native | Devops | Maven | Gradle</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hemanth-gummadi-060bb3112/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

        <a href="https://aw.certmetrics.com/amazon/public/verification.aspx">
        <img
        src={AWS} alt=""
        style={{
           width: 80,
           height: 80,
           marginRight: 2
        }}
        />
        </a>


        <a href="https://education.oracle.com/java-se-11-programmer-i/pexam_1Z0-815">
        <img
        src={ORACLE} alt=""
        style={{
           width: 80,
           height: 80,
           marginRight: 2
        }}
        />
        </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
