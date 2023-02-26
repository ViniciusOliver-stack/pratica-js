import { Container } from './styles.js'
import { AiOutlineLink, } from "react-icons/ai";

export function Card({imgLink, nameProject, description, techs, classLevel, level}){

  const imgRound = 'https://source.unsplash.com/random/?city,night'

  return(
    <Container>
      <div className="card">
        <div className="top">
          <img src={imgLink} alt="" />
        </div>
        <div className="info-wrapper">
          <p className='name-project'>{nameProject}</p>
          <p className='description-project'>{description}</p>

          <div className="links">
            <ul>
              <li>
                <a href="#"><AiOutlineLink/></a>
              </li>
            </ul>
          </div>

          <div className="footer-wrapper">
          <div className="tech">
            <p>{techs}</p>
          </div>
          <div className="level">
            <p className={classLevel}>{level}</p>
          </div>
        </div>
        </div>

      </div>
    </Container>
  )
}