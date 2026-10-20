/**
 * All public-facing portfolio copy lives here, separate from layout.
 * Every claim is sourced — see docs/CONTENT_AUDIT.md before editing metrics.
 */
import type { ImageMetadata } from 'astro';
import evCover from '../assets/projects/ev-cover.jpg';
import evShot1 from '../assets/projects/ev-shot1.jpg';
import evShot2 from '../assets/projects/ev-shot2.jpg';
import hyperion from '../assets/projects/hyperion.jpg';
import hyperionPoster from '../assets/projects/yt-PGCNf-_DkNI.jpg';
import lane from '../assets/projects/lane.jpg';
import slime from '../assets/projects/yt-r5-DEYGfWAA.jpg';
import formulate from '../assets/projects/formulate.jpg';
import disappearance from '../assets/projects/yt-OprsYiEykEE.jpg';
import ishgar from '../assets/projects/yt-kP7kunFiuAQ.jpg';
import lostLegacy from '../assets/projects/yt--L7wtfTd2Qw.jpg';
import tankWar from '../assets/projects/yt-uCK1EcNBCS4.jpg';
import gustify from '../assets/projects/yt-_mPmjLOjb8U.jpg';
import simplereads from '../assets/projects/yt-vemYlcEi_vE.jpg';

export const person = {
  name: 'Chinamay Kasareddy',
  role: 'Software engineer',
  links: {
    github: 'https://github.com/Nocturna1Developer',
    linkedin: 'https://www.linkedin.com/in/chinamay-k-ba7242173/',
    youtube: 'https://www.youtube.com/@dusk-games-interactive',
  },
};

export const hero = {
  headline: 'I turn complex problems into working software, and help teams ship it.',
  intro:
    'I’m a software engineer with a background in applied mathematics. Since 2018 I’ve built multiplayer training simulations, led small teams to launch, and taught full-stack development to students in three countries.',
  proof: [
    { label: 'Now', value: 'Simulation Architect, ACSILabs' },
    { label: 'Leadership', value: 'Led teams of 6–7 developers to MVP' },
    { label: 'Education', value: 'B.S. Applied Computational Mathematics, SJSU' },
  ],
};

export type Link = { label: string; href: string; kind: 'source' | 'live' | 'video' | 'play' };
export type Video = { id: string; title: string; poster: ImageMetadata };

