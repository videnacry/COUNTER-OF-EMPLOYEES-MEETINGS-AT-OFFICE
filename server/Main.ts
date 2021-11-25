
class Main {
    employeesPairedWithTimesTogether: Employee.EmployeesPaired[]

    constructor (pFileText: string) {
        const textInputDB: Employee.TextInputDB = new Employee.TextInputDB(pFileText)
        const controller: Employee.Controller = new Employee.Controller(textInputDB)
        this.employeesPairedWithTimesTogether = controller.GetEmployeesPairedWithTimesTogether()
    }
}