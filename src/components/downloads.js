import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card,CardTitle, CardText, CardActions, Button} from 'react-mdl';
import PDF from './PDF.png';
import WORD from './WORD.png';
import AWS from './C_AWS.png';
import ORACLE from './oracle.png';
import FileSaver from 'file-saver';




class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }



  fileDownloader(event) {
    if(event.currentTarget.value==='PDF'){
      FileSaver.saveAs(
    process.env.PUBLIC_URL + "/resource/Hemanth_Gummadi_8886866633_8328625444.pdf",
      "Hemanth_Gummadi_8886866633_8328625444.pdf");
       }if(event.currentTarget.value==='doc'){
   window.open('www.ggogle.com','_blank');
 }if(event.currentTarget.value==='AWS'){
   window.open('www.ggogle.com','_blank');
 }if(event.currentTarget.value==='Validate'){
   window.open('https://aw.certmetrics.com/amazon/public/verification.aspx','_blank');
 }
 }

  toggleCategories() {


    if(this.state.activeTab === 0){
      return(

        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#ffffff', height: '176px', background: 'url('+ PDF+') center / cover'}} >.pdf</CardTitle>


            <CardText>
            Please click on the below Download button to donwload my Resume in PDF format.
            </CardText>
            <CardActions center>
             <Button onClick={this.fileDownloader.bind(this)} value={'PDF'} colored>Download</Button>
            <small className="text-muted" style={{opacity: '50%'}}>last updated recently</small></CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+WORD+') center / cover'}} >.docx</CardTitle>
            <CardText>
                Please click on the below Download button to donwload my Resume in .docx format.
            </CardText>
            <CardActions border>
              <Button  onClick={this.fileDownloader.bind(this)} value={'doc'}  colored>Download</Button>
              <small className="text-muted" style={{opacity: '50%'}}>last updated recently</small>

            </CardActions>



          </Card>


        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (


          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url('+ AWS+') center / cover'}} >Cloud practitioner</CardTitle>


              <CardText>
              Please click on the below Download button to donwload my AWS certificate in jpeg format
              </CardText>
              <CardText>
              Validation ID : 12345678
              </CardText>
              <CardActions center>
              <Button onClick={this.fileDownloader.bind(this)} value={'AWS'} colored>Download</Button>
              <Button onClick={this.fileDownloader.bind(this)} value={'Validate'} colored>Validate</Button>
              </CardActions>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#000000', height: '176px', background: 'url('+ORACLE+') center / cover'}} ></CardTitle>
              <CardText>
                  Please click on the below Download button to donwload my Java SE11 certificate
              </CardText>
                <CardText>
                <hx><medium>Java SE 11 Programmer I | 1Z0-815</medium></hx>
              </CardText>
              <CardActions border>
                <Button  onClick={this.fileDownloader.bind(this)} value={'doc'}  colored>Download</Button>
              </CardActions>



            </Card>


          </div>      )
    }


  }

  render() {
    return(
      <div className="About-me-BG">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Resume</Tab>
          <Tab>Certifications</Tab>
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

  export default Downloads;
