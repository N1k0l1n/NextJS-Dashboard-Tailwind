import React from 'react'
import {FaMoon ,FaSun} from "react-icons/fa";
import { useTheme } from 'next-themes';
 
const ThemeChanger = () => {

    const {systemTheme, theme, setTheme} = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'light'){
       return(
        <button className='bg-gray-100 dark:bg-gray-600'
        onClick={() => setTheme('dark')}
        >
        <FaSun/>
      </button>
       )
    }else{
  return (
    <button className='bg-gray-200'
    onClick={() => setTheme('light')}
    >
      <FaMoon/>
    </button>
  )
}
}
export default ThemeChanger
