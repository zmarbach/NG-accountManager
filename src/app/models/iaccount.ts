export interface IAccount {
  id: number;
  name: string;
  email: string;
  isEmployee: boolean;
  departmentId: number;
  phoneNumbers: IPhoneNumber[];
}

export interface IPhoneNumber {
  number: string;
  type: string;
}
