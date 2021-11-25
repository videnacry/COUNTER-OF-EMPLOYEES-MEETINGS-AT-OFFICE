namespace Employee {

    export class Employee {
        public id: number
        public name: string
        public days: any
        
        constructor (pId: number, pName: string, pDays: object) {
            this.id = pId
            this.name = pName
            this.days = pDays
        }
    }
}