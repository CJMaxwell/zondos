export interface IContactDTO {
    firstName: string, 
    lastName: string, 
    phoneNumber: string, 
    dob: Date, 
    email: string, 
    gender: string
}

export interface Icontact extends IContactDTO {
    id: string
}