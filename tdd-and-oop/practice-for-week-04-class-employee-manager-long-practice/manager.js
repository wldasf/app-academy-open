const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    _totalSubSalary() {
        let sum = 0;
        for (const employee of this.employees) {
            if (employee instanceof Manager) {
                sum += this.salary + this._totalSubSalary;
            }
            else {
                sum += this.salary;
            }
        }
        return sum;
    }

    calculateBonus(multiplier) {
        let total = this.salary + this._totalSubSalary();
        return total * multiplier;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
}


module.exports = Manager;
