import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Hero from '@/components/hero/Hero'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const description = 'Leland Reardon is a mathematician turned full-stack software engineer who builds and deploys applications from scratch for startups and established companies.'

export function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), 'public/projects'))
  const photos = Object.fromEntries(projects.map(({ slug }) => {
    const file = files.find(f => path.parse(f).name === slug)
    return [slug, file ? `/projects/${file}` : '/projects/placeholder.svg']
  }))
  return { props: { photos } }
}

export default function Home({ photos }: { photos: Record<string, string> }) {
  return (
    <div className='flex flex-col align-center max-w-(--breakpoint-xl) mx-auto'>
      <Head>
        <title>Leland Reardon | Software Engineer</title>
        <meta name='description' content={description} />
        <meta property='og:title' content='Leland Reardon | Software Engineer' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='https://landho.me/me-square-640.jpg' />
      </Head>
      <main className='bg-green-400 flex flex-col self-center'>
        <Hero />
        <div className='bg-orange-500 p-2 text-center text-xl font-bold'>🚧 Under Construction 🚧</div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} photo={photos[project.slug]} imageLeft={index % 2 === 0} />
        ))}
      </main>
      <footer className='flex flex-row bg-gray-400 justify-end p-2'>
        <p>&copy; {new Date().getFullYear()} Landho Dev, LLC</p>
      </footer>
    </div>
  );
}
