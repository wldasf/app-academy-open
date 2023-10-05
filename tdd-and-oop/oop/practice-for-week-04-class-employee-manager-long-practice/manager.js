const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    _totalSubSalary(visitedEmployees = new Set()) {
        let sum = 0;
        for (const employee of this.employees) {
            if (visitedEmployees.has(Manager)) {
                continue;
            }

            visitedEmployees.add(employee);

            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary(visitedEmployees);
            }
            else {
                sum += employee.salary;
            }
        }
        return sum;
    }

    calculateBonus(multiplier) {
        let totalSub = this._totalSubSalary();
        return (this.salary + totalSub) * multiplier;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
}


module.exports = Manager;
