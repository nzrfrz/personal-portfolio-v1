import { use, useEffect, useMemo, useRef } from 'react';
import { GlobalContext } from '../../context/createContext';

import Globe from 'react-globe.gl';
import earthBlueMarble from "../../assets/earth-blue-marble.jpg";

export function GlobeGL() {
  const earthRef = useRef<any | null>(null);
  const { windowDimension } = use(GlobalContext);

  const N = 10;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 20 + 3,
    propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    repeatPeriod: Math.random() * 2000 + 200
  }));

  const colorInterpolator = (t: number) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;

  const globePosition = useMemo(() => {
    switch (true) {
      case windowDimension.width >= 481:
        return {
          containerTop: "25%",
          containerRight: 32,
          wrapperDimension: 350,
          globeDimension: 450,
        }
      case windowDimension.width <= 480 && windowDimension.width >= 362:
        return {
          containerTop: 16,
          containerRight: "48%",
          wrapperDimension: windowDimension.width / 2,
          globeDimension: windowDimension.width / 1.3,
        }
      case windowDimension.width <= 361:
        return {
          containerTop: "65%",
          containerRight: 16,
          wrapperDimension: windowDimension.width / 2,
          globeDimension: windowDimension.width / 1.3,
        }
      default:
        break;
    }
  }, [windowDimension]);

  useEffect(() => {
    if (!earthRef.current) return;

    earthRef.current.controls().autoRotate = true;
    earthRef.current.controls().autoRotateSpeed = 1;
    earthRef.current.controls().enableZoom = false;
  }, []);

  return (
    <div
      style={{
        opacity: 0.7,
        position: "absolute",
        zIndex: 4,
        top: globePosition?.containerTop,
        right: globePosition?.containerRight,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: globePosition?.wrapperDimension,
          height: globePosition?.wrapperDimension,
        }}
      >
        <Globe
          ref={earthRef}
          width={globePosition?.globeDimension}
          height={globePosition?.globeDimension}
          backgroundColor="rgba(0, 0, 0, 0)"
          globeImageUrl={earthBlueMarble}
          ringsData={gData}
          ringLat={-7.795308}
          ringLng={110.366317}
          ringResolution={64}
          ringAltitude={0.0015}
          ringColor={() => colorInterpolator}
          ringMaxRadius={25}
          ringPropagationSpeed={5}
          ringRepeatPeriod={500}
        />
      </div>
    </div>
  )
};