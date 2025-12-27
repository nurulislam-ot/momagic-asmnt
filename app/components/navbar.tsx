import {
  HeadphonesIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import FacebookIcon from "./icons/facebook"
import TwitterIcon from "./icons/twitter"

export default function Navbar() {
  return (
    <nav className='text-white '>
      <div className='bg-[#03484D] py-3'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <Link href='/'>
              <Image
                src='/winstore-logo.png'
                alt='winstore logo'
                width={120}
                height={40}
              />
            </Link>
            <div className='md:flex bg-white h-10 text-gray-600 rounded-lg hidden'>
              <select className='border-r px-4'>
                <option value='all'>All Categories</option>
                <option value='electronics'>Electronics</option>
                <option value='grocery'>Grocery</option>
                <option value='fashion'>Fashion</option>
                <option value='appliances'>Appliances</option>
                <option value='babies-store'>Babies Store</option>
              </select>
              <input
                className='outline-none px-5 w-96'
                type='search'
                placeholder='Search for products'
              />
              <button className='bg-[#B6B6B6] w-10 flex items-center justify-center rounded-r-lg'>
                <SearchIcon color='white' />
              </button>
            </div>
          </div>
          <div className='flex gap-10 items-center'>
            <div>
              <p className='text-xs'>Call Us Now</p>
              <div className='flex gap-2'>
                <HeadphonesIcon size={20} />
                <p className='text-sm'>+011 5827918</p>
              </div>
              <p className='text-xs'>Sign In</p>
            </div>
            <div className='flex gap-5'>
              <UserIcon size={20} />
              <HeartIcon size={20} />
              <ShoppingCartIcon size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#0E3B3E] h-12 flex items-center'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='flex gap-9 items-center'>
            <div className='flex gap-2 items-center'>
              <MenuIcon />
              <p className='text-lg'>Browse By Category</p>
            </div>
            <Link href='#'>Home</Link>
            <Link href='#'>Easy Monthly Installments</Link>
            <Link href='#'>Shop by Brands</Link>
            <Link href='#'>Become a Vendor</Link>
          </div>
          <div>
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </nav>
  )
}
