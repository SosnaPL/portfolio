import { AnimatePresence, motion } from 'framer-motion'
import { useState, createContext } from 'react'

import ExperienceTab from 'components/about/ExperienceTab'
import 'styles/experience.scss'
import Education from './Education'
import Skills from './Skills'

export enum Pages {
  SKILLS = 'skills',
  EDUCATION = 'education'
}

export const ExperienceContext = createContext<{
  view: Pages
  setView: React.Dispatch<React.SetStateAction<Pages>>
}>(null)

export const Experience = () => {
  const [view, setView] = useState<Pages>(Pages.SKILLS)

  return (
    <div className="flex flex-col gap-2 text-neutral-300">
      <div className="flex justify-center md:justify-start text-white font-semibold gap-4 text-base sm:text-xl md:text-2xl md:ml-10">
        <ExperienceContext.Provider value={{ view, setView }}>
          <ExperienceTab to={Pages.SKILLS}>{'Main Skills'}</ExperienceTab>
          <ExperienceTab to={Pages.EDUCATION}>{'Education & Employment'}</ExperienceTab>
        </ExperienceContext.Provider>
      </div>
      <div className="bg-neutral-800 rounded-2xl shadow-2xl shadow-black mx-4 mb-4 p-4 sm:p-6">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={view}
            className="flex flex-col gap-3 text-base sm:text-lg md:text-xl lg:text-2xl text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {view == Pages.SKILLS ? <Skills /> : <Education />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Experience
