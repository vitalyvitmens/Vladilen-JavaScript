import moment from 'moment'
import 'moment-precise-range-plugin'

export const getTodayDateFormat = (date) => moment(date).format('MMM Do YY')

export const getPreciseDateDifference = (date1, date2) => {
  const date1Formate = moment(date1)
  const date2Formate = moment(date2)
  return moment.preciseDiff(date1Formate, date2Formate)
}
