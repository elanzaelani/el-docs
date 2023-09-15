import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <section className='bg-blue-400  text-white '>
          <div className='py-28 flex flex-col items-center justify-center gap-10'>
            <h1 className=' text-5xl font-extrabold pt-3'>El Zaelani Docs </h1>
            <p className=' text-4xl font-bold' >Life is like a docs!</p>
            <button className="bg-gray-200 hover:bg-gray-400 transition-all duration-1000 text-black text-2xl font-bold py-4 px-20 rounded">Mulai Dari Sini </button>
          </div>
        </section>
        <section className='bg-white '>
          <div className='max-w-7xl mx-auto  flex justify-around mt-5 '>
            <div className='p-5 flex-col'>
             <img src="../assets/img/doodle1.png" alt="" />
             <h2 className='text-3xl font-bold flex justify-center mt-2'>Unix</h2>
              <p className='mt-4'>Docs yang cukup berbeda dari yang lainnya karena deadocs ini update berdasarkan pembelajaran personal gue.</p>
            </div>
            <div className='p-5 flex-col'>
              <img src="../assets/img/doodle2.png" alt="" />
              <h2 className='text-3xl font-bold flex justify-center mt-2'>Generalis</h2>
              <p className='mt-4'>Docs yang cukup berbeda dari yang lainnya karena deadocs ini update berdasarkan pembelajaran personal gue.</p>
            </div>
            <div className='p-5 flex-col '>
              <img src="../assets/img/doodle3.png" alt="" />
              <h2 className='text-3xl font-bold flex justify-center mt-2'>Reusable</h2>
              <p className='mt-4'>Docs yang cukup berbeda dari yang lainnya karena deadocs ini update berdasarkan pembelajaran personal gue.</p>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  )
}
