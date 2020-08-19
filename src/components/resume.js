import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Logo from './Logo.png'


class Resume extends Component {
  render() {
    return(
      <div className="resume-BG">
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Logo}
                alt="avatar"
                style={{height: '270px'}}

                 />
            </div>

            <h2 >Hemanth Gummadi</h2>

            <h4 style={{color: 'grey'}}>Java developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Java developer with 6.10 years full time work experience as IT professional having expertise in J2ee technologies and AWS cloud practitioner certified.Quick learner and good performer both in team and independent job environments. Proficient at grasping new
concepts, applications and technologies quickly, and utilizing the same in a productive manner.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>plot no-528, ground floor,Gulmohar park colony,serilingampally,hyderabad,Ranagreddy-500019</p>
            <h5>Phone</h5>
            <p>(+91)-8886866633 / (+91)-8328625444</p>
            <h5>Email</h5>
            <p>gummadihemanth07@gmail.com</p>
            <h5>Linkedin Profile  </h5>
            <p><a href="https://www.linkedin.com/in/hemanth-gummadi-060bb3112/" target="_blank"  rel="noopener noreferrer">Click on this link to open my linkedin profile</a></p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2009}
              endYear={2013}
              schoolName="Gitam University"
              schoolDescription="I completed my bachelors in Engineering with 7.64 cgpa in Gitam University, Visakhapatnam . I am an Electronics and instrumentation graduate.During my engineering days I have implemented few projects based on digital signal processing and also a student registry portal"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Sri chaitanya junior college"
                 schoolDescription="I completed my Intermediate education(Andhra board) with 88.8% in sri chaitanya junior college,Visakhapatnam. My area of subjects is Maths,Physics & Chemistry"
                  />

                  <Education
                    startYear={2006}
                    endYear={2007}
                    schoolName="St anns high school"
                    schoolDescription=" I completed my High school education with 86.4% in St anns high school, Visakhapatnam. During my school days , I have participated in several extra curricular activities like gymnastics, singing and elocution competitions"
                     />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience <hx><small>(6.10 years)</small></hx></h2>

            <Experience
              startYear={2013}
              endYear={2017}
              jobName="Tata consultancy services"
              jobDescription="I started working with Tata consultancy services as a fresher .During my tenure with Tcs , I learnt a lot in terms of technical skills and domain expertise and also implemeted the same in a productive manner. I worked with clients like Bank of america, Fiat chrysler and Baxter healthcare corporation which helped me in gaining industry exposure of different domains."
              />

              <Experience
                startYear={2017}
                endYear={2019}
                jobName="Virtusa Polaris Consulting pvt Ltd"
                jobDescription="In polaris I worked with Lloyds banking group , where I worked with payments systems and also a cash management system (Top office). During my tenure at Lloyds I gained good knowlege on trading systems and the complete trade life cycle . I have good exposure over trade processing systems like summit and murex and also the Loan processing systems like ACBS(Advanced commercial banking system)."
                />

                <Experience
                  startYear={2019}
                  endYear={2020}
                  jobName="Wipro Digital and platforms"
                  jobDescription="In wipro I am working with Apple Inc, where I work for the systems present in Apple online store . Apple online store is a platform which runs with different applications that are mainly concentrated on ecommerce and internal employee management purpose"
                  />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java(1.11 and below)"
                progress={95}
                />
                <Skills
                  skill="Spring MVC"
                  progress={85}
                  />
                  <Skills
                    skill="Spring boot"
                    progress={80}
                    />
                    <Skills
                      skill="Micro services"
                      progress={75}
                      />
                      <Skills
                        skill="SOAP web services"
                        progress={75}
                        />
                        <Skills
                          skill="REST web services"
                          progress={90}
                          />
                          <Skills
                            skill="ORACLE/mysql"
                            progress={98}
                            />
                            <Skills
                              skill="Javascript/Jquery/REACT"
                              progress={50}
                              />
                              <Skills
                                skill="HTML/Jsp/css"
                                progress={65}
                                />
                                <Skills
                                  skill="Swing/awt/swt"
                                  progress={60}
                                  />
                                  <Skills
                                    skill="Maven/gradle"
                                    progress={100}
                                    />
                                    <Skills
                                      skill="gradle enterprise"
                                      progress={100}
                                      />
                                      <Skills
                                        skill="Jenkins"
                                        progress={85}
                                        />
                                        <Skills
                                          skill="SVN/Github/Serena"
                                          progress={100}
                                          />
                                          <Skills
                                            skill="Eclipse/Intellij"
                                            progress={100}
                                            />
                                            <Skills
                                              skill="Putty/winscp/iterm2"
                                              progress={80}
                                              />
                                              <Skills
                                                skill="Sonar qube"
                                                progress={100}
                                                />
                                                <Skills
                                                  skill="shell/bat scripting"
                                                  progress={70}
                                                  />


          </Cell>
        </Grid>
      </div>
      </div>
    )
  }
}

export default Resume;
