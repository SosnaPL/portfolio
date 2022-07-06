import smoothScroll from 'components/SmoothScroll'

export const ExperienceSkills = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-sky-400 font-bold">{'Web Development'}</span>
        <span className="p-0 sm:pl-4">
          {`I design responsive websites that are fast, simple to use, and constructed according to
          best practices. My main area of specialization is front-end development, i.e. creating
          small and medium-sized web applications using different`}
          <span className="text-sky-400 cursor-pointer" onClick={smoothScroll.bind(null, 'work')}>
            {' technologies'}
          </span>
          {'.'}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sky-400 font-bold">{'UX/UI'}</span>
        <span className="p-0 sm:pl-4">
          {`I work to improve user satisfaction, reduce user churn, and guarantee that user-based
          organizational goals are met.`}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sky-400 font-bold">{'Content Writing'}</span>
        <span className="p-0 sm:pl-4">
          {`I prefer to follow the industry's lead. My mission is to keep up with emerging
          technologies. I also enjoy sharing my knowledge with others.`}
        </span>
      </div>
    </>
  )
}

export default ExperienceSkills
