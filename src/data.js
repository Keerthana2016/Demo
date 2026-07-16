// ─────────────────────────────────────────────────────────────
//  SOWTHAS Fashion Academy — site content
//  Edit everything here: text, numbers, courses, testimonials.
//  NOTE: stats & testimonials are placeholders — replace with
//  your real numbers and real student reviews before launch.
// ─────────────────────────────────────────────────────────────

export const CONTACT = {
  phone: '8682925839',
  phoneDisplay: '+91 86829 25839',
  whatsapp: 'https://wa.me/918682925839',
  email: 'Manikandanssk143@gmail.com',
  address: 'Muthya Street, Teynampet, Chennai – 600 086',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Muthya+Street+Teynampet+Chennai+600086',
  instagram: 'https://www.instagram.com/', // ← paste your Instagram profile link
}

// Top announcement strip (like the reference navbar)
export const ANNOUNCEMENTS = [
  'NEW BATCH ADMISSIONS OPEN — BASIC TAILORING COURSE',
  'ADVANCED BLOUSE DESIGNING — WEEKEND BATCH',
  'FASHION DESIGNING FOUNDATION — ENROLL NOW',
  'ONE-ON-ONE PATTERN MAKING CLASSES AVAILABLE',
]

// Nav with dropdown groups (like the reference navbar)
export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Our Story', to: '/about' },
      { label: 'Your Mentor', to: '/about#mentor' },
      { label: 'Our Journey', to: '/about#journey' },
    ],
  },
  {
    label: 'Courses',
    to: '/courses',
    children: [
      { label: 'Basic Tailoring', to: '/courses#basic-tailoring' },
      { label: 'Advanced Blouse Designing', to: '/courses#blouse-designing' },
      { label: 'Fashion Designing Foundation', to: '/courses#fashion-foundation' },
      { label: 'Pattern Making Masterclass', to: '/courses#pattern-making' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const STATS = [
  { value: '500+', label: 'Students trained' },
  { value: '4.9★', label: 'Student rating' },
  { value: '10+', label: 'Courses & workshops' },
]

export const OFFERINGS = [
  {
    id: 'courses',
    tab: 'Courses',
    title: 'Structured tailoring & designing courses',
    text: 'Step-by-step courses that take you from your first measurement to a finished, perfectly fitted garment. Pattern making and construction are broken into simple stages that even complete beginners can follow.',
    points: ['Basic to advanced tailoring', 'Blouse, chudidhar & kurti stitching', 'Pattern making & perfect fitting', 'Fashion designing fundamentals'],
    image: '/images/course-machine.jpeg',
  },
  {
    id: 'workshops',
    tab: 'Workshops',
    title: 'Short, hands-on weekend workshops',
    text: 'Focused sessions on one skill at a time — finish a real project in a day or two and take it home. Ideal if you want to try the academy before joining a full course.',
    points: ['Aari & embroidery basics', 'Saree fall & finishing techniques', 'Kids-wear stitching', 'Alteration & re-fitting skills'],
    image: '/images/stitching-hands.jpeg',
  },
  {
    id: 'certification',
    tab: 'Certification',
    title: 'Certificate courses for your career',
    text: 'Complete a full course and receive a SOWTHAS Fashion Academy certificate — a foundation for taking orders, joining a boutique, or starting your own tailoring business.',
    points: ['Course completion certificate', 'Portfolio of stitched garments', 'Boutique & business guidance', 'Pricing your work confidently'],
    image: '/images/boutique.jpeg',
  },
  {
    id: 'personal',
    tab: 'One-on-one',
    title: 'Individual guidance, at your pace',
    text: 'Every student gets personal attention. Learn at a pace that suits your home and family schedule, with the founder reviewing your work at every stage.',
    points: ['Flexible batch timings', 'Personal correction & feedback', 'Beginner-friendly teaching', 'Small batch sizes'],
    image: '/images/course-class.jpeg',
  },
]

export const COURSES = [
  {
    id: 'basic-tailoring',
    title: 'Basic Tailoring Course',
    desc: 'Measurements, cutting and stitching from zero. Finish the course stitching your own blouse and chudidhar.',
    duration: '2 months',
    level: 'Beginner',
    image: '/images/course-machine.jpeg',
    covers: ['Taking accurate body measurements', 'Fabric selection & cutting basics', 'Machine handling & stitching practice', 'Blouse and chudidhar construction'],
  },
  {
    id: 'blouse-designing',
    // tag: 'Bestseller',
    title: 'Advanced Blouse Designing',
    desc: 'Princess cut, katori, padded and designer necklines — with the perfect-fitting techniques SOWTHAS is known for.',
    duration: '6 weeks',
    level: 'Intermediate',
    image: '/images/course-fitting.jpeg',
    covers: ['Princess cut & katori blouses', 'Padded & lining techniques', 'Designer necklines & sleeves', 'Perfect-fitting corrections'],
  },
  {
    id: 'fashion-foundation',
    // tag: 'New batch',
    title: 'Fashion Designing Foundation',
    desc: 'Illustration, fabric knowledge, colour theory and garment construction — your first step into the fashion industry.',
    duration: '3 months',
    level: 'Beginner',
    image: '/images/garment-rack.jpeg',
    covers: ['Fashion illustration basics', 'Fabric & colour theory', 'Garment construction', 'Building your first portfolio'],
  },
  {
    id: 'pattern-making',
    // tag: 'Popular',
    title: 'Pattern Making Masterclass',
    desc: 'Draft accurate patterns for any body type. The skill that turns a tailor into a professional.',
    duration: '1 month',
    level: 'All levels',
    image: '/images/course-cutting.jpeg',
    covers: ['Drafting basic blocks', 'Grading for different sizes', 'Pattern corrections for fit', 'From pattern to finished garment'],
  },
]

export const TESTIMONIALS = [
  {
    quote: 'I joined without knowing how to hold a needle properly. Within two months I stitched my own blouse — the fitting was perfect. Sandhya mam explains everything so patiently.',
    name: 'Priya R.',
    role: 'Basic Tailoring student',
  },
  {
    quote: 'The pattern making class changed how I work. I used to struggle with fitting for years; now customers come to me for it. Best decision I made for my small business.',
    name: 'Lakshmi S.',
    role: 'Boutique owner, Chennai',
  },
  {
    quote: 'As a homemaker I was nervous about learning something new. The small batches and personal attention made it so comfortable. Now I take stitching orders from home.',
    name: 'Kavitha M.',
    role: 'Home entrepreneur',
  },
  {
    quote: 'Very practical teaching — we stitch real garments from week one, not just theory. The blouse designing course is worth every rupee.',
    name: 'Divya K.',
    role: 'Advanced Blouse Designing student',
  },
]

export const JOURNEY = [
  {
    year: 'The beginning',
    title: 'A lifelong passion',
    text: 'From a young age, Mrs. Sandhya was fascinated by garments and the art of tailoring — stitching, fitting, and perfecting every piece.',
  },
  {
    year: 'Formal training',
    title: 'Turning passion into profession',
    text: 'While balancing family responsibilities after marriage, she completed formal training in Fashion Designing and began working professionally.',
  },
  {
    year: 'SOWTHAS Fashion',
    title: 'Trusted by customers',
    text: 'Her commitment to quality, perfect fitting and precise pattern making earned the trust of many satisfied customers across Chennai.',
  },
  {
    year: 'Today',
    title: 'SOWTHAS Fashion Academy',
    text: 'Encouraged by her customers, she now teaches aspiring tailors and designers — empowering women to build independent careers.',
  },
]

export const GALLERY = [
  { src: '/images/hero-sewing.jpeg', caption: 'At the machine — where every course begins' },
  { src: '/images/stitching-hands.jpeg', caption: 'Hand-finishing details' },
  { src: '/images/course-machine.jpeg', caption: 'Machine practice sessions' },
  { src: '/images/course-class.jpeg', caption: 'Small-batch classroom training' },
  { src: '/images/fabric-work.jpeg', caption: 'Working with fabrics' },
  { src: '/images/boutique.jpeg', caption: 'From classroom to boutique' },
  { src: '/images/tools-flatlay.jpeg', caption: 'The tailor\u2019s toolkit' },
  { src: '/images/course-fitting.jpeg', caption: 'Perfect-fitting techniques' },
  { src: '/images/classroom.jpeg', caption: 'Inside the academy' },
  { src: '/images/garment-rack.jpeg', caption: 'Student garments on the rack' },
  { src: '/images/course-cutting.jpeg', caption: 'Precision cutting practice' },
  { src: '/images/student-work.jpeg', caption: 'Student work in progress' },
  { src: '/images/academy-event.jpeg', caption: 'Academy moments' },
]
