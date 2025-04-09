import { useEffect } from "react";

function Alert({ message, bgColor = "#ffc0b6", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "150px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: bgColor,
        color: "#54170e",
        fontWeight: "600",
        padding: "25px 60px",
        borderRadius: "25px",
        fontSize: "19px",
        fontFamily: "cursive",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        zIndex: "1000"
      }}
    >
      {message}
    </div>
  );
}

export default Alert;
