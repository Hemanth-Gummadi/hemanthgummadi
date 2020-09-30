import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import project_BG from './assets/project.png';
import {Modal}  from 'react-bootstrap'
import CardHeader from '@material-ui/core/CardHeader';





class Projects extends Component {

   constructor(props) {
    super(props);
    this.state = { activeTab: 0,
                   showMvnMgr: false,
                   showSD: false,
                   showPCM: false,
                   showTO: false,
                   showDMP: false,
                   showMopar: false,
                   showBDMT: false,
                   mvnmgrActiveTab: 0,
                   SDActiveTab: 0,
                   pcmActiveTab: 0,
                   TOactiveTab: 0,
                   DMPactiveTab: 0,
                   MoparActiveTab: 0,
                   BDMTactiveTab: 0
                };
    }

  handleModalMvnMgr(){
    this.setState({showMvnMgr: !this.state.showMvnMgr});
  }

  handleModalSD(){
    this.setState({showSD: !this.state.showSD});
  }

  handleModalPCM(){
    this.setState({showPCM: !this.state.showPCM});
  }

  handleModalTO(){
    this.setState({showTO: !this.state.showTO});
  }

  handleModalDMP(){
    this.setState({showDMP: !this.state.showDMP});
  }
  handleModalMopar(){
    this.setState({showMopar: !this.state.showMopar});
  }
  handleModalBDMT(){
    this.setState({showBDMT: !this.state.showBDMT});
  }

  Capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1);
}


