import { ourApproachData } from "@/utils/data"

const OurApproach = () => {
  return (
    <div className="bg-[#D6EEE8] py-10">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-semibold text-[#102F45]">
          Our Approach: The 3C Model
        </h2>
        <ul className="flex flex-wrap gap-3 mt-5">
          {ourApproachData.map((item, index) => (
            <li
              key={index}
              className="flex-1 border border-[#E68E46] rounded-2xl p-3"
            >
              <div className="flex flex-col items-center w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto mb-2 rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold text-[#102F45]">
                  {item.title}
                </h3>
                <p className="text-lg text-center text-[#102F45] mt-3">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OurApproach
