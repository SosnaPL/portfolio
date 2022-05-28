import './style.scss'
import { useState } from 'react'

import smoothScroll from 'components/smoothScroll'

import { motion, AnimatePresence } from 'framer-motion'

enum Pages {
  SKILLS = 'skills',
  EDUCATION = 'education'
}

export const Experience = () => {
  const [view, setView] = useState<Pages>(Pages.SKILLS)

  const viewContent = () => {
    if (view == Pages.SKILLS) {
      return (
        <>
          <div className="flex flex-col gap-2">
            <span className="text-sky-400 font-bold">Web Development</span>
            <span className="p-0 sm:pl-4">
              I design responsive websites that are fast, simple to use, and constructed according
              to best practices. My main area of specialization is front-end development, i.e.
              creating small and medium-sized web applications using different
              <span
                className="text-sky-400 cursor-pointer"
                onClick={smoothScroll.bind(null, 'work')}
              >
                {' '}
                technologies
              </span>
              .
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sky-400 font-bold">UX/UI</span>
            <span className="p-0 sm:pl-4">
              I work to improve user satisfaction, reduce user churn, and guarantee that user-based
              organizational goals are met.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sky-400 font-bold">Content Writing</span>
            <span className="p-0 sm:pl-4">
              I prefer to follow the industry's lead. My mission is to keep up with emerging
              technologies. I also enjoy posting articles on
              <span className="text-sky-400 cursor-pointer"> medium </span>to share my knowledge
              with others.
            </span>
          </div>
        </>
      )
    } else if (view == Pages.EDUCATION) {
      return (
        <>
          <div className="flex flex-col">
            <span>Engineer of IT, Zespół Szkół Ekonomicznych im. Mikołaja Kopernika, Olsztyn</span>
            <span className="text-base font-bold text-neutral-500 pl-1 pt-1">
              September 2015 - April 2019
            </span>
          </div>
          <div className="flex flex-col">
            <span>React from scratch - strefakursów.pl</span>
            <span className="text-base font-bold text-neutral-500 pl-1 pt-1">January 2021</span>
          </div>
          <div className="flex flex-col">
            <span>Web SPA applications with React and Flux - Altkom Akademia</span>
            <span className="text-base font-bold text-neutral-500 pl-1 pt-1">September 2021</span>
          </div>
        </>
      )
    }
  }

  return (
    <div className="flex flex-col gap-5 text-neutral-300">
      <div className="flex justify-center md:justify-start text-white font-semibold gap-4 text-base sm:text-2xl ">
        <h2
          className={`experience-tab flex flex-col justify-center hover:text-gray-500 duration-150 sm:justify-start ${
            view == Pages.SKILLS && 'current_tab '
          }`}
          onClick={() => setView(Pages.SKILLS)}
        >
          Main Skills
        </h2>
        <h2
          className={`experience-tab flex flex-col justify-center hover:text-gray-500 duration-150 sm:justify-start ${
            view == Pages.EDUCATION && 'current_tab'
          }`}
          onClick={() => setView(Pages.EDUCATION)}
        >
          Education & Certificates
        </h2>
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
            {viewContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Experience
