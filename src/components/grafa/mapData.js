// Location data — x/y are % positions calibrated to the Latvia outline image
// Image: country fills roughly 5%-95% horizontally, 5%-95% vertically
// Geographic reference: Rīga at Gulf of Riga east shore, Jelgava ~40km south of Rīga,
// Liepāja southwest coast, Ventspils northwest coast

export const locations = [
  // Western coast
  { name: "Liepāja", clients: 6, x: 8, y: 72 },
  { name: "Ventspils", clients: 1, x: 16, y: 18 },

  // Rīga region — east of Gulf of Riga
  { name: "Jūrmala", clients: 1, x: 44, y: 22 },
  { name: "Rīga", clients: 16, x: 51, y: 20 },
  { name: "Mārupes novads", clients: 1, x: 48, y: 28 },
  { name: "Olaine", clients: 1, x: 44, y: 35 },
  { name: "Ropažu novads", clients: 1, x: 57, y: 18 },

  // Jelgava region — south of Rīga
  { name: "Jelgava", clients: 30, x: 42, y: 46, isOffice: true },
  { name: "Jelgavas novads", clients: 9, x: 37, y: 53 },
  { name: "Dobele", clients: 1, x: 30, y: 50 },

  // Central-south
  { name: "Baldone", clients: 1, x: 53, y: 38 },
  { name: "Bauskas novads", clients: 1, x: 48, y: 62 },

  // East of Rīga
  { name: "Ogres novads", clients: 2, x: 59, y: 32 },
];

export const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);