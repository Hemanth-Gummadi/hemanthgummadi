import React, { Component,useState,useEffect  } from 'react';
import { Tabs, Tab,Grid,Cell,Card,CardTitle, CardText, CardActions,CardHeader,Button } from 'react-mdl';
import project_BG from './project.png';
import Modal from "react-bootstrap/Modal";



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, showModal: false};
}

onMenuItemClicked = () => {
   this.setState({showModal: !this.state.mobileOpen});
 }


 Example() {

 return (


     <Modal show={showModal}>
       <Modal.Header closeButton>
         <Modal.Title>Modal heading</Modal.Title>
       </Modal.Header>
       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary">
           Close
         </Button>
         <Button variant="primary">
           Save Changes
         </Button>
       </Modal.Footer>
     </Modal>

 );
}



  toggleCategories() {


    if(this.state.activeTab === 0){
      return(

        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

        <CardTitle style={{color: '#ffffff', height: '176px', background: 'url('+ project_BG+') center / cover'}} >.pdf</CardTitle>


          <CardText>
          Please click on the below Download button to donwload my Resume in PDF format.
          </CardText>
          <CardActions center>

           </CardActions>
        </Card>

        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

        <CardTitle style={{color: '#ffffff', height: '176px', background: 'url('+ project_BG+') center / cover'}} >.pdf</CardTitle>


          <CardText>
          Please click on the below Download button to donwload my Resume in PDF format.
          </CardText>
          <CardActions center>
            <Button onClick={this.setState({ showMe : true} )}  id='button'colored>Download</Button>
           </CardActions>
        </Card>



        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is VueJS</h1></div>
       )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }



  }

  handleSelect(index){
    this.setState({
      activeTab: index
    });
  }

  render() {
    return(
      <div className="About-me-BG">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>in Wipro(present)</Tab>
          <Tab>in Virtusa Polaris</Tab>
          <Tab>in TCS</Tab>
          <Tab>pERSONAL</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          <Modal
           open={this.state.showModal}
           /* pass callback to Sidebar */
           onMenuItemClicked={this.onMenuItemClicked}
        />

      </div>


    )
  }
}

export default Projects;
