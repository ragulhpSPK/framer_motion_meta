"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app";
import { TitleText, TypingText } from "@/components/CustomText";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { newFeatures } from "@/constans";
import NewFeatures from "@/components/NewFeatures";

function WhatsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-0.75 flex justify-center flex-col"
        >
          <TypingText title="| Whats's New?" />
          <TitleText title={<>Whats new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between  gap-[24px]">
            {newFeatures.map((feature, index) => {
              return <NewFeatures key={feature.title} {...feature} />;
            })}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="whats-new.png"
            alt="start"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatsNew;
