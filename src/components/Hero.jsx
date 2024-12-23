import React from "react";
import { motion } from "motion/react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { hobbies } from "../constants";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
				{/* 左侧竖线 */}
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				{/* 右侧文字 */}
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						你好，我是 <span className="text-[#915EFF]">fhf</span>
					</h1>
					<div className={`${styles.heroSubText} mt-2 text-white-100`}>
						我喜欢
						<Typewriter
							options={{
								strings: hobbies,
								autoStart: true,
								loop: true,
								loopCount: Infinity,
								deleteSpeed: "natural",
								pauseFor: 1000,
							}}
						/>
					</div>
				</div>
			</div>
			{/* 电脑模型 */}
			<ComputersCanvas />
			{/* 滚动鼠标提示图案 */}
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
