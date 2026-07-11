// Location data with % positions calibrated to LatviaSvgMap viewBox (500x280)
// Country outline spans x: ~30-422, y: ~30-187
// Real coordinates mapped: Liepāja ~21°E/56.5°N, Rīga ~24°E/57°N, 
// Jelgava ~23.7°E/56.65°N, Ventspils ~21.6°E/57.4°N

export const locations = [
  // Western coast
  { name: "Liepāja", clients: 6, x: 9, y: 65 },
  { name: "Ventspils", clients: 1, x: 14, y: 22 },

  // Rīga region — east of Gulf of Riga
  { name: "Jūrmala", clients: 1, x: 38, y: 27 },
  { name: "Rīga", clients: 16, x: 43, y: 24 },
  { name: "Mārupes novads", clients: 1, x: 40, y: 32 },
  { name: "Olaine", clients: 1, x: 37, y: 38 },
  { name: "Ropažu novads", clients: 1, x: 49, y: 22 },

  // Jelgava region — south of Rīga
  { name: "Jelgava", clients: 30, x: 36, y: 48, isOffice: true },
  { name: "Jelgavas novads", clients: 9, x: 31, y: 54 },
  { name: "Dobele", clients: 1, x: 27, y: 50 },

  // Central-south
  { name: "Baldone", clients: 1, x: 45, y: 40 },
  { name: "Bauskas novads", clients: 1, x: 42, y: 62 },

  // East of Rīga
  { name: "Ogres novads", clients: 2, x: 52, y: 34 },
];

export const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);