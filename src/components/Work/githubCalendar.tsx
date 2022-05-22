import GitHubCalendar from 'react-github-calendar'

export const GithubCalendar = () => {
  const selectLastHalfYear = (contributions) => {
    const startMonth = 3 // April
    const currentYear = new Date().getFullYear()
    return contributions.filter((day) => {
      const date = new Date(day.date)
      const monthOfDay = date.getMonth()
      return date.getFullYear() === currentYear && monthOfDay >= startMonth
    })
  }

  return (
    <GitHubCalendar
      username="SosnaDev"
      transformData={selectLastHalfYear}
      hideTotalCount
      hideColorLegend
    />
  )
}

export default GithubCalendar
