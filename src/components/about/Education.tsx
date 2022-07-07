import { education } from '../../utils/Constants'
import { EducationInfo } from 'types'

export const Education = () => {
  const formatEducation = (item: EducationInfo) => {
    if (!item.source) return <span>{item.name}</span>
    if (item.href) {
      return (
        <span>
          {item.name}
          {' - '}
          <a
            aria-label={item.name}
            href={item.href}
            rel="noreferrer"
            target="_blank"
            className="text-sky-400 hover:text-sky-900 duration-150"
          >
            {item.source}
          </a>
        </span>
      )
    }
    return <span>{`${item.name} - ${item.source}`}</span>
  }

  return (
    <>
      {education.map((item, key) => (
        <div key={key} className="flex flex-col font-bold">
          {formatEducation(item)}
          <span className="text-sm sm:text-lg font-semibold text-sky-400 pt-1">{item.date}</span>
        </div>
      ))}
    </>
  )
}

export default Education
