import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import AWS from './assets/AWS_cert.png'
import Java1 from './assets/Java_Cert1.jpg'
import Java2 from './assets/Java_cert2.jpg'



class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {


    if(this.state.activeTab === 0){
      return(
        <div>
            <img src={AWS} alt="" width="1000"/>
           </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
            <img src={Java1} alt="" width="400" />
            <img src={Java2} alt="" />

           </div>

      )
    }
  }

  render() {
    return(
      <div className="About-me-BG">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>AWS cloud practitioner</Tab>
          <Tab>Java SE 11 Programmer</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }


}

  export default Certifications;
