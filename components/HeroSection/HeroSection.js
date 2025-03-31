import Image from "next/image"

const HeroSection = () => {
  return (
    <>
      {/* card 1 */}
      {/* <div className="py-4 bg-[#102F45] text-center fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl text-[#E68E46] ">
          Second Annual MB100 India Convening | 15-16 April 2025{" "}
        </h1>
      </div> */}

      {/* card 2 */}
      <div className="h-screen bg-[url('/heroBanner.png')] bg-cover flex flex-col">
        <div className="py-4 bg-[#102F45] text-center">
          <h1 className="text-2xl text-[#E68E46] ">
            Second Annual MB100 India Convening | 15-16 April 2025{" "}
          </h1>
        </div>

        <div className="container mx-auto w-full mt-auto">
          <div className="bg-[#E68E46] rounded-t-2xl flex flex-col gap-3 px-4 py-6 w-[90%] md:w-[60%] lg:w-[50%]">
            <div className="flex justify-between items-center">
              <Image src="/logo.svg" width={170} height={170} alt="logo" />
              <Image src="/cms.svg" width={224} height={100} alt="logo" />
            </div>

            <h2 className="text-4xl text-[#102F45] font-semibold">
              Meaningful Business India Chapter
            </h2>

            <p className="text-2xl text-[#102F45]">
              Catalysing Purpose, Profit, and Innovation
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full flex justify-between py-10">
        <h2 className="text-3xl text-[#102F45] w-[90%] md:w-[60%] lg:w-[40%] font-semibold">
          Empowering India's Social Entrepreneurship Ecosystem
        </h2>

        <p className="text-lg text-[#102F45] w-[90%] md:w-[60%] lg:w-[50%]">
          CMS in collaboration with Meaningful Business brings together
          visionary leaders and businesses that merge purpose with profit. Our
          mission is to amplify impact-driven businesses by fostering
          collaboration, championing innovation, and enabling sustainable
          growth.
        </p>
      </div>
    </>
  )
}

export default HeroSection
