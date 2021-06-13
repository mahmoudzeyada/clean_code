enum E_TYPE {
  HOURLY = 'HOURLY',
  DAILY = 'DAILY'
}

class Employee {
  constructor(public readonly name, public salary) {}

  increaseSalaryByOne() {
    this.salary++
  }

  get_salary() {
    this.da
  }
}

class HEmployee implements Employee {
  constructor(public readonly name, public salary) {
    this.salary = this.computeSalary(salary);
  }

  private computeSalary(salary) {
    return salary * 10;
  }
}

class DEmployee implements Employee {
  constructor(public readonly name, public salary) {
    this.salary = this.computeSalary(salary);
  }

  private computeSalary(salary) {
    return salary * 20;
  }
}

//OCP
function getSalary(e: Employee) {
  const s = e.salary;
  //render into ui
}

//Hemployee

// class EmployeeFactoryImp implements EmployeeFactory {
//   create(type: E_TYPE): Employee {
//     switch (type) {
//       case E_TYPE.DAILY:
//         return new DEmployee('mahmoud', 5);
//       case E_TYPE.HOURLY:
//         return new HEmployee('ahmoed', 10);
//     }
//   }
// }

// class SecondImp implements EmployeeFactory {
// sdsdsd
// }

module {
  // services: [{
  //   useClass: EmployeeFactoryImp,
  //   as: EmployeeFactory
  // }, sdhgyfusi]
}

abstract  class EmployeeFactory {
  abstract create: (type: E_TYPE) => Employee;
}

class HomeService {
constructor(private readonly factory: EmployeeFactory) {}

  get_Employee(type: E_TYPE) {
    return this.factory.create(type);
  }

  //OCP
  getSalary(e: E_TYPE) {
    const s = this.get_Employee(e).salary;
    //render into ui
  }

  

}

interface Point {
  x: number,
  y: number
}

interface MakeCircleInput {
  p: Point,
  r: number
}


// function makecircle({p,r}: MakeCircleInput) {
//   return 5
// }




// function makecircle2(p: Point, r: number) {
//   return 5
// }

// makecircle({r: 5, {x: 5, y: 6}})


// makecircle2()

enum Error_MESSAGES  {
  NOT_OK: "NOT_OK",

}

throw new Error("sdjkfhkljsdhfkj")



