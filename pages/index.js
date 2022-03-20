import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return

    router.push(`/search?term=${term}`);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2
            rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
        </div>

      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-40 flex-grow w-4/5'>
        <Image
          height={100}
          width={300}
          alt="Image"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

        <div className="flex w-full mt-5 hover:shadow-lg p-2 
          focus-within:shadow-lg max-w-md rounded-full border border-gray-200
          px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type="text"
            className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5 text-gray-500' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8
          sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button className='btn'>I am Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
