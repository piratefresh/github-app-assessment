import MapboxGeocoder from "@mapbox/mapbox-sdk/services/geocoding";

const geocodingClient = MapboxGeocoder({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string,
});

export async function geocode(address: string) {
  const response = await geocodingClient
    .forwardGeocode({
      query: address,
      limit: 1,
    })
    .send();

  const feature = response.body.features[0];
  return feature.center;
}
