import subscriptionImg from "../images/SubsciptionImg.png";
import Button from "./Button";
import { motion } from "framer-motion";
import fadeIn from "../variants";

function Subscription() {
  return (
    <motion.div
      variants={fadeIn("no", "0.2", false)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="section flex flex-col items-center justify-between p-5 bg-white"
    >
      <div className="max-w-[36rem] h-full flex flex-col items-center text-center justify-center gap-5">
        <img src={subscriptionImg} alt="Flag" />
        <h4 className="text-[#3C4043] text-3xl font-normal mb-5">
          Keep me updated about devices, news, tips, and offers from Google
          Store.
        </h4>
        <Button
          btnStyle={"btn--offer"}
          txt={"Log in and sign up"}
          hasBorder={true}
        />
        <Button
          btnStyle={"btn--offer text-[#1967D2]"}
          txt={"or enter email address"}
          hasBorder={false}
        />
      </div>

      <div className="flex text-[#3C4043] text-xs 2xl:text-lg font-normal">
        <span>*</span>
        <p className="mt-2 ml-1">
          Here's what you will pay for Pixel Pass: You'll be required to finance
          your Pixel Pass purchase with 0% APR Google Store Financing. The full
          cost of your Pixel and Preferred Care is spread out over 24 monthly
          payments. The Google services included in Pixel Pass will be charged
          to your Google Store Financing account each month. Your Pixel Pass
          subscription will appear as two separate transactions every month on
          your Google Store Financing account. From $45/month: $648.68 at 0% APR
          with 24 equal monthly payments = $27.03/month plus Pixel Pass services
          (Google One 200 GB) = $17.97/month for a Total monthly payment =
          $45/month. Adjusted for taxes and shipping.
        </p>
      </div>
    </motion.div>
  );
}

export default Subscription;
