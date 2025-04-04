import { ourApproachData } from "@/utils/data"

const OurApproach = () => {
  return (
    <div className="bg-[#D6EEE8] py-10">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-semibold text-[#102F45]">
          Our Approach: The 3C Model
        </h2>

        <ul className="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start">
          {ourApproachData.map((item, index) => (
            <li
              key={index}
              className="border border-[#E68E46] rounded-2xl p-3 md:flex-1 flex flex-col items-center"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto mb-2 rounded-t-lg object-cover"
              />
              <h3 className="text-2xl font-semibold text-[#102F45] text-center">
                {item.title}
              </h3>
              <p className="text-lg text-[#102F45] text-center mt-3">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OurApproach
