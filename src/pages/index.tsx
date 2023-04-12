import ThreeScene from "../components/ThreeScene";
import Hero from '../components/Hero'
import PhotosBlock from '../components/PhotosBlock'
import WaterfallsBlock from '../components/WaterfallsBlock'
import SkipperBuoyBlock from '../components/SkipperBuoyBlock'

export default function Home() {
  return (
    <div className='bg-green-400'>
      <Hero />
      <ThreeScene />
      <PhotosBlock />
      <WaterfallsBlock />
      <SkipperBuoyBlock />
    </div>
  );
}