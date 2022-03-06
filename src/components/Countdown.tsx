import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { CountdownButton, CountdownButtonActive, CountdownContainer } from "../styles/components/styledCountdown";

export function Countdown() {
  const { min, sec, hasFinished, isActive, startCountdown, resetCountdown } =
    useContext(CountdownContext);
  const { startNewChallenge } = useContext(ChallengesContext);

  const [minuteLeft, minuteRight] = String(min).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(sec).padStart(2, "0").split("");

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive
              type="button"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </CountdownButtonActive>
          ) : (
            <CountdownButton
              type="button"
              onClick={startCountdown}
            >
              Iniciar ciclo
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
