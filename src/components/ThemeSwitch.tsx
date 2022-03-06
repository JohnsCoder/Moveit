import React, {useContext } from "react";
import styles from "../styles/components/DarkTheme.module.css";
import { ThemeContext } from 'styled-components';

import Switch from "react-switch";
import { BsMoon, BsSun } from "react-icons/bs";

interface Props {
  toggleTheme(): void;
}

 const ThemeSwitch: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <div className={styles.darkTheme}>
      <Switch
        className={styles.switch}
        onChange={toggleTheme}
        checked={title === 'dark'}

        offColor="#A9A9A9"
        onColor="#363636"
        uncheckedIcon={true}
        checkedIcon={true}
        uncheckedHandleIcon={<BsSun className={styles.uncheckedHandleIcon} />}
        checkedHandleIcon={<BsMoon className={styles.checkedHandleIcon} />}
        
      />
    </div>
  );
}
export default ThemeSwitch