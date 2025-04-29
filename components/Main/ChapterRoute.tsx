"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LevelBtn from "@/components/Extra/levelBtn";
import bg1 from "@/public/Image/bgpart1.png";
import bg2 from "@/public/Image/bgpart2.png";
import bg3 from "@/public/Image/bgpart3.png";
import bg4 from "@/public/Image/bgpart4.png";
import bg5 from "@/public/Image/bgpart5.png";
import find from "@/public/Svg/find.svg";
import arrow from "@/public/Svg/arrowStuff.svg";
import portalIcon from "@/public/Image/portalSmIcon.png";
import {
  easeIn,
  motion,
  useAnimate,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { chapter, description } from "../static/chaptersStatic";
import styling from "@/components/css/generalStyling.module.css";
import lgRoute from "@/public/Svg/routeLg.svg";
import smRoute from "@/public/Svg/routeSm.svg";

const LevelBtnArray = [
  {
    gridPosition: "col-[3/4] row-[1/2]",
    className: "absolute right-[5%]",
    detailsCN: "translate-y-12",
  },
  {
    gridPosition: "col-[2/3] row-[1/2]",
    className: "absolute top-[20%] left-[20%]",
    directionR: true,
    delay: 1,
  },
  {
    gridPosition: "row-[1/2] col-[1/2]",
    className: "absolute top-[60%] left-[5%]",
    directionR: true,
  },
  {
    gridPosition: "col-[2/3] row-[2/3]",
    className: "absolute left-[10%]",
    directionR: true,
    delay: 2,
  },
  {
    gridPosition: "col-[1/2] row-[2/3]",
    className: "absolute top-[60%] left-[20%]",
    directionR: true,
  },
  {
    gridPosition: "row-[2/3] col-[3/4]",
    className: "absolute right-0 top-[30%]",
    delay: 2,
  },
  {
    gridPosition: "col-[3/4] row-[3/4]",
    className: "absolute left-[15%]",
  },
  {
    gridPosition: "col-[2/3] row-[3/4]",
    className: "absolute top-[20%] left-[10%]",
    directionR: true,
    delay: 2,
  },
  {
    gridPosition: "row-[3/4] col-[1/2]",
    className: "absolute top-[60%]",
    directionR: true,
    detailsCN: "-translate-y-24 bottom-0",
  },
];

export default function ChapterRoute({
  grade,
  numberOfChapter,
}: {
  grade: number;
  numberOfChapter: number;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [curChapter, setCurChapter] = useState(0);

  const romanNumeral = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  const container = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 1367px)" });
  const willChangeRouteLayout = useMediaQuery({ query: "(max-width: 640px)" });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const parallax4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const parallax5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  if (isMounted)
    return (
      <div
        className="flex h-fit w-full flex-col-reverse items-center bg-white px-4 pt-28 max-[1367px]:overflow-x-hidden min-[500px]:px-20 min-[640px]:gap-[5rem] min-[1366px]:flex-row min-[1366px]:items-start min-[1366px]:justify-center min-[1400px]:px-24 min-[1550px]:gap-[15rem] sm:pt-36"
        ref={container}
      >
        {isMobile && curChapter > 0 && (
          <Drawer
            curChapter={curChapter}
            romanNumeral={romanNumeral}
            setCurChapter={setCurChapter}
            grade={grade}
            numberOfChapter={numberOfChapter}
          />
        )}
        <div className="relative z-10 grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)] pb-40">
          {willChangeRouteLayout ? (
            <div className="absolute top-[7rem] left-[-2.5rem] h-full w-[25rem]">
              <Image
                src={smRoute}
                alt=""
                className="h-auto w-full opacity-75"
              />
            </div>
          ) : (
            <div className="absolute top-[10rem] left-9 h-full w-full">
              <Image
                src={lgRoute}
                alt=""
                className="h-auto w-full opacity-75"
              />
            </div>
          )}
          {LevelBtnArray.map((config, idx) => (
            <LevelBtn
              romanNumeral={romanNumeral[idx]}
              isMobile={isMobile}
              grade={grade}
              idx={idx}
              gridPosition={config.gridPosition}
              className={config.className}
              detailsCN={config.detailsCN}
              directionR={config.directionR}
              delay={config.delay}
              setCurChapter={setCurChapter}
              key={idx}
            />
          ))}
        </div>
        <div className="top-[0] z-10 h-fit max-w-[40rem] rounded-[1.25rem] border-2 border-[#2f406e] bg-[#041dff0c] p-[1.5rem] backdrop-blur-lg backdrop-saturate-150 min-[1366px]:sticky min-[1366px]:top-[9rem] min-[1366px]:max-w-[32rem] sm:p-[2rem]">
          <div className="flex w-fit flex-col">
            <span className="font-['Chakra_Petch'] text-3xl font-bold sm:text-4xl">
              KHỐI
            </span>
            <span className="mx-auto mb-4 font-['Chakra_Petch'] text-[4.25rem] leading-[3rem] font-bold sm:text-[5rem] sm:leading-[4rem]">
              1{grade}
            </span>
          </div>
          <div className="flex gap-4 text-[0.8rem] sm:text-base">
            <p>
              Khởi đầu hành trình khám phá lịch sử toán học, từ đóng góp của các
              nền văn minh cổ đại trong đại số và hình học đến những đột phá vào
              những năm 1900.
            </p>
            <div className="flex w-fit flex-col border-l-2 border-[#2f406e] py-2 pl-4">
              {/* Thêm các chí số funfact game... */}
              <div className="flex">
                <div className="inline h-[1.5rem] w-[1.5rem]">
                  <Image src={portalIcon} alt="" width={24} height={24} />
                </div>
                <span className="pl-2 text-nowrap">
                  {numberOfChapter} chương
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none fixed top-0 left-0 h-lvh w-full select-none">
          {!isMobile && (
            <motion.div
              className="absolute top-[32%] left-1/2 w-[50rem] -translate-x-1/2 opacity-[15%]"
              style={{
                y: parallax1,
              }}
            >
              <Image src={bg1} alt="" />
            </motion.div>
          )}
          <motion.div
            className="absolute top-[15%] left-[5%] w-[25rem] opacity-[14%]"
            style={{
              y: parallax2,
            }}
          >
            <Image src={bg2} alt="" />
          </motion.div>
          <motion.div
            className="absolute bottom-[-50%] left-[5%] w-[30rem] opacity-[16%]"
            style={{
              y: parallax3,
            }}
          >
            <Image src={bg3} alt="" />
          </motion.div>
          <motion.div
            className="absolute top-[40%] right-[5rem] w-[22.5rem] opacity-[15%] md:top-[25%]"
            style={{
              y: parallax4,
            }}
          >
            <Image src={bg4} alt="" />
          </motion.div>
          <motion.div
            className="absolute top-[50%] left-1/2 aspect-video h-[60%] -translate-x-1/2 opacity-[17.5%] md:top-[20%] md:h-full"
            style={{
              y: parallax5,
            }}
          >
            <Image src={bg5} alt="" />
          </motion.div>
        </div>
      </div>
    );
}

const Drawer = ({
  curChapter,
  romanNumeral,
  setCurChapter,
  grade,
  numberOfChapter,
}: {
  curChapter: number;
  romanNumeral: string[];
  setCurChapter: React.Dispatch<React.SetStateAction<number>>;
  grade: number;
  numberOfChapter: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const dragY = useMotionValue(0);

  const handleCloseDrawer = async () => {
    animate(
      scope.current,
      {
        backgroundColor: "#00000000",
      },
      {
        duration: 0.3,
        ease: easeIn,
      },
    );

    await animate("#drawer", {
      y: "100%",
      scale: 0.85,
    });

    document.body.style.overflow = "auto";

    setCurChapter(0);
  };

  const handleBtnClick = (id: number) => {
    animate(`#btn${id}`, {
      y: ["5px", "0px"],
    });
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 h-full w-full"
      onClick={handleCloseDrawer}
      initial={{ backgroundColor: "#00000000" }}
      animate={{ backgroundColor: "#00000050" }}
      transition={{
        duration: 0.3,
        ease: easeIn,
      }}
      ref={scope}
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${styling.fakeDrawer} absolute bottom-0 z-10 flex w-full flex-col items-center rounded-t-2xl bg-white`}
        id="drawer"
        drag="y"
        style={{ y: dragY }}
        initial={{
          y: "100%",
          scale: 0.85,
        }}
        animate={{
          y: "0%",
          scale: 1,
        }}
        dragElastic={{
          top: 0.3,
          bottom: 0.5,
        }}
        dragConstraints={{
          bottom: 0,
          top: 0,
        }}
        onDragEnd={() => {
          if (dragY.get() >= 50) handleCloseDrawer();
        }}
      >
        <div className="pointer-events-none mt-3 h-[0.25rem] w-[10rem] rounded-2xl bg-[#96969677]" />
        <div className="w-full px-5 py-5 sm:px-10">
          <p className="text-center">
            <span className="font-['Chakra_Petch'] text-[1.4rem] font-semibold sm:text-[2rem]">
              CHƯƠNG {romanNumeral[curChapter - 1]}
            </span>
            <br />
            <span className="text-xl sm:text-[1.5rem]">
              {chapter[0][curChapter - 1]}
            </span>
          </p>
          <div className={`${styling.drawerContent} relative py-0.5`}>
            <div className="max-h-[50dvh] overflow-auto py-8">
              {description[0][curChapter - 1]}
            </div>
          </div>
          <div className="relative flex h-[3rem] gap-3">
            <div className="absolute -bottom-1 -z-10 flex h-full w-full gap-3">
              <div className="aspect-square h-full rounded-2xl bg-[#32324b]" />
              <div className="h-full grow rounded-2xl bg-[#3b3fa1]" />
              <div className="aspect-square h-full rounded-2xl bg-[#32324b]" />
            </div>
            <button
              id="btn1"
              className="aspect-square h-full rounded-2xl bg-[#4a5c99]"
              onClick={() => {
                handleBtnClick(1);

                const des = ((curChapter + 7) % 9) + 1;

                setCurChapter(des);

                document
                  .getElementById(`container${des - 1}${grade}`)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              <Image
                src={arrow}
                alt=""
                className="w-[50%] translate-x-[40%] rotate-270"
              />
            </button>
            <Link
              id="btn2"
              className="flex h-full grow items-center justify-center gap-3 rounded-2xl bg-[#207cf3] text-xl font-medium text-white sm:gap-5"
              href=""
              onClick={() => {
                handleBtnClick(2);
              }}
            >
              Khám phá
              <Image src={find} alt="" className="h-[60%] w-fit" />
            </Link>
            <button
              id="btn3"
              className="aspect-square h-full rounded-2xl bg-[#4a5c99]"
              onClick={() => {
                handleBtnClick(3);

                const inc = curChapter % numberOfChapter;

                document
                  .getElementById(`container${inc}${grade}`)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

                setCurChapter(inc + 1);
              }}
            >
              <Image
                src={arrow}
                alt=""
                className="w-[50%] translate-x-[60%] rotate-90"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
