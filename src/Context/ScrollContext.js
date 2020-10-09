import React, { useState, createContext } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    // document.addEventListener('scroll', () => {
    //     scrollPosition(window.scrollY)
    //     console.log(setScrollPosition);
    // })
    
    return (
        <ScrollContext.Provider value={[scrollPosition, setScrollPosition]}>
            {props.children}
        </ScrollContext.Provider>
    )
}

export const withTheme = C => (props) => (
    <ScrollContext.Consumer>
        {value => <C {...value} {...props} />}
    </ScrollContext.Consumer>
)
    
