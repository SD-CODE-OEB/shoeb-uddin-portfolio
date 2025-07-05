import React from "react";
import Card from "./Card";
import TrueFocus from "./ui/texts/TrueFocusText";

const DraggableContainer = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex justify-center items-center overflow-hidden"
      suppressHydrationWarning
    >
      <TrueFocus
        sentence="CODE IS CRAFT"
        manualMode={false}
        borderColor="gold"
        blurAmount={3}
        glowColor="rgba(255, 215, 0, 1)"
      />
      <Card
        text="MERN"
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          transform: "rotate(-12deg)",
          width: "auto",
          height: "auto",
          padding: "0.5rem 1rem",
        }}
      />
      <Card
        text="Frontend Engineer"
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          transform: "rotate(8deg)",
          width: "auto",
          padding: "0.5rem 1rem",
          height: "auto",
        }}
      />
      <Card
        image="/pr-logos/typescript.svg"
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          top: "25%",
          right: "20%",
          transform: "rotate(15deg)",
          width: "3rem",
          height: "3rem",
        }}
      />

      <Card
        image="/tools/vscode.svg"
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          top: "10%",
          left: "40%",
          transform: "rotate(-8deg)",
          width: "3.2rem",
          height: "3.2rem",
        }}
      />
      <Card
        image="/pr-logos/react.svg"
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          top: "40%",
          left: "70%",
          transform: "rotate(5deg)",
          width: "3.5rem",
          height: "3.5rem",
        }}
      />
      <Card
        image="/tools/github.svg"
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          bottom: "15%",
          right: "45%",
          transform: "rotate(12deg)",
          width: "3.2rem",
          height: "3.2rem",
          padding: "0",
          backgroundColor: "white",
        }}
      />
    </div>
  );
};

export default DraggableContainer;
