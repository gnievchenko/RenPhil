export type LabType =
  | "Wet lab"
  | "Dry lab"
  | "Computational"
  | "Bio"
  | "Chem"
  | "Materials";

export type Lab = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  location: string;
  type: LabType;
  pricePerDay: number;
  rating: number;
  reviews: number;
  hostName: string;
  hostBio: string;
  description: string;
  equipment: string[];
  highlights: string[];
  gradient: [string, string];
};

export const labs: Lab[] = [
  {
    id: "1",
    slug: "crispr-ready-wet-lab-boston",
    title: "CRISPR-Ready Wet Lab",
    tagline: "Fully-stocked molecular biology bench in Kendall Square.",
    location: "Boston, MA",
    type: "Wet lab",
    pricePerDay: 450,
    rating: 4.92,
    reviews: 48,
    hostName: "Dr. Elena Park",
    hostBio: "Former MIT Broad Institute scientist renting out her Cambridge bench.",
    description:
      "A meticulously maintained wet lab optimized for CRISPR-Cas9 workflows. Perfect for academic spinouts, short-term visiting scientists, or biotech startups pre-Series A. Quiet neighborhood of labs with 24/7 keycard access and friendly bench neighbors.",
    equipment: [
      "Bio-Rad thermal cyclers (x2)",
      "-80°C ultra-low freezer",
      "Class II biosafety cabinet",
      "Nanodrop spectrophotometer",
      "Gel electrophoresis setup",
      "Autoclave access",
    ],
    highlights: [
      "Walkable to Kendall/MIT T stop",
      "Reagent fridge stocked with common enzymes",
      "Waste disposal handled by host",
    ],
    gradient: ["#ff7b6b", "#ffb47b"],
  },
  {
    id: "2",
    slug: "high-throughput-sequencing-core-sf",
    title: "High-Throughput Sequencing Core",
    tagline: "Illumina NovaSeq X time by the day.",
    location: "San Francisco, CA",
    type: "Bio",
    pricePerDay: 800,
    rating: 4.87,
    reviews: 112,
    hostName: "Mission Bay Genomics",
    hostBio: "Community-owned sequencing facility in Mission Bay.",
    description:
      "Book bench time adjacent to a NovaSeq X Plus for same-day library prep → sequencing. Shared prep space, dedicated fume hood, and walk-in cold room. Great for labs that don't want to maintain their own sequencing pipeline.",
    equipment: [
      "Illumina NovaSeq X Plus (shared)",
      "10x Chromium X",
      "Agilent TapeStation",
      "Covaris sonicator",
      "Hamilton STAR liquid handler (booked separately)",
    ],
    highlights: [
      "Walk-in cold room",
      "On-site bioinformatics consult available",
      "Direct upload to UCSF BaseSpace mirror",
    ],
    gradient: ["#667eea", "#764ba2"],
  },
  {
    id: "3",
    slug: "materials-characterization-studio-berlin",
    title: "Materials Characterization Studio",
    tagline: "SEM, XRD, and rheology in Kreuzberg.",
    location: "Berlin, Germany",
    type: "Materials",
    pricePerDay: 350,
    rating: 4.78,
    reviews: 31,
    hostName: "Hanna Vogt",
    hostBio: "Materials scientist running a shared characterization lab in a converted industrial space.",
    description:
      "A daylight-filled studio outfitted for materials characterization. Especially popular with polymer, battery, and 2D-materials researchers passing through Berlin. English-speaking host, flexible hours, and coffee in the common area.",
    equipment: [
      "Zeiss SEM (tabletop)",
      "Bruker D2 Phaser XRD",
      "Anton Paar rheometer",
      "DSC + TGA",
      "Optical microscopy suite",
    ],
    highlights: [
      "English-speaking host",
      "Near U1 Kottbusser Tor",
      "Flexible evening access",
    ],
    gradient: ["#2af598", "#009efd"],
  },
  {
    id: "4",
    slug: "gpu-cluster-computational-chem-toronto",
    title: "GPU Cluster for Computational Chem",
    tagline: "8× H100s for docking, MD, and ML screening.",
    location: "Toronto, Canada",
    type: "Computational",
    pricePerDay: 180,
    rating: 4.95,
    reviews: 86,
    hostName: "Northwind Compute",
    hostBio: "Boutique compute provider focused on drug discovery workloads.",
    description:
      "Dedicated GPU time with pre-installed AMBER, GROMACS, AutoDock Vina, and RDKit. Jupyter endpoint provided on request. Billed per day, no minimum commitment. Runs on green Quebec hydro.",
    equipment: [
      "8× NVIDIA H100 80GB",
      "128-core AMD EPYC head node",
      "100 TB NVMe scratch",
      "InfiniBand interconnect",
    ],
    highlights: [
      "Access via SSH or JupyterHub",
      "Hydro-powered, green compute",
      "No setup fee for under 7 days",
    ],
    gradient: ["#8e2de2", "#4a00e0"],
  },
  {
    id: "5",
    slug: "bsl-2-microbiology-suite-cambridge",
    title: "BSL-2 Microbiology Suite",
    tagline: "Certified BSL-2 space near the Cambridge Biomedical Campus.",
    location: "Cambridge, UK",
    type: "Bio",
    pricePerDay: 520,
    rating: 4.81,
    reviews: 57,
    hostName: "Addenbrooke's Shared Labs",
    hostBio: "Non-profit shared lab network serving early-stage UK biotech.",
    description:
      "Full BSL-2 certified suite with biosafety cabinets, incubators, and autoclaves. Ideal for bacterial or mammalian cell work. Hot-desk access to a shared office area for computational analysis while cultures grow.",
    equipment: [
      "4× Class II BSCs",
      "CO₂ incubators (shared)",
      "Shaking incubators",
      "Autoclave + glass wash",
      "Inverted microscope with camera",
    ],
    highlights: [
      "BSL-2 certified",
      "Quiet write-up area adjacent",
      "Easy walk from Cambridge South station",
    ],
    gradient: ["#f093fb", "#f5576c"],
  },
  {
    id: "6",
    slug: "polymer-synthesis-lab-tokyo",
    title: "Polymer Synthesis Lab",
    tagline: "Schlenk lines and a glovebox in Meguro.",
    location: "Tokyo, Japan",
    type: "Chem",
    pricePerDay: 410,
    rating: 4.89,
    reviews: 42,
    hostName: "Kenji Tanaka",
    hostBio: "PhD chemist running a small contract synthesis lab out of a converted machi-koba.",
    description:
      "A compact but serious synthesis lab with dual Schlenk manifolds, an MBraun glovebox, and a well-ventilated fume hood. Glassware and common solvents included. English OK, Japanese preferred.",
    equipment: [
      "MBraun glovebox (O₂ < 1 ppm)",
      "Dual Schlenk manifold",
      "Rotary evaporator",
      "Preparative GPC",
      "NMR access (off-site, included)",
    ],
    highlights: [
      "Included NMR access at partner facility",
      "5 min walk from Meguro station",
      "Glassware cleaning included",
    ],
    gradient: ["#fa709a", "#fee140"],
  },
];

export function getLabBySlug(slug: string): Lab | undefined {
  return labs.find((lab) => lab.slug === slug);
}
