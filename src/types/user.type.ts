export interface User{
    id: number,
    name: string,
    age: number,
    dob: string, 
}
export type Users = Pick<User, 'id' | 'name'>[]