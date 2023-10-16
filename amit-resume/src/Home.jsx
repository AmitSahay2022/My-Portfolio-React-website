import React from 'react'
import MyPhoto from './images/amit1.jpg'
import './style/home.css'
import GreetingMSG from './components/GreetingMSG'

const Home = () => {
    return ( <>
                          <GreetingMSG/>
        <div className='container-fluid pt-5'>
           
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <h2>My name is Amit Kumar, and I am a Software Engineer with 3 years of experience specializing in Java and Spring Boot REST API, Next JS 13 (React 18) SPA development.</h2>

                    <h3>Key Skills:</h3>

                    <h4>Programming Languages:</h4>
                    <p>Proficient in Java with a deep understanding of object-oriented programming concepts. Collections, Exception handling, Multithreading</p>

                    <h4>Spring Framework:</h4>
                    <p>Extensive experience in developing RESTful APIs using Spring Boot, Spring Security for securing REST API, Spring MVC, and Spring Data JPA.</p>

                    <h4>Web Technologies:</h4>
                    <p>Solid understanding of web development technologies such as Next/React js, HTML, CSS, and JavaScript.</p>

                    <h4>Version Control:</h4>
                    <p>Proficient in using Git for source code management and collaboration.</p>
                </div>
                <div className='col-lg-6 col-sm-12 align-item-center'>
                    <img src={MyPhoto} className='img center-element'/>
                </div>

            </div>
        </div>
        </>
    )
}

export default Home