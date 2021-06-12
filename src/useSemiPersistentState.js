import React from 'react';

/*
    This is a custom hook that will allow us to 
    store data within the browser cache. It is 
    initialized with 'React'. Aim to 
    make custom hooks that are reusable! 
*/
const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};

export default useSemiPersistentState;