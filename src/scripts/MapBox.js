//npm packages
import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// https://dev.to/justincy/using-mapbox-gl-in-react-d2n
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFybWFybWFyY2VsYWNlbGEiLCJhIjoiY2t0dm5mc2tmMmJuODJubXAyOTNvZjMxbSJ9.2_SvCt2qwaGx9Oo_yTWkSQ";

export default function useMapBox({ center, zoom = 13, onInit }) {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/light-v10",
        center,
        zoom,
      });
      map.addControl(new mapboxgl.NavigationControl());
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `Pick up your package here! Coordinates(lng,lat): ${center}`
      );
      const marker = new mapboxgl.Marker({ color: "#EA7C69" })
        .setLngLat(center)
        .setPopup(popup)
        .addTo(map);
      setMap(map);
      onInit(map);
    }
  }, [ref, center, zoom, map, onInit]);
  return { ref };
}
