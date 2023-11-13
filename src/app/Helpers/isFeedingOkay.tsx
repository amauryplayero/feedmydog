export default function isFeedingOkay(time:string, lastMealDate:string):boolean {
  const currentDate = new Date(time)
  const lastDate = new Date(lastMealDate)
  const hour = currentDate.getHours()
  const lastMealHour = lastDate.getHours()
  const eveningPeriod = [21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8]

  let lastMealPeriod = eveningPeriod.includes(lastMealHour) ? 'PM' : 'AM';
  let currentMealPeriod = eveningPeriod.includes(hour) ? 'PM' : 'AM';

  const isSameDay = time.split(',')[0] && lastMealDate.split(',')[0]


  const lastAndCurrentMealPeriodAreTheSame = lastMealPeriod === currentMealPeriod
  if(isSameDay && lastAndCurrentMealPeriodAreTheSame){
    return false
  }else{
    return true
  }
}