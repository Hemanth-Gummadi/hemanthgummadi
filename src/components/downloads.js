import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card,CardTitle, CardText, CardActions, Button} from 'react-mdl';
import PDF from './assets/PDF.png';
import WORD from './assets/WORD.png';
import AWS from './assets/C_AWS.png';
import ORACLE from './assets/oracle.png';
import FileSaver from 'file-saver';




class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }


   timeLeft(event) {
     if(event ==='pdfTime'){
       var dateUploaded =  new Date(Date.UTC(2020,8,29));
    }if(event ==='docTime'){
   dateUploaded =  new Date(Date.UTC(2020,8,29));
    }
 var dateNow = new Date();
 var seconds = Math.floor((dateNow - (dateUploaded))/1000);
 var minutes = Math.floor(seconds/60);
 var hours = Math.floor(minutes/60);
 var days = Math.floor(hours/24);
 hours = hours-(days*24);
 minutes = minutes-(days*24*60)-(hours*60);
 seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
                   return '      last Updated '+ days +'day(s), '+hours+'hrs ago.'
  }


  fileDownloader(event) {
    if(event.currentTarget.value==='PDF'){
        FileSaver.saveAs(
         process.env.PUBLIC_URL + "/resource/Resume_PDF.pdf",
         "Resume_Hemanth_Gummadi_8328625444_8886866633");
       }
    if(event.currentTarget.value==='doc'){
         FileSaver.saveAs(
         process.env.PUBLIC_URL + "/resource/Resume_doc.docx",
           "Resume_Hemanth_Gummadi_8328625444_8886866633"); }
    if(event.currentTarget.value==='AWS'){
      FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/AWS_cert.pdf",
        "Certificate_Hemanth_Gummadi_AWS_Cloud_Practitioner"); }
    if(event.currentTarget.value==='Java'){
      FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/Java_cert.pdf",
        "Certificate_Hemanth_Gummadi_Java_SE11_Programmer");
       }
  if(event.currentTarget.value==='Validate'){
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
             <button className='btn btn-primary' onClick={this.fileDownloader.bind(this)} value={'PDF'} colored >Download</button>

            <small className="text-muted" style={{opacity: '50%'}} >{this.timeLeft('pdfTime')}</small></CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url('+WORD+') center / cover'}} >.docx</CardTitle>
            <CardText>
                Please click on the below Download button to donwload my Resume in .docx format.
            </CardText>
            <CardActions border>
            <button className='btn btn-primary' onClick={this.fileDownloader.bind(this)} value={'doc'} colored >Download</button>
              <small className="text-muted" style={{opacity: '50%'}}>{this.timeLeft('docTime')}</small>

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
              Validation ID : BG635MHCH2Q41P9V
              </CardText>
              <CardActions center>
              <button className='btn btn-primary' onClick={this.fileDownloader.bind(this)} value={'AWS'} colored >Download</button>
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
              <button className='btn btn-primary' onClick={this.fileDownloader.bind(this)} value={'Java'} colored >Download</button>
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
