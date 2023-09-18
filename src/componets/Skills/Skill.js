import React from 'react'
import './Skill.css'
import javascript from '../../assets/javascrip.png'
import reactlogo from '../../assets/reactlog - Copy.jpg'
import github from '../../assets/github.jpeg'
import node from '../../assets/node.jpeg'
import python from "../../assets/python.jpeg"
import mongodb from "../../assets/mongo.jpeg"
import php from "../../assets/php.jpeg"
import aws from '../../assets/aws.png'
import restAPI from '../../assets/restapi.jpeg'


const Skill = () => {
    return (
        <div id='skillSection'>
            <div className='skillIntro'>
                <p className='skillTile'>What I Do</p>
                <p className='skillDescription'>I possess strong full stack development skills, proficient in both front-end and back-end technologies. My expertise includes HTML, CSS, JavaScript, React, Node.js, and database management with SQL and NoSQL databases. I excel in crafting user-friendly interfaces and building scalable, efficient server-side solutions. With experience in cloud platforms like AWS and Azure, I can deploy and manage web applications effectively. My commitment to staying updated with industry trends ensures I deliver modern, high-quality solutions to meet diverse client requirements</p>
            </div>

            <div className='mySkills'>
                <div className='frontEnd'>
                    <img className='javascript' src={javascript} alt="not found"></img>
                    <img src={reactlogo} alt="" className='reactlogo'></img>
                    <img src={python} alt="not-found" className='pythonlogo' ></img>
                </div>
                <div className='frontEnd2'>
                    <img src={node} alt="not-found" className='nodelogo' ></img>
                    <img src={mongodb} alt="not-found" className='mongodb' ></img>
                    <img src={github} alt="not-found" className='github' ></img>
                </div>
                <div className='frontEnd3'>
                    <img src={php} alt="not-found" className='phplogo' ></img>
                    <img src={aws} alt="not-found" className='awslogo' ></img>
                    <img src={restAPI} alt="not-found" className='restapi' ></img>
                </div>
            </div>
        </div>
    )
}

export default Skill
