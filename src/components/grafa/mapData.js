// Fixed pixel coordinates for the stylized Latvia map image (450 × 297 px).
// These are manually placed anchor points — do NOT recalculate from lat/lng.
// To convert to percentages: x% = x/450*100, y% = y/297*100.

const IMAGE_W = 450;
const IMAGE_H = 297;

const locationsRaw = [
  { name: "Ventspils",        clients: 1,  px: 85,  py: 72  },
  { name: "Liepāja",          clients: 6,  px: 72,  py: 186 },
  { name: "Rīga",             clients: 16, px: 264, py: 93  },
  { name: "Jelgava",          clients: 30, px: 245, py: 122, isOffice: true },
  { name: "Dobele",           clients: 1,  px: 205, py: 145 },
  { name: "Olaine",           clients: 1,  px: 248, py: 112 },
  { name: "Baldone",          clients: 1,  px: 279, py: 123 },
  { name: "Bauskas novads",   clients: 1,  px: 290, py: 142 },
  { name: "Jūrmala",          clients: 1,  px: 228, py: 96  },
  { name: "Mārupes novads",   clients: 1,  px: 240, py: 98  },
  { name: "Ropažu novads",    clients: 1,  px: 274, py: 74  },
  { name: "Ogres novads",     clients: 2,  px: 302, py: 104 },
  { name: "Jelgavas novads",  clients: 9,  px: 220, py: 140 },
];

export const locationsWithXY = locationsRaw.map(loc => ({
  ...loc,
  x: (loc.px / IMAGE_W) * 100,
  y: (loc.py / IMAGE_H) * 100,
}));

export const totalClients = locationsRaw.reduce((sum, l) => sum + l.clients, 0);