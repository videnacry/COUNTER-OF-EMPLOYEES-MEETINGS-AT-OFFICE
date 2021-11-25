import { Controller, TextInputDB, Day, EmployeesPaired } from '.'
import assert from 'assert'

//This is exported just to make this file a module
export const test = describe('Employee Controller', () => {
    describe('GetDaysInArray', () => {
        it('Should return the working days of employees as objects with start/end hour and employee id', function() {
            const textInput: string = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
            ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

            const expectedResult = {
                FR: [],
                MO: [
                    new Day(0, 10, 12),
                    new Day(1, 10, 12)
                ],
                SA: [
                    new Day(0, 14, 18)
                ],
                SU: [
                    new Day(0, 20, 21),
                    new Day(1, 20, 21)
                ],
                TH: [
                    new Day(0,  1,  3),
                    new Day(1, 12, 14)
                ],
                TU: [
                    new Day(0, 10, 12)
                ],
                WE: []
            }


            const textInputDB: TextInputDB = new TextInputDB(textInput)
            const controller: Controller = new Controller(textInputDB)

            assert.deepStrictEqual(controller.GetDaysInArray(), expectedResult)
        })
    })



    describe('GetEmployeesPaired', function() {
        it('Should return an array of objects with employees paired', function() {
            const textInput: string = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
            ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

            const expectedResult = [
                new EmployeesPaired(0, 1, 'RENE-ASTRID')
            ]

            const textInputDB: TextInputDB = new TextInputDB(textInput)
            const controller: Controller = new Controller(textInputDB)
            const employeesPaired = controller.GetEmployeesPaired()

            assert.deepStrictEqual(employeesPaired, expectedResult)
        })
    })



    describe('GetEmployeesPairedWithTimesTogether', function() {
        describe('Two employees', function () {
            it('Should return an array of employees paired with the count of times together', function() {
                const textInput: string = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
                ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`
    
                const employeePaired = new EmployeesPaired(0, 1, 'RENE-ASTRID')
                employeePaired.timesTogether = 2
                const expectedResult = [
                    employeePaired
                ]
    
                const textInputDB: TextInputDB = new TextInputDB(textInput)
                const controller: Controller = new Controller(textInputDB)
                const employeesPaired = controller.GetEmployeesPairedWithTimesTogether()
    
                assert.deepStrictEqual(employeesPaired, expectedResult)
            })
        })
        describe('Three employees', function () {
            it('Should return an array of employees paired with the count of times together', function() {
                const textInput: string = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
                ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
                ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`
    
                const expectedResult = [
                    new EmployeesPaired(0, 1, 'RENE-ASTRID'),
                    new EmployeesPaired(0, 2, 'RENE-ANDRES'),
                    new EmployeesPaired(1, 2, 'ASTRID-ANDRES')
                ]
                expectedResult[0].timesTogether = 2
                expectedResult[1].timesTogether = 2
                expectedResult[2].timesTogether = 3
    
                const textInputDB: TextInputDB = new TextInputDB(textInput)
                const controller: Controller = new Controller(textInputDB)
                const employeesPairedWithTimesTogether = controller.GetEmployeesPairedWithTimesTogether()
    
                assert.deepStrictEqual(employeesPairedWithTimesTogether, expectedResult)
            })
        })
    })
})