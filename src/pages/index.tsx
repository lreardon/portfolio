import Head from 'next/head'
import Hero from '@/components/hero/Hero'
import Block from '@/components/block/Block'

const description = 'Leland Reardon is a mathematician turned full-stack software engineer who builds and deploys applications from scratch for startups and established companies.'
const linkClass = 'text-purple-800'
const projects = [
  {
    href: 'https://echolect.co',
    imgSrc: '/echolect-logo.png',
    imgWidth: 512,
    imgHeight: 512,
    imgAlt: 'Echolect logo',
    backgroundColor: 'bg-[#1F1F1F]',
    frameColor: 'bg-[#61aeb8]',
    content: <><a className={linkClass} href='https://echolect.co' target='_blank' rel='noopener noreferrer'>Echolect</a> combines one-way student messaging with Whisper transcription to produce lecture transcripts that include student questions.</>,
  },
  {
    href: 'https://skipperbuoy.com',
    imgSrc: '/skipperbuoy-block-image-640.jpg',
    imgWidth: 640,
    imgHeight: 512,
    imgAlt: 'Commercial fishing boat run aground on rocks',
    backgroundColor: 'bg-orange-400',
    frameColor: 'bg-blue-200',
    content: <><a className={linkClass} href='https://skipperbuoy.com' target='_blank' rel='noopener noreferrer'>SkipperBuoy</a> is a Rails app where commercial fishing deckhands review the skippers they've worked for.</>,
  },
  {
    href: 'https://photos.landho.me',
    imgSrc: '/photos-block-image-640.jpg',
    imgWidth: 640,
    imgHeight: 427,
    imgAlt: 'Leopard in Yala National Park, Sri Lanka',
    backgroundColor: 'bg-green-400',
    frameColor: 'bg-gray-300',
    content: <>A <a className={linkClass} href='https://photos.landho.me' target='_blank' rel='noopener noreferrer'>gallery</a> of my favorite photos, mostly wildlife.</>,
  },
  {
    href: 'https://waterfalls.landho.me',
    imgSrc: '/waterfalls-block-image-640.jpg',
    imgWidth: 640,
    imgHeight: 640,
    imgAlt: 'Climbing the rock wall beside a waterfall',
    backgroundColor: 'bg-pink-400',
    frameColor: 'bg-blue-200',
    content: <>A <a className={linkClass} href='https://waterfalls.landho.me' target='_blank' rel='noopener noreferrer'>map-based blog</a> of my favorite waterfalls.</>,
  },
]

export default function Home() {
  return (
    <div className='flex flex-col align-center max-w-(--breakpoint-xl) mx-auto'>
      <Head>
        <title>Leland Reardon | Software Engineer</title>
        <meta name='description' content={description} />
        <meta property='og:title' content='Leland Reardon | Software Engineer' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='https://storage.googleapis.com/portfolio-photos/portfolio/me-square/640.jpg' />
      </Head>
      <main className='bg-green-400 flex flex-col self-center'>
        <Hero />
        {projects.map(({ content, ...project }, index) => (
          <Block key={project.href} imageLeft={index % 2 === 0} {...project}>{content}</Block>
        ))}
      </main>
      <footer className='flex flex-row bg-gray-400 justify-end p-2'>
        <p>&copy; {new Date().getFullYear()} Landho Dev, LLC</p>
      </footer>
    </div>
  );
}
