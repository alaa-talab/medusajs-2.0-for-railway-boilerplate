import { Text } from "@medusajs/ui"
import Image from 'next/image'

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://www.dfeelings.com" target="_blank" rel="noreferrer">
        <Image
          src="https://res.cloudinary.com/dvcfefmys/image/upload/v1727474920/black-logo-01_hx9yxl.svg" 
          alt="DFM Logo" 
          width={80} // Set appropriate width
          height={40} // Set appropriate height
        />
      </a>
    </Text>
  )
}

export default MedusaCTA
