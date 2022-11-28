import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
 
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                  />
                </h1>
                <p>
                Hi, my name is Joshua Castrillo and I’m an aspiring software engineering major soon to graduate
                from Oglethorpe University in Atlanta, Georgia. This is a portfolio page meant to show off some
                of my projects, events and general experience I have in the field. I'm a very ambitious student
                developer looking for a role in an established company with the opportunity to work with the
                latest technologies on challenging and diverse projects. 
                </p>
                <p>
                For as long as I can remember I’ve been drawn to technology, more specifically
                computers and the internet. By further developing my software engineering knowledge and
                skills, I hope to harness this early passion and manifest it into something that can contribute to
                the greater tech world.
                </p>
                <p>
                In my free time, you can find me spending time with friends and family, listening to and
                playing music, or longboarding through the city.
                </p>
            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCode} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPeopleGroup} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
    )
}

export default About