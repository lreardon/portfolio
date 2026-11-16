// Featured photos live in public/projects/, named after each project's slug
// (e.g. public/projects/echolect.jpg). Photos are cropped to 4:3; about 1200x900 works best.
// Projects without a photo show public/projects/placeholder.svg.

export interface Project {
  slug: string
  name: string
  description: string
  technologies: string[]
  backgroundColor: string
  frameColor: string
}

export const projects: Project[] = [
  {
    slug: 'echolect',
    name: 'Echolect',
    description:
      "Echolect makes large lecture halls more engaging and useful for students. During class, students send the lecturer one-way messages, which gives a real-time read on how well the room is following. Whisper transcribes the lecture, and those student interactions are interpolated into the transcript. Students, lecturers, and TAs can then chat with the transcripts through a RAG pipeline. I self-hosted the whole thing, including the mail server, because I wanted to learn what goes into running those too.",
    technologies: ['Ruby on Rails', 'Python', 'Whisper', 'LangChain', 'PostgreSQL', 'Docker', 'Nginx'],
    backgroundColor: 'bg-[#1F1F1F]',
    frameColor: 'bg-[#61aeb8]',
  },
  {
    slug: 'rentogether',
    name: 'Rentogether',
    description:
      "Rentogether is a civic tech platform for renter transparency and landlord accountability. I built pipelines that obtain property ownership data from California county assessors through public records requests, scrape eviction cases from court systems, and resolve LLC name variants back to a single owner with fuzzy matching and entity resolution in Postgres. Renters can look up a landlord and see what they own and their history in court.",
    technologies: ['Python', 'Flask', 'Flutter', 'Dart', 'PostgreSQL', 'Railway'],
    backgroundColor: 'bg-sky-500',
    frameColor: 'bg-yellow-100',
  },
  {
    slug: 'skipperbuoy',
    name: 'SkipperBuoy',
    description:
      "SkipperBuoy lets commercial fishing deckhands search for, read about, and review skippers. Before it, the only feedback on skippers lived in Facebook group posts that are hard to find later, so new fishermen had no reliable way to decide who to work for. It's a Rails app with Google sign-in and scheduled background jobs, self-hosted on DigitalOcean and deployed with Capistrano.",
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'Capistrano', 'DigitalOcean'],
    backgroundColor: 'bg-orange-400',
    frameColor: 'bg-blue-200',
  },
  {
    slug: 'cookd',
    name: "Cook'd",
    description:
      "Cook'd is a social cooking app: think Spotify plus Instagram, but exclusively for recipes. Users upload and search for recipes and organize them into personal and shared libraries. I taught myself React Native to build the mobile app. The Rails API uses a Neo4j graph database, Elasticsearch for search, Redis for caching, and MinIO for object storage, all dockerized and self-hosted on DigitalOcean with a Capistrano CI/CD pipeline.",
    technologies: ['React Native', 'Ruby on Rails', 'PostgreSQL', 'Neo4j', 'Elasticsearch', 'Redis', 'MinIO', 'Docker'],
    backgroundColor: 'bg-rose-400',
    frameColor: 'bg-amber-100',
  },
  {
    slug: 'recon',
    name: 'Recursive Complexity of Numbers',
    description:
      "An independent research project investigating a notion of complexity for the natural numbers, based on Peano arithmetic and recursion. Computing it means querying enormous sets and maps, so I used finite-state transducers as the core data structure, enabling O(1) lookup across billions of entries.",
    technologies: ['Rust', 'Finite-state transducers'],
    backgroundColor: 'bg-violet-400',
    frameColor: 'bg-gray-200',
  },
  {
    slug: 'oscar',
    name: 'OScaR',
    description:
      "OScaR (Optical Scanning Recycling) is an image classifier that distinguishes between trash and various types of recyclable materials, so successful recycling doesn't depend on every individual knowing the rules. I built it with Jeremy Howard's fast.ai library.",
    technologies: ['Python', 'fast.ai', 'Computer vision'],
    backgroundColor: 'bg-green-400',
    frameColor: 'bg-gray-300',
  },
]
