"use client";

import { geocode } from "@/lib/geocode";
import { styled } from "@/stitches.confjg";
import React from "react";
import Map, { Marker } from "react-map-gl";
import Pin from "../pin";

const Container = styled("div", {
  position: "relative",
  aspectRatio: "16/9",
});

export const UserMap = ({ location }: { location: string }) => {
  const [coordinates, setCoordinates] = React.useState<number[] | null>(null);

  React.useEffect(() => {
    async function fetchCoordinates() {
      const result = await geocode(location);
      setCoordinates(result);
    }
    fetchCoordinates();
  }, [location]);

  if (!coordinates) return <div>...loading</div>;
  return (
    <Container>
      <Map
        initialViewState={{
          latitude: coordinates[1],
          longitude: coordinates[0],
          zoom: 12,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        {coordinates && (
          <Marker longitude={coordinates[0]} latitude={coordinates[1]}>
            <Pin />
          </Marker>
        )}
      </Map>
    </Container>
  );
};
