import { Project, Experience, Skill, SocialLink, Certification, Education } from './types';

export const RESUME_DATA = {
  name: "Kironraj Odatt",
  title: "Master's Student in Cyber Security with experience as a Full Stack and Network Engineer",
  tagline: "Current master's student in Cyber Security, leveraging full stack and network engineering skills to build secure and efficient digital solutions.",
  about: `I am currently pursuing a Master's in Information Technology, majoring in Cyber Security at Whitecliffe College in Wellington, New Zealand.
  
  Previously, I worked as a Freelance Web Developer and Software Engineer, leveraging cutting-edge technologies to deliver high-quality solutions. I am committed to excellence, adaptability, and continuous learning in the ever-evolving digital landscape, bridging the gap between robust security architecture and intuitive UI/UX design.`,
  location: "Upper Hutt, Wellington, New Zealand",
  email: "contact@kironraj.com",
  phone: "+64 22-131-9495",
  // Simple path to the resume file. Ensure 'resume.pdf' is in your 'public' folder.
  resumeLink: "/resume.pdf"
};

export const SKILLS: Skill[] = [
  {
    category: "Development",
    items: ["HTML/CSS", "JavaScript", "jQuery", "Python-Django", "React", "AJAX", "JSON", "LAMP Stack"]
  },
  {
    category: "Infrastructure & Security",
    items: ["Linux (RHCSA)", "AWS", "Docker", "Cisco", "Juniper", "Firewalls & VPNs", "Server Hardening", "cPanel/WHM"]
  },
  {
    category: "UI/UX & Design",
    items: ["Figma", "Wireframing", "Prototyping", "User Research", "Responsive Design", "Adobe XD"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Master's in Information Technology (Major in Cyber Security)",
    institution: "Whitecliffe College, Wellington, New Zealand",
    year: "Current"
  },
  {
    id: "2",
    degree: "Google UX Design Professional Certificate",
    institution: "Coursera - Google",
    year: "2023 - 2024"
  },
  {
    id: "3",
    degree: "Web Development, Full Stack",
    institution: "Mashupstack, Thiruvanathapuram",
    year: "2021 - 2022"
  },
  {
    id: "4",
    degree: "Routing and Switching, CCNA",
    institution: "Vidya Engineering College",
    year: "2017 - 2018"
  },
  {
    id: "5",
    degree: "Bachelor of Technology in Electronics and Communication",
    institution: "Jyothi Engineering College, Thrissur",
    year: "2013 - 2017"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", year: "2018" },
  { name: "AWS Certified Solutions Architect - Associate", issuer: "Udemy / AWS", year: "2020" },
  { name: "cPanel Professional Certification (CPP)", issuer: "cPanel", year: "2021" },
  { name: "cPanel & WHM System Administrator I (CWSA-1)", issuer: "cPanel", year: "2021" },
  { name: "cPanel & WHM Sales Professional (CPSP)", issuer: "cPanel", year: "2021" },
  { name: "cPanel & WHM Administrator Certification (CWA)", issuer: "cPanel", year: "2021" },
  { name: "LiteSpeed Certification", issuer: "cPanel", year: "2021" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2022" },
  { name: "Foundations of User Experience (UX) Design", issuer: "Google", year: "2023" },
  { name: "Create High-Fidelity Designs and Prototypes in Figma", issuer: "Google", year: "2023" },
  { name: "Build Dynamic User Interfaces (UI) for Websites", issuer: "Google", year: "2024" }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Freelance Web Developer",
    company: "Kerala, Web Development",
    period: "2021-07 - Present",
    description: [
      "Coded websites using HTML, CSS, JavaScript, and jQuery languages.",
      "Engaged with clients to plan and optimize site issues and queries.",
      "Planned website development, converting mockups into usable web presence.",
      "Oversaw technical issues and troubleshooting requests to resolve user problems."
    ]
  },
  {
    id: "2",
    role: "Software Engineer",
    company: "Poornam Infovision Pvt Ltd, Kochi",
    period: "2021-04 - 2021-07",
    description: [
      "Provided Technical Support for Linux and Windows Servers and Webhosting.",
      "Server Security, Hardening and Performance tuning by managing Control Panels.",
      "Worked with software development teams to design and develop robust solutions.",
      "Integrated third-party tools and components into applications."
    ]
  },
  {
    id: "3",
    role: "L2 NOC Engineer",
    company: "Keralavision Broadband Pvt Limited, Thrissur",
    period: "2017-11 - 2019-06",
    description: [
      "Back-end Support for Network Configuration and Troubleshooting.",
      "Coordinated with technical support to deliver network services at or above SLA requirements.",
      "Configured and maintained network monitoring and load balancing."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Intelligent Aquaponics",
    description: "An IoT-based system merging aquaculture with hydroponics. Features automated water temperature regulation, fish feeding, and a web application for real-time data visualization and monitoring.",
    technologies: ["IoT", "Android", "Web App", "Sensors", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1582757793483-e407049be006?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    github: "https://github.com/KIRONRAJ"
  },
  {
    id: "2",
    title: "Wireless Audio Transmitter (FM)",
    description: "A compact device transmitting FM waves to amplify and modulate audio signals. Explored applications in assistive technology as a discreet wireless hearing aid.",
    technologies: ["Electronics", "Signal Processing", "Hardware"],
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/KIRONRAJ"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/KIRONRAJ", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/kironrajop", icon: "Linkedin" },
  { platform: "Website", url: "https://www.kironraj.com", icon: "Globe" },
  { platform: "Email", url: `mailto:${RESUME_DATA.email}`, icon: "Mail" }
];
