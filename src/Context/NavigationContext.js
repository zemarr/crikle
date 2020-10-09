import React, { useState, createContext } from 'react';

export const NavigationProvider = (props) => {
    const [navigation, setNavigation] = useState([
        {
            title: 'Home',
            url: '/',
            id: 1
        },
        {
            title: 'Features',
            url: '/features',
            id: 2
        },
        {
            title: 'FAQs',
            url: '/faqs',
            id: 3
        }
    ])
    return(
        <NavigationContext.Provider value={[navigation, setNavigation]}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export const NavigationContext = createContext(); //  This is a context provider. We will be exporting this component to make use of data the context is providing. 
