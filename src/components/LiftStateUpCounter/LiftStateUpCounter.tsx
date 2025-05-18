interface LiftStateUpCounterProps {
    value: number;
    onUpdate: () => void;
}

export default function LiftStateUpCounter ({value, onUpdate}: LiftStateUpCounterProps) {
    return <button 
    style={{color: "yellow", backgroundColor: "red", marginRight: "5px"}}
    onClick={onUpdate}>App common state: {value} </button>;
}

