export type Category =
  | "3D Printing & Fabrication"
  | "Biochemistry & Cell Culture"
  | "Chromatography"
  | "Mass Spectrometry"
  | "Microscopy & Imaging"
  | "Spectroscopy"
  | "Materials Characterization"
  | "Synthesis & Reactors"
  | "Genomics & Sequencing"
  | "Physics & Specialized";

export const CATEGORIES: Category[] = [
  "3D Printing & Fabrication",
  "Biochemistry & Cell Culture",
  "Chromatography",
  "Mass Spectrometry",
  "Microscopy & Imaging",
  "Spectroscopy",
  "Materials Characterization",
  "Synthesis & Reactors",
  "Genomics & Sequencing",
  "Physics & Specialized",
];

export type Equipment = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  city: string;
  lat: number;
  lng: number;
  pricePerDay: number;
  rating: number;
  reviews: number;
  hostName: string;
  hostBio: string;
  description: string;
  specs: string[];
  highlights: string[];
  gradient: [string, string];
};

const G = {
  sunset: ["#fa709a", "#fee140"] as [string, string],
  coral: ["#ff7b6b", "#ffb47b"] as [string, string],
  indigo: ["#667eea", "#764ba2"] as [string, string],
  mint: ["#2af598", "#009efd"] as [string, string],
  violet: ["#8e2de2", "#4a00e0"] as [string, string],
  peach: ["#f093fb", "#f5576c"] as [string, string],
  teal: ["#43e97b", "#38f9d7"] as [string, string],
  amber: ["#f6d365", "#fda085"] as [string, string],
  ocean: ["#4facfe", "#00f2fe"] as [string, string],
  plum: ["#d299c2", "#fef9d7"] as [string, string],
};

