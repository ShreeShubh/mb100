import Image from "next/image"

const UpcomingEvents = () => {
  return (
    <div className="bg-[#D6EEE8] py-10">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-semibold text-[#102F45]">
          Upcoming Events
        </h2>
        <div className="flex items-center gap-5 mt-5">
          <Image
            src="/event.png"
            width={801}
            height={446}
            alt="Upcoming Events"
          />
          <div className="flex flex-col gap-3">
            <p className="text-lg text-[#102F45]">
              Our second annual MB100 India convening, hosted at Imaginarium
              AliGunjan in Alibaug this April, will unite India-based winners,
              Meaningful Business members, and key stakeholders from the vibrant
              impact ecosystem.
            </p>
            <h3 className="text-2xl text-[#102F45] font-semibold">
              The agenda includes{" "}
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
  )
}

export default UpcomingEvents
