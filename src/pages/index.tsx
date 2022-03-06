import Head from 'next/head';
import React, { useState } from 'react';

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';


import { GetServerSideProps } from 'next';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import styles from '../styles/pages/Index.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import ThemeSwitch from '../components/ThemeSwitch';
import { DarkThemeProvider } from '../contexts/DarkThemeContext'


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {

  const [theme, setTheme] = useState(light);


  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <ThemeProvider theme={theme}>
    <DarkThemeProvider>
  <GlobalStyle/>

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>

        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />
        <div> <ThemeSwitch toggleTheme={toggleTheme}/></div>
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

        </DarkThemeProvider>
        </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}