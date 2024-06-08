import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="section px-5 py-10 sm:px-24 bg-white flex flex-col justify-between mt-24">
      {/* 1st half */}
      <div className="w-full">
        <div className="sm:float-right flex justify-center gap-12">
          <ul className="text-normal text-sm text-[#3C4043] 2xl:text-2xl">
            <li className="mb-6">Placing an order</li>
            <li className="mb-6">Shipping options</li>
            <li className="mb-6">Tracking a package</li>
            <li className="mb-6">Country availability</li>
            <li className="mb-6">Repaire</li>
            <li className="mb-6">Installation</li>
            <li className="mb-6">Ideas & Info</li>
          </ul>
          <ul className="text-normal text-sm text-[#3C4043] 2xl:text-2xl">
            <li className="mb-6">Help center</li>
            <li className="mb-6">Contact us</li>
            <li className="mb-6">Financing</li>
            <li className="mb-6">Device recycling</li>
            <li className="mb-6">Sustainability</li>
            <li className="mb-6">Gift returns</li>
            <li className="mb-6">Refurbished</li>
            <li className="mb-6">Trade-in</li>
            <li className="mb-6">Pixel for Bussiness</li>
            <li className="mb-6">Locations</li>
          </ul>
        </div>
      </div>
      {/* 2nd half */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-4 text-xl 2xl:text-2xl">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>
        <ul className="flex items-center flex-wrap gap-6 lg:gap-10 font-normal text-xs text-[#423F3F] 2xl:text-2xl">
          <li>United States</li>
          <li>Privacy</li>
          <li>Google Nest Commitment to Privacy</li>
          <li>Sales Terms</li>
          <li>Terms of Service</li>
          <li>Careers</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
