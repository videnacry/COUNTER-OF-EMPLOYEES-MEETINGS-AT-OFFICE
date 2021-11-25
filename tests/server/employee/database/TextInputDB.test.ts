
import { Employee, TextInputDB } from ".."
const assert = require('assert')

//This is exported just to make this file a module
export const test = describe('Employee FileInputDB', function() {
  describe('SelectAll()', function() {
    it('should return an array of users {name: string, days: {}}', function() {

      const textInput: string = 
      `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
      ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

      const expectedResult: Employee[] = [
        new Employee (
          0,
          'RENE',
          {
            'MO':'10:00-12:00',
            'TU': '10:00-12:00',
            'TH': '01:00-03:00',
            'SA': '14:00-18:00',
            'SU': '20:00- 21:00'
          }
        ),
        new Employee (
          1,
          'ASTRID',
          {
            'MO':'10:00-12:00',
            'TH': '12:00-14:00',
            'SU': '20:00-21:00'
          }
        )
      ]

      let textInputDB: TextInputDB = new TextInputDB(textInput)
      assert.deepStrictEqual(textInputDB.SelectAll(), expectedResult)
    })
  })
})

