export type SushiCut = {
  cut: string;
  fish: string;
  origin: string;
  taste: string;
  texture: string;
  notes?: string;
};

export const sushiCuts: SushiCut[] = [
  {
    cut: 'Otoro',
    fish: 'Bluefin tuna (Maguro)',
    origin: 'Northern Pacific; prized from Oma, Japan',
    taste: 'Ultra-rich and buttery with sweet finish',
    texture: 'Silky, melt-in-your-mouth',
    notes: 'Taken from the fattiest portion of the belly near the head.'
  },
  {
    cut: 'Chutoro',
    fish: 'Bluefin tuna (Maguro)',
    origin: 'Japan, Spain, and Atlantic fisheries',
    taste: 'Balanced umami with gentle sweetness',
    texture: 'Supple with light marbling',
    notes: 'Intermediate belly cut combining lean akami and fatty otoro characteristics.'
  },
  {
    cut: 'Kamatoro',
    fish: 'Bluefin tuna (Maguro)',
    origin: 'Northern Japan; rare cut from gill collar',
    taste: 'Intensely rich with roasted sweetness',
    texture: 'Luxurious, almost custard-like',
    notes: 'Fatty collar meat often gently torched to release aroma.'
  },
  {
    cut: 'Akami',
    fish: 'Bluefin tuna (Maguro)',
    origin: 'Worldwide tuna fisheries; aged in Japan',
    taste: 'Deep umami with subtle iron-forward notes',
    texture: 'Lean yet tender',
    notes: 'Lean loin cut typically marinated (zuké) for depth.'
  },
  {
    cut: 'Salmon Belly',
    fish: 'Atlantic or King salmon',
    origin: 'Norway, Faroe Islands, Pacific Northwest',
    taste: 'Sweet, buttery salmon richness',
    texture: 'Soft with pleasant fattiness',
    notes: 'Often lightly torched to highlight natural oils.'
  },
  {
    cut: 'Iwashi',
    fish: 'Japanese sardine',
    origin: 'Coastal waters of Japan and Korea',
    taste: 'Briny, bold umami with gentle sweetness',
    texture: 'Soft flakes with delicate skin',
    notes: 'Typically served with ginger and scallion to balance oiliness.'
  },
  {
    cut: 'Uni',
    fish: 'Sea urchin roe',
    origin: 'Hokkaido, Santa Barbara, Chilean fjords',
    taste: 'Custardy sweetness with ocean salinity',
    texture: 'Creamy and luscious',
    notes: 'Season and species affect color from gold to deep orange.'
  },
  {
    cut: 'Engawa',
    fish: 'Halibut (Hirame)',
    origin: 'Northern Pacific; Hokkaido and Alaska',
    taste: 'Clean sweetness with subtle minerality',
    texture: 'Delicately chewy with slight snap',
    notes: 'Taken from the fin muscle; often served with yuzu kosho.'
  },
  {
    cut: 'Kanpachi Belly',
    fish: 'Greater amberjack',
    origin: 'Kagoshima, Hawaii, Baja California',
    taste: 'Sweet with gentle nuttiness',
    texture: 'Firm yet yielding, light marbling',
    notes: 'Excellent in summer when fish are leaner and brighter.'
  },
  {
    cut: 'Hokkigai',
    fish: 'Surf clam',
    origin: 'Cold waters of Hokkaido and Atlantic Canada',
    taste: 'Sweet with oceanic brine',
    texture: 'Snappy with crisp bite',
    notes: 'Often blanched to bring out signature red hue.'
  },
  {
    cut: 'Aji',
    fish: 'Horse mackerel',
    origin: 'Seto Inland Sea, Japan; Eastern China Sea',
    taste: 'Savory umami with citrus-friendly brightness',
    texture: 'Tender flesh with slight firmness',
    notes: 'Commonly topped with grated ginger and scallion.'
  },
  {
    cut: 'Anago',
    fish: 'Saltwater conger eel',
    origin: 'Tokyo Bay, Seto Inland Sea',
    taste: 'Delicate sweetness with light soy glaze',
    texture: 'Soft and fluffy after simmering',
    notes: 'Traditionally served warm with nitsume sauce.'
  }
];
