namespace Employee {

    export class Day {
        employeeId: number
        startHour: number
        endHour: number
    
        constructor (pEmployeeId: number, pStartHour: number, pEndHour: number) {
            this.employeeId = pEmployeeId
            this.startHour = pStartHour
            this.endHour = pEndHour
        }
    }
}