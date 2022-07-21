import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import classes from "./Maps.module.css";
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCpktu_KRV1YlpAWX42AfMEmHAsON9QED8",
  });
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={{ lat: 44, lng: -88 }}
          mapContainerClassName={classes.mapsCenter}
        ></GoogleMap>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default Map;
