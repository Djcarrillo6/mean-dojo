/*
Write a function called userLanguages that accepts an array of users, such as the one shown BELOW. Return a STRING that lists ALL of the USERS by 'fname' & 'lname', and the languages that each user knows. Make the STRING as nicely formatted as possible so that it is easy to read.

Example: userLanguages(users) returns:

'Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL.'
'Winnie the Pooh knows Python, Swift, and Java.'
'Arthur Dent knows JavaScript, HTML, and Go.'
 */
var users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(arr){

  for(let i = 0; i < arr.length; i++) {
    const { fname, lname } = arr[i];
    const { languages } = arr[i];
    console.log(`${fname}` + " " + `${lname}` + " " + `knows ${languages}`);
  }
};
userLanguages(users)

/*
EXAMPLE ARRAY OF USERS: 
users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]
*/