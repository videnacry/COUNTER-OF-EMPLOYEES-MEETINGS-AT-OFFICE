namespace Employee {

    export class Controller {
    
        dataBase: IDatabase
    
        constructor (pDataBase: IDatabase) {
            this.dataBase = pDataBase
        }
    
    
    
        GetDaysInArray () : { [key: string]: Day[] } {
    
            const days: { [key: string]: Day[] } = {
                MO: [],
                TU: [],
                WE: [],
                TH: [],
                FR: [],
                SA: [],
                SU: []
            }
    
            this.dataBase.SelectAll().forEach(employee => {
                for (let dayName in employee.days) {
                    const hours: string[] = employee.days[dayName].split('-')
    
                    const day = new Day(
                        employee.id,
                        parseInt(hours[0]),
                        parseInt(hours[1])
                    )
    
                    days[dayName] = [...days[dayName], day]
                }
            })
            return days
        }
    
    
    
        GetEmployeesPaired (): EmployeesPaired[] {
    
            const employeesPaired: EmployeesPaired[] = []
            const employees = this.dataBase.SelectAll()
    
            for (let indexFirst: number = 0; indexFirst < employees.length; indexFirst++) {
                for (let indexSecond: number = indexFirst; indexSecond < employees.length; indexSecond++ ) {
                    if (indexFirst == indexSecond) continue
    
                    const {id: firstId, name: firstName}: Employee = employees[indexFirst]
                    const {id: secondId, name: secondName}: Employee = employees[indexSecond]
                    const name = firstName + '-' + secondName
                    const pair = new EmployeesPaired(firstId, secondId, name) 
                    employeesPaired.push(pair)
                }
            }
            return employeesPaired
        }
    
    
    
        GetEmployeesPairedWithTimesTogether (): EmployeesPaired[] {
            const employeesPairs = this.GetEmployeesPaired()
            const workedDays = this.GetDaysInArray()
    
            for (let dayName in workedDays) {
                const workedDay = workedDays[dayName]
                for (let indexFirst: number = 0; indexFirst < workedDay.length; indexFirst++) {
                    for (let indexSecond: number = indexFirst; indexSecond < workedDay.length; indexSecond++ ) {
                        if (indexFirst == indexSecond) continue
    
                        const {startHour: firstStartHour, endHour: firstEndHour, employeeId: firstEmployeeId}: Day = workedDay[indexFirst]
                        const {startHour: secondStartHour, endHour: secondEndHour, employeeId: secondEmployeeId}: Day = workedDay[indexSecond]
                        
                        if (!(firstEndHour <= secondEndHour && firstEndHour > secondStartHour)) {
                            if (!(firstStartHour >= secondStartHour && firstStartHour < secondEndHour)) {
                                if (!(firstStartHour == secondStartHour && firstEndHour == secondEndHour)) continue
                            }
                        }
                        const employeesPaired: EmployeesPaired|undefined = employeesPairs.find((({firstId, secondId}) => {
                            if (firstId == firstEmployeeId && secondId == secondEmployeeId) return true
                            if (secondId == firstEmployeeId && firstId == secondEmployeeId) return true
                            return false
                            }
                        ))
                        if (employeesPaired) employeesPaired.timesTogether++
                    }
                }
            }
    
            return employeesPairs
        }
    }
}

