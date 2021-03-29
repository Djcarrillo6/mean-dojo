// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
     {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
     {'first_name' : 'Gordon', 'last_name' : 'Poe'}
  ]
};


for(x in students) {
  const { name, cohort } = students[x];
  console.log(`Name: ${name}, Cohort: ${cohort}`)
}

function nameCharCounter(obj) { 
  const { employees, managers } = obj;
  let employeeId = 1;
  let managerId = 1;
  console.log(`EMPLOYEES`);
  for(x in employees) {
    const { first_name, last_name } = employees[x];
    console.log(`${employeeId} - ${first_name}, ${last_name} - ${(first_name.length + last_name.length)}`);
    employeeId++;
  }
  console.log('MANAGERS');
  for(m in managers) {
    const { first_name, last_name } = managers[m];
    console.log(`${managerId} - ${first_name}, ${last_name} - ${(first_name.length + last_name.length)}`);
    managerId++;
  }
}

nameCharCounter(users);