// Real geographic coordinates (lat/lng) for each location
// Positions are calculated automatically via latLngToPercent()

export const locations = [
  // Western coast
  { name: "Liepāja", clients: 6, lat: 56.5047, lng: 21.0108 },
  { name: "Ventspils", clients: 1, lat: 57.3942, lng: 21.5608 },

  // Rīga region
  { name: "Jūrmala", clients: 1, lat: 56.9680, lng: 23.7708 },
  { name: "Rīga", clients: 16, lat: 56.9496, lng: 24.1052 },
  { name: "Mārupes novads", clients: 1, lat: 56.8985, lng: 24.0460 },
  { name: "Olaine", clients: 1, lat: 56.7853, lng: 23.9388 },
  { name: "Ropažu novads", clients: 1, lat: 56.9750, lng: 24.6350 },

  // Jelgava region
  { name: "Jelgava", clients: 30, lat: 56.6527, lng: 23.7128, isOffice: true },
  { name: "Jelgavas novads", clients: 9, lat: 56.5800, lng: 23.5500 },
  { name: "Dobele", clients: 1, lat: 56.6253, lng: 23.2786 },

  // Central-south
  { name: "Baldone", clients: 1, lat: 56.7445, lng: 24.3920 },
  { name: "Bauskas novads", clients: 1, lat: 56.4077, lng: 24.1945 },

  // East of Rīga
  { name: "Ogres novads", clients: 2, lat: 56.8167, lng: 24.6047 },
];

// --- Bounding box of the uploaded Latvia map image ---
// Calibrated to the specific image: the country outline starts/ends
// with some whitespace. Latvia spans lat ~55.67–58.08, lng ~20.97–28.24.
// The image padding is asymmetric — wider on east side.
const MAP_BOUNDS = {
  north: 58.18,   // top edge of image (lat)
  south: 55.55,   // bottom edge of image (lat)
  west: 20.65,    // left edge of image (lng)
  east: 28.55,    // right edge of image (lng)
};

// Convert lat/lng to percentage position on the map image
export function latLngToPercent(lat, lng) {
  const x = ((lng - MAP_BOUNDS.west) / (MAP_BOUNDS.east - MAP_BOUNDS.west)) * 100;
  const y = ((MAP_BOUNDS.north - lat) / (MAP_BOUNDS.north - MAP_BOUNDS.south)) * 100;
  return { x, y };
}

// Pre-compute x/y for convenience
export const locationsWithXY = locations.map(loc => ({
  ...loc,
  ...latLngToPercent(loc.lat, loc.lng),
}));

export const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);