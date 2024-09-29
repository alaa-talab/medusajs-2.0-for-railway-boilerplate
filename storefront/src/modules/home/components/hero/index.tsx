import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-[#A29076] relative bg-[#EFE5DB]">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 gap-8">
        <Heading
          level="h1"
          className="text-5xl leading-tight text-[#4E423A] font-bold uppercase"
        >
          Welcome to Boujee Homes
        </Heading>
        <Heading
          level="h2"
          className="text-2xl text-[#A29076] font-light"
        >
          Luxury Furniture Designed for Your Lifestyle
        </Heading>
        <a
          href="/collections"
          className="inline-block"
        >
          <Button className="bg-[#4E423A] text-white px-6 py-3 rounded-md hover:bg-[#A29076] transition-all duration-300">
            Shop Now
          </Button>
        </a>
        <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
          className="underline text-[#4E423A] hover:text-[#A29076] transition-all"
        >
          Visit our Blog for Design Inspiration
        </a>
      </div>
    </div>
  )
}

export default Hero
