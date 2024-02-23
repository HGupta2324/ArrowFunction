const companyEmployees = {
    employees: [
        {
            id: 1,
            name: 'Nikhil Sharma',
            position: 'Software Engineer',
            department: 'Engineering',
            salary: 80000,
            contact: {
                email: 'nikhilsharma@gmail.com.com',
                phone: '8888218932'
            }
        },
        {
            id: 2,
            name: 'Riya Jain',
            position: 'Marketing Manager',
            department: 'Marketing',
            salary: 90000,
            contact: {
                email: 'jainriya@gmail.com',
                phone: '9561111891'
            }
        },
        // Add more employees as needed
    ]
};

// Example usage:
console.log(companyEmployees.employees[0].name); 
console.log(companyEmployees.employees[1].contact.email);
