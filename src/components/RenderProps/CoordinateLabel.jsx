import React, { useState } from 'react';
import MouseTracker from './MouseTracker';

const CoordinateLabel = () => (
    <MouseTracker
        render={({ x, y }) => (
            <p>The mouse is currently at <strong>{x}, {y}</strong></p>
        )}
    />
);

export default CoordinateLabel;