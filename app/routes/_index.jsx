import { useNavigate, useSearchParams } from '@remix-run/react';

export const meta = () => {
  return [
    { title: "CollegeCompass360" },
    { name: "description", content: "CollegeCompass360" },
  ];
};

import { useEffect } from 'react';

export default function TypeFormEmbed() {

   const [searchParams] = useSearchParams();

  const fname = searchParams.get('fname');
  const lname = searchParams.get('lname');
  const email = searchParams.get('email');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div data-tf-widget="B2a63ZSG" data-tf-opacity="100" data-tf-inline-on-mobile data-tf-iframe-props="title=CollegeCompass360" data-tf-transitive-search-params data-tf-auto-focus data-tf-medium="snippet" data-tf-full-screen data-tf-hidden="fname={fname},lname={lname},email={email}"></div>
    </>
      );
}
