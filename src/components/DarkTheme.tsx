import React, { useContext, useState } from 'react';
import styles from '../styles/components/DarkTheme.module.css';

import Switch from "react-switch";
import { BsMoon, BsSun } from 'react-icons/bs'
import { DarkThemeContext } from '../contexts/DarkThemeContext';

export function DarkTheme() {

    // const { 
    // } = useContext(DarkThemeContext)


    return (
        <div className={styles.darkTheme}>
            <Switch
                className={styles.switch}
                onChange={() => {}}
                checked={false}

                offColor="#A9A9A9"
                onColor="#363636"
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={<BsSun
                    className={styles.uncheckedHandleIcon} />}
                checkedHandleIcon={<BsMoon
                    className={styles.checkedHandleIcon} />}

            />
        </div>
    )
}

