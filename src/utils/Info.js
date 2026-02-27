import myLeagueImage from "../assets/myleague.png";
import urlCutrImage from "../assets/urlcutr.png";
import fastapiIcon from "../assets/fastapi.svg";
import viteIcon from "../assets/vite.svg";

export const projects = [
  {
    image: urlCutrImage,
    link: "https://github.com/cburke6897/URL-Cutr",
    title: "URL Cutr",
    description: "A URL shortener with built-in user dashboard for managing and tracking shortened links.",
  },
  {
    image: myLeagueImage,
    link: "https://github.com/cburke6897/MyLeague-Fantasy-Tracker",
    title: "MyLeague",
    description: "A Java application built for class that enables drafting and managing a fantasy football league.",
  },
];

export const experiences = [
  {
    title: "Education — Ball State University, IN",
    fromDate: "Aug 2024",
    toDate: "May 2028",
    description:
      "4.0 GPA. B.S. in Computer Science with a minor in Japanese. Concentrations in Web and Mobile Development, plus Data Analytics and Machine Learning.",
  },
  {
    title: "Teaching Assistant — Ball State University, Muncie, IN",
    fromDate: "Jan 2025",
    toDate: "Present",
    description:
      "Assisted 3 professors across 5 classes, tailoring support to each course. Tutored students in Python, Java, and core programming concepts while balancing 20 hours/week with classes, improving assignment outcomes.",
  },
  {
    title: "Research Assistant — Ball State University, Muncie, IN",
    fromDate: "Sep 2024",
    toDate: "Present",
    description:
      "Presented a peer-reviewed publication on digital media preservation as lead author; submitted a second work to an international conference. Built Python API pipelines with Pandas for large datasets, then analyzed in Excel and R with Quarto to produce visuals.",
  },
  {
    title: "Web Dev Intern — Nextech, Indianapolis, IN",
    fromDate: "Jun 2022",
    toDate: "Jul 2022",
    description:
      "Collaborated on a four-person team to deliver a React site in two months. Strengthened HTML and JavaScript skills through hands-on work and mentoring from local professionals.",
  },
];

export const tools = [
  {
    stackIconName: "java",
    title: "Java",
    description: "Backend and desktop apps",
    link: "https://www.oracle.com/java/",
  },
  {
    stackIconName: "js",
    title: "JavaScript",
    description: "Interactive web applications",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    stackIconName: "python",
    title: "Python",
    description: "Data analysis and automation",
    link: "https://www.python.org/",
  },
  {
    stackIconName: "react",
    title: "React",
    description: "Component-based UI library",
    link: "https://react.dev",
  },
  {
    iconSrc: viteIcon,
    title: "Vite",
    description: "Fast build tool",
    link: "https://vitejs.dev",
  },
  {
    iconSrc: fastapiIcon,
    title: "FastAPI",
    description: "High-performance REST APIs",
    link: "https://fastapi.tiangolo.com",
  },
  {
    stackIconName: "postgresql",
    title: "PostgreSQL",
    description: "Powerful relational database",
    link: "https://www.postgresql.org/",
  },
  {
    stackIconName: "redis",
    title: "Redis",
    description: "In-memory data store",
    link: "https://redis.io",
  },
];
