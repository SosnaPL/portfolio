export const Show = (props: { when: any; fallback?: JSX.Element; children: JSX.Element }) =>
  props.when ? props.children : props.fallback || null

export default Show
