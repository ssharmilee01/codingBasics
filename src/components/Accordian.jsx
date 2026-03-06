import { useState } from "react";

const Accordian = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (<>

        <div>
            <div style={{ border: "1px solid black", background: "grey", padding: '10px', margin: '5px 0' }} onClick={() => setIsOpen(!isOpen)}>{title}</div>

            {isOpen ? <div style={{ padding: '10px', border: "1px solid black", borderTop: 'none' }}>{content}</div> : null}

        </div>
    </>)
}

export default Accordian;