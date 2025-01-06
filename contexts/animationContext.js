import { createContext, useState, useContext } from 'react';

// Um in anderen Komponenten abzufragen, ob eine bestimmte Animation aktiv ist
// und sie ggf. deaktivieren zu können.

const AnimationContext = createContext();

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
};

export const AnimationProvider = ({ children }) => {
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const disableAnimation = () => {
        setScrollEnabled(false);
        setTimeout(() => {
            setScrollEnabled(true);
        }, 1000); // Animation wird nach 1 Sekunde wieder aktiviert
    };

    return (
        <AnimationContext.Provider value={{ scrollEnabled, disableAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};
