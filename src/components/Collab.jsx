import { motion } from "framer-motion";
import fadeIn from "../variants";
import Button from "./Button";

function Collab(props) {
  return (
    <div className="section px-5 bg-white flex items-center my-auto">
      <div
        style={{ backgroundColor: props.bgColor }}
        className="flex flex-col lg:flex-row gap-5 lg:gap-0 w-full rounded-lg"
      >
        <motion.img
          variants={fadeIn("right", 0.1, false)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          src={props.img}
          alt={props.alt}
          className="w-full rounded-lg"
        />

        <div className="w-full flex items-center justify-center p-5">
          <motion.div
            variants={fadeIn("left", 0.1, false)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-sm 2xl:max-w-md flex flex-col gap-5 font-normal text-base text-[#3C4043]"
          >
            <h3 className="text-2xl lg:text-4xl 2xl:text-5xl">
              {props.header}
            </h3>
            <p className="2xl:text-xl">{props.description}</p>

            <Button
              btnStyle={
                props.isBtn
                  ? "w-fit btn"
                  : "self-start text-[#1967D2] underline"
              }
              hasBorder={props.isBtn}
              txt={props.linkTxt}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Collab;
