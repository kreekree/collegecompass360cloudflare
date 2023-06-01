import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-3/4 mx-auto">
        <div className="mb-4">
          <p className="text-sm mb-8">Disclosure: <br></br>Collegecompass360 receives compensation for the featured schools on our websites (see “Sponsored Schools” or “Sponsored Listings” or “Sponsored Results”). So what does this mean for you? Compensation may impact where the Sponsored Schools appear on our websites, including whether they appear as a match through our education matching services tool, the order in which they appear in a listing, and/or their ranking. Our websites do not provide, nor are they intended to provide, a comprehensive list of all schools (a) in the United States (b) located in a specific geographic area or (c) that offer a particular program of study. By providing information or agreeing to be contacted by a Sponsored School, you are in no way obligated to apply to or enroll with the school.</p>
          <p className="text-sm mb-8">*https://studentaid.gov/understand-aid/types/grants/pell. Data collected and distributed by the National Center for Education Statistics http://nces.ed.gov/pubs2016/2016144.pdf. Please note: Financial aid may be available to those who qualify. The information on this page is for informational and research purposes only and is not an assurance of financial aid. This website is privately owned and operated and is not affiliated with or endorsed by any governmental entity. Collegecompass360 receives financial compensation for displaying some schools on this website.</p>
          <div className="mt-2 text-sm mb-8">2023 © Collegecompass360. All Rights Reserved.</div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/about" className="">About Us</Link>
          <Link to="/newsletter" className="">Newsletter</Link>
          <Link to="/terms" className="">Terms & Conditions</Link>
          <Link to="/privacy" className="">Privacy Policy</Link>
          <Link to="/ca-privacy" className="">CA Privacy Notice</Link>
          <Link to="/choices" className="">Your Privacy Choices</Link>
        </div>
      </footer>
  );
}

export default Footer;
