"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import styles from "@/app";
import { TitleText, TypingText } from "@/components/CustomText";
import { insights } from "@/constans";
import InsightCard from "@/components/InsightCard";

function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => {
            return (
              <InsightCard
                key={`insight-${index}`}
                {...insight}
                index={index + 1}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Insights;
