interface Iresume {
  Name: string
  Career: string
  Description: string
}

let resume: Iresume = {
  Name: "Justin Murrah",
  Career: "Web Development",
  Description: "I'm eager to learn new skills and use them effectively.",
};

interface Iinterests {
  interest1?: string
  interest2?: string
  interest3?: string
  interest4?: string
  interest5?: string
}

let interests: Iinterests = {
  interest1: "Video Games",
  interest2: "Guitar",
  interest3: "Cooking",
  interest4: "Baseball Cards",
};

interface Ihistory {
  companyName: string
  jobTitle: string
  jobDescription: string
}

let past: Ihistory = {
  companyName: "Rick's Farmer's Market",
  jobTitle: "Kitchen Manager",
  jobDescription:
    "Managing food quality, cost, and waste. Teaching and guiding employees to have safe culinary habits. Creating and designing dishes with high quality and low cost.",
};

interface Iexperience {
  exp1: string
  exp2?: string
  exp3?: string
}

let experience = {
  exp1: "I have built, maintained and managed multiple food service venues. These range from fine dining Country Clubs to small Farmer's Markets breaking into the culinary business.",

  exp2: "I studied at the Univeristy of North Alabama. My major was Music Education with a minor in Geographic Information Systems.",
};

interface Iskills {
  skill1: string
  skill2: string
  skill3: string
  skill4?: string
  skill5?: string
  skill6?: string
  skill7?: string
  skill8?: string
  skill9?: string
  skill10?: string
  
}

let skill: Iskills = {
  skill1: "Html",
  skill2: "CSS",
  skill3: "JavaScript",
  skill4: "Fine Dining Chef",
  skill5: "Soccer Coach",
};

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
  console.log(jobTitle + " " + "at" + " " + companyName + " " + "-" + " " + jobDescription);
}

function displaySkill(skill?: string, badass?: Boolean) {
  if (badass) {
    console.log("-" + "BAM:" + " " + skill);
  } else {
    console.log("-" + skill);
  }
}

console.log("NAME:" + " " + resume.Name.toUpperCase());
console.log("Career:" + " " + resume.Career);
console.log("Description:" + " " + experience.exp1 + " " + experience.exp2);
console.log("          ");
console.log("My Interests:");
console.log(interests.interest1);
console.log(interests.interest2);
console.log(interests.interest3);
console.log(interests.interest4);
console.log("          ");
console.log("My Previous Experience:");
displayPosition("Ricks's Farmer's Market", "Kitchen Manager", "Managed the Kitchen");
console.log("          ");
console.log("My Skills:");
displaySkill(skill.skill1, false);
displaySkill(skill.skill2, false);
displaySkill(skill.skill3, false);
displaySkill(skill.skill4, true);
displaySkill(skill.skill5, true);