toggleCategoriesDMP(){
  if(this.state.DMPactiveTab === 0){
    return(
      <table class="table table-borderless">

              <tbody>
                <tr >
                  <th scope="row"></th>
                  <td><strong>Customer : </strong></td>
                  <td>Bank of America.</td>
                </tr>
                <tr >
                  <th scope="row"></th>
                  <td ><strong>Organization : </strong></td>
                  <td>Tata Consultancy Services</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td><strong>Domain : </strong></td>
                  <td >Banking and Financial Services</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td><strong>Duration : </strong></td>
                  <td>Apr'2015 -Sep'2017</td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td><strong>Methodology : </strong></td>
                  <td>Agile</td>
                </tr>
              </tbody>
            </table>

         )}else   if(this.state.DMPactiveTab === 1){
      return(
        <ul>

        <li> DATA MANAGEMENT PORTAL is an application which deals with individual information of all the people, parties, companies that were affiliated to Bank of America. </li>
        <li> 	The application is developed in a web Portal architectural style where each tab in the page is segregated into each web portal project and all the each projects will be referred to a single war file.</li>

        </ul>      )
    }else   if(this.state.DMPactiveTab === 2){
      return(
        <ul>

        <li> Responsible for developing required enhancements in Data Management portal. </li>
        <li> 	Consuming Soap and Rest web services using spring mvc Framework.</li>
        <li>Validating Requirement & Functional specifications and performing unit testing.</li>

        </ul>         )
    }else   if(this.state.DMPactiveTab === 3){
      return(
        <div>
        <details >
           <summary>
               Java
           </summary>
            <p>Version: 1.7</p>
        </details>
        <details >
           <summary>
               spring mvc
           </summary>
            <p>Version: 3.0</p>
        </details>
        <details >
           <summary>
              web services
           </summary>
            <p>Soap and Rest</p>
        </details>
        <details >
           <summary>
              Sql
           </summary>
            <p>Oracle plsql</p>
        </details>
        <details >
           <summary>
              Portlets
           </summary>
            <p>web logic portals, portlets</p>
        </details>
        <details >
           <summary>
              Front end
           </summary>
            <p>jsp, JavaScript, jQuery, Ajax</p>
        </details>
      </div>
          )
    }
  }

  toggleCategoriesMopar(){
    if(this.state.MoparActiveTab === 0){
      return(
        <table class="table table-borderless">

                <tbody>
                  <tr >
                    <th scope="row"></th>
                    <td><strong>Customer : </strong></td>
                    <td>FCA us llc.</td>
                  </tr>
                  <tr >
                    <th scope="row"></th>
                    <td ><strong>Organization : </strong></td>
                    <td>Tata Consultancy Services</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td><strong>Domain : </strong></td>
                    <td >Manufacturing</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td><strong>Duration : </strong></td>
                    <td>Nov'2014-Apr’2015</td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td><strong>Methodology : </strong></td>
                    <td>Waterfall</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td><strong>Reference : </strong></td>
                    <td><p><a href="https://www.mopar.com/en-us.html" target="_blank"  rel="noopener noreferrer">Mopar website</a></p>
</td>
                  </tr>
                </tbody>
              </table>
                  )}else   if(this.state.MoparActiveTab === 1){
        return(
<ul>
<li>Business to Customer Application deals with various Marketing applications required for the Chrysler. </li>
<li>Includes many such applications named user Login and registration (LNR), Dealer locator, Vehicle order tracking system (VOTS).</li>


</ul>        )
      }else   if(this.state.MoparActiveTab === 2){
        return(
<ul>
<li>Responsible for developing web services that all the brands affiliated with Chrysler will consume. </li>
<li>Responsible to develop Front end pages for Mopar Canada website.</li>
<li>Validating Requirement & Functional specifications and performing functional Testing.</li>

</ul>

        )
      }else   if(this.state.MoparActiveTab === 3){
        return(
          <div>
          <details >
             <summary>
                 Java
             </summary>
              <p>Version: 1.7</p>
          </details>
          <details >
             <summary>
                 Web services
             </summary>
              <p>Soap and rest</p>
          </details>
          <details >
             <summary>
                 Database
             </summary>
              <p>DB2</p>
          </details>
          <details >
             <summary>
                 Frontend
             </summary>
              <p>jsp, JavaScript, jQuery, Ajax, AEM</p>
          </details>
        </div>

              )
      }
    }

    toggleCategoriesBDMT(){
      if(this.state.BDMTactiveTab === 0){
        return(
          <table class="table table-borderless">

                  <tbody>
                    <tr >
                      <th scope="row"></th>
                      <td><strong>Customer : </strong></td>
                      <td>Baxter Healthcare Corporation</td>
                    </tr>
                    <tr >
                      <th scope="row"></th>
                      <td ><strong>Organization : </strong></td>
                      <td>Tata Consultancy Services</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td><strong>Domain : </strong></td>
                      <td >Health Care</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td><strong>Duration : </strong></td>
                      <td>Jan'2014 - Nov'2014</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><strong>Methodology : </strong></td>
                      <td>Kanban</td>
                    </tr>
                  </tbody>
                </table>

        )}else   if(this.state.BDMTactiveTab === 1){
          return(
<ul>
<li>Bulk Data Migration tool is an automate tool developed using java,swing & awt  toolkits  to migrate the existing BPLM legacy data to Team center</li>
</ul>          )
        }else   if(this.state.BDMTactiveTab === 2){
          return(
<ul>
<li>Responsible for developing an automated data migration tool using core java, multithreading, swt, awt that can automate the ETL process.</li>
</ul>          )
        }else   if(this.state.BDMTactiveTab === 3){
          return(
            <div>
            <details >
               <summary>
                   Java
               </summary>
                <p>Version: 1.7</p>
            </details>
            <details >
               <summary>
                   Database
               </summary>
                <p>Oracle plsql</p>
            </details>
            <details >
               <summary>
                   Front end
               </summary>
                <p>Swing, awt, swt</p>
            </details>
          </div>          )
        }
      }