export const equipment: Equipment[] = [
  // 3D Printing & Fabrication (5)
  {
    id: "1",
    slug: "formlabs-form-4-london",
    title: "Formlabs Form 4 SLA Printer",
    tagline: "High-resolution resin printing in Shoreditch.",
    category: "3D Printing & Fabrication",
    city: "London",
    lat: 51.5259,
    lng: -0.0789,
    pricePerDay: 110,
    rating: 4.93,
    reviews: 64,
    hostName: "East London Makerlab",
    hostBio: "Shared prototyping space with on-site technicians.",
    description:
      "Latest-gen Form 4 with 50-micron layer resolution, ideal for microfluidics, dental models, and lost-wax jewellery masters. Resin library on-site includes clear, tough, flexible, and BioMed Amber. Post-processing wash and cure included.",
    specs: [
      "200×125×210 mm build volume",
      "25-micron XY resolution",
      "15+ Formlabs resins stocked",
      "Form Wash and Form Cure included",
      "Induction session on first booking",
    ],
    highlights: [
      "2 min from Old Street station",
      "Technician support included",
      "Overnight prints welcome",
    ],
    gradient: G.sunset,
  },
  {
    id: "2",
    slug: "ultimaker-s5-pro-cambridge",
    title: "Ultimaker S5 Pro Bundle",
    tagline: "Dual-extrusion FDM with auto material handling.",
    category: "3D Printing & Fabrication",
    city: "Cambridge",
    lat: 52.2053,
    lng: 0.1218,
    pricePerDay: 85,
    rating: 4.88,
    reviews: 41,
    hostName: "Granta Prototyping Co-op",
    hostBio: "Independent maker space run by ex-ARM and ex-AstraZeneca engineers.",
    description:
      "S5 Pro Bundle with Air Manager and Material Station for 24/7 hands-off printing. Great for functional engineering prototypes, PEEK lab fittings, and carbon-fibre composites. Day bookings include up to 500g of standard filament.",
    specs: [
      "330×240×300 mm build volume",
      "Dual extrusion (PVA support)",
      "Material Station with 6 spools",
      "HEPA + activated carbon filtration",
      "Prints PLA, PETG, ABS, TPU, PEEK, Nylon-CF",
    ],
    highlights: [
      "6× material station — no swaps",
      "Air Manager for fumes",
      "Free slicing consult for complex parts",
    ],
    gradient: G.coral,
  },
  {
    id: "3",
    slug: "cellink-bio-x-manchester",
    title: "CELLINK BIO X Bioprinter",
    tagline: "Tissue and organoid printing, fully sterile.",
    category: "3D Printing & Fabrication",
    city: "Manchester",
    lat: 53.4668,
    lng: -2.2339,
    pricePerDay: 320,
    rating: 4.79,
    reviews: 22,
    hostName: "Oxford Road Tissue Lab",
    hostBio: "Part of a University of Manchester–adjacent shared facility.",
    description:
      "BIO X with three interchangeable printheads (pneumatic, thermoplastic, photocuring) inside a HEPA-filtered sterile enclosure. Come with your own bioink or use on-site GelMA and Alginate kits. Access to BSC and incubator included.",
    specs: [
      "Three printhead slots",
      "HEPA-filtered enclosure",
      "UV and 405 nm photocuring",
      "BSC + CO₂ incubator on-site",
      "GelMA and alginate stocked",
    ],
    highlights: [
      "Sterile environment guaranteed",
      "Tissue-culture trained staff",
      "Same-floor cold storage",
    ],
    gradient: G.peach,
  },
  {
    id: "4",
    slug: "prusa-mk4s-farm-bristol",
    title: "Prusa MK4S Print Farm (×6)",
    tagline: "Six MK4S printers for overnight parallel runs.",
    category: "3D Printing & Fabrication",
    city: "Bristol",
    lat: 51.4545,
    lng: -2.5879,
    pricePerDay: 95,
    rating: 4.96,
    reviews: 118,
    hostName: "Stokes Croft FabLab",
    hostBio: "Artist- and engineer-run maker space in central Bristol.",
    description:
      "Six MK4S printers networked for parallel production jobs — great for mechanical test specimens, fixtures, or small batch manufacturing. PrusaSlicer profiles pre-tuned for each material. Filament included up to 1 kg per day.",
    specs: [
      "6× Prusa MK4S networked",
      "250×210×220 mm per unit",
      "0.25/0.4/0.6 nozzles available",
      "Live monitoring via Prusa Connect",
      "Up to 1 kg PLA/PETG/ASA included",
    ],
    highlights: [
      "Parallelised jobs via OctoFarm",
      "Live camera access during prints",
      "Printers reset each morning",
    ],
    gradient: G.amber,
  },
  {
    id: "5",
    slug: "markforged-metal-x-sheffield",
    title: "Markforged Metal X System",
    tagline: "Bound-metal printing + sintering in one facility.",
    category: "3D Printing & Fabrication",
    city: "Sheffield",
    lat: 53.3811,
    lng: -1.4701,
    pricePerDay: 250,
    rating: 4.82,
    reviews: 33,
    hostName: "Kelham Island Metalworks",
    hostBio: "Steel City makerspace with heritage-grade machining support.",
    description:
      "Complete Metal X workflow: printer, Wash-1 debinder, and Sinter-2 furnace. 17-4 PH, H13 tool steel, and Inconel 625 stocked. Great for tooling, fixtures, and short-run metal parts that don't justify CNC.",
    specs: [
      "300×220×180 mm build volume",
      "17-4 PH, H13, Inconel 625",
      "Included debind + sinter cycle",
      "Post-machining support available",
      "Up to 400 g metal per booking day",
    ],
    highlights: [
      "Single-day debind + sinter available",
      "On-site machining by arrangement",
      "Heritage CNC bureau next door",
    ],
    gradient: G.indigo,
  },

  // Biochemistry & Cell Culture (5)
  {
    id: "6",
    slug: "eppendorf-bioflo-320-london",
    title: "Eppendorf BioFlo 320 Bioreactor",
    tagline: "10 L autoclavable fermenter with full process control.",
    category: "Biochemistry & Cell Culture",
    city: "London",
    lat: 51.5238,
    lng: -0.1343,
    pricePerDay: 280,
    rating: 4.91,
    reviews: 52,
    hostName: "Imperial Fermentation Co-lab",
    hostBio: "Scale-up partner for London biotech startups.",
    description:
      "Two BioFlo 320 systems configurable for bacterial, yeast, or mammalian work. Full BioCommand SCADA, mass-flow controllers for O₂/CO₂/N₂, and three gas strategies. Sterile sampling ports and in-line pH / DO / OD sensors.",
    specs: [
      "10 L working volume",
      "BioCommand SCADA included",
      "4-gas mixing",
      "In-line pH, DO, OD probes",
      "Autoclave access included",
    ],
    highlights: [
      "Runs up to 5 days per booking",
      "Media prep bay adjacent",
      "Overnight monitoring available",
    ],
    gradient: G.mint,
  },
  {
    id: "7",
    slug: "sartorius-ambr250-cambridge",
    title: "Sartorius ambr 250 HT",
    tagline: "High-throughput parallel mini-bioreactor screening.",
    category: "Biochemistry & Cell Culture",
    city: "Cambridge",
    lat: 52.1719,
    lng: 0.1328,
    pricePerDay: 520,
    rating: 4.86,
    reviews: 28,
    hostName: "Babraham Bioprocess",
    hostBio: "Bioprocess development bureau on the Babraham Research Campus.",
    description:
      "ambr 250 HT with 24 single-use bioreactors — parallelise DoE screens across clones, media, or feed strategies. Fully automated sampling, gas blending, and pH control. Output data streams into your own DOE software or ours.",
    specs: [
      "24× 100–250 mL vessels",
      "Automated liquid handling",
      "Individual gas + pH control",
      "Data export: CSV, SiLA 2, JMP",
      "DoE consult included",
    ],
    highlights: [
      "Cuts clone screening to days",
      "Fully single-use",
      "Near Cambridge North station",
    ],
    gradient: G.teal,
  },
  {
    id: "8",
    slug: "mammalian-cell-culture-suite-oxford",
    title: "Mammalian Cell Culture Suite",
    tagline: "Five Class II cabinets, incubators, and liquid nitrogen storage.",
    category: "Biochemistry & Cell Culture",
    city: "Oxford",
    lat: 51.7520,
    lng: -1.2577,
    pricePerDay: 340,
    rating: 4.84,
    reviews: 46,
    hostName: "Cowley Road Cell Core",
    hostBio: "GMP-adjacent suite used by early-stage Oxford spin-outs.",
    description:
      "Shared-but-scheduled cell culture suite: 5× BSCs, CO₂ incubators, hypoxia chamber, countess II, and LN₂ storage. Ideal for teams running multi-week differentiation protocols. On-site media fridge and autoclave.",
    specs: [
      "5× Class II BSCs",
      "8× CO₂ incubators",
      "Hypoxia chamber (1–21% O₂)",
      "LN₂ dewar storage",
      "Countess II + inverted scope",
    ],
    highlights: [
      "Cell bank storage included",
      "Shared media fridge",
      "Near John Radcliffe hospital",
    ],
    gradient: G.coral,
  },
  {
    id: "9",
    slug: "bsl2-fermentation-hall-norwich",
    title: "BSL-2 Fermentation Hall",
    tagline: "Three 50 L stainless fermenters on a shared platform.",
    category: "Biochemistry & Cell Culture",
    city: "Norwich",
    lat: 52.6309,
    lng: 1.2974,
    pricePerDay: 460,
    rating: 4.77,
    reviews: 19,
    hostName: "Earlham Bioprocess Hall",
    hostBio: "Industrial-scale pilot facility on the Norwich Research Park.",
    description:
      "Pilot-scale BSL-2 fermentation hall with three 50 L stainless-steel fermenters, CIP/SIP lines, and downstream harvest support. Host operators run the systems for you — you provide strain and protocol. Ideal for scale-up before GMP.",
    specs: [
      "3× 50 L stainless fermenters",
      "CIP/SIP capable",
      "Host-operated runs",
      "Centrifugal harvest on-site",
      "BSL-2 certified",
    ],
    highlights: [
      "Host runs the fermentations",
      "Downstream harvest adjacent",
      "On-site product storage",
    ],
    gradient: G.mint,
  },
  {
    id: "10",
    slug: "hplc-bioreactor-pairing-nottingham",
    title: "Applikon MiniBio 250",
    tagline: "Bench-scale four-vessel fermenter for strain screens.",
    category: "Biochemistry & Cell Culture",
    city: "Nottingham",
    lat: 52.9548,
    lng: -1.1581,
    pricePerDay: 240,
    rating: 4.81,
    reviews: 24,
    hostName: "Jubilee Campus Bioworks",
    hostBio: "University-adjacent shared lab used by postdocs and startups.",
    description:
      "Four-vessel MiniBio 250 platform with my-Control, independent gas and temperature control, and exhaust condensers. Great for E. coli fed-batch, yeast aerobic culture, or anaerobic screens. Low-cost day rate for academic users.",
    specs: [
      "4× 250 mL vessels",
      "Individual gas mixing",
      "pH/DO/T control per vessel",
      "Exhaust condensers",
      "Academic discount on request",
    ],
    highlights: [
      "Great for DoE strain screens",
      "Autoclave next door",
      "Tram stop across the street",
    ],
    gradient: G.teal,
  },

  // Chromatography (4)
  {
    id: "11",
    slug: "agilent-1290-uplc-edinburgh",
    title: "Agilent 1290 Infinity II UPLC",
    tagline: "High-pressure UPLC with DAD and fraction collector.",
    category: "Chromatography",
    city: "Edinburgh",
    lat: 55.9533,
    lng: -3.1883,
    pricePerDay: 320,
    rating: 4.89,
    reviews: 58,
    hostName: "Bioquarter Analytical",
    hostBio: "Analytical chemistry partner to Edinburgh Bioquarter tenants.",
    description:
      "Fully maintained 1290 Infinity II with 1290 ISO pump, DAD, and Fraction Collector II. Column library includes C18, HILIC, and chiral. MassHunter training session included on first day.",
    specs: [
      "1290 ISO binary pump",
      "DAD with 60 Hz acquisition",
      "Fraction collector",
      "Column library on-site",
      "MassHunter included",
    ],
    highlights: [
      "On-site method development help",
      "Dry ice deliveries accepted",
      "Bioquarter parking",
    ],
    gradient: G.ocean,
  },
  {
    id: "12",
    slug: "waters-akta-fplc-york",
    title: "Cytiva ÄKTA pure FPLC",
    tagline: "Protein purification with auto column switching.",
    category: "Chromatography",
    city: "York",
    lat: 53.9600,
    lng: -1.0873,
    pricePerDay: 220,
    rating: 4.83,
    reviews: 37,
    hostName: "Heslington Protein Core",
    hostBio: "York research-park shared core facility.",
    description:
      "ÄKTA pure 25 with dual pumps, UV/conductivity/pH monitors, and 7-column valve. Standard HisTrap, GSTrap, and SEC columns stocked. Cold room access during purification runs.",
    specs: [
      "25 mL/min max flow",
      "7-position column valve",
      "UV, conductivity, pH monitors",
      "HisTrap / GSTrap / SEC stocked",
      "Cold room adjacent",
    ],
    highlights: [
      "Cold-room access during runs",
      "UNICORN method templates",
      "SDS-PAGE bench included",
    ],
    gradient: G.violet,
  },
  {
    id: "13",
    slug: "thermo-vanquish-hplc-leeds",
    title: "Thermo Vanquish Flex HPLC",
    tagline: "Biocompatible HPLC tuned for biologics.",
    category: "Chromatography",
    city: "Leeds",
    lat: 53.8008,
    lng: -1.5491,
    pricePerDay: 210,
    rating: 4.8,
    reviews: 29,
    hostName: "White Rose Analytical",
    hostBio: "Regional analytical services bureau.",
    description:
      "Vanquish Flex Duo LC system configured for SEC, IEX, and reverse-phase of biologics. Columns: MAbPac SEC-1, ProPac, Accucore. Extended pressure range perfect for fast gradients.",
    specs: [
      "Dual-gradient capability",
      "MAbPac and ProPac columns",
      "1250 bar system pressure",
      "Chromeleon software",
      "Temperature-controlled autosampler",
    ],
    highlights: [
      "Biocompatible flow path",
      "Fast academic turnaround",
      "Method transfer help",
    ],
    gradient: G.ocean,
  },
  {
    id: "14",
    slug: "agilent-gc-ms-8890-glasgow",
    title: "Agilent 8890 GC + 5977B MS",
    tagline: "GC-MS with EI/CI source and autosampler.",
    category: "Chromatography",
    city: "Glasgow",
    lat: 55.8642,
    lng: -4.2518,
    pricePerDay: 290,
    rating: 4.85,
    reviews: 41,
    hostName: "Clyde Valley Labs",
    hostBio: "Independent analytical bureau near the University of Strathclyde.",
    description:
      "Fully-maintained 8890 GC paired with a 5977B MSD. EI and CI sources available on 24h notice. DB-5, DB-WAX, and HP-FFAP columns stocked. Suits environmental, metabolomics, and petrochem work.",
    specs: [
      "5977B MSD (EI standard, CI on request)",
      "DB-5, DB-WAX, HP-FFAP columns",
      "PAL3 autosampler",
      "MassHunter Unknowns Analysis",
      "Daily blank runs included",
    ],
    highlights: [
      "CI source available",
      "Metabolomics-friendly library",
      "Same-day data export",
    ],
    gradient: G.indigo,
  },

  // Mass Spectrometry (4)
  {
    id: "15",
    slug: "thermo-qexactive-hf-london",
    title: "Thermo Q Exactive HF Orbitrap",
    tagline: "High-res accurate-mass proteomics and metabolomics.",
    category: "Mass Spectrometry",
    city: "London",
    lat: 51.5154,
    lng: -0.1754,
    pricePerDay: 950,
    rating: 4.94,
    reviews: 73,
    hostName: "Paddington MS Core",
    hostBio: "High-end mass spec facility serving Imperial and UCL groups.",
    description:
      "Q Exactive HF with EASY-nLC 1200. Resolution up to 240,000 at m/z 200. Standard DDA and DIA methods available; bookings include up to 24 hours of instrument time. Data delivered via on-site Proteome Discoverer or your own pipeline.",
    specs: [
      "240,000 resolution at m/z 200",
      "EASY-nLC 1200 front end",
      "DDA and DIA methods",
      "Proteome Discoverer + Spectronaut",
      "Shared column library (C18, HILIC)",
    ],
    highlights: [
      "Proteomics tech on call",
      "Included data processing hour",
      "Near Paddington Basin",
    ],
    gradient: G.violet,
  },
  {
    id: "16",
    slug: "waters-xevo-qtof-cambridge",
    title: "Waters Xevo G3 QTof",
    tagline: "High-res QTof for small-molecule ID and quant.",
    category: "Mass Spectrometry",
    city: "Cambridge",
    lat: 52.1949,
    lng: 0.1313,
    pricePerDay: 780,
    rating: 4.88,
    reviews: 44,
    hostName: "Granta Park Analytics",
    hostBio: "Contract analytical partner on Granta Park.",
    description:
      "Xevo G3 QTof paired with an ACQUITY Premier UPLC. 100k resolution, HDMS ion mobility. Great for impurity ID, metabolite profiling, and natural products. Standard and isotope-labelled reference methods available.",
    specs: [
      "100k resolution",
      "HDMS ion mobility",
      "ACQUITY Premier front end",
      "UNIFI software",
      "Isotope-labelled methods available",
    ],
    highlights: [
      "Ion mobility included",
      "Impurity ID expertise",
      "Cambridge South 6 min walk",
    ],
    gradient: G.indigo,
  },
  {
    id: "17",
    slug: "bruker-maldi-tof-birmingham",
    title: "Bruker rapifleX MALDI-TOF/TOF",
    tagline: "Fast MALDI imaging and peptide mass fingerprinting.",
    category: "Mass Spectrometry",
    city: "Birmingham",
    lat: 52.4862,
    lng: -1.8904,
    pricePerDay: 620,
    rating: 4.82,
    reviews: 31,
    hostName: "Aston Spectrometry",
    hostBio: "Aston University–adjacent analytical service.",
    description:
      "rapifleX with Smartbeam 3D laser for fast imaging (up to 50 pix/sec) plus classic PMF and protein ID. Matrix application via sublimation or ImagePrep. Training on flexImaging included.",
    specs: [
      "Smartbeam 3D laser",
      "Up to 50 pix/sec imaging",
      "Sublimation + ImagePrep matrix prep",
      "flexImaging training included",
      "SCiLS Lab processing available",
    ],
    highlights: [
      "Tissue imaging ready",
      "SCiLS Lab analysis included",
      "Matrix library stocked",
    ],
    gradient: G.peach,
  },
  {
    id: "18",
    slug: "sciex-triple-quad-manchester",
    title: "SCIEX Triple Quad 7500",
    tagline: "Sensitive triple-quad LC-MS for targeted quant.",
    category: "Mass Spectrometry",
    city: "Manchester",
    lat: 53.4722,
    lng: -2.2339,
    pricePerDay: 680,
    rating: 4.86,
    reviews: 38,
    hostName: "Corridor Analytical",
    hostBio: "Oxford Road Corridor analytical services.",
    description:
      "Triple Quad 7500 paired with ExionLC AD. Industry-standard for pharma and clinical quant. Standard MRM methods for pharmacokinetics, bile acids, and neurotransmitters. GLP-aware host.",
    specs: [
      "OptiFlow Pro ion source",
      "ExionLC AD front end",
      "SCIEX OS software",
      "Validated MRM methods library",
      "GLP-aware workflow",
    ],
    highlights: [
      "GLP-aware SOPs",
      "Method validation help",
      "Reference standards stocked",
    ],
    gradient: G.violet,
  },

  // Microscopy & Imaging (5)
  {
    id: "19",
    slug: "zeiss-sigma-sem-bristol",
    title: "Zeiss Sigma 300 FE-SEM",
    tagline: "High-res FE-SEM with EDS and EBSD.",
    category: "Microscopy & Imaging",
    city: "Bristol",
    lat: 51.4585,
    lng: -2.6030,
    pricePerDay: 540,
    rating: 4.91,
    reviews: 54,
    hostName: "Clifton Microscopy Suite",
    hostBio: "Independent electron microscopy bureau near the University of Bristol.",
    description:
      "Sigma 300 with Oxford Instruments EDS (X-MaxN 150) and EBSD. In-lens SE and standard BSE detectors. Samples stage with tilt and rotation. Sputter coater and critical point dryer on-site.",
    specs: [
      "1 nm resolution at 20 kV",
      "Oxford X-MaxN 150 EDS",
      "Symmetry EBSD",
      "Sputter coater + CPD on-site",
      "5-axis eucentric stage",
    ],
    highlights: [
      "EDS + EBSD on same stage",
      "Sample prep included",
      "Experienced operator on call",
    ],
    gradient: G.indigo,
  },
  {
    id: "20",
    slug: "jeol-2100-tem-oxford",
    title: "JEOL JEM-2100 TEM",
    tagline: "200 kV TEM with high-res imaging and SAED.",
    category: "Microscopy & Imaging",
    city: "Oxford",
    lat: 51.7614,
    lng: -1.2636,
    pricePerDay: 720,
    rating: 4.87,
    reviews: 43,
    hostName: "Begbroke TEM Centre",
    hostBio: "Begbroke Science Park shared electron microscopy centre.",
    description:
      "JEM-2100 at 200 kV, LaB6 source, Gatan OneView camera. Excellent for nanomaterial HRTEM, SAED, and bright/dark field imaging. Cryo holder available by request (booked separately).",
    specs: [
      "200 kV LaB6 source",
      "Gatan OneView camera",
      "0.23 nm point resolution",
      "Cryo holder on request",
      "DigitalMicrograph included",
    ],
    highlights: [
      "Cryo option available",
      "Operator-assisted sessions",
      "Free hour of sample prep",
    ],
    gradient: G.coral,
  },
  {
    id: "21",
    slug: "leica-sp8-confocal-london",
    title: "Leica SP8 X Confocal",
    tagline: "White-light confocal with FLIM and STED.",
    category: "Microscopy & Imaging",
    city: "London",
    lat: 51.5232,
    lng: -0.1336,
    pricePerDay: 460,
    rating: 4.9,
    reviews: 67,
    hostName: "Euston Imaging",
    hostBio: "Shared imaging suite near UCL.",
    description:
      "SP8 X with white-light laser, HyD detectors, FLIM, and STED capability (add-on). Great for fixed samples, live cells, and FRET / FRAP studies. LAS X and Huygens deconvolution on the analysis PC.",
    specs: [
      "White-light laser (470–670 nm)",
      "HyD hybrid detectors",
      "FLIM + STED available",
      "Incubator for live cell",
      "Huygens deconvolution",
    ],
    highlights: [
      "Live-cell incubator",
      "Super-res STED add-on",
      "Same-day analysis PC",
    ],
    gradient: G.ocean,
  },
  {
    id: "22",
    slug: "bruker-dimension-afm-liverpool",
    title: "Bruker Dimension Icon AFM",
    tagline: "High-res AFM with PeakForce and electrical modes.",
    category: "Microscopy & Imaging",
    city: "Liverpool",
    lat: 53.4084,
    lng: -2.9916,
    pricePerDay: 380,
    rating: 4.78,
    reviews: 26,
    hostName: "Albert Dock Nano",
    hostBio: "Nanoscale characterisation bureau on the Albert Dock.",
    description:
      "Dimension Icon with PeakForce Tapping, KPFM, and conductive AFM modes. Ideal for polymer films, 2D materials, and battery surfaces. Fluid cell available for biological samples.",
    specs: [
      "PeakForce Tapping + QNM",
      "KPFM + C-AFM modes",
      "Fluid cell for bio samples",
      "NanoScope Analysis software",
      "Tip library stocked",
    ],
    highlights: [
      "Bio fluid-cell ready",
      "Electrical modes",
      "Dockside parking",
    ],
    gradient: G.mint,
  },
  {
    id: "23",
    slug: "andor-dragonfly-spinning-disk-cardiff",
    title: "Andor Dragonfly Spinning Disk",
    tagline: "Fast live-cell confocal for long time-lapses.",
    category: "Microscopy & Imaging",
    city: "Cardiff",
    lat: 51.4816,
    lng: -3.1791,
    pricePerDay: 410,
    rating: 4.84,
    reviews: 32,
    hostName: "Bute Life Imaging",
    hostBio: "Life-science imaging facility near Cardiff Bay.",
    description:
      "Andor Dragonfly 500 on a Nikon Ti2 body. Sona sCMOS detectors, 488/561/640 laser lines, and full stage-top incubator. Perfect for multi-hour live imaging with minimal photobleaching.",
    specs: [
      "Dragonfly 500 spinning disk",
      "Sona sCMOS detectors",
      "Stage-top incubator + CO₂",
      "Perfect Focus System",
      "Fusion software",
    ],
    highlights: [
      "Multi-day live imaging",
      "Low photobleaching",
      "Cardiff Bay 10 min",
    ],
    gradient: G.peach,
  },

  // Spectroscopy (4)
  {
    id: "24",
    slug: "bruker-avance-600mhz-nmr-durham",
    title: "Bruker AVANCE 600 MHz NMR",
    tagline: "Cryoprobe 600 MHz for high-sensitivity small-molecule work.",
    category: "Spectroscopy",
    city: "Durham",
    lat: 54.7753,
    lng: -1.5849,
    pricePerDay: 480,
    rating: 4.93,
    reviews: 51,
    hostName: "Palace Green NMR",
    hostBio: "University of Durham–adjacent shared NMR centre.",
    description:
      "AVANCE NEO 600 MHz with TCI cryoprobe and SampleXpress autosampler. 1D, 2D, and diffusion experiments scripted and ready. Remote data pull via FTP included.",
    specs: [
      "600 MHz AVANCE NEO",
      "TCI 5 mm cryoprobe",
      "SampleXpress autosampler",
      "1D, 2D, DOSY templates",
      "Remote FTP data pull",
    ],
    highlights: [
      "Cryoprobe sensitivity",
      "Remote data pull",
      "Autosampler overnight queues",
    ],
    gradient: G.sunset,
  },
  {
    id: "25",
    slug: "renishaw-raman-invia-nottingham",
    title: "Renishaw inVia Qontor Raman",
    tagline: "Confocal Raman with LiveTrack auto-focus.",
    category: "Spectroscopy",
    city: "Nottingham",
    lat: 52.9386,
    lng: -1.1950,
    pricePerDay: 260,
    rating: 4.79,
    reviews: 23,
    hostName: "Jubilee Raman Core",
    hostBio: "Shared Raman facility at the University of Nottingham.",
    description:
      "inVia Qontor with 532/633/785 nm lasers, LiveTrack, and StreamLine mapping. Suits pharmaceutical polymorphs, graphene characterisation, and pigment studies. WiRE 5 templates provided.",
    specs: [
      "532/633/785 nm lasers",
      "LiveTrack dynamic focus",
      "StreamLine mapping",
      "WiRE 5 software",
      "Heated + cooled sample stages",
    ],
    highlights: [
      "StreamLine mapping",
      "Multi-laser in one session",
      "Campus car park included",
    ],
    gradient: G.teal,
  },
  {
    id: "26",
    slug: "thermo-nicolet-ftir-swansea",
    title: "Thermo Nicolet iS50 FTIR",
    tagline: "FTIR with ATR, diffuse reflectance, and far-IR.",
    category: "Spectroscopy",
    city: "Swansea",
    lat: 51.6214,
    lng: -3.9436,
    pricePerDay: 140,
    rating: 4.83,
    reviews: 28,
    hostName: "Mumbles Analytical",
    hostBio: "Independent analytical lab in the Mumbles.",
    description:
      "iS50 FTIR with built-in ATR, DRIFTS accessory, and far-IR module (to 50 cm⁻¹). Great for polymer ID, pharma raw-material checks, and mineralogy. OMNIC Specta library included.",
    specs: [
      "Built-in diamond ATR",
      "DRIFTS + far-IR (50 cm⁻¹)",
      "OMNIC Specta library",
      "Heated ATR crystal",
      "Transmission cell included",
    ],
    highlights: [
      "Low day rate",
      "Spectral library included",
      "Walk-ins welcome",
    ],
    gradient: G.amber,
  },
  {
    id: "27",
    slug: "agilent-cary-uv-vis-aberdeen",
    title: "Agilent Cary 3500 UV-Vis",
    tagline: "Multicell UV-Vis with Peltier temperature control.",
    category: "Spectroscopy",
    city: "Aberdeen",
    lat: 57.1497,
    lng: -2.0943,
    pricePerDay: 85,
    rating: 4.76,
    reviews: 21,
    hostName: "Granite City Labs",
    hostBio: "Community-run shared lab on the Aberdeen Science Park.",
    description:
      "Cary 3500 Multicell with 8-cell Peltier, kinetic and thermal melt modules, and scanning 190–1100 nm. Suits DNA quant, protein assays, and enzyme kinetics. Same-day booking common.",
    specs: [
      "190–1100 nm range",
      "8-cell Peltier",
      "Thermal melt module",
      "Kinetic mode included",
      "Cary WorkStation software",
    ],
    highlights: [
      "Often available same day",
      "Kinetics-ready",
      "Science park access",
    ],
    gradient: G.ocean,
  },

  // Materials Characterization (4)
  {
    id: "28",
    slug: "bruker-d8-xrd-southampton",
    title: "Bruker D8 ADVANCE XRD",
    tagline: "Powder XRD with Cu / Mo sources and variable temp stage.",
    category: "Materials Characterization",
    city: "Southampton",
    lat: 50.9097,
    lng: -1.4044,
    pricePerDay: 230,
    rating: 4.87,
    reviews: 39,
    hostName: "Solent Materials",
    hostBio: "Shared materials lab near the University of Southampton.",
    description:
      "D8 ADVANCE with LynxEye XE-T detector, swap-in Cu and Mo sources, and Anton Paar HTK 1200N high-temperature stage. Diffrac.EVA and TOPAS installed for indexing, Rietveld refinement.",
    specs: [
      "LynxEye XE-T detector",
      "Cu Kα + Mo Kα",
      "HTK 1200N VT stage (RT–1200°C)",
      "Diffrac.EVA + TOPAS",
      "Auto-changer 9-position",
    ],
    highlights: [
      "VT stage to 1200°C",
      "TOPAS Rietveld ready",
      "Same-week slots",
    ],
    gradient: G.indigo,
  },
  {
    id: "29",
    slug: "ta-dsc-tga-york",
    title: "TA Discovery DSC + TGA Pair",
    tagline: "Thermal analysis suite with auto-sampler.",
    category: "Materials Characterization",
    city: "York",
    lat: 53.9460,
    lng: -1.0582,
    pricePerDay: 180,
    rating: 4.84,
    reviews: 33,
    hostName: "Heslington Thermal",
    hostBio: "Thermal analysis bureau on the Heslington East campus.",
    description:
      "TA Discovery DSC 2500 and TGA 5500 paired with a 50-position autosampler. -90°C to 725°C range on DSC. TRIOS software + MDSC methods configured. Great for polymers and pharmaceuticals.",
    specs: [
      "DSC 2500: -90 to 725°C",
      "TGA 5500: IR-heated",
      "50-position autosampler",
      "MDSC + HiResTGA methods",
      "TRIOS analysis included",
    ],
    highlights: [
      "Autosampler runs overnight",
      "MDSC ready",
      "Polymers & pharma friendly",
    ],
    gradient: G.amber,
  },
  {
    id: "30",
    slug: "anton-paar-mcr-302-brighton",
    title: "Anton Paar MCR 302 Rheometer",
    tagline: "Modular rheometer with SALS and Peltier.",
    category: "Materials Characterization",
    city: "Brighton",
    lat: 50.8225,
    lng: -0.1372,
    pricePerDay: 220,
    rating: 4.81,
    reviews: 25,
    hostName: "Lanes Rheology",
    hostBio: "Small-batch rheology bureau near the North Laine.",
    description:
      "MCR 302 with SALS optical add-on, Peltier (-30 to 200°C), and interchangeable cone-plate / plate-plate / Couette geometries. Great for polymer melts, foods, and cosmetics.",
    specs: [
      "Peltier stage -30 to 200°C",
      "SALS optical module",
      "Cone-plate, plate-plate, Couette",
      "RheoCompass software",
      "Air bearing, low-friction",
    ],
    highlights: [
      "Optical SALS add-on",
      "Food-grade cleaning",
      "Cosmetics-friendly host",
    ],
    gradient: G.peach,
  },
  {
    id: "31",
    slug: "bruker-contour-optical-profilometer-bath",
    title: "Bruker ContourX-200 Profilometer",
    tagline: "Non-contact 3D optical profilometry.",
    category: "Materials Characterization",
    city: "Bath",
    lat: 51.3811,
    lng: -2.3590,
    pricePerDay: 170,
    rating: 4.77,
    reviews: 18,
    hostName: "Weston Surface Lab",
    hostBio: "Surface metrology bureau on the Bath Science Park.",
    description:
      "ContourX-200 with Vision64 software. Sub-nanometre vertical resolution over wide lateral areas. Ideal for surface roughness, step height, and texture analysis of MEMS, films, and wear scars.",
    specs: [
      "Sub-nm vertical resolution",
      "Vision64 analysis",
      "100×100 mm XY stage",
      "PSI, VSI, VXI modes",
      "ASME B46.1 compliant",
    ],
    highlights: [
      "Non-contact measurement",
      "MEMS-friendly",
      "Bath Spa 8 min drive",
    ],
    gradient: G.teal,
  },

  // Synthesis & Reactors (4)
  {
    id: "32",
    slug: "dual-schlenk-glovebox-line-london",
    title: "Dual Schlenk + MBraun Glovebox",
    tagline: "Air-free synthesis bench with sub-ppm glovebox.",
    category: "Synthesis & Reactors",
    city: "London",
    lat: 51.5122,
    lng: -0.1215,
    pricePerDay: 290,
    rating: 4.88,
    reviews: 47,
    hostName: "Bloomsbury Synthesis Co-lab",
    hostBio: "Shared organic synthesis lab near UCL.",
    description:
      "Two fume hoods, each with a dual-manifold Schlenk line, plus an MBraun UNIlab Pro glovebox (O₂/H₂O < 1 ppm). Solvents purified via an MBraun SPS-5. Hot plates, rotovap, and vacuum oven shared.",
    specs: [
      "MBraun UNIlab Pro (<1 ppm)",
      "MBraun SPS-5 solvent system",
      "Dual Schlenk manifolds ×2",
      "Rotovap + vacuum oven",
      "Fume hoods with N₂ lines",
    ],
    highlights: [
      "Purified solvents included",
      "Glassware cleaning service",
      "UCL 5 min walk",
    ],
    gradient: G.violet,
  },
  {
    id: "33",
    slug: "parr-5500-autoclave-newcastle",
    title: "Parr 5500 Autoclave Reactor",
    tagline: "High-pressure 1 L stirred autoclave.",
    category: "Synthesis & Reactors",
    city: "Newcastle",
    lat: 54.9783,
    lng: -1.6178,
    pricePerDay: 240,
    rating: 4.82,
    reviews: 26,
    hostName: "Tyne Valley Reactors",
    hostBio: "Shared high-pressure reactor facility on the Newcastle riverside.",
    description:
      "Parr 5500 1 L stirred reactor, 350 bar / 350°C max. Gas entrainment impeller, rupture disc, and SpecView 4 process control. Suits hydrogenation, CO₂ fixation, and hydrothermal synthesis.",
    specs: [
      "1 L working volume",
      "350 bar / 350°C max",
      "Gas entrainment impeller",
      "SpecView 4 SCADA",
      "H₂, CO, CO₂ gas panel",
    ],
    highlights: [
      "Hydrogenation-ready",
      "CO₂ fixation capable",
      "Quayside bars after work",
    ],
    gradient: G.indigo,
  },
  {
    id: "34",
    slug: "vapourtec-flow-chemistry-leeds",
    title: "Vapourtec R-Series Flow Reactor",
    tagline: "Continuous-flow synthesis with UV module.",
    category: "Synthesis & Reactors",
    city: "Leeds",
    lat: 53.8067,
    lng: -1.5556,
    pricePerDay: 260,
    rating: 4.85,
    reviews: 32,
    hostName: "Hyde Park Flow Chem",
    hostBio: "University of Leeds–spinout flow chemistry lab.",
    description:
      "Vapourtec R-Series with four pumps, tube reactors up to 150°C, and UV-150 photochemical module. Online UV monitor and fraction collector. Ideal for photoredox, metallaphotoredox, and hazardous intermediate chemistry.",
    specs: [
      "4 pumps, up to 10 mL/min",
      "Tube reactors to 150°C",
      "UV-150 photochemical module",
      "Online UV detector",
      "Fraction collector included",
    ],
    highlights: [
      "Photoredox-ready",
      "Handles hazardous intermediates",
      "Campus access",
    ],
    gradient: G.sunset,
  },
  {
    id: "35",
    slug: "cem-discover-microwave-exeter",
    title: "CEM Discover SP Microwave Reactor",
    tagline: "Focused microwave reactor for rapid optimisation.",
    category: "Synthesis & Reactors",
    city: "Exeter",
    lat: 50.7184,
    lng: -3.5339,
    pricePerDay: 190,
    rating: 4.79,
    reviews: 22,
    hostName: "Exe Chemistry Bench",
    hostBio: "Chemistry hot-desk lab on Exeter Science Park.",
    description:
      "Discover SP with Explorer 48 autosampler. 10 mL and 35 mL vials. Fast parallel reaction optimisation with active IR temperature monitoring. Synergy software for DoE runs.",
    specs: [
      "300 W focused MW",
      "Explorer 48 autosampler",
      "10 and 35 mL vials",
      "Active IR temperature",
      "Synergy DoE software",
    ],
    highlights: [
      "Rapid DoE screens",
      "Autosampler overnight",
      "Science Park parking",
    ],
    gradient: G.amber,
  },

  // Genomics & Sequencing (3)
  {
    id: "36",
    slug: "illumina-novaseq-x-cambridge",
    title: "Illumina NovaSeq X Plus",
    tagline: "High-throughput sequencing with same-day library prep.",
    category: "Genomics & Sequencing",
    city: "Cambridge",
    lat: 52.1657,
    lng: 0.1715,
    pricePerDay: 2400,
    rating: 4.92,
    reviews: 38,
    hostName: "Hinxton Sequencing Hub",
    hostBio: "Sequencing facility next to the Wellcome Genome Campus.",
    description:
      "NovaSeq X Plus configured for 10B flow cell runs. Booking includes library QC (TapeStation), clustering, sequencing, and BaseSpace delivery. Pre-booking required — runs slotted every 48 hours.",
    specs: [
      "10B flow cell runs",
      "TapeStation QC included",
      "BaseSpace delivery",
      "Up to 3 Tb per run",
      "Dedicated bioinformatics hand-off",
    ],
    highlights: [
      "Hinxton campus adjacent",
      "Bioinformatics consult included",
      "Secure sample transport",
    ],
    gradient: G.violet,
  },
  {
    id: "37",
    slug: "oxford-nanopore-promethion-oxford",
    title: "Oxford Nanopore PromethION 24",
    tagline: "Ultra-long-read sequencing, short turnaround.",
    category: "Genomics & Sequencing",
    city: "Oxford",
    lat: 51.7418,
    lng: -1.2587,
    pricePerDay: 1800,
    rating: 4.89,
    reviews: 29,
    hostName: "Harwell Long-Read",
    hostBio: "Long-read sequencing bureau at the Harwell Campus.",
    description:
      "PromethION 24 with live basecalling via Dorado on a local A100 workstation. Suits metagenomics, structural variant detection, and full-length isoform sequencing. Ligation and rapid library kits stocked.",
    specs: [
      "24× flow cell slots",
      "Local Dorado basecalling (A100)",
      "Ligation + rapid kits stocked",
      "Minion / Flongle also available",
      "EPI2ME workflows ready",
    ],
    highlights: [
      "Live basecalling",
      "A100 GPU included",
      "Same-day results possible",
    ],
    gradient: G.mint,
  },
  {
    id: "38",
    slug: "biorad-qx200-ddpcr-cardiff",
    title: "Bio-Rad QX200 Digital Droplet PCR",
    tagline: "Absolute quantification by droplet PCR.",
    category: "Genomics & Sequencing",
    city: "Cardiff",
    lat: 51.4816,
    lng: -3.1791,
    pricePerDay: 210,
    rating: 4.81,
    reviews: 24,
    hostName: "Bute Genomics",
    hostBio: "Cardiff Bay genomics service bureau.",
    description:
      "Full QX200 workflow: droplet generator, thermal cycler (C1000 Touch), and QX200 droplet reader. QuantaSoft included. Great for liquid biopsy, viral load, and CRISPR edit frequency quantification.",
    specs: [
      "Droplet generator",
      "C1000 Touch thermal cycler",
      "QX200 droplet reader",
      "QuantaSoft software",
      "96-well throughput",
    ],
    highlights: [
      "CRISPR edit quantification",
      "Liquid biopsy ready",
      "Cardiff Bay 10 min",
    ],
    gradient: G.teal,
  },

  // Physics & Specialized (3)
  {
    id: "39",
    slug: "femtosecond-laser-table-southampton",
    title: "Femtosecond Laser Table (Ti:Sapph)",
    tagline: "800 nm 100 fs oscillator + amplifier on 2×3 m table.",
    category: "Physics & Specialized",
    city: "Southampton",
    lat: 50.9360,
    lng: -1.3960,
    pricePerDay: 650,
    rating: 4.93,
    reviews: 19,
    hostName: "ORC Photon Lab",
    hostBio: "Optoelectronics Research Centre–adjacent shared lab.",
    description:
      "Coherent Mantis oscillator + Legend Elite amplifier (3 W, 1 kHz, 100 fs). Dedicated 2×3 m floating table with beam steering optics. Ideal for pump-probe, OPA-driven spectroscopy, and ultrafast materials work.",
    specs: [
      "800 nm, 100 fs, 1 kHz",
      "3 W average amplifier power",
      "Floated 2×3 m optics table",
      "OPA + autocorrelator available",
      "Class 4 certified room",
    ],
    highlights: [
      "OPA extendable to UV–IR",
      "Pump–probe ready",
      "Southampton Central 10 min",
    ],
    gradient: G.violet,
  },
  {
    id: "40",
    slug: "cryostat-montana-edinburgh",
    title: "Montana Instruments Cryostation",
    tagline: "Closed-cycle optical cryostat 4–350 K.",
    category: "Physics & Specialized",
    city: "Edinburgh",
    lat: 55.9240,
    lng: -3.1723,
    pricePerDay: 420,
    rating: 4.87,
    reviews: 21,
    hostName: "Kings Buildings Cryo",
    hostBio: "Low-temperature physics service bureau.",
    description:
      "Cryostation s50 with optical access. Sample-in-vacuum, vibrationally isolated, 4 K base temperature. Configured for optical pump–probe and low-T photoluminescence studies. Microscope objective compatible.",
    specs: [
      "4–350 K range",
      "<3 nm RMS vibration",
      "Optical access all sides",
      "Sample-in-vacuum",
      "Quantum Composers timing",
    ],
    highlights: [
      "Low-vibration optical access",
      "Objective-compatible",
      "Kings Buildings campus",
    ],
    gradient: G.ocean,
  },
  {
    id: "41",
    slug: "plasma-cleaner-bsc-belfast",
    title: "Henniker HPT-100 Plasma Cleaner",
    tagline: "Tabletop plasma cleaner for surface prep.",
    category: "Physics & Specialized",
    city: "Belfast",
    lat: 54.5973,
    lng: -5.9301,
    pricePerDay: 65,
    rating: 4.72,
    reviews: 14,
    hostName: "Titanic Quarter Labs",
    hostBio: "Small shared fabrication lab in the Titanic Quarter.",
    description:
      "Henniker HPT-100 plasma cleaner with O₂, Ar, and air gas options. Ideal for pre-bonding surface activation, AFM tip cleaning, and contamination removal. Low day rate — great for short bookings.",
    specs: [
      "100 W RF generator",
      "O₂, Ar, air gas options",
      "Automatic cycles",
      "200×150×100 mm chamber",
      "Pumpdown < 2 min",
    ],
    highlights: [
      "Budget-friendly",
      "Quick 30-min cycles",
      "Short bookings welcome",
    ],
    gradient: G.amber,
  },
];

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}

