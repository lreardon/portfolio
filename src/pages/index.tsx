import ThreeScene from "../components/ThreeScene";
import Hero from '../components/Hero'
import PhotosBlock from '../components/PhotosBlock'
import WaterfallsBlock from '../components/WaterfallsBlock'

export default function Home() {
  return (
    <div className='bg-green-400'>
      <Hero />
      <ThreeScene />
      <PhotosBlock />
      <WaterfallsBlock />
    </div>
  );
}