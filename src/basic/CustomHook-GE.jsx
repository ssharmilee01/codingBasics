import React, { useMemo } from "react";

// 1. THE CUSTOM HOOK
const useCardStyle = (color = "blue", size = "md") => {
  return useMemo(() => {
    // Define Size Mappings
    const sizes = {
      sm: { width: "200px", padding: "10px", fontSize: "12px" },
      md: { width: "300px", padding: "20px", fontSize: "16px" },
      lg: { width: "400px", padding: "30px", fontSize: "20px" },
    };

    // Define Color Mappings
    const colors = {
      blue: { bg: "#e0f2fe", border: "#0ea5e9", text: "#0369a1" },
      red: { bg: "#fee2e2", border: "#ef4444", text: "#b91c1c" },
      green: { bg: "#dcfce7", border: "#22c55e", text: "#15803d" },
    };

    const selectedSize = sizes[size] || sizes.md;
    const selectedColor = colors[color] || colors.blue;

    return {
      backgroundColor: selectedColor.bg,
      border: `2px solid ${selectedColor.border}`,
      color: selectedColor.text,
      width: selectedSize.width,
      padding: selectedSize.padding,
      fontSize: selectedSize.fontSize,
      borderRadius: "8px",
      margin: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
    };
  }, [color, size]); // Only recalculate if color or size changes
};

// 2. THE CARD COMPONENT
const Card = ({ title, content, color, size }) => {
  const styles = useCardStyle(color, size);

  return (
    <div style={styles}>
      <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

// 3. MAIN APP DEMONSTRATION
export default function CustomHook() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <Card
        title="Small Red"
        content="This is a small-sized red card."
        color="red"
        size="sm"
      />

      <Card
        title="Medium Blue"
        content="This is a medium-sized blue card."
        color="blue"
        size="md"
      />
      {/* <Card
        title="Medium Blue"
        content="This is a medium-sized blue card."
        color="blue"
        size="md"
      /> */}
      <Card
        title="Large Green"
        content="This is a large-sized green card."
        color="green"
        size="lg"
      />
    </div>
  );
}
