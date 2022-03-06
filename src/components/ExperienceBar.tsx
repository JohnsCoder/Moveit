import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
// import styles from "../styles/components/ExperienceBar.module.css";

import { CurrentExperience, ExperienceBarStyle } from "../styles/components/styledExperienceBar";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarStyle>
      <span style={{ color: "" }}> 0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        {percentToNextLevel > 0 && (
          <CurrentExperience
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </CurrentExperience>
        )}
      </div>
      <span style={{ color: "" }}> {experienceToNextLevel} xp </span>
    </ExperienceBarStyle>
  );
}
