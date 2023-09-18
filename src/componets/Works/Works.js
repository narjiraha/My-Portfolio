import React from 'react'
import './Works.css'
import portfolio1 from "../../assets/portfolio-1.png"
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-5.png'
import portfolio4 from '../../assets/portfolio-6.png'

const Works = () => {
    return (
        <>
            <div id='myWorks'>
                <div className='workIntro'>
                    <h1 className='workTitle'>My Portfolio</h1>
                    <p className='portFolioDescription'>My description here</p>
                </div>
                <div className='worksImg'>
                    <div className='work1'>
                        <img src={portfolio1} alt="not-found" className='portfolio'></img>
                        <img src={portfolio2} alt="not-found" className='portfolio'></img>
                    </div>
                    <div className='work2'>
                        <img src={portfolio3} alt="not-found" className='portfolio'></img>
                        <img src={portfolio4} alt="not-found" className='portfolio'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works
