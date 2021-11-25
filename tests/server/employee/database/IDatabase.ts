import {Employee} from '..'

export interface IDatabase {
    SelectAll(): Employee[]
}
