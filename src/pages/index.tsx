import ThreeScene from "../components/ThreeScene";
import Hero from '../components/Hero'
import PhotosBlock from '../components/PhotosBlock'
import WaterfallsBlock from '../components/WaterfallsBlock'
import SkipperBuoyBlock from '../components/SkipperBuoyBlock'

export default function Home() {
  return (
    <div  className='flex flex-col align-center max-w-screen-xl mx-auto'>
      <div className='bg-green-400 flex flex-col self-center'>
        <Hero />
        {/* <ThreeScene /> */}
        <SkipperBuoyBlock twcssBackgroundColor='bg-orange-400' twcssFrameColor='bg-blue-200'/>
        <PhotosBlock twcssBackgroundColor='bg-green-400' twcssFrameColor='bg-gray-300'/>
        <WaterfallsBlock twcssBackgroundColor='bg-pink-400' twcssFrameColor='bg-blue-200'/>
      </div>
      <footer className='flex flex-row bg-gray-400 justify-end p-2'>
        <p>&copy; 2023 Landho Dev, LLC</p>
      </footer>
    </div>
  );
}