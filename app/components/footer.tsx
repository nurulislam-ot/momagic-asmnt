import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className='bg-[#393939] py-24 text-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div>
            <Image
              src='/winstore-logo.png'
              alt='Logo'
              width={150}
              height={50}
            />
            <p>Got questions? Call us 24/7!</p>
            <p>0311 1666 144</p>
            <p>0317 1777 015</p>
          </div>
          <div>
            <h3 className='text-primary text-xl'>Trending</h3>
            <ul>
              <li>Installments</li>
              <li>Electronics</li>
              <li>Grocery</li>
              <li>Health and Beauty</li>
              <li>Home Appliances</li>
              <li>Mobile Accessories</li>
            </ul>
          </div>
          <div>
            <h3 className='text-primary text-xl'>Information</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Return</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className='text-primary text-xl'>Customer Care</h3>
            <ul>
              <li>My Account</li>
              <li>Track Your Order</li>
              <li>Recently Viewed</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Become a Vendor</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <div className='bg-black py-2 h-16 flex items-center text-white'>
        <div className='container mx-auto'>
          <p>© 2021 Winstore. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
