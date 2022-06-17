import { education } from './../constants'

export const ExperienceEducation = () => {
  return (
    <>
      {education.map((item, key) => {
        return (
          <div key={key} className="flex flex-col">
            <span>{item.name}</span>
            <span className="text-lg font-bold text-sky-400 pl-1 pt-1">{item.date}</span>
          </div>
        )
      })}
    </>
  )
}

export default ExperienceEducation