export type Project = {
  slug: string;
  name: string;
  context: string;
  year: string;
  status: string;
  purpose: string;
  role: string;
  outcome: string;
  outcomeNote?: string;
  image: ImageMetadata;
  imageAlt: string;
  video?: Video;
  tech: string[];
  links: Link[];
  details?: { heading: string; body?: string; list?: string[] }[];
  gallery?: { src: ImageMetadata; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: 'empty-vessel',
    name: 'The Empty Vessel',
    context: 'Released PC game · Independent project',
    year: '2021',
    status: 'Released',
    purpose:
      'A story-driven, first-person survival shooter set in an abandoned city, built and released publicly on itch.io in about two months.',
    role:
      'Solo developer under my side studio, Dusk Games Interactive. I wrote the C# gameplay systems, including an objective system, finite-state enemy AI with patrol and attack behavior, and weapon handling. They’re decoupled with actions, delegates and events so the build could finish on schedule. I also designed the city and forest levels using free Unity Asset Store art.',
    outcome: '17,000+ views, 1,500+ downloads and a 4.8 / 5 average rating across 580 reviews.',
    outcomeNote: 'Self-reported figures from the itch.io release.',
    image: evCover,
    imageAlt: 'Foggy abandoned village at the edge of a forest, with the title “The Empty Vessel” across the top.',
    video: { id: 'i-WyRDsDctM', title: 'The Empty Vessel — full gameplay video', poster: evCover },
    tech: ['C#', 'Unity', 'Event-driven architecture', 'Jira', 'Git'],
    links: [
      { label: 'Play on itch.io', href: 'https://nocturna1.itch.io/the-empty-vessel', kind: 'play' },
      { label: 'Source code', href: 'https://github.com/Nocturna1Developer/Unity3D-Empty-Vessel', kind: 'source' },
    ],
    details: [
      {
        heading: 'Scope',
        body: 'Players return to life decades after a zombie outbreak, scavenge supplies and piece the story together from notes left by survivors. Controls include aiming, leaning, sprinting and reloading.',
      },
      {
        heading: 'Constraints',
        body: 'Built in roughly two months (February–March 2021) using only free third-party assets, so the engineering effort went into gameplay systems, pacing and polish rather than content creation.',
      },
      {
        heading: 'Systems I programmed',
        list: [
          'Objective system that drives the story through notes and goals',
          'Finite-state enemy AI with patrol paths and an attack state',
          'Weapon feel: leaning, weapon sway, bullet spread, recoil and reload animations',
          'Level and lighting design for an abandoned city and forest, with post-processing for atmosphere',
        ],
      },
    ],
    gallery: [
      { src: evShot1, alt: 'In-game screenshot from The Empty Vessel.' },
      { src: evShot2, alt: 'Second in-game screenshot from The Empty Vessel.' },
    ],
  },
  {
    slug: 'hyperion',
    name: 'Hyperion',
    context: 'Full-stack web application',
    year: '2023',
    status: 'Live demo',
    purpose:
      'A music streaming web app modeled on Spotify, covering the full product loop: accounts, uploads, playback, favorites and paid subscriptions.',
    role:
      'Built end to end: a Next.js and React interface styled with Tailwind, Supabase on PostgreSQL for data, storage and sign-in (including GitHub OAuth), and Stripe for recurring premium billing. Added client form validation and server error handling.',
    outcome: 'Deployed and publicly usable on Vercel, with a recorded walkthrough.',
    image: hyperion,
    imageAlt: 'Hyperion home screen with a library sidebar, a Liked Songs shortcut and album tiles.',
    video: { id: 'PGCNf-_DkNI', title: 'Hyperion — music app walkthrough', poster: hyperionPoster },
    tech: ['TypeScript', 'Next.js', 'React', 'Supabase', 'PostgreSQL', 'Stripe'],
    links: [
      { label: 'Live demo', href: 'https://hyperion-rho.vercel.app/', kind: 'live' },
      { label: 'Source code', href: 'https://github.com/Nocturna1Developer/Hyperion', kind: 'source' },
    ],
    details: [
      {
        heading: 'How it’s put together',
        list: [
          'Interface: Next.js 13 (App Router), React, Tailwind CSS',
          'Data and auth: Supabase Auth and Storage over PostgreSQL, GitHub OAuth',
          'Payments: Stripe subscriptions with an account page for managing a plan',
          'Reliability: react-hook-form validation on the client, toast-based error reporting from the server',
        ],
      },
    ],
  },
  {
    slug: 'lane-detection',
    name: 'Advanced Lane Detection',
    context: 'Computer vision · Self-Driving Car Nanodegree',
    year: '',
    status: 'Completed',
    purpose:
      'Find the lane a car is driving in from ordinary dash-camera video, then measure how sharply the road curves and how far the car sits from the lane center.',
    role:
      'Wrote the image-processing pipeline in Python with OpenCV: camera calibration, distortion correction, color and gradient thresholding, a bird’s-eye perspective warp, and polynomial curve fitting of lane pixels.',
    outcome: 'Produces annotated video with the detected lane, radius of curvature and vehicle offset on every frame.',
    image: lane,
    imageAlt: 'Highway dash-cam frame with the detected lane shaded green and curvature and offset readouts overlaid.',
    video: { id: '5tyxVKph3Zg', title: 'Advanced lane finding — output video', poster: lane },
    tech: ['Python', 'OpenCV', 'NumPy', 'Jupyter'],
    links: [
      { label: 'Source code', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Advanced-Lane-Finding', kind: 'source' },
    ],
    details: [
      {
        heading: 'Pipeline',
        list: [
          'Calibrate the camera from chessboard images and undistort each frame',
          'Combine color-space and gradient thresholds into a binary lane mask',
          'Warp to a top-down view so lane lines become near-parallel',
          'Locate lane pixels and fit second-order polynomials',
          'Convert to real-world units for curvature and center offset, then project back onto the frame',
        ],
      },
      {
        heading: 'Context',
        body: 'Completed as part of a Self-Driving Car Nanodegree, alongside projects on Kalman and particle filters, PID control and behavioral cloning.',
      },
    ],
  },
];

export const moreWork = [
  {
    name: 'SlimeVenture',
    video: { id: 'r5-DEYGfWAA', title: 'SlimeVenture — gameplay trailer' },
    context: 'Released 2.5D action platformer · Unity, C#',
    summary: 'A grappling-hook-and-revolver platformer with swinging and shooting, about 30 minutes of play, released on itch.io.',
    image: slime,
    imageAlt: 'Title frame from the SlimeVenture gameplay trailer.',
    links: [
      { label: 'Play', href: 'https://nocturna1.itch.io/slime-venture' },
      { label: 'Trailer', href: 'https://www.youtube.com/watch?v=r5-DEYGfWAA' },
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/Unity3D-SlimeVenture' },
    ],
  },
  {
    name: 'SimpleReads',
    video: { id: 'vemYlcEi_vE', title: 'SimpleReads — Flutter app walkthrough' },
    context: 'Android book-tracking app · Flutter, Dart, Firebase',
    summary: 'A Goodreads-style app with Firebase email sign-in and a Firestore-backed library where you add, edit, view and delete books.',
    image: simplereads,
    imageAlt: 'Title frame from the SimpleReads app walkthrough.',
    links: [
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/SimpleReads-Flutter-Application' },
    ],
  },
  {
    name: 'FormulateAI',
    video: { id: 'm9VQWD5IFus', title: 'FormulateAI — website showcase' },
    context: '3D product customizer · Three.js, React, DALL·E API',
    summary: 'A web app for customizing a 3D product: change its color, upload a logo, or generate one with the DALL·E image API and apply it to the model.',
    image: formulate,
    imageAlt: 'FormulateAI interface showing a 3D shirt model with customization controls.',
    links: [
      { label: 'Video', href: 'https://www.youtube.com/watch?v=m9VQWD5IFus' },
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/FormulateAI' },
    ],
  },
  {
    name: 'The Disappearance',
    video: { id: 'OprsYiEykEE', title: 'The Disappearance — full gameplay' },
    context: 'Released first-person horror game · Unity, C#',
    summary: 'A story-driven horror game with a finite-state enemy AI that patrols and hunts the player, plus an objective system driven by notes and subtitles.',
    image: disappearance,
    imageAlt: 'Title frame from the The Disappearance video.',
    links: [
      { label: 'Play', href: 'https://nocturna1.itch.io/the-dissapearance' },
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/Unity3D-Dissapearance' },
    ],
  },
  {
    name: 'Gustify',
    video: { id: '_mPmjLOjb8U', title: 'Gustify — weather app demo' },
    context: 'iOS weather app · Swift, MVVM',
    summary: 'A location-aware weather app built on the OpenWeatherMap and Core Location APIs with an MVVM architecture and Fastlane tooling.',
    image: gustify,
    imageAlt: 'Title frame from the Gustify video.',
    links: [
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/Gustify' },
    ],
  },
  {
    name: 'The Ruins of Ishgar',
    video: { id: 'kP7kunFiuAQ', title: 'The Ruins of Ishgar — full gameplay' },
    context: 'Released 2.5D platformer · Unity, C#',
    summary: 'An atmospheric platformer through an abandoned temple, with moving obstacles driven by sinusoidal oscillators and a score system.',
    image: ishgar,
    imageAlt: 'Title frame from the The Ruins of Ishgar video.',
    links: [
      { label: 'Play', href: 'https://nocturna1.itch.io/the-ruins-of-ishgar' },
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/Unity3D-Ruins-Of-Ishgar' },
    ],
  },
  {
    name: 'The Lost Legacy',
    video: { id: '-L7wtfTd2Qw', title: 'The Lost Legacy — full gameplay' },
    context: 'Released 2D action platformer · Unity, C#',
    summary: 'A Celeste-inspired platformer with dash, double jump and slash combat, and an endless mode with randomly spawning coins, monsters and potions.',
    image: lostLegacy,
    imageAlt: 'Title frame from the The Lost Legacy video.',
    links: [
      { label: 'Play', href: 'https://nocturna1.itch.io/the-lost-legacy' },
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/Unity2D-The-Lost-Legacy' },
    ],
  },
  {
    name: 'Tank War',
    video: { id: 'uCK1EcNBCS4', title: 'Tank War — Unreal Engine gameplay' },
    context: 'Unreal Engine prototype · C++, Blueprints',
    summary: 'A last-tank-standing prototype with pathfinding enemy AI, built with C++ and Blueprints using vector math and physics calculations.',
    image: tankWar,
    imageAlt: 'Title frame from the Tank War video.',
    links: [
      { label: 'Source', href: 'https://github.com/Nocturna1Developer/UnrealEngine4-TankWar-Game' },
    ],
  },
];

/** Every other project, grouped. Text-only so the drop-down stays light. */
export const otherProjects: { group: string; items: { name: string; note: string; href: string }[] }[] = [
  {
    group: 'Games & interactive',
    items: [
      { name: 'Crystal Journey', note: 'Retro 2D platformer built in 48 hours for a game jam', href: 'https://github.com/Nocturna1Developer/Unity2D-Crystal-Journey' },
      { name: 'Travels of a Hero', note: 'Experimental top-down RPG with melee, ranged and special attacks, enemy pathfinding and tunable stats', href: 'https://github.com/Nocturna1Developer/Unity3D-Travels-Of-A-Hero' },
    ],
  },
  {
    group: 'Self-driving car (Nanodegree)',
    items: [
      { name: 'Finding Lane Lines', note: 'Lane detection in images with Python and OpenCV', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Finding-Lane-Lines' },
      { name: 'Traffic Sign Classifier', note: 'Convolutional neural network trained on the German Traffic Sign Dataset', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Traffic-Sign-Classifier' },
      { name: 'Behavioral Cloning', note: 'Trained a car to drive a track autonomously from recorded laps', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Behavioural-Cloning' },
      { name: 'Extended Kalman Filter', note: 'C++ state estimation from noisy lidar and radar', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Extended-Kalman-Filter' },
      { name: 'Kidnapped Vehicle', note: '2D particle filter for localization in C++', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Kidnapped-Vehicle' },
      { name: 'PID Control', note: 'C++ controller that drives a car around a track', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-PID' },
      { name: 'Highway Driving', note: 'C++ path planning through highway traffic using sensor fusion', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Highway-Driving' },
      { name: 'Capstone', note: 'Integrated system for stopping at red lights and controlling speed', href: 'https://github.com/Nocturna1Developer/Self-Driving-Car-Capstone' },
    ],
  },
  {
    group: 'Machine learning & data',
    items: [
      { name: 'Bike Rental Prediction', note: 'Neural network with gradient descent and backpropagation', href: 'https://github.com/Nocturna1Developer/ML-Bike-Rental-Data-Predtiction' },
      { name: 'Dog Breed Classifier', note: 'Image classifier for dog breeds', href: 'https://github.com/Nocturna1Developer/ML-Dog-Breed-Classifier' },
      { name: 'Face Generation', note: 'Generative network producing faces and handwritten digits', href: 'https://github.com/Nocturna1Developer/ML-Face-Generation' },
      { name: 'Script Generation', note: 'Generated a new TV script from episode transcripts', href: 'https://github.com/Nocturna1Developer/ML-Script-Generation' },
      { name: 'Quadcopter Control', note: 'Reinforcement learning for takeoff and landing', href: 'https://github.com/Nocturna1Developer/ML-Teaching-Quadcopter-How-To-Fly' },
      { name: 'Sales Data Analysis', note: 'Answered business questions from real sales data', href: 'https://github.com/Nocturna1Developer/Kaggle-Sales-Data-Analysis' },
      { name: 'Pokémon Data Analysis', note: 'Data analysis following data-science best practices', href: 'https://github.com/Nocturna1Developer/Pokemon-Data-Science' },
    ],
  },
  {
    group: 'Web & apps',
    items: [
      { name: 'The Estate', note: 'Real estate website built with Next.js', href: 'https://github.com/Nocturna1Developer/The-Estate-Website' },
      { name: 'Productivity App', note: 'Timer and meditation app, an SJSU term project in Java with UML design docs', href: 'https://github.com/Nocturna1Developer/Productivity-App' },
      { name: 'Mini Full-Stack Projects', note: 'Small JavaScript and React projects', href: 'https://github.com/Nocturna1Developer/Mini-Fullstack-Projects' },
      { name: 'DSA Practice', note: 'Data structures and algorithms problems in Jupyter', href: 'https://github.com/Nocturna1Developer/DSA-Practice' },
    ],
  },
];

export type Role = { title: string; org: string; dates: string; points: string[]; tags: string[] };

export const experience: Role[] = [
  {
    title: 'Simulation Architect',
    org: 'ACSILabs Inc.',
    dates: 'Sept 2023 – Present',
    points: [
      'Program and optimize an online multiplayer environment in Unity and C# with Tnet3 and Dissonance.',
      'Streamlined user authentication for server access; optimized database queries improved server efficiency by 70%.',
      'Build a U.S. Marines training simulation using a web-based editor and linked web nodes.',
    ],
    tags: ['Delivery', 'Systems'],
  },
  {
    title: 'Lead Software Engineer',
    org: 'Caution Ready Inc.',
    dates: 'Jan 2023 – Jan 2024',
    points: [
      'Directed a team of 6 developers using agile practices to publish an MVP to Microsoft.',
      'Oversaw integration of 3 third-party SDKs, including analytics, monetization and multiplayer, and implemented an entity-component and jobs system across 20+ levels.',
    ],
    tags: ['Leadership', 'Architecture'],
  },
  {
    title: 'Coding Instructor',
    org: 'Coding Minds Academy',
    dates: 'Jan 2023 – Mar 2024',
    points: [
      'Taught 6 weekly JavaScript, HTML and CSS courses to students in China, France and the United States; targeted instructional adjustments improved test scores by 25%.',
      'Created React and SQL course materials that earned a 96% satisfaction score from students and management.',
    ],
    tags: ['Teaching'],
  },
  {
    title: 'Software Engineer',
    org: 'Honor Games',
    dates: 'Mar 2023 – Jul 2023',
    points: [
      'Part of a 4-person agile team that launched an MVP of an educational stock-market simulation; built the market simulator on Unity ECS/DOTS.',
    ],
    tags: ['Collaboration', 'Simulation'],
  },
  {
    title: 'Software Engineer & Board Member',
    org: 'Alter Learning Educational Platform Inc.',
    dates: 'Aug 2020 – Jan 2023',
    points: [
      'Led a 7-member team in establishing technical design patterns for the MVP; implemented multiplayer with Mirror and linked 40 games to a Node.js backend on AWS.',
    ],
    tags: ['Leadership', 'Backend'],
  },
];

export const moreExperience: Role[] = [
  {
    title: 'Chief Executive Officer & Lead Developer',
    org: 'Dusk Games Interactive (independent studio)',
    dates: '2015 – Present',
    points: ['Lead an independent game studio that designs, builds and publicly releases games, including The Empty Vessel, SlimeVenture and The Disappearance.'],
    tags: ['Initiative'],
  },
  {
    title: 'E-commerce Business Owner',
    org: 'Etsy shop (digital assets)',
    dates: 'July 2023 – Present',
    points: [
      'Launched a digital asset store and deployed 100+ products: wallpapers, seamless textures, SVG stickers, sprite packs, coloring books and clip art.',
      'Built the end-to-end workflow: ideation, AI-assisted refinement, batch composition in Canva, packaging for digital delivery and cataloging.',
    ],
    tags: ['Initiative'],
  },
  {
    title: 'Leadership Development Associate',
    org: 'RippleMatch',
    dates: 'Aug 2022 – Dec 2022',
    points: ['Reached 1st place on the company’s Social Ladder leaderboard and met 2+ milestones each week.'],
    tags: ['Delivery'],
  },
  {
    title: 'Software Quality Assurance Engineer',
    org: 'APATICS',
    dates: 'May 2020 – Aug 2020',
    points: ['Analyzed the company website and logged 50+ errors a week using Excel, Python and SQL, resulting in a 30% boost in website speed.'],
    tags: ['Quality'],
  },
];

export const about = {
  paragraphs: [
    'I studied applied computational mathematics, and that still shapes how I work: break the problem down, model it honestly, then build the simplest thing that holds up. Most of my professional work has been real-time and networked software — simulations, multiplayer systems and the backends behind them — but I’m just as comfortable on the web stack or in a Python notebook.',
    'Outside of work I run a small independent label, Dusk Games Interactive, where I ship games end to end, and I enjoy game jams, badminton, reading and meditation.',
  ],
  education: [
    { school: 'San José State University', degree: 'B.S. Applied Computational Mathematics', detail: 'Minors in Computer Science and Business Administration · GPA 3.8 · Magna Cum Laude, President’s Scholar', dates: '2020 – 2022' },
    { school: 'California State University, East Bay', degree: 'B.S. Mathematics program', detail: 'GPA 3.8', dates: '2018 – 2020' },
  ],
  credentials: [
    'AWS Certified Solutions Architect – Associate',
    'Nanodegree: Self-Driving Car',
    'Nanodegree: Deep Learning',
  ],
  capabilities: [
    { area: 'Real-time & simulation', evidence: 'Unity (C#, ECS/DOTS) multiplayer training simulations at ACSILabs; market simulator at Honor Games; games released on itch.io.', tools: 'C#, C++, Unity, Unreal Engine 5, Tnet3, Mirror, Photon' },
    { area: 'Web & backend', evidence: 'Hyperion’s Next.js + Supabase + Stripe stack; Node.js backend on AWS at Alter Learning; teaching React and SQL.', tools: 'TypeScript/JavaScript, React, Node.js, PostgreSQL, MySQL, MongoDB, AWS, Firebase' },
    { area: 'Data & computer vision', evidence: 'Lane-detection pipeline and other Nanodegree projects; analytics processing at Alter Learning.', tools: 'Python, OpenCV, NumPy, Jupyter' },
    { area: 'Leading & teaching', evidence: 'Led teams of 6 and 7 developers to MVP; taught six weekly courses across three countries.', tools: 'Agile delivery, Jira, Git, curriculum design' },
  ],
};
