// file: app/routes/thankyou.tsx
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

export default function ThankYouRoute() {
  const [counter, setCounter] = useState(0)
  const [messages, setMessages] = useState([])
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const fname = searchParams.get('fname')
  const city = searchParams.get('city')
  const email = searchParams.get('email')
  const utm_source = searchParams.get('utm_source')
  const utm_medium = searchParams.get('utm_medium')
  const utm_campaign = searchParams.get('utm_campaign')
  const job_title = searchParams.get('job_title')
  const location = searchParams.get('location')

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (counter === 0) {
      setMessages([
        <div key="transition1" className="text-center">
          <div className="text-black font-bold text-2xl mb-8 font-roboto">
            Checking Colleges in <span className="text-orange-500">{city}</span>
          </div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mt-4"></div>
        </div>,
      ])
    } else if (counter === 1) {
      setMessages([
        <div key="loading" className="text-center">
          <hr className="my-6 text-orange-500 w-full sm:w-3/4 md:w-2/3 lg:w-2/3 mx-auto" />
          <div className="text-orange-500">
            <div className="mb-4 font-bold text-2xl font-roboto">
              Loading College Matches...
            </div>
            <span className="text-black font-roboto mb-8">Please Wait</span>
            <br />
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mt-4"></div>
          </div>
        </div>,
      ])
    } else if (counter === 2) {
      setMessages([
        <div key="congrats" className="text-center">
          <div className="text-black font-bold text-2xl">
            Congrats {fname}, finding more matches...
          </div>
          <hr className="my-6 text-orange-500 w-full sm:w-3/4 md:w-2/3 lg:w-2/3 mx-auto" />
        </div>,
        <div key="loading" className="text-center">
          <div className="text-orange-500 font-bold text-2xl font-roboto mb-8">
            Loading College Matches...
          </div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mt-4"></div>
        </div>,
      ])
    } else {
      window.location.href = `https://email.nogigiddy.com/c/692940af912ed913?email=${email}&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&location=${location}&job_title=${job_title}`
    }
  }, [
    counter,
    email,
    utm_source,
    utm_medium,
    utm_campaign,
    location,
    job_title,
  ])

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen p-b-12 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://d24rcyp2fqkft.cloudfront.net/assets/images/bg.jpg)',
        }}
      >
        <div className="flex flex-col items-center justify-center text-center mx-4">
          <div className="text-white">
            <div className="text-5xl font-bold mb-3 font-roboto m-4">
              Match to the right online college.
            </div>
            <div className="text-lg mx-4">
              Compare accredited schools and request more information.
            </div>
          </div>
          <div className="bg-white p-10 rounded-md shadow-md mt-4 w-4/6 mb-12">
            {messages}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-white text-black px-6 py-8">
        <Footer />
      </div>
    </>
  )
}
