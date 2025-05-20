export const nav = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Agani",
    url: "/member/Daniel",
  },
  {
    id: 3,
    text: "Angoda",
    url: "/member/Brian",
  },
  {
    id: 4,
    text: "Gasasira",
    url: "/member/Joshua",
  },
  {
    id: 5,
    text: "Nankunda",
    url: "/member/Josephine",
  },
  {
    id: 6,
    text: "about",
    url: "/about",
  },
  
];

export const projectDetails={
  title:"An Interactive Game To Spread STD Awareness And Prevention",
  description:"An educative and informative game on STIs/STDs. African themed and targeted for people of different demographics ",
  problemStatement:" The rising prevalence of sexually transmitted diseases (STDs) highlights a critical need for more engaging and accessible educational tools. Traditional methods of raising awareness and promoting prevention, such as pamphlets or lectures, often fail to effectively engage young audiences. An interactive, educational game can provide a more compelling and immersive way to inform individuals, particularly teens and young adults, about the risks, symptoms, and preventive measures related to STDs, encouraging safer behaviors and reducing the spread of infections.",
  techStack:["Laravel", "PHP", "Unity","C++", "Blender", "MySQL"],
  currentState:{
    title:"Testing",
    description:"Testing the final apk on multiple devices and with different users",
  }
}

export const teamMembers=[
{
  id:1,
  name:"Gasasira Joshua",
  student_number:"2100708936",
  registration_number:"21/U/08936/PS",
  email:"gasasiraj013@gmail.com",
  skills:['Flutter','PHP',"Dart","Laravel","javaScript",'Nodejs','Reactjs',"Django","GoLang","Python", "MySQL"],
  role:"Software Engineer",
  shortStory: "A software engineer with a passion for building innovative solutions having a strong background in various languages",
  picture:"../images/Joshua.jpg",
  phone: "0788225138",
},
{
  id:2,
  name:"Angoda Brian Nyanga",
  student_number:"2100701789",
  registration_number:"21/U/1789",
  email: "brianangoda99@gmail.com",
  skills:['Flutter','PHP',"Dart","Laravel","javaScript",'Nodejs','Reactjs',"Django","GoLang","Python", "MySQL"],
  role:"Software Engineer",
  shortStory: "A software engineer with a passion for building innovative solutions having a strong background in various languages",
  picture:"../images/Brian.jpg",
  phone:"0763809704",
},
{
  id:3,
  name:"Agani Daniel Strong",
  student_number:"2100705991",
  registration_number:"21/U/05991/PS",
  email:"adhueywilan@gmail.com",
  skills:['Flutter','PHP',"Dart","Laravel","javaScript",'Nodejs','Reactjs',"Django","GoLang","Python", "MySQL"],
  role:"Software Engineer",
  shortStory: "A software engineer with a passion for building innovative solutions having a strong background in various languages",
  picture:"../images/Agani.jpg",
  phone:"0726414176",
},
{
  id:4,
  name:"Nankunda Josephine",
  student_number:"210070843",
  registration_number:"21/U/0843",
  email:"josenankuda02@gmail.com",
  skills:['Flutter','PHP',"Dart","Laravel","javaScript",'Nodejs','Reactjs',"Django","Python", "MySQL"],
  role:"Software Engineer",
  phone:"0754753624",
  shortStory: "A software engineer with a passion for building innovative solutions having a strong background in various languages",
  picture:"../images/Jojo.jpg",

}
]

