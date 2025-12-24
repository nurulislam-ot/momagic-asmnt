export default async function Home() {
  return (
    <div className="bg-[url('/banner.png')] h-100 bg-no-repeat bg-cover">
      <div className='container mx-auto flex items-center h-full'>
        <div className='w-120 p-3 flex flex-col gap-1 items-start'>
          <h1 className='text-6xl'>
            Shop&nbsp;
            <span className='text-primary'>
              Computer <br />& experience
            </span>
          </h1>
          <p>
            You cannot inspect quality into the product; it is already there. I
            am not a product of my circumstances. I am a product of my
            decisions.
          </p>
          <button className='rounded text-white px-3 py-2 bg-primary'>
            View More
          </button>
        </div>
      </div>
    </div>
  )
}
