import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Grow from '@material-ui/core/Grow';
import './Portfolio.css';
import Data from '../../Utils/Data';



function Portfolio() {

    const [tabvalue,setTabvalue]=useState('All');
    const [projectDialog,setProjectDialog]=useState(false);
  
    return (
        <div className="portfolio">
        <Grid container className='section pb_45 pt_45'>
            {/* Title */}
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item classname="tabsbar">
                <Tabs value={tabvalue} 
                indicatorColor="red" 
                className='customTabs' 
                onChange={(event,newValue)=>setTabvalue(newValue)}>
                   
                    <Tab label='All' 
                     value='All' 
                     className={tabvalue==='All'?'customTabs_item active' : 'customTabs_item'} />
                            {[...new Set(Data.portfolio.map(item=>item.tag))].map(tag=>(
                       <Tab label ={tag} value={tag} className={tabvalue==='tag'?'customTabs_item active' : 'customTabs_item'} />
                            ))}
            
                  

                </Tabs>
            </Grid>

            {/* project */}
            <Grid item xs={12}>

                <Grid container spacing={2}>
                      {Data.portfolio.map(portfolio=>(
                          <>
                          {tabvalue === portfolio.tag || tabvalue==='All'? (
                               <Grid item>
                               <Grow  in timeout={1000}>
                               <Card className="customCard" onClick={()=>setProjectDialog(portfolio)}>
                                   <CardActionArea>
                                       <CardMedia className='customCard_image' image={portfolio.image} title={portfolio.title}/>
                                       <CardContent>
                                           <Typography className='customCard_title'>{portfolio.title}</Typography>
                                           <Typography variant ='body2' className='customCard_description'>{portfolio.caption}</Typography>
                                       </CardContent>
 
                                       
                                   </CardActionArea>
 
                               </Card>
                               </Grow>
                           </Grid>
                          ):null}
                         
                          
                          </>
                          
                      ))} 
                </Grid>
            </Grid>
            <Dialog open={projectDialog} onClose={()=>setProjectDialog(false)}>
            <DialogTitle onClose={()=>setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
            <img src="" alt="" className="project_dialog_image"/>
            <DialogContent>
                    <Typography className="project_dialog_desc">{projectDialog.description}</Typography>
              
            </DialogContent>
            <DialogActions>
                    {projectDialog?.links?.map(link=>(
                        <a href={link.link} target='_blank' className="project_dialog_icon">{link.icon}</a>
                    ))}
            </DialogActions>
        </Dialog>
        </Grid>
        </div>
        
    )
}

export default Portfolio
