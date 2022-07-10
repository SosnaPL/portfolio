import { SectionContainer } from 'components/SectionContainer'
import LottieWrapper from './../LottieWrapper'
import emailLottie from 'assets/email.json'
import contactLottie from 'assets/contact.json'
import discordLottie from 'assets/discord.json'

export const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <SectionContainer title="Get in touch!">
      <div className="flex flex-1 relative">
        <div className="flex flex-col justify-center items-center w-full gap-6 2xl:w-fit z-10">
          <div className="flex flex-col items-center">
            <LottieWrapper lottie={emailLottie} className="w-40 sm:w-60" />
            <a
              className="font-bold text-2xl sm:text-4xl text-neutral-300 hover:text-neutral-400 duration-150"
              href="mailto: jsosinski99@gmail.com"
            >
              {'jsosinski99@gmail.com'}
            </a>
          </div>
          <div className="flex flex-col items-center">
            <LottieWrapper lottie={discordLottie} className="w-40 sm:w-60" />
            <span className="font-bold text-2xl sm:text-4xl cursor-pointer text-neutral-300 hover:text-neutral-400 duration-150">
              {'Sosna#3448'}
            </span>
          </div>
        </div>
        <LottieWrapper
          lottie={contactLottie}
          className="h-full opacity-10 2xl:opacity-70 absolute right-0 bottom-0"
        />
      </div>
      <div className="flex justify-center text-sm sm:text-lg">
        {`Copyright ® ${currentYear} Jakub Sosiński. All rights reserved.`}
      </div>
    </SectionContainer>
  )
}
