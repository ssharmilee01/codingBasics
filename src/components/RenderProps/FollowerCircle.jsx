import React, { useState } from 'react';
import MouseTracker from './MouseTracker';

const FollowerCircle = () => (
    <MouseTracker
        render={({ x, y }) => (
            <div style={{
                position: 'absolute',
                left: x,
                top: y,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'blue',
                pointerEvents: 'none' // Ensures the circle doesn't block the mouse move event
            }} />
        )}
    />
);

export default FollowerCircle;