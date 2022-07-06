import GitHubCalendar from 'react-github-calendar'

export const GithubCalendar = (props: { username: string }) => {
  const Theme = {
    level0: 'rgb(38,38,38)',
    level1: 'hsla(207, 100%, 50%, 0.44)',
    level2: 'hsla(207, 100%, 50%, 0.6)',
    level3: 'hsla(207, 100%, 50%, 0.76)',
    level4: 'hsla(207, 100%, 50%, 0.92)'
  }

  return (
    <GitHubCalendar
      username={props.username}
      fontSize={12}
      showWeekdayLabels={false}
      theme={Theme}
      blockSize={15}
    />
  )
}

export default GithubCalendar
