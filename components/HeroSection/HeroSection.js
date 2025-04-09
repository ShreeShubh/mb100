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
      <div className="min-h-screen bg-[url('/banner-image.png')] bg-cover bg-center bg-no-repeat flex flex-col">
        <div className="py-2 md:py-4 bg-[#102F45] text-center px-4">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#E68E46] leading-tight">
            Second Annual MB100 India Convening | 15-16 April 2025
          </h1>
        </div>

        <div className="container w-full mx-auto mt-auto px-4">
          <div className="bg-[#E68E46] rounded-t-2xl flex flex-col gap-3 px-4 py-6 w-full md:w-[70%] lg:w-[50%]">
            <div className="flex justify-between items-center">
              <Image
                src="/logo.svg"
                width={150}
                height={150}
                alt="logo"
                className="max-w-[30%] sm:max-w-[40%]"
              />
              <Image
                src="/cms.svg"
                width={200}
                height={90}
                alt="logo"
                className="max-w-[30%] sm:max-w-[40%]"
              />
            </div>

            <h2 className="text-2xl sm:text-4xl text-[#102F45] font-semibold text-wrap balance">
              Meaningful Business India Chapter
            </h2>

            <p className="text-lg sm:text-2xl text-[#102F45] text-wrap balance">
              Catalysing Purpose, Profit, and Innovation
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between gap-6 py-10 px-4">
        <h2 className="text-2xl sm:text-3xl text-[#102F45] font-semibold w-full md:w-[60%] lg:w-[40%] text-wrap balance">
          Empowering India's Social Entrepreneurship Ecosystem
        </h2>

        <p className="text-base sm:text-lg text-[#102F45] w-full md:w-[60%] lg:w-[50%] text-wrap balance">
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
