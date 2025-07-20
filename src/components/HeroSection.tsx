import React from "react";
import RotatingText from "./ui/texts/RotatingText";
import VariableProximity from "./ui/texts/ProximityText";
import FuzzyText from "./ui/texts/FuzzyText";

const HeroSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = React.useMemo(() => {
    return windowWidth < 480;
  }, [windowWidth]);
  return (
    <div className="grid grid-cols-1 place-content-center h-full w-full relative transform-3d perspective-midrange">
      <div
        className="grid place-content-center gap-4 h-full w-full z-10"
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <h1 className="text-4xl md:text-6xl mx-auto font-bold wrap">
          <span className="mr-1">I&apos;m </span>
          <VariableProximity
            label={"Shoeb Uddin"}
            className="bg-gradient-to-t from-orange-400 via-gold to-gold-light py-2 bg-clip-text text-transparent rounded-lg"
            fromFontVariationSettings="'wght' 600, 'opsz' 5"
            toFontVariationSettings="'wght' 1200, 'opsz' 20"
            containerRef={containerRef}
            radius={100}
            falloff="exponential"
          />
        </h1>
        <div className="mt-4 -mb-2">
          <FuzzyText
            baseIntensity={0.001}
            hoverIntensity={0.1}
            enableHover={true}
            color="#ffd077"
            fontSize={isMobile ? "1.8rem" : "3rem"}
            fontFamily="inherit"
          >
            Frontend Engineer
          </FuzzyText>
        </div>
        <div className="grid justify-center place-items-center sm:items-center gap-4 sm:flex sm:gap-0 mt-4 text-xl md:text-2xl font-semibold">
          <span className="">I code</span>
          <RotatingText
            texts={[
              "Responsive",
              "Optimized",
              "Scalable",
              "Accessible",
              "Modern",
            ]}
            mainClassName="mx-2 bg-surface text-gold px-4 py-2 text-3xl rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0, scale: 0.2 }}
            animate={{ y: 0, opacity: 1, scale: 1.05 }}
            exit={{ y: "-120%", opacity: 0, scale: 0.2 }}
            staggerDuration={0.025}
            splitLevelClassName="inline-flex "
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <span className="">
            {/* <Dot className="text-gold" size={96} /> */}
            Web Applications
          </span>
        </div>
      </div>
      {/* <div className="hidden md:flex items-center justify-center h-full w-full">
        <TiltedCard
          imageSrc="/pic.jpg"
          altText="Shoeb Uddin - Frontend Engineer"
          captionText="Shoeb Uddin"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="400px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
