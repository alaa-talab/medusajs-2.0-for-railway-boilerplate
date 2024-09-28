import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div 
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center" 
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dvcfefmys/image/upload/v1727474071/Boujee_Homes_Logo_dcexgk.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 bg-black bg-opacity-50">
        
        {/* Main Heading */}
        <Heading
          level="h1"
          className="text-5xl small:text-6xl leading-tight text-white font-extrabold drop-shadow-lg"
        >
          Luxury Furniture for Every Space
        </Heading>

        {/* Sub-heading */}
        <Heading
          level="h2"
          className="text-xl small:text-3xl leading-snug text-gray-300 font-light mt-4 drop-shadow-md"
        >
          Elevate Your Home with Boujee's Elegant Designs
        </Heading>

        {/* Call to Action Button */}
        <a href="/shop">
          <Button variant="primary" className="mt-8 px-6 py-3 text-lg font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-300">
            Shop Now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
