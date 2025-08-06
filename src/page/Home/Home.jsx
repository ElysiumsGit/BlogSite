import Hero from './Hero'
import Header from '../../components/Header/Header'
import LatestNews from './LatestNews'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <div className='px-70 mt-50'>
        <LatestNews/>
      </div>
    </>
  )
}

export default Home