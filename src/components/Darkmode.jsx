import React, {useEffect, useState} from 'react'

const Darkmode = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === "true";
    });

    //using the localstorage function of javascript to 
    //store and retrieve the darkMode value

    //first the const saved will give null result which
    //will return false cuz of line 7. then the useEffect
    //will store that and we assigned the [darkMode]
    //dependancy array so that the useeffect will only re
    //render when the darkMode changes

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])
    
    function ThemeSelector () {
        setDarkMode(!darkMode);
    }
    
    const appStyle = {
        backgroundColor: darkMode? '#222' : '#f5f5f5',
        color: darkMode? '#f5f5f5' : '#222',
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-in"
    
    }

  return (
    <>
    <div style={appStyle}>
        <h2>trying to make { darkMode? "Darkmode" : "Lightmode"} toggle selector</h2>
        <p>heres the button for it</p>
        <p>{darkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}</p>
        <button onClick={ThemeSelector}>click to change theme</button>
    </div>
    
    </>
  )
}

export default Darkmode
