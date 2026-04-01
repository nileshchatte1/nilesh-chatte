import CinematicIntro from "@/components/CinematicIntro";
import ExperienceScene from "@/components/ExperienceScene";
import EducationScene from "@/components/EducationScene";
import SkillsScene from "@/components/SkillsScene";
import ContactScene from "@/components/ContactScene";

import cdacLogo from "@/assets/cdac-logo.png";
import lgLogo from "@/assets/lg-logo.png";
import geLogo from "@/assets/ge-logo.png";

const experiences = [
  {
    logo: cdacLogo,
    company: "CDAC ACTS",
    role: "PG Diploma Student",
    period: "2021",
    skills: "Advanced Computing • 'A' Grade • Rank 552",
    projects: [
      {
        name: "Advanced Computing Program",
        details: [
          "Completed PG Diploma in Advanced Computing from India's top CDAC institute",
          "Secured 552nd rank in competitive CCAT entrance exam",
          "Built strong foundation in C++, Data Structures, and Algorithms",
        ],
      },
    ],
  },
  {
    logo: lgLogo,
    company: "LG SOFT INDIA",
    role: "Research Engineer (SDE)",
    period: "Oct 2021 — May 2025",
    skills: "GStreamer • MPEG-DASH • C++ • C",
    projects: [
      {
        name: "GStreamer Upgrade",
        details: [
          "Upgraded GStreamer in WebOS TV from 1.18.2 to 1.24.0",
          "Designed simulation apps improving team efficiency by 30-35%",
          "Led mono-repository migration and unit test development",
        ],
      },
      {
        name: "MPEG-DASH",
        details: [
          "Implemented adaptive bitrate handling and error reporting",
          "Debugged Dashplayer pipelines for smoother playback",
          "Supported hybrid TV test cases in gst-adaptive-demux",
        ],
      },
    ],
  },
  {
    logo: geLogo,
    company: "GE HEALTHCARE",
    role: "Software Engineer (SDE)",
    period: "May 2025 — Present",
    skills: "PET-CT • C++ • DSA • GenAI",
    projects: [
      {
        name: "Total Body",
        details: [
          "Q.Core Power feature development for PET-CT product",
          "Resolved critical issues improving system stability and performance",
        ],
      },
      {
        name: "DMI Qilin Integration",
        details: [
          "Integrated DMI codebase with common CT platform (Qilin)",
          "Managed build system migration from ClearCase to Git",
        ],
      },
    ],
  },
];

const Index = () => {
  return (
    <main className="bg-background">
      <CinematicIntro />

      {/* Experience Journey */}
      {experiences.map((exp, idx) => (
        <ExperienceScene key={exp.company} {...exp} index={idx} />
      ))}

      <SkillsScene />
      <EducationScene />
      <ContactScene />
    </main>
  );
};

export default Index;
