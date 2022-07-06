import { education } from '../Constants'

export const ExperienceEducation = () => {
  return (
    <>
      {education.map((item, key) => (
        <div key={key} className="flex flex-col">
          {item.name}
          <span className="text-lg font-bold text-blue-500 pt-1">{item.date}</span>
        </div>
      ))}
    </>
  )
}

export default ExperienceEducation
