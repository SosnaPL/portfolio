import { MainContext } from 'pages/Main'
import { useContext } from 'react'
import Show from 'utils/Show'
import SuspenseLoader from './SuspenseLoader'

export const Section = (props: { id: string; className: string; children: JSX.Element }) => {
  const isMounted = useContext(MainContext)

  return (
    <section id={props.id} className={props.className}>
      <Show when={isMounted} fallback={<SuspenseLoader />}>
        {props.children}
      </Show>
    </section>
  )
}

export default Section
