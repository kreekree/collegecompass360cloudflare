import { useEffect } from 'react';
import Footer from '../components/footer';

export default function TypeFormEmbed() {
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
    <div data-tf-widget="B2a63ZSG" data-tf-opacity="100" data-tf-inline-on-mobile data-tf-iframe-props="title=CollegeCompass360" data-tf-transitive-search-params data-tf-auto-focus data-tf-medium="snippet" data-tf-full-screen></div>
  <Footer />
    </>
      );
}
