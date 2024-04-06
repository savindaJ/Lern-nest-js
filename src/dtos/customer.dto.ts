export class CustomerDto {

  constructor(id: string, name: string, address: string, salary: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;
  }
  id: string;
  name: string;
  address: string;
  salary: number;
}
