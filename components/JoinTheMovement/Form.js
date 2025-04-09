"use client"

import React, { useState } from "react"
import axios from "axios"

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    role: "",
    country: "",
    email: "",
    reason: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    let formErrors = {}

    if (!formData.firstname) formErrors.firstname = "First name is required"
    if (!formData.lastname) formErrors.lastname = "Last name is required"
    if (!formData.company) formErrors.company = "Company is required"
    if (!formData.role) formErrors.role = "Role is required"
    if (!formData.country) formErrors.country = "Country is required"

    if (!formData.email) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid"
    }

    if (!formData.reason) formErrors.reason = "Reason is required"
    if (!formData.message) formErrors.message = "Message is required"

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    const payload = new FormData()
    payload.append("firstname", formData.firstname)
    payload.append("lastname", formData.lastname)
    payload.append("company", formData.company)
    payload.append("role", formData.role)
    payload.append("country", formData.country)
    payload.append("email", formData.email)
    payload.append("reason", formData.reason)
    payload.append("message", formData.message)

    try {
      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/11225/feedback",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      setSubmitMessage("Thank you! We’ll be in touch soon.")
      setFormData({
        firstname: "",
        lastname: "",
        company: "",
        role: "",
        country: "",
        email: "",
        reason: "",
        message: "",
      })
      setErrors({})
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="container mx-auto" onSubmit={handleSubmit}>
      {/* Firstname and Lastname */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            value={formData.firstname}
            onChange={handleChange}
          />
          <label
            htmlFor="firstname"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
          {errors.firstname && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.firstname}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            value={formData.lastname}
            onChange={handleChange}
          />
          <label
            htmlFor="lastname"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
          {errors.lastname && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.lastname}
            </p>
          )}
        </div>
      </div>

      {/* Company and Role */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="company"
            id="company"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            value={formData.company}
            onChange={handleChange}
          />
          <label
            htmlFor="company"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company
          </label>
          {errors.company && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.company}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="role"
            id="role"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            value={formData.role}
            onChange={handleChange}
          />
          <label
            htmlFor="role"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Role
          </label>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.role}</p>
          )}
        </div>
      </div>

      {/* Country and Email */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="country"
            id="country"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            value={formData.country}
            onChange={handleChange}
          />
          <label
            htmlFor="country"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country
          </label>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.country}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Reason for approach */}
      <div className="relative w-full mb-5">
        <div className="relative">
          <select
            id="reason"
            name="reason"
            className="w-full bg-transparent text-white border-b border-white py-2 pr-8 focus:outline-none focus:border-white appearance-none"
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="" disabled>
              Reason For Approach (Select One)*
            </option>
            <option value="connect">Connect</option>
            <option value="celebrate">Celebrate</option>
            <option value="capacitate">Capacitate</option>
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
          {errors.reason && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.reason}
            </p>
          )}
        </div>
      </div>

      {/* Your message */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="message"
          id="message"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-[#D6EEE8] peer"
          placeholder=" "
          value={formData.message}
          onChange={handleChange}
        />
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#D6EEE8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your Message*
        </label>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 text-left">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="text-[#102F45] font-semibold mt-5 bg-[#E68E46] hover:bg-[#E68E46]/90 cursor-pointer rounded-lg w-full sm:w-auto px-16 py-2.5 text-center"
      >
        {isSubmitting ? "Submitting..." : "Join Now"}
      </button>
      {submitMessage && (
        <p className="text-sm mt-4 text-white text-center">{submitMessage}</p>
      )}
    </form>
  )
}

export default Form
