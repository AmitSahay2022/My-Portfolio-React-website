import React, { useState } from 'react'

const GreetingMSG = () => {
  // Current Time

const[currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString())
function clock(){
  setCurrentTime(new Date().toLocaleTimeString())
}
setInterval(clock,1000);

  var time=new Date().getHours();
  var customStyle={
    color:""
  };
  var massage="";
  if(time<=4){ massage="It is mid Night"; customStyle.color="blue";}
  if(time>=4 && time<6){
    massage="Early Morning, Sir"; customStyle.color="green";
  } else if(time >=6 && time <12){
    massage="Good Morning"; customStyle.color="yellow";
  } else if(time>=12 && time < 16){
    massage="Good Afternoon";  customStyle.color="purple";
  } else if(time>= 16 && time < 20){
    massage="Good Evening";  customStyle.color="maroon";
  } 
  else{
    massage="Good Night"; customStyle.color="black";
  }

  return (
    <h3 className='text-center' style={customStyle}>{massage} {currentTime}</h3>
  )
}

export default GreetingMSG