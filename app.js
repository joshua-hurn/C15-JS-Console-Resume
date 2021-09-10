console.log("Name: " + "josh hurn".toUpperCase());
console.log("Career: Full Stack Engineer / Instructor");
console.log("Description: I like turtles");
console.log("");

console.log("My Interests:");
console.log("* Rock Climbing");
console.log("* Vikings");
console.log("* Cowboys");
console.log("* Racing");
console.log("");

console.log("My Previous Experience:");
displayPosition("Innovate Birmingham", "Full Stack Engineer / Instructor", "taught stuff");
displayPosition("Vikings", "Quarterback", "Threw footballs well");
console.log("");

console.log("My Skills:");
displaySkill("Rock Climbing", true);
displaySkill("Playing guitar, ukelele, drums", false);

function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}

function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log("BAM: " + skillName);
    } else {
        console.log(skillName);
    }
}

// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(3, 4);
// sum(5, 7);