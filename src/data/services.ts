import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'earthworks',
    title: 'Earthworks',
    description: 'Comprehensive site preparation, excavation, and land grading services.',
    detailedDescription:
      'Our earthworks services include site clearing, bulk excavation, trenching, land grading, and site preparation for construction projects. We use modern equipment and techniques to ensure precision and efficiency in all earthwork operations.',
    benefits: [
      'Precise grading and leveling',
      'Efficient bulk excavation',
      'Professional site preparation',
      'Cost-effective solutions',
      'Experienced operators and modern equipment',
    ],
    examples: [
      'Residential subdivision site preparation',
      'Commercial building foundation excavation',
      'Road construction earthworks',
    ],
    icon: 'Shovel',
  },
  {
    id: 'roads',
    title: 'Roads & Infrastructure',
    description: 'Construction and maintenance of roads, parking areas, and transportation infrastructure.',
    detailedDescription:
      'We deliver high-quality road construction services including new road construction, road rehabilitation, parking lot construction, curbing, and drainage systems. Our team ensures durable, safe, and well-constructed infrastructure.',
    benefits: [
      'Durable road surfaces',
      'Proper drainage systems',
      'Quality material selection',
      'Compliance with specifications',
      'Long-lasting results',
    ],
    examples: [
      'Municipal road construction and upgrades',
      'Industrial parking area development',
      'Residential street paving and curbing',
    ],
    icon: 'Route',
  },
  {
    id: 'water-sewer',
    title: 'Water & Sewer',
    description: 'Installation and maintenance of water reticulation and sewer systems.',
    detailedDescription:
      'We specialize in the installation, maintenance, and repair of water reticulation networks and sewer systems. Our services include pipeline installation, manhole construction, pump station work, and connection services for residential and commercial developments.',
    benefits: [
      'Quality pipeline installation',
      'Leak-free systems',
      'Professional trenching and backfilling',
      'Compliance with health standards',
      'Experienced plumbing and civil teams',
    ],
    examples: [
      'Residential water and sewer connections',
      'Bulk sewer pipeline installation',
      'Municipal water infrastructure upgrades',
    ],
    icon: 'Droplet',
  },
  {
    id: 'stormwater',
    title: 'Stormwater Management',
    description: 'Design and installation of effective stormwater drainage systems.',
    detailedDescription:
      'Our stormwater management services include the design, installation, and maintenance of drainage systems, culverts, catch basins, and erosion control measures. We ensure proper water flow management to protect properties and infrastructure.',
    benefits: [
      'Effective water flow control',
      'Erosion prevention',
      'Flood risk mitigation',
      'Environmental compliance',
      'Long-term drainage solutions',
    ],
    examples: [
      'Residential estate stormwater systems',
      'Commercial site drainage design',
      'Road culvert installation',
    ],
    icon: 'CloudRain',
  },
  {
    id: 'paving',
    title: 'Paving & Surfacing',
    description: 'Professional paving services for driveways, walkways, and outdoor areas.',
    detailedDescription:
      'We provide comprehensive paving and surfacing solutions including concrete paving, asphalt surfacing, interlocking paver installation, and surface sealing. Our work is designed for durability and aesthetic appeal.',
    benefits: [
      'Attractive, durable surfaces',
      'Multiple material options',
      'Professional installation',
      'Low maintenance requirements',
      'Weather-resistant finishes',
    ],
    examples: [
      'Residential driveway paving',
      'Pedestrian walkway construction',
      'Commercial parking lot surfacing',
    ],
    icon: 'Square',
  },
  {
    id: 'site-development',
    title: 'Site Development',
    description: 'Complete site development services from planning to execution.',
    detailedDescription:
      'We offer full-service site development including land surveying, site planning, bulk services installation, landscaping preparation, and project management. Our integrated approach ensures efficient project delivery.',
    benefits: [
      'Comprehensive project management',
      'Coordinated service delivery',
      'Cost and time efficiency',
      'Quality control throughout',
      'Single point of accountability',
    ],
    examples: [
      'Township and subdivision development',
      'Commercial site development',
      'Industrial park infrastructure',
    ],
    icon: 'Building2',
  },
  {
    id: 'plant-hire',
    title: 'Plant Hire',
    description: 'Reliable construction plant hire services for civil and building projects.',
    detailedDescription:
      'Afripact Civils offers professional plant hire solutions to support construction, civil engineering, and infrastructure projects. Our well-maintained fleet is operated by experienced professionals, ensuring efficiency, safety, and reliability on every site.',
    benefits: ['Excavator', 'TLB', 'Back Tipper', 'Grader'],
    examples: [
      'Site excavation and earthmoving',
      'Road construction and maintenance',
      'Bulk material transport',
    ],
    icon: 'Truck',
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Professional interior and exterior painting services for residential and commercial properties.',
    detailedDescription:
      'We provide comprehensive painting services including surface preparation, priming, and application of high-quality paints. Our experienced team ensures smooth, durable finishes that protect and beautify your property for years to come.',
    benefits: [
      'Professional surface preparation',
      'High-quality paint products',
      'Clean and efficient application',
      'Attention to detail and finish quality',
      'Protection against weather and wear',
    ],
    examples: [
      'Residential home interior and exterior painting',
      'Commercial building facade painting',
      'Industrial facility maintenance painting',
    ],
    icon: 'Paintbrush',
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Complete plumbing installation, maintenance, and repair services.',
    detailedDescription:
      'Our plumbing services cover new installations, maintenance, and emergency repairs for residential and commercial properties. We handle water supply systems, drainage, fixtures, and all plumbing-related work with expertise and reliability.',
    benefits: [
      'Licensed and experienced plumbers',
      'Quality fixtures and materials',
      'Leak-free installations',
      'Emergency repair services',
      'Compliance with plumbing codes',
    ],
    examples: [
      'New home plumbing installations',
      'Commercial building plumbing systems',
      'Maintenance and repair services',
    ],
    icon: 'Wrench',
  },
  {
    id: 'new-builds',
    title: 'New Builds',
    description: 'Complete new construction services from foundation to finish.',
    detailedDescription:
      'We manage new build projects from initial planning through to completion, including foundations, structural work, roofing, and finishing. Our comprehensive approach ensures quality construction that meets your specifications and timeline.',
    benefits: [
      'End-to-end project management',
      'Quality construction standards',
      'Timely project completion',
      'Budget control and transparency',
      'Coordinated trades and services',
    ],
    examples: [
      'New residential home construction',
      'Commercial building projects',
      'Industrial facility construction',
    ],
    icon: 'Home',
  },
  {
    id: 'electricals',
    title: 'Electricals',
    description: 'Professional electrical installation, maintenance, and certification services.',
    detailedDescription:
      'Our electrical services include complete electrical installations, wiring, lighting systems, power distribution, and compliance certification. We ensure safe, reliable electrical systems that meet all regulatory requirements.',
    benefits: [
      'Certified electricians',
      'Safe and compliant installations',
      'Energy-efficient solutions',
      'Emergency electrical services',
      'Full compliance certification',
    ],
    examples: [
      'Residential electrical installations',
      'Commercial electrical systems',
      'Industrial power distribution',
    ],
    icon: 'Zap',
  },
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    description: 'Complete bathroom renovation and remodeling services.',
    detailedDescription:
      'We transform bathrooms with comprehensive renovation services including plumbing, tiling, fixtures, and finishes. Our team handles all aspects of bathroom renovation to create functional, beautiful spaces that add value to your property.',
    benefits: [
      'Complete renovation service',
      'Quality fixtures and fittings',
      'Expert tiling and waterproofing',
      'Modern design implementation',
      'Minimal disruption during work',
    ],
    examples: [
      'Full bathroom remodels',
      'Ensuite bathroom upgrades',
      'Commercial restroom renovations',
    ],
    icon: 'Bath',
  },
  {
    id: 'fencing',
    title: 'Fencing',
    description: 'Installation of secure and durable fencing for residential and commercial properties.',
    detailedDescription:
      'We install a variety of fencing solutions including palisade, mesh, wooden, and concrete fencing. Our fencing services provide security, privacy, and boundary definition with quality materials and professional installation.',
    benefits: [
      'Multiple fencing options',
      'Secure and durable installations',
      'Professional measurements and planning',
      'Quality materials and hardware',
      'Compliance with local regulations',
    ],
    examples: [
      'Residential property perimeter fencing',
      'Commercial security fencing',
      'Industrial site boundary fencing',
    ],
    icon: 'Fence',
  },
  {
    id: 'tiling',
    title: 'Tiling',
    description: 'Expert tiling services for floors, walls, and outdoor areas.',
    detailedDescription:
      'Our tiling services include professional installation of ceramic, porcelain, and natural stone tiles for floors, walls, bathrooms, and outdoor areas. We ensure precise installation with proper waterproofing and finishing for lasting results.',
    benefits: [
      'Precision tile cutting and laying',
      'Waterproofing expertise',
      'Wide range of tile options',
      'Clean grouting and finishing',
      'Durable, easy-to-maintain surfaces',
    ],
    examples: [
      'Bathroom and kitchen tiling',
      'Indoor and outdoor floor tiling',
      'Commercial tiling projects',
    ],
    icon: 'Grid3x3',
  },
  {
    id: 'roof-repair',
    title: 'Roof Repair and Maintenance',
    description: 'Afripact repairs leaking roofs and provides ongoing roof maintenance for residential and commercial properties.',
    detailedDescription:
      'Our roof repair and maintenance services cover leak detection, waterproofing, tile replacement, IBR and corrugated sheet repairs, flashing repairs, and full roof refurbishment. We work on residential homes and commercial buildings across KwaZulu-Natal, restoring structural integrity and extending the life of your roof.',
    benefits: [
      'Leak detection and repair',
      'Waterproofing and flashing',
      'Roof tile and sheeting replacement',
      'Preventive maintenance programmes',
      'Residential and commercial properties',
    ],
    examples: [
      'Residential leaking roof repairs',
      'Commercial flat roof waterproofing',
      'Annual roof maintenance contracts',
    ],
    icon: 'Hammer',
  },
  {
    id: 'kitchen-renovations',
    title: 'Kitchen Renovations',
    description: 'Complete kitchen renovation services, from layout redesign to finished installation.',
    detailedDescription:
      'We transform kitchens with end-to-end renovation services including demolition, plumbing relocation, tiling, cabinetry installation, countertop fitting, and electrical work. Our team handles every trade so you deal with one contractor, not five.',
    benefits: [
      'Full-service kitchen renovation',
      'Plumbing and electrical coordination',
      'Quality cabinetry and countertop fitting',
      'Expert tiling and waterproofing',
      'Minimal project disruption',
    ],
    examples: [
      'Full kitchen remodels in Durban and Pietermaritzburg',
      'Open-plan kitchen conversions',
      'Commercial kitchen fit-outs',
    ],
    icon: 'Utensils',
  },
  {
    id: 'full-home-renovations',
    title: 'Full Home Renovations',
    description: 'Comprehensive home renovation and remodelling, from structural changes to final finishes.',
    detailedDescription:
      'We manage full home renovation projects across KwaZulu-Natal, coordinating all trades under one roof. From structural modifications and layout changes to tiling, painting, plumbing, electrical, and final finishes, we deliver renovated homes that are built to last.',
    benefits: [
      'Single-contractor project management',
      'Structural and cosmetic works',
      'All trades coordinated on your behalf',
      'Transparent timelines and budgets',
      'Quality finishes throughout',
    ],
    examples: [
      'Complete home renovations in Durban',
      'Structural extension and internal reconfiguration',
      'Full interior renovation and refurbishment',
    ],
    icon: 'House',
  },
  {
    id: 'commercial-renovations',
    title: 'Commercial Renovations',
    description: 'Office, retail, and commercial space renovations that minimise disruption and maximise impact.',
    detailedDescription:
      'We renovate commercial spaces - offices, retail outlets, warehouses, and hospitality venues - across KwaZulu-Natal. Our team works to your programme, minimising downtime while delivering high-quality refurbishment work to specification.',
    benefits: [
      'Planned around your business operations',
      'Compliance with commercial building codes',
      'Phased delivery to minimise disruption',
      'All trades under one contractor',
      'Quality finishes for client-facing spaces',
    ],
    examples: [
      'Office fitout and refurbishment',
      'Retail space renovation and redesign',
      'Restaurant and hospitality renovation',
    ],
    icon: 'Store',
  },
];
