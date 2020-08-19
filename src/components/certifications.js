import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import test from './13219.jpg'


class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {


    if(this.state.activeTab === 0){
      return(
        <div>
            <img src={test} alt="" />
           </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
            <img src={test} alt="" />
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
