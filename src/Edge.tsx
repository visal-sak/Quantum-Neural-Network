import React, { useEffect } from "react";
import { EdgeProps } from "./models/edgeProps";

const Edge: React.FC<EdgeProps> = ({ startX, startY, endX, endY, animationKey }) => {
    useEffect(() => {
        const timer = setTimeout(() => {}, 50); // dummy animation delay
        return () => clearTimeout(timer);
    }, [animationKey]);

    return (
        <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#9ca3af"
            strokeWidth="1"
            strokeDasharray="5,5"
        >
            <animate
                attributeName="stroke-dashoffset"
                from="10"
                to="0"
                dur="1s"
                begin={`${Math.random()}s`}
                fill="freeze"
            />
        </line>
    );
};

export default Edge;
