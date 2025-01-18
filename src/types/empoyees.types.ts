type TEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  department: string;
  post: string;
  photo: string;
  salary: number;
};
type TItemEmployee = {
  title: string;
  description: string;
}
export type { TEmployee, TItemEmployee };