const readline = require("readline-sync");

let employees = [];

function addEmployee() {
    const id = readline.question("Enter Employee ID: ");
    const name = readline.question("Enter Employee Name: ");
    const role = readline.question("Enter Employee Role: ");

    employees.push({ id, name, role });
    console.log("✅ Employee added successfully!\n");
}

function viewEmployees() {
    console.log("\n--- Employee List ---");
    if (employees.length === 0) {
        console.log("No employees found.\n");
        return;
    }
    employees.forEach((emp, index) => {
        console.log(`${index + 1}. ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}`);
    });
    console.log();
}

function searchEmployee() {
    const searchId = readline.question("Enter Employee ID to search: ");
    const emp = employees.find(e => e.id === searchId);
    if (emp) {
        console.log(`✅ Found: ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}\n`);
    } else {
        console.log("❌ Employee not found.\n");
    }
}

function deleteEmployee() {
    const delId = readline.question("Enter Employee ID to delete: ");
    const index = employees.findIndex(e => e.id === delId);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("✅ Employee deleted successfully!\n");
    } else {
        console.log("❌ Employee not found.\n");
    }
}

function mainMenu() {
    while (true) {
        console.log("=== Employee Management CLI ===");
        console.log("1. Add Employee");
        console.log("2. View Employees");
        console.log("3. Search Employee");
        console.log("4. Delete Employee");
        console.log("5. Exit");

        const choice = readline.question("Enter your choice: ");
        console.log();

        switch (choice) {
            case "1":
                addEmployee();
                break;
            case "2":
                viewEmployees();
                break;
            case "3":
                searchEmployee();
                break;
            case "4":
                deleteEmployee();
                break;
            case "5":
                console.log("👋 Exiting... Goodbye!");
                return;
            default:
                console.log("❌ Invalid choice. Try again.\n");
        }
    }
}

mainMenu();
