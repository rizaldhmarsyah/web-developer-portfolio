import sm_1 from "../assets/projects/sm-1.png";
import sm_2 from "../assets/projects/sm-2.png";
import sm_3 from "../assets/projects/sm-3.png";
import sm_4 from "../assets/projects/sm-4.png";
import wu_1 from "../assets/projects/wu-1.png";
import wu_2 from "../assets/projects/wu-2.png";
import wu_3 from "../assets/projects/wu-3.png";
import wu_4 from "../assets/projects/wu-4.png";
import wu_5 from "../assets/projects/wu-5.png";
import crs_1 from "../assets/projects/crs-1.png";
import crs_2 from "../assets/projects/crs-2.png";
import crs_3 from "../assets/projects/crs-3.png";
import crs_4 from "../assets/projects/crs-4.png";
import adia1 from "../assets/projects/adia-1.png";
import adia2 from "../assets/projects/adia-2.png";
import adia3 from "../assets/projects/adia-3.png";
import adia4 from "../assets/projects/adia-4.png";
import ps1 from "../assets/projects/ps-1.png";
import ps2 from "../assets/projects/ps-2.png";
import ps3 from "../assets/projects/ps-3.png";
import ps4 from "../assets/projects/ps-4.png";

export const HERO_CONTENT = `Final year Information Systems student and Frontend Web Developer with professional experience building responsive,
modern UI applications and seamless RESTful API integrations. Proficient in Next.js, React.js, JavaScript, PostgreSQL
and MongoDB, adept at launching complex web platforms from concept. A collaborative team player, passionately
committed to clean code, scalable components, and performance optimization.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "September 2025 - Present",
    role: "Web Administrator Intern",
    company: "Lembaga Layanan Pendidikan Tinggi III Jakarta",
    description: `Managed and maintained the official institutional website, with responsibilities covering the full lifecycle of the platform: feature development, regular content updates, performance optimization, and bug fixing. Ensured stable, secure, and efficient operation of the public-facing digital presence.`,
    technologies: [
      "NextJS",
      "Tailwind CSS",
      "Api Integration",
      "Framer Motion",
      "SwiperJS",
    ],
  },
  {
    year: "March 2025 - July 2025",
    role: "Frontend Web Developer Intern",
    company: "PT. Amal Ichwan Arindo",
    description: `As a Frontend Developer, I developed and maintained web applications using JavaScript, React.js, and Next.js, specializing in UI development and optimization for PT. Amal Ichwan Arindo's online recruitment platform.`,
    technologies: [
      "NextJS",
      "Tailwind CSS",
      "Api Integration",
      "Framer Motion",
      "SwiperJS",
    ],
  },
];

export const EDUCATION = [
  {
    year: "2022 - Present",
    university: "Universitas Nusa Mandiri",
    degree: "Bachelor’s Degree in Information Systems – GPA 3.81",
  },
  {
    year: "2018 - 2021",
    university: "SMKS Hang Tuah 2",
    degree: "Computer and Network Engineering – GPA 88",
  },
];

export const PROJECTS = [
  {
    title: "[Lembaga Layanan Pendidikan Tinggi III Jakarta] - Official Website",
    images: [adia1, adia2, adia3, adia4],
    description:
      "Redesigned and developed the official web presence for LLDIKTI III to elevate accessibility and user engagement. By prioritizing intuitive user-centric design and a seamless digital experience, I led the project from strategic planning to full-stack deployment, ensuring a professional visual identity optimized for high-capacity information delivery.",
    technologies: ["WordPress CMS", "Custom CSS", "Figma Design"],
    link: "https://lldikti3.kemdiktisaintek.go.id/adia/",
  },
  {
    title: "[PT. Amal Ichwan Arindo] - Sahabat Merantau",
    images: [sm_1, sm_2, sm_3, sm_4],
    description:
      "I personally developed and officially deployed this entire online recruitment platform from scratch for PT. Amal Ichwan Arindo. It serves to seamlessly connect Indonesian job seekers with employment opportunities in the Middle East, a project I saw through from its initial concept to its successful launch.",
    technologies: [
      "NextJS",
      "Tailwind CSS",
      "Api Integration",
      "Framer Motion",
      "SwiperJS",
    ],
    link: "https://sahabatmerantau.id/",
  },
  {
    title:
      "[Pixel Sticker Store] - Integrated Digital Catalog & Management System",
    images: [ps1, ps2, ps3, ps4],
    description:
      "I developed this platform from the ground up to provide a dedicated web presence for a pixel sticker store. As a full-stack project, I engineered both the promotional frontend to engage customers and a robust administrative backend to handle content and inventory management.",
    technologies: ["NextJS", "Tailwind CSS", "Supabase", "SwiperJS", "AOS"],
    link: "https://course-website-rizaldhmarsyah.vercel.app/",
  },

  {
    title: "E-Commerce Brand Platform",
    images: [wu_1, wu_2, wu_3, wu_4, wu_5],
    description:
      "This is a personal web project for an outdoor brand, which I fully developed from scratch and brought to live deployment. It functions as a simulated digital storefront and platform, showcasing their products and brand story.",
    technologies: [
      "React Vite",
      "Tailwind CSS",
      "Firebase",
      "Redux Toolkit",
      "SwiperJS",
    ],
    link: "https://whateveroutdoor-ecommerce-website.vercel.app/",
  },
];

export const CONTACT = {
  address: "Jakarta, Indonesia",
  phoneNo: "+62 882 9223 3779",
  email: "rizalnur.work@gmail.com",
};
