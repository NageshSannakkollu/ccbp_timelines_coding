import {Chrono} from 'react-chrono'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    title,
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project-item" className="image" />
      <div className="title-duration-container">
        <h1 className="project-title"> {projectTitle}</h1>
        <div className="calendar-duration-container">
          <AiFillCalendar className="calender" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
