import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.9)", // optional: dark overlay
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 18,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
          textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
        }}
      >
        {progress < 100 && `${Math.round(progress)}%`}
      </p>
    </Html>
  );
};

export default CanvasLoader;
