import React, { MouseEvent, useContext, useState } from "react";
import styles from "../styles/components/DarkTheme.module.css";

import Switch from "react-switch";
import { BsMoon, BsSun } from "react-icons/bs";
import { DarkThemeContext } from "../contexts/DarkThemeContext";

export function DarkTheme() {
  const { changeTheme } = useContext(DarkThemeContext);

  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    changeTheme()
  };
  return (
    <div className={styles.darkTheme}>
      <Switch
        className={styles.switch}
        onChange={handleChange}
        checked={checked}

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
