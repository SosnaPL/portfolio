import './style.scss'
import { useState, useEffect } from 'react'

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
            <span className="pl-4">
              I create effective responsive websites that are fast, easy to use, built using best
              practices. My main area of specialization is front-end development, i.e. creating
              small and medium-sized web applications.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sky-400 font-bold">UX/UI</span>
            <span className="pl-4">
              I'm a visual, cross-platform programmer and I'm really comfortable with writing
              production-quality application with multiple
              <span className="text-sky-400 cursor-pointer"> technologies</span>.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sky-400 font-bold">Content Writing</span>
            <span className="pl-4">
              I like to go with the flow of the industry I work in, and staying up to date with
              promising technologies is my motto. I also love sharing my knowledge with other people
              by publishing articles on
              <span className="text-sky-400 cursor-pointer"> medium</span>.
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
          className={`flex flex-col justify-center hover:text-gray-500 duration-150 sm:justify-start ${
            view == Pages.SKILLS && 'current_tab '
          }`}
          onClick={() => setView(Pages.SKILLS)}
        >
          Main Skills
        </h2>
        <h2
          className={`flex flex-col justify-centerhover:text-gray-500 duration-150 sm:justify-start ${
            view == Pages.EDUCATION && 'current_tab'
          }`}
          onClick={() => setView(Pages.EDUCATION)}
        >
          Education & Certificates
        </h2>
      </div>
      <div className="content_container bg-neutral-800 rounded-2xl p-4 sm:p-6">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={view}
            className="content flex flex-col gap-3 text-base sm:text-lg md:text-xl lg:text-2xl text-center sm:text-left"
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
