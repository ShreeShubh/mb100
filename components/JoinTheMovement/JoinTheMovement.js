import Form from "./Form"

const JoinTheMovement = () => {
  return (
    <div className="bg-[#102F45] py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the Movement
        </h2>
        <p className="text-lg text-white mb-6 text-center w-[90%] md:w-[60%] lg:w-[50%] mx-auto">
          Become part of a powerful community dedicated to transforming India's
          purpose-driven enterprises. Together, we will shape the future of
          business by building impactful, innovative, and sustainable
          ecosystems.
        </p>
        <Form />
      </div>
    </div>
  )
}

export default JoinTheMovement
