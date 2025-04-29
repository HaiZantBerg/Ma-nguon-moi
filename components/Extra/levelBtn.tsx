"use client";

import React, { useEffect, useState } from "react";
import levelUiI from "@/public/Image/leveluipart1.png";
import levelUiII from "@/public/Image/leveluipart2.png";
import levelUiIII from "@/public/Image/leveluipart3.png";
import { chapter, description } from "../static/chaptersStatic";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import find from "@/public/Svg/find.svg";
import Link from "next/link";
import { createPortal } from "react-dom";

export default function LevelBtn({
  grade,
  directionR = false,
  idx,
  className,
  gridPosition,
  detailsCN = "top-[65%] -translate-y-1/2",
  delay = 0,
  isMobile,
  romanNumeral,
  setCurChapter,
}: {
  grade: number;
  directionR?: boolean;
  idx: number;
  className?: string;
  gridPosition: string;
  detailsCN?: string;
  delay?: number;
  isMobile: boolean;
  romanNumeral: string;
  setCurChapter: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [mountElement, setMountElement] = useState<HTMLElement | null>(null);

  const [scope, animate] = useAnimate();

  const handleMouseClick = () => {
    if (isMobile) setCurChapter(idx + 1);

    document
      .getElementById(`container${idx}${grade}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      animate("#detail", {
        opacity: 1,
      });

      animate(
        "#detail",
        {
          width: "22.5rem",
        },
        {
          ease: "easeOut",
        },
      );

      animate(
        "#detail",
        {
          height: "fit-content",
        },
        {
          ease: "easeOut",
          delay: 0.25,
        },
      );
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      animate(
        "#detail",
        {
          height: 0,
        },
        {
          ease: "easeOut",
        },
      );

      animate(
        "#detail",
        {
          width: 0,
        },
        {
          ease: "easeOut",
          delay: 0.25,
        },
      );

      animate(
        "#detail",
        {
          opacity: 0,
        },
        {
          delay: 0.25,
        },
      );
    }
  };

  useEffect(() => {
    const el = document.getElementById(`container${idx}${grade}`);

    setMountElement(el);
  }, [idx, grade]);

  return (
    <div
      className={`${gridPosition} relative h-[45rem] w-[6rem] min-[640px]:w-[12rem] sm:h-[50rem]`}
    >
      <div className={className}>
        <div
          className="relative aspect-[0.5] w-[5.5rem] scroll-mt-[30vh] select-none sm:w-[8rem]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
          ref={scope}
          id={`container${idx}${grade}`}
        >
          {mountElement &&
            !isMobile &&
            createPortal(
              <div
                className={`absolute ${
                  directionR ? "left-[90%]" : "right-[90%]"
                } h-fit w-[25rem] ${detailsCN} z-20`}
              >
                <div
                  className={`h-0 w-0 overflow-hidden rounded-2xl border-2 border-black text-black opacity-0 ${
                    directionR
                      ? "float-left ml-[2.5rem]"
                      : "float-right mr-[2.5rem]"
                  } bg-[#ffffff80] backdrop-blur-lg backdrop-saturate-150`}
                  id="detail"
                >
                  <div className="w-[22.5rem] p-5">
                    <p className="mb-3 text-center">
                      <span className="font-['Chakra_Petch'] text-[1.4rem] font-semibold">
                        CHƯƠNG {romanNumeral}
                      </span>
                      <br />
                      <span className="text-xl">{chapter[grade][idx]}</span>
                    </p>
                    {description[grade][idx]}
                    <Link
                      className="mt-3 flex h-[3rem] items-center justify-center gap-5 rounded-2xl bg-[#207cf3] text-xl font-medium text-white shadow-[0_0.25rem_#3b3fa1] hover:bg-[#0c6ce8] active:translate-y-[5px] active:shadow-[0_0_#3b3fa1]"
                      href={`/khoi1${grade}/chuong${idx + 1}`}
                    >
                      Khám phá
                      <Image src={find} alt="" className="h-[60%] w-fit" />
                    </Link>
                  </div>
                </div>
              </div>,
              mountElement,
            )}
          <motion.div
            className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2"
            animate={{ y: [0, -10] }}
            transition={{
              duration: 2,
              repeatType: "mirror",
              repeat: Infinity,
              ease: "easeInOut",
              delay: -1 - delay,
            }}
          >
            <Image priority src={levelUiI} alt="" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute bottom-[3.5rem] left-1/2 w-[75%] -translate-x-1/2 sm:bottom-[4.8rem]"
            animate={{ y: [0, -10] }}
            transition={{
              duration: 2,
              repeatType: "mirror",
              repeat: Infinity,
              ease: "easeOut",
              delay: -0.5 - delay,
            }}
          >
            <Image priority src={levelUiII} alt="" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute bottom-[5rem] left-1/2 flex aspect-square w-[80%] -translate-x-1/2 items-center justify-center sm:bottom-[7.5rem]"
            animate={{ y: [0, -10] }}
            transition={{
              duration: 2,
              repeatType: "mirror",
              repeat: Infinity,
              ease: "easeInOut",
              delay: -delay,
            }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-full"
              animate={{
                rotate: "360deg",
              }}
              transition={{
                duration: 12.5,
                repeat: Infinity,
                ease: "linear",
                delay: -delay,
              }}
            >
              <Image priority src={levelUiIII} alt="" />
            </motion.div>
            <div className="font-['Algerian'] text-[1.65rem] text-black sm:text-[2.25rem]">
              {idx + 1}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
