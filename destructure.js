const team = {
  lead: { name: "Ravi" },
  members: [
    { name: "Aman", skills: ["js", "react"] },
    { name: "Sara", skills: ["node", "db"] }
  ]
};
team


const copyTeam = { 
     lead: {...team.lead},
     members: copy.members.map(item => ({
        ...item,
        skills: [...item.skills]
     }))
}
const company = {
  name: "TechCorp",
  departments: [
    {
      name: "Engineering",
      employees: [
        { id: 1, name: "Alice", skills: ["JS", "React"] },
        { id: 2, name: "Bob", skills: ["Node", "MongoDB"] }
      ]
    },
    {
      name: "HR",
      employees: [
        { id: 3, name: "Eve", skills: ["Recruitment", "Onboarding"] }
      ]
    }
  ]
};

const copyCompany = {
    ...company,
    departments: company.departments.map( item => ({
        ...item,
        employees: item.employees.map( inneritem => ({
            ...inneritem,
            skills: [...inneritem.skills]
        }))
    }))
}
const library = {
  name: "City Library",
  books: [
    {
      title: "JavaScript Guide",
      authors: [
        { name: "Kyle Simpson", socials: { twitter: "@getify" } },
        { name: "Douglas Crockford", socials: { twitter: "@crockford" } }
      ]
    },
    {
      title: "Eloquent JavaScript",
      authors: [
        { name: "Marijn Haverbeke", socials: { twitter: "@marijnjh" } }
      ]
    }
  ]
};

const copyLibrary = {
    ...library,
    books: library.books.map(bookDetail => ({
        ...bookDetail,
        authors: bookDetail.authors.map( obj => ({
            ...obj,
            socials: {...obj.socials}
        }))
    }))
}
