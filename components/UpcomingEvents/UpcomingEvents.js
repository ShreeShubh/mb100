import Image from "next/image"
import Link from "next/link"

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events">
      <div className="bg-[#D6EEE8] py-10">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-3xl font-semibold text-[#102F45] text-center md:text-left">
            Events
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
            <div className="relative">
              <Image
                src="/location-img.png"
                width={801}
                height={446}
                alt="Upcoming Events"
                className="w-full object-cover"
              />
              <Link
                href="https://www.google.com/maps/place/Imaginarium+AliGunjan/@18.7708769,72.8738973,901m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be87a3c8c8f4f19:0x667e3e943116a895!8m2!3d18.7708769!4d72.8738973!16s%2Fg%2F11j7xr63m7?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <button className="absolute bottom-5 right-5 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-[#E68E46] hover:text-white p-2 rounded-full">
                  <Image
                    src="/location-icon.svg"
                    width={100}
                    height={100}
                    alt="Location Icon"
                    className="w-10 h-10 transition-all duration-300"
                  />
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[40%]">
              <p className="text-lg text-[#102F45]">
                Our second annual MB100 India convening, hosted at Imaginarium
                AliGunjan in Alibaug this April, will unite India-based winners,
                Meaningful Business members, and key stakeholders from the
                vibrant impact ecosystem.
              </p>

              <h3 className="text-2xl text-[#102F45] font-semibold">
                The agenda includes
              </h3>

              <ul className="list-disc text-lg text-[#102F45] pl-5">
                <li>Peer-to-peer learning sessions</li>
                <li>Innovation showcases</li>
                <li>Thoughtfully curated networking opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
