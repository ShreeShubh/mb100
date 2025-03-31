const Form = () => {
  return (
    <form className="container mx-auto">
      {/* Firstname and Lastname */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>

      {/* Company and Role */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Role
          </label>
        </div>
      </div>

      {/* Country and Email */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
      </div>

      {/* Reason for approach */}
      <div className="relative w-full mb-5">
        <div className="relative">
          <select
            id="reason_for_approach"
            name="reason_for_approach"
            className="w-full bg-transparent text-white border-b border-white py-2 pr-8 focus:outline-none focus:border-white appearance-none"
            required
          >
            <option value="" disabled selected>
              Reason For Approach (Select One)*
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Your message */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-white appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
          placeholder=" "
          required
        />
        <label
          for="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your Message*
        </label>
      </div>
      <button
        type="submit"
        className="text-[#102F45] font-semibold mt-5 bg-[#E68E46] hover:bg-[#E68E46]/90 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-16 py-2.5 text-center"
      >
        Join Now
      </button>
    </form>
  )
}

export default Form
