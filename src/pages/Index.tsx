import { useSceneManager } from "@/hooks/useSceneManager";
import SceneTransition from "@/components/SceneTransition";
import SceneNavigator from "@/components/SceneNavigator";
import IntroScene from "@/components/scenes/IntroScene";
import ExperienceSceneNew from "@/components/scenes/ExperienceSceneNew";
import SkillsSceneNew from "@/components/scenes/SkillsSceneNew";
import EducationSceneNew from "@/components/scenes/EducationSceneNew";
import ContactSceneNew from "@/components/scenes/ContactSceneNew";

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

type TransitionType = "zoom-out" | "dissolve" | "warp" | "slide-up" | "rotate" | "galaxy" | "cinematic-fade";

const sceneTransitions: TransitionType[] = [
  "cinematic-fade",
  "cinematic-fade",
  "cinematic-fade",
  "cinematic-fade",
  "cinematic-fade",
  "cinematic-fade",
  "cinematic-fade",
];

const sceneLabels = ["Intro", "Skills", "GE Health", "LG Soft", "CDAC", "Education", "Contact"];

const Index = () => {
  const totalScenes = 7;
  const { currentScene, direction, goTo } = useSceneManager(totalScenes);

  const renderScene = () => {
    switch (currentScene) {
      case 0:
        return <IntroScene />;
      case 1:
        return <SkillsSceneNew />;
      case 2:
        return <ExperienceSceneNew {...experiences[2]} index={0} />;
      case 3:
        return <ExperienceSceneNew {...experiences[1]} index={1} />;
      case 4:
        return <ExperienceSceneNew {...experiences[0]} index={2} />;
      case 5:
        return <EducationSceneNew />;
      case 6:
        return <ContactSceneNew />;
      default:
        return <IntroScene />;
    }
  };

  return (
    <main className="bg-background h-screen w-screen overflow-hidden relative">
      <SceneTransition
        sceneKey={`scene-${currentScene}`}
        direction={direction}
        transition={sceneTransitions[currentScene]}
      >
        {renderScene()}
      </SceneTransition>

      <SceneNavigator
        totalScenes={totalScenes}
        currentScene={currentScene}
        onNavigate={goTo}
        labels={sceneLabels}
      />
    </main>
  );
};

export default Index;
