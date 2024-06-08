import Button from "./Button";
import { motion } from "framer-motion";
import fadeIn from "../variants";

function Hero() {
  return (
    <main className="w-full h-[calc(100vh-7rem)] flex items-center justify-center sm:justify-normal main--bg">
      {/* Text */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-xs 2xl:max-w-sm flex flex-col gap-5 sm:ml-[8vw]"
      >
        <h2 className="text-6xl 2xl:text-7xl leading-[4rem] font-normal text-[#3C4043]">
          Inhale. Gift. Exhale.
        </h2>
        <h1 className="text-base 2xl:text-lg font-normal">
          The gifts you need, stress-free. Shop the best of Google with ease.
        </h1>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <Button
            btnStyle={"min-w-fit btn"}
            txt={"Browse deals"}
            hasBorder={true}
          />
          <Button
            btnStyle={"min-w-fit btn"}
            txt={"Browse the gift guide"}
            hasBorder={false}
          />
        </div>
      </motion.div>
    </main>
  );
}

export default Hero;
