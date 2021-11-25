export class EmployeesPaired {

    firstId: number
    secondId: number
    name: string
    timesTogether: number = 0

    constructor (pFirstId: number, pSecondId: number, pName: string) {
        this.firstId = pFirstId
        this.secondId = pSecondId
        this.name = pName
    }
}