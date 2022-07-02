let employeeList=[{name: '1'}, {name: '2'}, {name: '3'}];

let employees = employeeList.map((item) => {
    console.log(item.name)
    return(item.name)
})

console.log(employees)