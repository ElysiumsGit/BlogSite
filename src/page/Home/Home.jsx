import Hero from './Hero'
import HotTopics from './HotTopics'
import LatestNews from './LatestNews'

const Home = () => {
  return (
    <>
      <Hero/>
      <div className='px-4 md:px-70 mt-50'>
        <LatestNews/>
      </div>
      <div className='px-4 md:px-70 mt-12'>
        <HotTopics/>
      </div>
    </>
  )
}

export default Home