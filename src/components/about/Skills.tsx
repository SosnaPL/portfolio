import { smoothScroll } from 'utils/SmoothScroll'

const Skill = (props: { title: string; children: JSX.Element }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sky-400 font-bold">{props.title}</span>
      {props.children}
    </div>
  )
}

export const Skills = () => {
  return (
    <>
      <Skill title="Web Development">
        <span>
          {`I design responsive websites that are fast, simple to use, and constructed according to
          best practices. My main area of specialization is front-end development, i.e. creating
          small and medium-sized web applications using different `}
          <span className="text-sky-400 cursor-pointer" onClick={smoothScroll.bind(null, 'work')}>
            {'technologies'}
          </span>
          {'.'}
        </span>
      </Skill>
      <Skill title="UX/UI">
        <span>
          {`I work to improve user satisfaction, reduce user churn, and guarantee that user-based
          organizational goals are met.`}
        </span>
      </Skill>
      <Skill title="Content Writing">
        <span>
          {`I prefer to follow the industry's lead. My mission is to keep up with emerging
          technologies. I also enjoy sharing my knowledge with others.`}
        </span>
      </Skill>
    </>
  )
}

export default Skills