toggleCategoriesPCM(){
  if(this.state.pcmActiveTab === 0){
    return(
      <table class="table table-borderless">

              <tbody>
                <tr >
                  <th scope="row"></th>
                  <td><strong>Customer : </strong></td>
                  <td>Lloyds banking group</td>
                </tr>
                <tr >
                  <th scope="row"></th>
                  <td ><strong>Organization : </strong></td>
                  <td>Virtusa Polaris consulting pvt ltd</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td><strong>Domain : </strong></td>
                  <td >Banking and Financial Services</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td><strong>Duration : </strong></td>
                  <td>Jun ’2018 - Aug'2019</td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td><strong>Methodology : </strong></td>
                  <td>Agile</td>
                </tr>
              </tbody>
            </table>
              )
  }  if(this.state.pcmActiveTab === 1){
      return(
        <ul>

      <li> PCM (Payments control manager) is an application which validates and transforms the swift or xml messages from different source systems, and route them to downstream systems based on the routing rules defined.</li>
      <li> 	It supports different message types like MT 1xx, MT2xx, MT3xx, MT540, MT541 AND MT9xx, etc., on different networks like Swift, CHAPS, SIS and SDEP</li>

        </ul>

            )
    }  if(this.state.pcmActiveTab === 2){
        return(
          <ul>

          <li> 	Responsible for developing required enhancements. Worked from scratch on developing Ring fenced bank changes within the application. </li>
          <li> 	Held responsible for developing the changes, system testing then test supporting for UAT and SIT. </li>
          <li> 	Coordinated the change deployment event closely with the deployment team. </li>
          <li> 	Validating Requirement & Functional specifications and performing unit testing </li>
          </ul>
                )
      }  if(this.state.pcmActiveTab === 3){
          return(
            <div>
            <details >
               <summary>
                   Java
               </summary>
                <p>Version: 1.8</p>
            </details>
            <details >
               <summary>
                   Multithreading
               </summary>
                <p>Using Executors api</p>
            </details>
            <details >
               <summary>
                   Spring MVC
               </summary>
                <p>Version : 4.0</p>
            </details>
            <details >
               <summary>
                   Spring boot
               </summary>
                <p>Version : 4.0</p>
            </details>
            <details >
               <summary>
                  Web services
               </summary>
                <p>Rest api</p>
            </details>
            <details >
               <summary>
                  SQL
               </summary>
                <p>Oracle plsql</p>
            </details>
            <details >
               <summary>
                  App server
               </summary>
                <p>Websphere</p>
            </details>
            <details >
               <summary>
                  Messaging queue
               </summary>
                <p>IBM messaging queue & jms</p>
            </details>

</div>
                    )
        }

}


toggleCategoriesTO(){
  if(this.state.TOactiveTab === 0){
    return(

      <table class="table table-borderless">

              <tbody>
                <tr >
                  <th scope="row"></th>
                  <td><strong>Customer : </strong></td>
                  <td>Lloyds banking group</td>
                </tr>
                <tr >
                  <th scope="row"></th>
                  <td ><strong>Organization : </strong></td>
                  <td>Virtusa Polaris consulting pvt ltd</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td><strong>Domain : </strong></td>
                  <td >Banking and Financial Services</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td><strong>Duration : </strong></td>
                  <td>Oct'2017 - Jun'2018</td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td><strong>Methodology : </strong></td>
                  <td>Agile</td>
                </tr>
              </tbody>
            </table>
              )
  }  if(this.state.TOactiveTab === 1){
      return(
        <ul>

      <li>Top Office is a reporting and analytical application which displays data on realtime in OLAP cubes pattern and capable of drilling the data based on organization or location or desk hierarchy. </li>
      <li>This is achieved by aggregating the data from different source systems based on the business rules. </li>
      <li>Top Office data is mainly segregated into 3 types like liquidity, risk and nostro. </li>
      <li>Aggregated data will be displayed into cubes through an analyzer which is the reporting application</li>

        </ul>

      )
    }  if(this.state.TOactiveTab === 2){
        return(
          <ul>

          <li> 	Responsible for developing required enhancements. Worked from scratch on developing Ring fenced bank changes within the application. </li>
          <li> 	Held responsible for developing the changes, system testing then test supporting for UAT and SIT. </li>
          <li> 	Coordinated the change deployment event closely with the deployment team. </li>
          <li> 	Validating Requirement & Functional specifications and performing unit testing </li>
          <li>  Consume trade messages from different source systems and aggregate the data based on business rules. </li>
          </ul>
                )
      }  if(this.state.TOactiveTab === 3){
          return(
            <div>
            <details >
               <summary>
                   Java
               </summary>
                <p>Version: 1.7</p>
            </details>
            <details >
               <summary>
                   multithreading
               </summary>
                <p>using Executors api</p>
            </details>
            <details >
               <summary>
                   Sql
               </summary>
                <p>Oracle plsql</p>
            </details>
            <details >
               <summary>
                   misc
               </summary>
                <p>xml, XSLT, OLAP cubes, Batch scripting, swing, awt</p>
            </details>
            </div>
                      )
        }

}


