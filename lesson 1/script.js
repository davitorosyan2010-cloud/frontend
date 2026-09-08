const student= {
  name: "Anna",
  age: 20,
  city: "Yerevan",
  skills: ["HTML", "CSS", "JavaScript"]
};

const getStudentInfo=() => {
  const { name, age, city } = student;

  const status=age >= 18 ? "Adult" : "young";

  const reactKnowledge= student.skills.includes("React")
    ? "Knows React"
    : "Doesnt know React";

  return `${name} is ${age} years old and lives in ${city}. Status: ${status}. ${reactKnowledge}.`;
};

console.log(getStudentInfo());
