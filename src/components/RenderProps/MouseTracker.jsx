
import React, { useState } from 'react';

const MouseTracker = ({ render }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        setCoords({ x: e.clientX, y: e.clientY });
    };

    return (
        <div style={{ height: '100vh', border: '2px solid black' }} onMouseMove={handleMove}>
            {/* This is where the magic happens: we pass state to the function */}
            {render(coords)}
        </div>
    );
};

export default MouseTracker;