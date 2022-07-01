import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import ExperienceTab from 'components/about/ExperienceTab'
import 'styles/experience.scss'
import ExperienceEducation from './ExperienceEducation'
import ExperienceSkills from './ExperienceSkills'

export enum Pages {
  SKILLS = 'skills',
  EDUCATION = 'education'
}

export const Experience = () => {
  const [view, setView] = useState<Pages>(Pages.SKILLS)

  return (
    <div className="flex flex-col gap-5 text-neutral-300">
      <div className="flex justify-center md:justify-start text-white font-semibold gap-4 text-base sm:text-2xl">
        <ExperienceTab view={view} setView={setView} to={Pages.SKILLS}>
          Main Skills
        </ExperienceTab>
        <ExperienceTab view={view} setView={setView} to={Pages.EDUCATION}>
          Education & Employment
        </ExperienceTab>
      </div>
      <div className="bg-neutral-800 rounded-2xl p-4 sm:p-6">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={view}
            className="flex flex-col gap-3 text-base sm:text-lg md:text-xl lg:text-2xl text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {view == Pages.SKILLS ? <ExperienceSkills /> : <ExperienceEducation />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Experience