toggleCategoriesSD(){
  if(this.state.SDActiveTab === 0){
  return(
<table class="table table-borderless">

        <tbody>
          <tr >
            <th scope="row"></th>
            <td><strong>Customer : </strong></td>
            <td>Apple Inc.</td>
          </tr>
          <tr >
            <th scope="row"></th>
            <td ><strong>Organization : </strong></td>
            <td>Wipro digital</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td><strong>Domain : </strong></td>
            <td >Industrial and Engineering Services</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td><strong>Duration : </strong></td>
            <td>Sep’2019 – Feb'2020</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td><strong>Methodology : </strong></td>
            <td>Agile</td>
          </tr>
        </tbody>
      </table>
  )
}else if(this.state.SDActiveTab === 1){
return(
  <ul>

<li> Service Debugger is central application in AOS platform through which any downstream service users can check their service status by using the invoker handlers and send the request and see the response and also user can check the VIP health and the status of instances that the host holds.</li>
<li> Debug functionality is present for each service through which the user can debug their corresponding service. </li>
<li> Swagger UI is integrated into the application through which user can check the status of all HTTP methods at one place.</li>

  </ul>

)
}else if(this.state.SDActiveTab === 2){
return(
  <ul>
  <li> Responsible for implementing the radars that were assigned</li>
  <li> validating the radar and analyzing and implementing the radar requirements </li>


  </ul>

)
}else if(this.state.SDActiveTab === 3){
return(
  <div>
 <details >
     <summary>
         Java
     </summary>
      <p>Version: 1.11</p>
 </details>
 <details >
     <summary>
         Multithreading
     </summary>
      <p>Using Completable future api</p>
 </details>
 <details>
     <summary>
         sbt
     </summary>
      <p>Version : 3.6.3</p>
 </details>
 <details>
     <summary>
         gradle
     </summary>
      <p>Version : 6.6</p>
 </details>
 <details>
     <summary>
         github
     </summary>
      <p>Version : 2.21.5 (for source code management)</p>
 </details>
 <details>
     <summary>
         jenkins
     </summary>
      <p>used for CI CD</p>
 </details>
 <details>
     <summary>
         Spring
     </summary>
      <p>Spring boot(v2.2.1) </p>
 </details>
 <details>
     <summary>
         docker
     </summary>
      <p>Version : 19.03.12</p>
 </details>
 <details>
     <summary>
         Gradle enterprise
     </summary>
      <p>Version : 3.4</p>
 </details>
 <details>
     <summary>
         React JS
     </summary>
      <p>Version :16.8.6 </p>
 </details>
 <details>
     <summary>
          Unix shell
     </summary>
      <p>used for shell operations</p>
 </details>
 <details>
     <summary>
          Junit frameworks
     </summary>
      <p>Mockito , Powermock </p>
 </details>
 <details>
     <summary>
          AWS
     </summary>
      <p>cloud front deployments</p>
 </details>
 <details>
     <summary>
          Swagger UI
     </summary>
      <p>to visualize and interact with the API's resources without having any of the implementation logic in place.</p>
 </details>

 </div>

)
}
}

  toggleCategoriesmvnmgr() {

if(this.state.mvnmgrActiveTab === 0){
return(

<table class="table table-borderless">

    <tbody>
      <tr >
        <th scope="row"></th>
        <td><strong>Customer : </strong></td>
        <td>Apple Inc.</td>
      </tr>
      <tr >
        <th scope="row"></th>
        <td ><strong>Organization : </strong></td>
        <td>Wipro digital</td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td><strong>Domain : </strong></td>
        <td >Industrial and Engineering Services</td>
      </tr>
      <tr>
        <th scope="row"></th>
        <td><strong>Duration : </strong></td>
        <td>Jan’2020 – Present</td>
      </tr>

      <tr>
        <th scope="row"></th>
        <td><strong>Methodology : </strong></td>
        <td>Agile</td>
      </tr>
    </tbody>
  </table>
) }

else if(this.state.mvnmgrActiveTab === 1) {
  return (
    <ul>

<li>    Maven manager is a centralized Java based application in apple online
store platform which manages release of around 600 maven repos.</li>
<li> It automates the release process by doing the relase tagging , branching
and releasing to the newer version . </li>
<li>It also contains other features as an example analyzing the POM
dependencies and fix scm connection .</li>
<li> mvnmgr supports complete CI CD integration .</li>
<li> It uses jgit plugin for connecting with git and doing the git operations </li>

    </ul>
  )
} else if(this.state.mvnmgrActiveTab === 2) {
  return (
    <ul>
    <li>	Responsible for implementing the radars that were assigned </li>
<li>validating the radar and analyzing and implementing the radar requirements </li>
<li>	developing the enhancements and create PRs for the requirement</li>
<li>	Junit testing with mockito and powermock Runner</li>

    </ul>
  )
}
 else if(this.state.mvnmgrActiveTab === 3) {

  return (
                <div>
               <details >
                   <summary>
                       Java
                   </summary>
                    <p>Version: 1.11</p>
               </details>
               <details >
                   <summary>
                       Multithreading
                   </summary>
                    <p>Using Executors api</p>
               </details>
               <details >
                   <summary>
                       Microservices
                   </summary>
                    <p></p>
               </details>
               <details>
                   <summary>
                       maven
                   </summary>
                    <p>Version : 3.6.3</p>
               </details>
               <details>
                   <summary>
                       gradle
                   </summary>
                    <p>Version : 6.6</p>
               </details>
               <details>
                   <summary>
                       github
                   </summary>
                    <p>Version : 2.21.5 (for source code management)</p>
               </details>
               <details>
                   <summary>
                       jenkins
                   </summary>
                    <p>used for CI CD</p>
               </details>
               <details>
                   <summary>
                       Spring
                   </summary>
                    <p>Spring boot(v2.2.1) </p>
               </details>
               <details>
                   <summary>
                       docker
                   </summary>
                    <p>Version : 19.03.12</p>
               </details>
               <details>
                   <summary>
                       Gradle enterprise
                   </summary>
                    <p>Version : 3.4</p>
               </details>
               <details>
                   <summary>
                       React JS
                   </summary>
                    <p>Version :16.8.6 </p>
               </details>
               <details>
                   <summary>
                        Unix shell
                   </summary>
                    <p>used for shell operations</p>
               </details>
               <details>
                   <summary>
                        Junit frameworks
                   </summary>
                    <p>Mockito , Powermock </p>
               </details>
               <details>
                   <summary>
                        AWS
                   </summary>
                    <p>cloud front deployments</p>
               </details>

               </div>
)
}
}





  toggleCategories() {

if(this.state.activeTab === 0){
      return(
             <div className="projects-grid">

             {/* Project 1 */}

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

                    <CardHeader
          title="Maven Manager"
          subheader="Jan'2020 - Present"
        />

          <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >Apple Inc.</CardTitle>
                    <CardText>
                     Maven manager / Gradle manager are centralized Java based application in apple online
                    store platform which manages release of around more than 1500 maven and gradle repos.
                  </CardText>

                      <CardActions center>
                      <button type="button" onClick={()=>{ this.handleModalMvnMgr() }} class="btn btn-outline-primary">See more ...</button>


                      <Modal show={this.state.showMvnMgr} onHide={()=>{ this.handleModalMvnMgr() }}>
                            <Modal.Header closeButton>
                            <strong> Maven Manger / Gradle Manager</strong>
                            </Modal.Header>
                            <Modal.Body>

                            <Tabs activeTab={this.state.mvnmgrActiveTab} onChange={(tabId) => this.setState({ mvnmgrActiveTab: tabId })}  ripple>
                              <Tab>Details</Tab>
                              <Tab>About</Tab>
                              <Tab>Roles</Tab>
                              <Tab>Technologies</Tab>
                            </Tabs>

                            <Grid>
                              <Cell col={12}>
                                <div className="content">{this.toggleCategoriesmvnmgr()}</div>
                              </Cell>
                            </Grid>



</Modal.Body>
                            <Modal.Footer>
                            <button className='button' onClick={()=>{ this.handleModalMvnMgr() }}>Close</button>
                           </Modal.Footer>
                          </Modal>
                      </CardActions>
                    </Card>


                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

                    <CardHeader
          title="Service Debugger"
          subheader="Sep'2019 - Feb'2020"
        />

          <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >Apple Inc.</CardTitle>
                    <CardText>
                    Service Debugger is central application in AOS platform through which any downstream service users can check their service status by sending the request and see the response.
                  </CardText>

                      <CardActions center>
                      <button type="button" onClick={()=>{ this.handleModalSD() }} class="btn btn-outline-primary">See more ...</button>


                      <Modal show={this.state.showSD} onHide={()=>{ this.handleModalSD() }}>
                            <Modal.Header closeButton>
                            <strong> Service Debugger</strong>
                            </Modal.Header>
                            <Modal.Body>

                            <Tabs activeTab={this.state.SDActiveTab} onChange={(tabId) => this.setState({ SDActiveTab: tabId })}  ripple>
                              <Tab>Details</Tab>
                              <Tab>About</Tab>
                              <Tab>Roles</Tab>
                              <Tab>Technologies</Tab>
                            </Tabs>

                            <Grid>
                              <Cell col={12}>
                                <div className="content">{this.toggleCategoriesSD()}</div>
                              </Cell>
                            </Grid>
                          </Modal.Body>
                            <Modal.Footer>
                            <button className='button' onClick={()=>{ this.handleModalSD() }}>Close</button>
                           </Modal.Footer>
                          </Modal>
                      </CardActions>
                    </Card>


                  </div>      )




    } else if(this.state.activeTab === 1) {
      return (


        <div className="projects-grid">

        {/* Project 3 */}

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

               <CardHeader
       title="Payments Control Manager"
       subheader="Jun ’2018 - Aug'2019"
       />

       <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >Lloyds banking group</CardTitle>
               <CardText>
                PCM (Payments control manager) is an application which validates and transforms the swift or xml messages from different source systems, and route them to downstream systems based on the routing rules defined.
             </CardText>

                 <CardActions center>
                 <button type="button" onClick={()=>{ this.handleModalPCM() }} class="btn btn-outline-primary">See more ...</button>


                 <Modal show={this.state.showPCM} onHide={()=>{ this.handleModalPCM() }}>
                       <Modal.Header closeButton>
                       <strong> Payments Control Manager</strong>
                       </Modal.Header>
                       <Modal.Body>

                       <Tabs activeTab={this.state.pcmActiveTab} onChange={(tabId) => this.setState({ pcmActiveTab: tabId })}  ripple>
                         <Tab>Details</Tab>
                         <Tab>About</Tab>
                         <Tab>Roles</Tab>
                         <Tab>Technologies</Tab>
                       </Tabs>

                       <Grid>
                         <Cell col={12}>
                           <div className="content">{this.toggleCategoriesPCM()}</div>
                         </Cell>
                       </Grid>



       </Modal.Body>
                       <Modal.Footer>
                       <button className='button' onClick={()=>{ this.handleModalPCM() }}>Close</button>
                      </Modal.Footer>
                     </Modal>
                 </CardActions>
               </Card>


               {/* Project 4 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

               <CardHeader
       title="Top Office"
       subheader="Oct'2017 - Jun'2018"
       />

       <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >Lloyds banking group</CardTitle>
               <CardText>
Top Office is a reporting and analytical application which displays data on realtime in OLAP cubes pattern and capable of drilling the data based on organization or location or desk hierarchy.              </CardText>

                 <CardActions center>
                 <button type="button" onClick={()=>{ this.handleModalTO() }} class="btn btn-outline-primary">See more ...</button>


                 <Modal show={this.state.showTO} onHide={()=>{ this.handleModalTO() }}>
                       <Modal.Header closeButton>
                       <strong>Top Office</strong>
                       </Modal.Header>
                       <Modal.Body>

                       <Tabs activeTab={this.state.TOactiveTab} onChange={(tabId) => this.setState({ TOactiveTab: tabId })}  ripple>
                         <Tab>Details</Tab>
                         <Tab>About</Tab>
                         <Tab>Roles</Tab>
                         <Tab>Technologies</Tab>
                       </Tabs>

                       <Grid>
                         <Cell col={12}>
                           <div className="content">{this.toggleCategoriesTO()}</div>
                         </Cell>
                       </Grid>
                     </Modal.Body>
                       <Modal.Footer>
                       <button className='button' onClick={()=>{ this.handleModalTO() }}>Close</button>
                      </Modal.Footer>
                     </Modal>
                 </CardActions>
               </Card>


             </div>

                 )
    } else if(this.state.activeTab === 2) {
      return (

        <div className="projects-grid">

        {/* Project 5 */}

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

               <CardHeader
       title="Data Management Portal"
       subheader="Apr'2015 - Sep'2017"
       />

       <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >Bank of America.</CardTitle>
               <CardText>
  DATA MANAGEMENT PORTAL is an application which deals with individual information of all the people, parties, companies that were affiliated to Bank of America.
<br></br>
<br></br>


           </CardText>

                 <CardActions center>
                 <button type="button" onClick={()=>{ this.handleModalDMP() }} class="btn btn-outline-primary">See more ...</button>


                 <Modal show={this.state.showDMP} onHide={()=>{ this.handleModalDMP() }}>
                       <Modal.Header closeButton>
                       <strong>Data Management Portal</strong>
                       </Modal.Header>
                       <Modal.Body>

                       <Tabs activeTab={this.state.DMPactiveTab} onChange={(tabId) => this.setState({ DMPactiveTab: tabId })}  ripple>
                         <Tab>Details</Tab>
                         <Tab>About</Tab>
                         <Tab>Roles</Tab>
                         <Tab>Technologies</Tab>
                       </Tabs>

                       <Grid>
                         <Cell col={12}>
                           <div className="content">{this.toggleCategoriesDMP()}</div>
                         </Cell>
                       </Grid>



       </Modal.Body>
                       <Modal.Footer>
                       <button className='button' onClick={()=>{ this.handleModalDMP() }}>Close</button>
                      </Modal.Footer>
                     </Modal>
                 </CardActions>
               </Card>


               {/* Project 6 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

               <CardHeader
       title="Mopar "
       subheader="Nov'2014 - Apr’2015"
       />

       <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >FCA us llc.</CardTitle>
               <CardText>
      Business to Customer Application deals with various Marketing applications required for the Chrysler.
Includes many such applications named user Login and registration (LNR), Dealer locator, Vehicle order tracking system (VOTS).
</CardText>
                 <CardActions center>
                 <button type="button" onClick={()=>{ this.handleModalMopar() }} class="btn btn-outline-primary">See more ...</button>


                 <Modal show={this.state.showMopar} onHide={()=>{ this.handleModalMopar() }}>
                       <Modal.Header closeButton>
                       <strong>Mopar</strong>
                       </Modal.Header>
                       <Modal.Body>

                       <Tabs activeTab={this.state.MoparActiveTab} onChange={(tabId) => this.setState({ MoparActiveTab: tabId })}  ripple>
                         <Tab>Details</Tab>
                         <Tab>About</Tab>
                         <Tab>Roles</Tab>
                         <Tab>Technologies</Tab>
                       </Tabs>

                       <Grid>
                         <Cell col={12}>
                           <div className="content">{this.toggleCategoriesMopar()}</div>
                         </Cell>
                       </Grid>
                     </Modal.Body>
                       <Modal.Footer>
                       <button className='button' onClick={()=>{ this.handleModalMopar() }}>Close</button>
                      </Modal.Footer>
                     </Modal>
                 </CardActions>
               </Card>



                        {/* Project 7 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

                        <CardHeader
                title="Bulk Data Migration tool"
                subheader="Jan'2014 - Nov'2014"
                />

                <CardTitle style={{color: '#ffffff', height: '196px', background: 'url('+ project_BG+') center / cover'}} >Baxter Healthcare Corporation</CardTitle>
                        <CardText>
Bulk Data Migration tool is an automate tool developed using java, awt and swt toolkits  to migrate the existing BPLM legacy data to Team center
<br></br>
<br></br>
<br></br>
</CardText>
                          <CardActions center>
                          <button type="button" onClick={()=>{ this.handleModalBDMT() }} class="btn btn-outline-primary">See more ...</button>


                          <Modal show={this.state.showBDMT} onHide={()=>{ this.handleModalBDMT() }}>
                                <Modal.Header closeButton>
                                <strong>BDMT(Bulk Data Migration tool)</strong>
                                </Modal.Header>
                                <Modal.Body>

                                <Tabs activeTab={this.state.BDMTactiveTab} onChange={(tabId) => this.setState({ BDMTactiveTab: tabId })}  ripple>
                                  <Tab>Details</Tab>
                                  <Tab>About</Tab>
                                  <Tab>Roles</Tab>
                                  <Tab>Technologies</Tab>
                                </Tabs>

                                <Grid>
                                  <Cell col={12}>
                                    <div className="content">{this.toggleCategoriesBDMT()}</div>
                                  </Cell>
                                </Grid>
                              </Modal.Body>
                                <Modal.Footer>
                                <button className='button' onClick={()=>{ this.handleModalBDMT() }}>Close</button>
                               </Modal.Footer>
                              </Modal>
                          </CardActions>
                        </Card>

             </div>

      )
    }

  }



  render() {




    return(
      <div  className="About-me-BG">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>in {this.Capitalize('wipro')}  (Present)</Tab>
          <Tab>in {this.Capitalize('Virtusa Polaris')}  </Tab>
          <Tab>in {this.Capitalize('TCS')}  </Tab>
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

export default Projects;
