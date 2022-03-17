import { motion } from "framer";


const MainButton = (props) => {
  return (
    <motion.div className="cursor-pointer items-center justify-center  w-10/12 px-4 py-2 font-semibold bg-transparent border rounded-full transition duration-1000 border-zinc-900 hover:bg-gradient-to-r hover:from-zinc-200 hover:border-transparent">
      {props.title}
    </motion.div>
  );
};

export default MainButton;
