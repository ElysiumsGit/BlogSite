import Hero from './Hero'
import HotTopics from './HotTopics'
import LatestNews from './LatestNews'

const Home = () => {
  return (
    <>
      <Hero/>
      <div className='px-4 md:px-70 mt-50'>
        <LatestNews/>
        <section className='mt-12'>
          <HotTopics/>
        </section>
      </div>
    </>
  )
}

export default Home