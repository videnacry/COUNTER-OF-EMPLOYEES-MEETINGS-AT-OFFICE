import {IDatabase, Employee} from '..'

export class TextInputDB implements IDatabase {
    public db: Employee[] = []
    
    constructor (pText: string) {
        const persons = pText.split('\n')
        persons.map((person, index) => {
            const equalityIndex: number = person.indexOf('=')
            const name: string = person.substring(0, (equalityIndex)).trim()
            const days: any = {}
            person.substring((equalityIndex + 1)).split(',').map(day => {
                const dayName: string = day.substr(0, 2)
                days[dayName] = day.substring(2)
            })
            this.db[index] = new Employee(index, name, days)
        })
    }
    SelectAll(): Employee[] {
        return this.db;
    }

}