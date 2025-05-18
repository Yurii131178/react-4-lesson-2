import { useState } from "react";

export default function ClickCounter() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);        
    };

    return (
        <button style={{color: "red", backgroundColor: "yellow", marginRight: "5px"}} onClick={handleClick}>Local useState: {clicks}</button>
    );
}