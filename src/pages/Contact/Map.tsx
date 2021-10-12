import useMapBox from "../../scripts/MapBox";

// Interface
interface iProps {
  latitude: number;
  longitude: number;
  zoom: number;
}
// @ts-ignore
export default function Map({ latitude, longitude, zoom }: iProps) {
  const onInitHandler = () => {};
  const { ref } = useMapBox({
    center: [longitude, latitude],
    zoom: zoom,
    onInit: onInitHandler,
  });
  return (
    <div
      ref={ref}
      className="map-container"
      style={{ width: "100%", height: "450px" }}
    />
  );
}
