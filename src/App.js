import './App.css';
import React, { useState } from 'react';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment/moment';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Button } from '@mui/material';


function App() {
 const[data,setData]=useState('');
 const[buttons,setButtons]=useState([]);
 const[editindex,setEditindex]=useState('');
  return (
    <div className="App">
    <div className='d1'>
      <BlurLinearIcon style={{marginLeft:20,color:'white'}} />
      <p className='p'>To Do</p>
      <input className='input1' type="text" placeholder='Enter Your Bio' />
      <SettingsSuggestIcon style={{marginLeft:200,color:'white'}}/>
      <ContactSupportIcon style={{marginLeft:50,color:'white'}}/>
      <NotificationsNoneIcon style={{marginLeft:50,color:'white'}}/>
      <WhatshotIcon style={{marginLeft:50,color:'white'}}/>
    </div>

<div style={{display:'flex'}}>
    <div className='d2'>
      < ListIcon style={{marginLeft:20,marginTop:50,}}/>
      <div style={{display:'flex',paddingTop:100,marginLeft:20}}><WbSunnyIcon/>
      <h3 style={{marginTop:-3,paddingLeft:20}}>My Day</h3></div>
      <div style={{display:'flex',marginLeft:20}}>
        < StarOutlineOutlinedIcon/> <p style={{marginTop:-1,paddingLeft:20,}}>Important</p>
      </div>
      <div style={{display:'flex',marginLeft:20}}>
        <FeaturedPlayListOutlinedIcon /> <p style={{marginTop:-1,paddingLeft:20}}>Planned</p>
      </div>
      <div style={{display:'flex',marginLeft:20}}>
        <AssignmentIndOutlinedIcon/> <p style={{marginTop:-1,paddingLeft:20}}>Assigned to me</p>
      </div>
      <div style={{display:'flex',marginLeft:20}}>
        <HomeOutlinedIcon/> <p style={{paddingLeft:20,marginTop:-1}}>Tasks</p>
      </div>
    </div>



    <div className='d3'>
      <h2 style={{marginLeft:30}}>My Day . . .</h2>
      <p style={{marginLeft:30}}>{moment().format('MMMM Do YYYY,')}</p>
      </div>


      <div>
        <div>
        <input className='container' value={data} type="text" onChange={(e)=>
        setData(e.target.value)} />
        <button onClick={()=>{
          if (editindex!==""){

            buttons[editindex]=data
            setButtons([...buttons])
            setData("")
            setEditindex("")
          }
            else{
              setButtons([...buttons,data])
              setData("")
            }
                    
        }}>
            {editindex!=="" ? "update": "submit"}
        </button>
        </div>
        {
          buttons.map((item,index)=>{
            return(
              <div>
                  <p>
                    {item}
                  </p>
                
                  <EditIcon onClick={()=>{
                    setEditindex(index)
                    setData(item)
                  }}/>
                
                {
                  <DeleteIcon onClick={()=>{
                    buttons.splice(index,1)
                    setButtons([...buttons])
                  }} />

                }
                
              </div>
            )
          })
        }

      </div>


    </div>
    </div>

  );
}

export default App;
