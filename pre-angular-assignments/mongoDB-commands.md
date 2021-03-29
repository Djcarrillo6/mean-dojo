# Command Answers from Intro To MongoDB Assignment

1. `use my_first_db`
2. `my_first_db.createCollection('students')`
3. `my_first_db.students.insert`(
  {
    name: DJ, home_state: CA, 
    lucky_number: 6, 
    birthday: { 
                month: 9, 
                day: 6, 
                year: 1987
              }
  },
  {
    name: Robert, home_state: TX, 
    lucky_number: 6, 
    birthday: { 
                month: 8, 
                day: 6, 
                year: 1987
              }
  },
  {
    name: Jake, home_state: MI, 
    lucky_number: 16, 
    birthday: { 
                month: 2, 
                day: 16, 
                year: 1980
              }
  },
  {
    name: Racheal, home_state: CA, 
    lucky_number: 623, 
    birthday: { 
                month: 11, 
                day: 16, 
                year: 1989
              }
  },
  {
    name: Christina, home_state: UT, 
    lucky_number: 9, 
    birthday: { 
                month: 2, 
                day: 6, 
                year: 1987
              }
  })

5. `my_first_db.students.find({})`
6. `my_first_db.students.find({state: CA}, {state: WA})`
7. 
  1. `my_first_db.students.find({"lucky_number"}:{">": 3}})`
  2. `my_first_db.students.find({"lucky_number"}:{"<=": 10}})`
  3. `my_first_db.students.find({"lucky_number"}:{">": 3}})`