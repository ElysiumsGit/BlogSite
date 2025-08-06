import React from 'react'

const LatestNews = () => {
  return (
    <div className='mt-10'>
        <div className='flex items-center justify-between p-6 border border-gray-300 rounded-md'>
            <section className='flex items-center gap-4'>
                <h1 className='poppins-semibold text-xl'>Latest News</h1>
                <h1 className='poppins-light text-xs'>Real-Time Updates That Matter</h1>
            </section>
            <section>
                <h1 className='poppins-regular text-md'>View More</h1>
            </section>
        </div>
    </div>
  )
}

export default LatestNews