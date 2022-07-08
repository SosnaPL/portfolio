import SuspenseLoader from './SuspenseLoader'

export const Section = (props: {
  id: string
  className: string
  children: JSX.Element
  isMounted: boolean
}) => {
  return (
    <section id={props.id} className={props.className}>
      {props.isMounted ? props.children : <SuspenseLoader />}
    </section>
  )
}

export default Section
