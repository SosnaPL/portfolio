export const Show = (props: { when: boolean; fallback?: JSX.Element; children: JSX.Element }) =>
  props.when ? props.children : props.fallback || null

export default Show
