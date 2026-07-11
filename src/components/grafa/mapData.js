// Location data with approximate % positions on the Latvia SVG map
// Positions calibrated to the LatviaSvgMap viewBox (800x440)
// x/y are percentages relative to the full SVG container

export const locations = [
  // Major cities — western Latvia
  { name: "Liepāja", clients: 6, x: 12, y: 68 },
  { name: "Ventspils", clients: 1, x: 16, y: 32 },
  
  // Jūrmala / Rīga region — central-north
  { name: "Jūrmala", clients: 1, x: 42, y: 38 },
  { name: "Rīga", clients: 16, x: 48, y: 36 },
  { name: "Mārupes novads", clients: 1, x: 45, y: 42 },
  { name: "Olaine", clients: 1, x: 43, y: 48 },
  { name: "Ropažu novads", clients: 1, x: 55, y: 34 },
  
  // Jelgava region — central
  { name: "Jelgava", clients: 30, x: 40, y: 56, isOffice: true },
  { name: "Jelgavas novads", clients: 9, x: 35, y: 62 },
  { name: "Dobele", clients: 1, x: 32, y: 58 },
  
  // Southern Latvia
  { name: "Baldone", clients: 1, x: 49, y: 50 },
  { name: "Bauskas novads", clients: 1, x: 45, y: 72 },
  
  // Eastern region
  { name: "Ogres novads", clients: 2, x: 56, y: 46 },
];

export const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);