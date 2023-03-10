import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-stone-600`}>
      <p className="font-bold text-[20px] text-stone-400">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-stone-500 leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
