import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://www.boujee.com" target="_blank" rel="noreferrer">
        <img
          src="https://res.cloudinary.com/dvcfefmys/image/upload/c_thumb,w_200,g_face/v1727474920/black-logo-01_hx9yxl.svg"
          alt="Boujee Logo"
          className="h-5 w-auto"
        />
      </a>
     
    </Text>
  )
}

export default MedusaCTA