export const blog = [
  {
    id: 1,
    title: "Project Ideation and Concept Finalization",
    desc: "Initial group meeting to brainstorm game concepts and settle on an endless runner with STI education as the core theme. Discussed target audience, platform, and educational objectives.",
    category: ["Planning", "Concept"],
    cover: "../images/blogs/chill.jpg",
    date: "September 5, 2023",
    completedBy: "Group"
  },
  {
    id: 2,
    title: "Market Research on Similar Games",
    desc: "Researched existing health education games and endless runners to identify best practices and gaps in the market.",
    category: ["Research"],
    cover: "../images/blogs/chill.jpg",
    date: "September 8, 2023",
    completedBy: "Group"
  },
  {
    id: 3,
    title: "Unity Project Setup",
    desc: "Configured base Unity project with appropriate folder structure, version control setup, and initial scene configuration.",
    category: ["Unity", "Setup"],
    cover: "../images/blogs/chill.jpg",
    date: "September 12, 2023",
    completedBy: "Daniel"
  },
  {
    id: 4,
    title: "Core Gameplay Mechanics Design",
    desc: "Designed the fundamental game mechanics including running, jumping, sliding, and collision systems.",
    category: ["Design", "Gameplay"],
    cover: "../images/blogs/chill.jpg",
    date: "September 15, 2023",
    completedBy: "Daniel"
  },
  {
    id: 5,
    title: "Laravel Server Initial Setup",
    desc: "Configured base Laravel installation with necessary packages for API development and database connectivity.",
    category: ["Backend", "Setup"],
    cover: "../images/blogs/chill.jpg",
    date: "September 18, 2023",
    completedBy: "Joshua"
  },
  {
    id: 6,
    title: "Database Schema Design",
    desc: "Created initial database schema for user accounts, scores, game assets, and educational content.",
    category: ["Database", "Design"],
    cover: "../images/blogs/chill.jpg",
    date: "September 20, 2023",
    completedBy: "Josephine"
  },
  {
    id: 7,
    title: "Character Concept Art Creation",
    desc: "Developed concept art for main characters and NPCs that would appear in the game.",
    category: ["Art", "Design"],
    cover: "../images/blogs/chill.jpg",
    date: "September 25, 2023",
    completedBy: "Josephine"
  },
  {
    id: 8,
    title: "Obstacle and Power-up Design",
    desc: "Designed various obstacles and power-ups that would appear in the endless runner, tying them to STI education concepts.",
    category: ["Design", "Gameplay"],
    cover: "../images/blogs/chill.jpg",
    date: "September 28, 2023",
    completedBy: "Josephine"
  },
  {
    id: 9,
    title: "Basic Movement System Implementation",
    desc: "Implemented core character movement including running, jumping, and sliding mechanics in Unity.",
    category: ["Unity", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "October 3, 2023",
    completedBy: "Daniel"
  },
  {
    id: 10,
    title: "User Authentication API Development",
    desc: "Created API endpoints for user registration, login, and session management in Laravel.",
    category: ["Backend", "API"],
    cover: "../images/blogs/chill.jpg",
    date: "October 5, 2023",
    completedBy: "Joshua"
  },
  {
    id: 11,
    title: "Obstacle Generation System",
    desc: "Implemented procedural obstacle generation system with increasing difficulty as player progresses.",
    category: ["Unity", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "October 10, 2023",
    completedBy: "Daniel"
  },
  {
    id: 12,
    title: "Score Tracking Implementation",
    desc: "Developed client-side score tracking system that communicates with server via API.",
    category: ["Unity", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "October 15, 2023",
    completedBy: "Brian"
  },
  {
    id: 13,
    title: "Initial 3D Character Modeling",
    desc: "Created first versions of 3D character models based on approved concept art.",
    category: ["Art", "3D Modeling"],
    cover: "../images/blogs/chill.jpg",
    date: "October 18, 2023",
    completedBy: "Josephine"
  },
  {
    id: 14,
    title: "Game Asset Management System",
    desc: "Developed CMS backend for managing game assets (characters, obstacles, environments).",
    category: ["Backend", "CMS"],
    cover: "../images/blogs/chill.jpg",
    date: "October 20, 2023",
    completedBy: "Joshua"
  },
  {
    id: 15,
    title: "Environment Design and Texturing",
    desc: "Created various environment themes for different levels/sections of the game.",
    category: ["Art", "Design"],
    cover: "../images/blogs/chill.jpg",
    date: "October 25, 2023",
    completedBy: "Josephine"
  },
  {
    id: 16,
    title: "Educational Content Research",
    desc: "Researched and compiled accurate STI information to be included in the game's educational components.",
    category: ["Research", "Content"],
    cover: "../images/blogs/chill.jpg",
    date: "November 1, 2023",
    completedBy: "Group"
  },
  {
    id: 17,
    title: "In-Game UI Design",
    desc: "Designed user interface elements including score display, health meter, and pause menu.",
    category: ["UI/UX", "Design"],
    cover: "../images/blogs/chill.jpg",
    date: "November 5, 2023",
    completedBy: "Josephine"
  },
  {
    id: 18,
    title: "Audio System Implementation",
    desc: "Integrated audio system for background music, sound effects, and voiceovers.",
    category: ["Unity", "Audio"],
    cover: "../images/blogs/chill.jpg",
    date: "November 10, 2023",
    completedBy: "Daniel"
  },
  {
    id: 19,
    title: "Educational Prompt System",
    desc: "Developed system that displays educational messages at specific intervals during gameplay.",
    category: ["Unity", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "November 15, 2023",
    completedBy: "Joshua"
  },
  {
    id: 20,
    title: "Difficulty Scaling Implementation",
    desc: "Created algorithms that adjust game difficulty based on player performance and progression.",
    category: ["Unity", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "November 20, 2023",
    completedBy: "Brian"
  },
  {
    id: 21,
    title: "Leaderboard API Development",
    desc: "Implemented server-side logic for storing and retrieving high scores from database.",
    category: ["Backend", "API"],
    cover: "../images/blogs/chill.jpg",
    date: "November 25, 2023",
    completedBy: "Joshua"
  },
  {
    id: 22,
    title: "Multiplayer Sync Prototype",
    desc: "Developed prototype for potential multiplayer features allowing friends to compare scores.",
    category: ["Networking", "Prototype"],
    cover: "../images/blogs/chill.jpg",
    date: "December 1, 2023",
    completedBy: "Brian"
  },
  {
    id: 23,
    title: "First Playable Demo",
    desc: "Completed first integrated version with core gameplay loop functional for internal testing.",
    category: ["Milestone", "Testing"],
    cover: "../images/blogs/chill.jpg",
    date: "December 10, 2023",
    completedBy: "Group"
  },
  {
    id: 24,
    title: "Performance Optimization Pass",
    desc: "Optimized game performance for mobile devices, focusing on frame rate and memory usage.",
    category: ["Optimization"],
    cover: "../images/blogs/chill.jpg",
    date: "January 5, 2024",
    completedBy: "Daniel"
  },
  {
    id: 25,
    title: "Tutorial System Implementation",
    desc: "Added in-game tutorial to guide new players through controls and mechanics.",
    category: ["UI/UX", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "January 15, 2024",
    completedBy: "Brian"
  },
  {
    id: 26,
    title: "Achievement System Development",
    desc: "Implemented system for tracking and rewarding player achievements.",
    category: ["Unity", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "January 20, 2024",
    completedBy: "Daniel"
  },
  {
    id: 27,
    title: "PostgreSQL Database Optimization",
    desc: "Optimized database queries and indexes for better performance with increasing user load.",
    category: ["Database", "Optimization"],
    cover: "../images/blogs/chill.jpg",
    date: "January 25, 2024",
    completedBy: "Josephine"
  },
  {
    id: 28,
    title: "Localization System Setup",
    desc: "Implemented framework for supporting multiple languages in both game and educational content.",
    category: ["UI/UX", "Programming"],
    cover: "../images/blogs/chill.jpg",
    date: "February 1, 2024",
    completedBy: "Joshua"
  },
  {
    id: 29,
    title: "Beta Testing Preparation",
    desc: "Prepared build and documentation for external beta testing, including feedback collection system.",
    category: ["Testing"],
    cover: "../images/blogs/chill.jpg",
    date: "February 15, 2024",
    completedBy: "Group"
  },
  {
    id: 30,
    title: "Analytics Integration",
    desc: "Added analytics tracking to monitor player behavior and educational content effectiveness.",
    category: ["Programming", "Analytics"],
    cover: "../images/blogs/chill.jpg",
    date: "February 20, 2024",
    completedBy: "Brian"
  },
  {
    id: 31,
    title: "Final Art Polish Pass",
    desc: "Refined all visual assets including characters, environments, and UI elements for final release.",
    category: ["Art", "Polish"],
    cover: "../images/blogs/chill.jpg",
    date: "March 1, 2024",
    completedBy: "Josephine"
  },
  {
    id: 32,
    title: "Security Audit and Hardening",
    desc: "Conducted security review of both client and server code, implementing necessary protections.",
    category: ["Security"],
    cover: "../images/blogs/chill.jpg",
    date: "March 10, 2024",
    completedBy: "Joshua"
  },
  {
    id: 33,
    title: "Final Playtesting Session",
    desc: "Conducted extensive playtesting session to identify and fix any remaining issues.",
    category: ["Testing"],
    cover: "../images/blogs/chill.jpg",
    date: "March 20, 2024",
    completedBy: "Group"
  },
  {
    id: 34,
    title: "App Store Submission Preparation",
    desc: "Prepared all necessary assets and metadata for Google Play and Apple App Store submissions.",
    category: ["Deployment"],
    cover: "../images/blogs/chill.jpg",
    date: "April 1, 2024",
    completedBy: "Brian"
  },
  {
    id: 35,
    title: "Project Documentation Completion",
    desc: "Finalized all project documentation including technical specifications, user manuals, and API docs.",
    category: ["Documentation"],
    cover: "../images/blogs/chill.jpg",
    date: "April 10, 2024",
    completedBy: "Group"
  }
];