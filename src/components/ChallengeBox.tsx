import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeFailedButton,
  ChallengeNotActive,
  ChallengeSucceededButton,
} from "../styles/components/styledChallengeBox";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handlechallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header> Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton
              type="button"
              onClick={handlechallengeFailed}
            >
              Falhei
            </ChallengeFailedButton>
            <ChallengeSucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeSucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}
