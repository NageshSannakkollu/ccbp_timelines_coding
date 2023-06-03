// Write your code here
import {Chrono} from 'react-chrono'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <div className="heading-duration-container">
        <h1>{courseTitle}</h1>
        <div className="time-duration-container">
          <AiFillClockCircle className="check-circle" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tags-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="list-items">
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
