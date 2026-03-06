import React, { useEffect } from 'react';

const withLogging = (WrappedComponent) => {
    const WithLogger = (props) => {
        useEffect(() => {
            // Log data on component mount
            console.log(`Component ${getDisplayName(WrappedComponent)} mounted.`);

            return () => {
                // Optional: Log data on component unmount
                console.log(`Component ${getDisplayName(WrappedComponent)} unmounted.`);
            };
        }, []);

        // Pass all the original props through to the wrapped component
        return <WrappedComponent {...props} />;
    };

    // Helper function to get a good display name for debugging in React DevTools
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    WithLogger.displayName = `withLogging(${getDisplayName(WrappedComponent)})`;
    return WithLogger;
};

export default withLogging;