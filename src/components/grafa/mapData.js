// Fixed pixel coordinates for the stylized Latvia map image (450 × 297 px).
// These are manually placed anchor points — do NOT recalculate.
// Percentages: x% = px / 450 * 100, y% = py / 297 * 100.

const IMAGE_W = 450;
const IMAGE_H = 297;

const locationsRaw = [
  { name: "Ventspils",        clients: 1,  px: 82,  py: 66  },
  { name: "Liepāja",          clients: 6,  px: 70,  py: 208 },
  { name: "Rīga",             clients: 16, px: 253, py: 93  },
  { name: "Jelgava",          clients: 30, px: 236, py: 126, isOffice: true },
  { name: "Jelgavas novads",  clients: 9,  px: 220, py: 148 },
  { name: "Dobele",           clients: 1,  px: 198, py: 145 },
  { name: "Jūrmala",          clients: 1,  px: 224, py: 97  },
  { name: "Mārupes novads",   clients: 1,  px: 236, py: 101 },
  { name: "Olaine",           clients: 1,  px: 242, py: 114 },
  { name: "Baldone",          clients: 1,  px: 270, py: 123 },
  { name: "Bauskas novads",   clients: 1,  px: 282, py: 147 },
  { name: "Ogres novads",     clients: 2,  px: 296, py: 109 },
  { name: "Ropažu novads",    clients: 1,  px: 266, py: 73  },
];

export const locationsWithXY = locationsRaw.map(loc => ({
  ...loc,
  x: (loc.px / IMAGE_W) * 100,
  y: (loc.py / IMAGE_H) * 100,
}));

export const totalClients = locationsRaw.reduce((sum, l) => sum + l.clients, 0);