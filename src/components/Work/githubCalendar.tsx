import GitHubCalendar from 'react-github-calendar'

export const GithubCalendar = ({ username }: { username: string }) => {
  const selectLastHalfYear = (contributions) => {
    const startMonth = 3 // April
    const currentYear = new Date().getFullYear()
    return contributions.filter((day) => {
      const date = new Date(day.date)
      const monthOfDay = date.getMonth()
      return date.getFullYear() === currentYear && monthOfDay >= startMonth
    })
  }

  const Theme = {
    level0: 'rgb(38,38,38)',
    level1: 'hsla(207, 100%, 50%, 0.44)',
    level2: 'hsla(207, 100%, 50%, 0.6)',
    level3: 'hsla(207, 100%, 50%, 0.76)',
    level4: 'hsla(207, 100%, 50%, 0.92)'
  }

  return (
    <GitHubCalendar
      username={username}
      fontSize={14}
      showWeekdayLabels={false}
      theme={Theme}
      /* transformData={selectLastHalfYear} */
      blockSize={15}
      /*       hideTotalCount
      hideColorLegend */
      /*       color="#008bff" */
    />
  )
}

export default GithubCalendar
