import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

function Header() {
     const router = useRouter()
     const searchInputRef = useRef(null)

     const search = (e) => {
          e.preventDefault()

          const term = searchInputRef.current.value;

          if (!term) return;

          router.push(`/search?term=${term}`)
     }

     return (
          <header className="sticky top-0 bg-white">
               <div className="flex w-full p-6 items-center">
                    <Image
                         height={40}
                         width={120}
                         alt="Image"
                         className="cursor-pointer"
                         onClick={() => router.push('/')}
                         src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                    <form className="flex flex-grow ml-10 mr-5 px-6 py-3 border border-gray-200 rounded-full
                    shadow-lg  max-w-3xl items-center">
                         <input ref={searchInputRef} type="text"
                              className="flex-grow w-full focus:outline-none" />
                         <XIcon
                              className="h-7 sm:mr-3 text-gray-500 cursor-pointer
                              transition duration-100 transform hover:scale-125"
                              onClick={() => (searchInputRef.current.value = "")}
                         />
                         <MicrophoneIcon
                              className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2
                              pl-4 border-gray-300"
                         />
                         <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                         <button onClick={search} hidden type="submit" > Search</button>
                    </form>
                    <Avatar className="ml-auto" url="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
               </div>

               <HeaderOptions />
          </header >
     )
}

export default Header