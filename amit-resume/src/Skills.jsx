import React from 'react'

import './style/skills.css'
const Skills = () => {
  return (
    
    <div className='container'>   
       <h1 className='text-center'>My Key Skills</h1> 
       <div className='row'>
        <div className='col-lg-4 col-sm-12'>
             <img src="https://th.bing.com/th/id/R.c2656bd56d27b85fccfceb307298f28e?rik=vfgjAHxsh7UiSA&riu=http%3a%2f%2fimage.digitalinsightresearch.in%2fuploads%2fimagelibrary%2fcbr%2fjava.jpg&ehk=vn97rntDxEtOc3Cbaz4ljrRGWJJhTekLa6AxVl8q%2bDU%3d&risl=&pid=ImgRaw&r=0" alt='Java 8' className='skill-logo'/>
        </div>
        <div className='col-lg-4 col-sm-12'>
        <img src="https://niixer.com/wp-content/uploads/2020/11/spring-boot.png" alt='' className='skill-logo'/>
        </div>
        <div className='col-lg-4 col-sm-12'>
        <img src="https://1000marcas.net/wp-content/uploads/2021/06/Git-Logo-1280x800.png" alt='' className='skill-logo'/>
        </div>
       </div>
       <div className='row'>
        <div className='col-lg-4 col-sm-12'>
             <img src="https://th.bing.com/th/id/OIP.ji4z9iv_w9rh9p7VWSOAuwAAAA?pid=ImgDet&w=290&h=290&rs=1" alt='' className='skill-logo'/>
             <h2 className='text-center'></h2>
        </div>
        <div className='col-lg-4 col-sm-12'>
        <img src="https://miro.medium.com/max/1400/1*U7m8szFsPNjbty8hyWGGCg.png" alt='' className='skill-logo'/>
        <h2 className='text-center'></h2>
        </div>
        <div className='col-lg-4 col-sm-12'>
        <img src="https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg" alt='' className='skill-logo'/>
        <h2 className='text-center'></h2>
        </div>
       </div>
        
    </div>
  )
}

export default Skills