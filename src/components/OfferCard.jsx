import { motion } from "framer-motion";
import fadeIn from "../variants";
import Button from "./Button";

function OfferCard(props) {
  const itemStyle = {
    gridColumn: `span ${props.colSpan}`,
    backgroundColor: props.bg,
  };

  return (
    <motion.div
      variants={fadeIn(props.animDirect, props.animDelay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="rounded-2xl"
      style={itemStyle && itemStyle}
    >
      <div className="h-full flex flex-col items-center justify-between gap-6 pt-5 px-5 font-normal text-[#3C4043] text-center">
        <h3 className="text-base">{props.alt}</h3>

        {props.windowW >= 815 && (
          <>
            <h4 className="text-3xl max-w-[14rem]">{props.description}</h4>
            <Button
              btnStyle={"btn--offer"}
              hasBorder={true}
              txt={props.btnTxt}
            />
          </>
        )}

        <img src={props.img} alt={props.alt} />
      </div>
    </motion.div>
  );
}

export default OfferCard;