export function formatGBP(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Curated Unsplash photos per category, aligned with item order within each category.
// Each array index maps to the Nth item in that category (see assignment in getEquipmentImage).
const CATEGORY_PHOTOS: Record<Category, string[]> = {
  "3D Printing & Fabrication": [
    "photo-1642969164999-979483e21601", // Formlabs Form 4 → SLA printer with blue light
    "photo-1549563316-5384a923453e", // Ultimaker S5 Pro → person observing 3D printer
    "photo-1702863361902-93c51bfbd923", // CELLINK BIO X → small desktop bioprinter
    "photo-1611505982706-9ebc79e5d3f1", // Prusa MK4S Farm → industrial 3D printing
    "photo-1638959492386-f9a68d55c374", // Markforged Metal X → industrial dark printer
  ],
  "Biochemistry & Cell Culture": [
    "photo-1748002897584-af9200c9b181", // BioFlo 320 → operator at complex bioreactor
    "photo-1623986854615-85baba27dfb6", // Sartorius ambr 250 → industrial lab rig
    "photo-1748003047892-04bb794257c6", // Mammalian cell culture suite → lab team
    "photo-1748002645678-7f9c04263315", // BSL-2 fermentation hall → factory-scale
    "photo-1748348209623-906c42dd1f7b", // Applikon MiniBio 250 → technicians + kit
  ],
  "Chromatography": [
    "photo-1748261347768-a32434751a9a", // Agilent 1290 UPLC → scientist with pipette
    "photo-1578496479531-32e296d5c6e1", // ÄKTA FPLC → samples in lab machine
    "photo-1725404343886-a111bc5555c1", // Thermo Vanquish HPLC → flasks in lab
    "photo-1554475901-4538ddfbccc2", // Agilent GC-MS → person with flasks
  ],
  "Mass Spectrometry": [
    "photo-1727091506038-5451111dc2fb", // Q Exactive HF → gloved hands on instrument
    "photo-1748256223955-5d5eb7fe7893", // Waters Xevo → industrial lab equipment
    "photo-1623986854615-85baba27dfb6", // Bruker MALDI → industrial equipment
    "photo-1748002897584-af9200c9b181", // SCIEX Triple Quad → operator at complex kit
  ],
  "Microscopy & Imaging": [
    "photo-1526930382372-67bf22c0fce2", // Zeiss Sigma SEM → white microscope
    "photo-1614308460927-5024ba2e1dcb", // JEOL TEM → round silver/black microscope
    "photo-1639772823907-a716be4bdecc", // Leica SP8 Confocal → gloved hand at scope
    "photo-1572884267966-02340ebc90ac", // Bruker Dimension AFM → black microscope
    "photo-1562789233-495f52b583dd", // Andor Dragonfly → scientist at microscope
  ],
  "Spectroscopy": [
    "photo-1532187863486-abf9dbad1b69", // Bruker 600 NMR → tube sample prep
    "photo-1554475900-0a0350e3fc7b", // Renishaw Raman → lab apparatus
    "photo-1532187643603-ba119ca4109e", // Thermo Nicolet FTIR → pouring liquid
    "photo-1655814563963-0fe0a7d6c279", // Agilent Cary UV-Vis → lab coat scientist
  ],
  "Materials Characterization": [
    "photo-1748002897584-af9200c9b181", // Bruker D8 XRD → operator at complex kit
    "photo-1623986854615-85baba27dfb6", // TA DSC/TGA → industrial equipment
    "photo-1748003047892-04bb794257c6", // Anton Paar MCR rheometer → lab team
    "photo-1748348209623-906c42dd1f7b", // Bruker ContourX profilometer → technicians
  ],
  "Synthesis & Reactors": [
    "photo-1694230155228-cdde50083573", // Schlenk + glovebox → test tubes / reagents
    "photo-1532094349884-543bc11b234d", // Parr autoclave → lab beakers
    "photo-1554475900-0a0350e3fc7b", // Vapourtec flow reactor → lab apparatus
    "photo-1725404343886-a111bc5555c1", // CEM microwave → flasks with liquid
  ],
  "Genomics & Sequencing": [
    "photo-1641903202531-bfa6bf0c6419", // NovaSeq X Plus → DNA visualisation
    "photo-1648792940059-3b782a7b8b20", // Oxford Nanopore → DNA helix
    "photo-1578496479531-32e296d5c6e1", // QX200 ddPCR → samples in lab machine
  ],
  "Physics & Specialized": [
    "photo-1640861774479-cd6453479851", // Femtosecond laser table → green laser beam
    "photo-1571131551165-8a81db403a9a", // Cryostat → beam in dark room
    "photo-1715583622659-566c3a8b3c5a", // Plasma cleaner → intense glow
  ],
};

export function getEquipmentImage(item: Equipment, width = 800): string {
  const pool = CATEGORY_PHOTOS[item.category];
  const itemsInCategory = equipment.filter((e) => e.category === item.category);
  const indexInCategory = itemsInCategory.findIndex((e) => e.id === item.id);
  const photoId =
    pool[(indexInCategory >= 0 ? indexInCategory : 0) % pool.length];
  return `https://images.unsplash.com/${photoId}?w=${width}&h=${Math.round(
    width * 0.75,
  )}&fit=crop&auto=format&q=80`;
}
