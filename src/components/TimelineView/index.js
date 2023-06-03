// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineViews = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="main-container">
      <h1>
        MY JOURNEY OF
        <br />
        <span>CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(eachItem => renderTimelineViews(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimelineView
