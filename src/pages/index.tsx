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
      <PhotosBlock twcssBackgroundColor='bg-orange-400' twcssFrameColor='bg-gray-400'/>
      <WaterfallsBlock twcssBackgroundColor='bg-pink-400' twcssFrameColor='bg-blue-300'/>
      <SkipperBuoyBlock twcssBackgroundColor='bg-green-500' twcssFrameColor='bg-green-200'/>
    </div>
  );
}