// file: app/routes/thankyou.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from '@remix-run/react';

export default function ThankYouRoute() {
  const [counter, setCounter] = useState(0);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
 
    const [searchParams] = useSearchParams();
    
  const state = 'Your State'; // Replace 'Your State' with the actual state value
  const fname = searchParams.get('fname');
  const city = searchParams.get('city');

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      setMessages([
        <div key="transition1" className="text-center">
          <div className="text-black font-bold text-2xl mb-8 font-roboto">Checking Colleges in <span className="text-orange-500">{city}</span></div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mt-4"></div>
          </div>,
      ]);
    } else if (counter === 1) {
      setMessages([
        <div key="loading" className="text-center">
          <hr className="my-6 text-orange-500 w-80  w-1/2 mx-auto" />
          <div className="text-orange-500">
            <div className="mb-4 font-bold text-2xl font-roboto">Loading College Matches...</div>
            <span className="text-black font-roboto mb-8">Please Wait</span>
            <br />
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mt-4"></div>
          </div>
        </div>,
      ]);
    } else if (counter === 2) {
      setMessages([
        <div key="congrats" className="text-center">
          <div className="text-black font-bold text-2xl">Congrats {fname}, finding more matches...</div>
          <hr className="my-6 text-orange-500  w-80  w-1/2 mx-auto" />
        </div>,
        <div key="loading" className="text-center">
          <div className="text-orange-500 font-bold text-2xl font-roboto mb-8">Loading College Matches...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mt-4"></div>
        </div>,
      ]);
    } else {
      navigate('https://email.nogigiddy.com/c/692940af912ed913'); // replace this with your next URL
    }
  }, [counter]);

    return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://d24rcyp2fqkft.cloudfront.net/assets/images/bg.jpg)" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-white text-center">
          <div className="text-5xl font-bold mb-3 font-roboto">Match to the right online college.</div>
          <div className="text-lg">Compare accredited schools and request more information.</div>
        </div>
        <div className="bg-white p-10 rounded-md shadow-md mt-4 w-4/6">
          {messages}
        </div>
      </div>
    </div>
  );
}

