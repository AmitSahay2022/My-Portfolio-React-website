import React from 'react'
import img1 from './images/youtube.jpeg'
import img2 from './images/udemy.jpg'
import img3 from './images/GFG.jpeg'
const About = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-2 col-sm-12 bg-info'>
                    Hello, I'm Amit Kumar, a passionate software developer with a strong background in Java, oops,Exception handling, Collection. Front end technologies like React and Backend Technology like Spring Boot REST. 
                </div>
                <div className='col-lg-2 col-sm-12 bg-light'>
                    I studied at SRM University Chennai, where I acquired a solid foundation in software development principles and practices.
                </div>
                <div className='col-lg-2 col-sm-12 bg-light'>
                    Currently residing in Patna, Bihar, I am dedicated to expanding my knowledge and skills in the ever-evolving field of technology.
                </div>
                <div className='col-lg-6 col-sm-12 bg-light'>
                    Outside of my professional pursuits, I indulge in hobbies such as playing Chess, Badminton, Cricket, learning something new,  I believe in the power of lifelong learning and constantly challenge myself to grow both personally and professionally.
                </div>
                <h3 className='mt-5 text-center'>Some of my favourite websites are</h3>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src="https://th.bing.com/th/id/OIP.3KQufWd8kuVQZjvG9dcL6QHaFg?pid=ImgDet&rs=1" style={{height:"100%" , width:"100%"}} />
                        </div>
                        <div className='col-3'>
                            <img src="https://i1.wp.com/aprendergratis.es/wp-content/uploads/2018/11/udemy-cursos-gratis.png?resize=1200%2C630&ssl=1" style={{height:"100%" , width:"100%"}}/>
                        </div>
                        <div className='col-5'>
                            <img src="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" style={{height:"100%" , width:"100%"}}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About