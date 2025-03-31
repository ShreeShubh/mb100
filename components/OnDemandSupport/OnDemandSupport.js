import Image from "next/image"

const OnDemandSupport = () => {
  return (
    <div className="container mx-auto w-full text-center py-10">
      <Image
        src="/support.png"
        width={1379}
        height={730}
        className="w-full"
        alt="On-Demand Support for Your Growth Journey"
      />
    </div>
  )
}

export default OnDemandSupport
