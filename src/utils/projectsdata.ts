interface Person{
  name:string;
  link?:string;
  role?:string;
}
interface Project {
  name: string;
  description: string;
  link?: string;
  teamMembers?: Array<Person>;
}

interface YearProjects {
  year: number;
  projects: Array<Project>;
}

export const yearWiseProjects: Array<YearProjects> = [
  {
    year: 2025,
    projects: [
      {
        name: "Smart Irrigation System",
        description:
          "Automatically waters plants based on soil moisture levels and sends IoT-based alerts.",
        link : "https://gogul11.github.io/portfolio",
        teamMembers: [
          {
            name: "Arjun R",
            role: "Frontend Developer",
            link: "https://www.linkedin.com/in/arjunr"
          },
          {
            name: "Meera S",
            role: "Backend Developer",
            link: "https://www.linkedin.com/in/meeradev"
          },
          {
            name: "Karthik M",
            role: "UI/UX Designer",
            link: "https://dribbble.com/karthikdesigns"
          }
        ]

      },
      {
        name: "TaskFlow",
        description:
          "A productivity app for creating tasks, setting deadlines, and tracking progress using Kanban boards.",
      },
      {
        name: "BudgetCraft",
        description:
          "A personal finance dashboard that analyzes monthly spending and visualizes financial trends.",
      },
      {
        name: "EduVerse",
        description:
          "A learning platform offering courses, quizzes, certificates, and student progress analytics.",
      },
    ],
  },
  {
    year: 2024,
    projects: [
      {
        name: "SkillSync",
        description:
          "A mentorship matching platform connecting learners with industry mentors for quick sessions.",
      },
      {
        name: "CodeCommit Visualizer",
        description:
          "Visualizes Git branches, commits, and merges using an interactive graph interface.",
      },
      {
        name: "EventHive",
        description:
          "A modern event registration system with ticketing, QR-based check-ins, and analytics.",
      },
      {
        name: "PortfolioPulse",
        description:
          "A portfolio builder allowing users to generate their own portfolios from multiple templates.",
      },
    ],
  },
  {
    year: 2023,
    projects: [
      {
        name: "VaultAuth",
        description:
          "A secure authentication system featuring OAuth, JWT, session management, and 2FA support.",
      },
      {
        name: "FitLife Tracker",
        description:
          "A fitness app that tracks workouts, calories, sleep data, and provides habit analytics.",
      },
      {
        name: "QuickNotes",
        description:
          "A lightweight notes app with support for images, voice notes, and reminders.",
      },
      {
        name: "ChatDoc",
        description:
          "Upload PDFs or documents and ask AI-powered questions based on their content.",
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        name: "FaceGuard",
        description:
          "Real-time face recognition and attendance tracking system using OpenCV and ML.",
      },
      {
        name: "Home Automation Hub",
        description:
          "Control home appliances using an ESP32 with mobile app integration.",
      },
      {
        name: "RoverBot",
        description:
          "A Webots simulated rover operated through a Node.js backend and WebSocket controller.",
      },
    ],
  },
];
