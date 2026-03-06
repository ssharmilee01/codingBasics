import { useMemo } from "react"

const CustomHooks = () => {

    const useCardStyle = (color = "blue", size = "sm") => {
        return useMemo(() => {
            const sizes = {
                sm: { width: "200px", padding: "10px", fontSize: "12px" },
                md: { width: "300px", padding: "15px", fontSize: "14px" },
                lg: { width: "400px", padding: "20px", fontSize: "16px" },
            }

            const colors = {
                red: { bg: "#ffe5e5", border: "#ff0000", text: "#b30000" },
                blue: { bg: "#e5f0ff", border: "#0000ff", text: "#0000b3" },
                green: { bg: "#e5ffe5", border: "#00ff00", text: "#00b300" },
            }

            const selectedSize = sizes[size] || sizes.sm
            const selectedColor = colors[color] || colors.blue
            return {
                backgroundColor: selectedColor.bg,
                border: `2px solid ${selectedColor.border}`,
                color: selectedColor.text,
                width: selectedSize.width,
                margin: '10px',
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
            }

        }, [color, size])

    }

    const Card = ({ title, content, color, size }) => {
        const styles = useCardStyle(color, size)
        return (
            <div style={styles}><h1 style={{ fontWeight: "bold", marginBottom: "8px" }}>{title}</h1><p>{content}</p></div>
        )

    }
    return (<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "40px" }}>
        <Card title="Card 1" content="This is the content of Card 1" color="red" size="md" />
        <Card title="Card 2" content="This is the content of Card 2" color="blue" size="lg" />
        <Card title="Card 3" content="This is the content of Card 3" color="green" size="sm" /></div>)
}

export default CustomHooks;