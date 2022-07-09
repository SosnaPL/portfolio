export const getClassByDelay = (delay: number) =>
  ({
    200: 'delay-[200ms]',
    400: 'delay-[400ms]',
    600: 'delay-[600ms]',
    800: 'delay-[800ms]',
    1000: 'delay-[1000ms]'
  }[delay])
