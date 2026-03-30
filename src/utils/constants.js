// Social media URLs
export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/nikkr008",
  INSTAGRAM: "https://www.instagram.com/its_nik._/?hl=en",
  TWITTER: "https://twitter.com/nik102030",
  LINKEDIN: "https://www.linkedin.com/in/nikhil-kumar-523978179/",
};

// CV/Resume URL
export const CV_URL = "https://drive.google.com/file/d/1QcOoFtHprvmfreXjZgHv8beC_zMqFn70/view?usp=drive_link";

// Personal Info
export const PERSONAL_INFO = {
  NAME: "Nikhil Kumar",
  ROLE: "A specialized Mobile App and Frontend Web Developer with expertise in creating responsive, user-friendly applications.",
  BIO: "With extensive experience in React.js and React Native, I deliver high-quality cross-platform applications that prioritize performance and exceptional user experience.",
  LOCATION: "Hyderabad, India",
  EMAIL: "nik.kr008@gmail.com",
  PHONE: "+91 7808627025",
};

// Skills categories with their respective technologies
export const SKILL_CATEGORIES = {
  APP_DEVELOPMENT: ['React Native', 'Expo', 'CLI', 'Android', 'iOS', 'JavaScript', 'TypeScript', 'Redux', 'Firebase', 'React Navigation', 'Jest', 'API Integration'],
  WEB_DESIGN: ['Responsive Design', 'Tailwind CSS', 'Figma', 'UI Prototyping', 'Wireframes', 'Animation'],
  WEB_DEVELOPMENT: ['React.js', 'Next.js', 'Three.js', 'Redux', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Rest-API', 'Deployment', 'Git'],
};

// Skills with proficiency percentages for About section
export const SKILLS = {
  "Mobile App Development": 90,
  "Frontend Web Development": 85,
  "UI/UX Design": 75,
  "Backend Development": 65
};

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

// Services data
export const SERVICES = [
  { 
    id: 'app-dev', 
    name: 'App Development',
    description: 'Specializing in building high-performance, scalable, and cross-platform mobile applications extensively tailored with React Native.',
    skills: SKILL_CATEGORIES.APP_DEVELOPMENT,
    icon: 'app-icon.png',
  },
  { 
    id: 'web-design', 
    name: 'Web Design',
    description: 'Building beautiful responsive websites with modern frameworks tailored to your brand.',
    skills: SKILL_CATEGORIES.WEB_DESIGN,
    icon: 'design-icon.png',
  },
  { 
    id: 'web-dev', 
    name: 'Web Development',
    description: 'With excellence in React.js, I provide Single Page Applications with immense UI experience.',
    skills: SKILL_CATEGORIES.WEB_DEVELOPMENT,
    icon: 'code-icon.png',
  },
];

// Categories for project filtering
export const PROJECT_CATEGORIES = ['All', 'App', 'Web'];

// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: 'Klynk App',
    category: 'APP DEVELOPMENT',
    image: 'portfolio/KlyncAppImg.png',
    description: 'Mobile application for guided cooking with step-by-step recipes and ingredient management',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    features: ['Recipe Search', 'Guided Cooking', 'Shopping Lists', 'Social Sharing'],
    link: '#',
  },
  {
    id: 2,
    title: 'Stream Mind',
    category: 'APP DEVELOPMENT',
    image: 'portfolio/moviesApp.png',
    description: 'Mobile application for tracking and organizing movies with personalized recommendations',
    technologies: ['React Native', 'TMDb API', 'Redux', 'Styled Components'],
    features: ['Watchlist', 'Recommendations', 'Reviews', 'Offline Access'],
    link: '#',
  },
  {
    id: 3,
    title: 'Travel Website',
    category: 'WEB DEVELOPMENT',
    image: 'portfolio/travelWebsite.png',
    description: 'One-stop platform for travel planning with itinerary builder and booking integration',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Itinerary Builder', 'Hotel Booking', 'Activity Search', 'User Reviews'],
    link: '#',
  },
  {
    id: 4,
    title: 'Bluetooth Printer App',
    category: 'APP DEVELOPMENT',
    image: 'portfolio/bluetoothPrinter.png',
    description: 'Mobile application for wireless printing from your device to any Bluetooth-enabled printer',
    technologies: ['React Native', 'Bluetooth API', 'Native Modules', 'Redux'],
    features: ['Device Discovery', 'Print Preview', 'Multiple Formats', 'Print Queue'],
    link: '#',
  },
  {
    id: 5,
    title: 'IoT Control System',
    category: 'DIGITAL ECOSYSTEM',
    image: 'portfolio/IotModule.jpg',
    description: 'Smart device control interface for managing connected home devices from anywhere',
    technologies: ['React.js', 'Node.js', 'MQTT', 'WebSockets'],
    features: ['Remote Control', 'Automation', 'Energy Monitoring', 'Voice Commands'],
    link: '#',
  },
];

// Footer quick links
export const FOOTER_LINKS = [
  { id: 'services', name: 'Services' },
  { id: 'projects', name: 'Projects' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' },
];

// Service items for footer
export const FOOTER_SERVICES = [
  { id: 'app-dev', name: 'App Development' },
  { id: 'web-design', name: 'Web Design' },
  { id: 'web-dev', name: 'Web Development' },
  { id: 'ui-design', name: 'UI/UX Design' },
]; 