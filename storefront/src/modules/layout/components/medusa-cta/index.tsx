import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://www.dfeelings.com" target="_blank" rel="noreferrer">
        <img
          src="https://res.cloudinary.com/dvcfefmys/image/upload/v1727474920/black-logo-01_hx9yxl.svg" 
          alt="DFM Logo" 
          className="w-20 h-auto"
        />
      </a>
    </Text>
  )
}

export default MedusaCTA
