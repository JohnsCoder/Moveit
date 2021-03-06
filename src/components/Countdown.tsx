import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const { min,
        sec,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)
    const { startNewChallenge } = useContext(ChallengesContext);

    const [minuteLeft, minuteRight] = String(min).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(sec).padStart(2, '0').split('');



    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>
                        {minuteLeft}
                    </span>
                    <span>
                        {minuteRight}
                    </span>
                </div>
                <span>:</span>
                <div>
                    <span>
                        {secondLeft}
                    </span>
                    <span>
                        {secondRight}
                    </span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar ciclo
                            </button>

                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}>
                                    Iniciar ciclo
                                </button>
                            )
                        }
                    </>
                )}







        </div>
    )
}