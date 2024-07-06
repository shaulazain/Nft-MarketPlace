import React, { useEffect, useState, useCallback } from "react";

interface CountDownTime {
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer1: React.FC<{ isPlaceBid: boolean }> = ({
  isPlaceBid,
}: {
  isPlaceBid: boolean;
}) => {
 
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? `${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? `${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? `${Math.floor((timeDifference % (60 * 1000)) / 1000)}`
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

    if (timeDifference < 0) {
      setCountDownTime({
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      setCountDownTime({
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    const intervalId = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const cleanup = startCountDown();
    return cleanup;
  }, [startCountDown]);

  return (
    <div className=" bg-opacity-50 bg-[#3B3B3B] w-full md:w-[295px] h-fit rounded-[30px] p-[30px]">
      <div className="flex justify-center items-center ">
        <div className="flex justify-center flex-col gap-[10px]">
          <h4 className="text-[12px] leading-[13.2px]">Auction ends in:</h4>
          <div className="flex gap-[10px] ">
            <div className="flex flex-col gap-[5px]">
              <div className="flex">
                <span className=" text-[#FBFAF8] text-[38px] font-bold  leading-[45.6px]">
                  {countDownTime.hours.charAt(0)}
                </span>
                <span className=" text-[#FBFAF8] text-[38px] font-bold   leading-[45.6px]">
                  {countDownTime.hours.charAt(1)}
                </span>
              </div>
              <p className=" text-[12px]">Hours</p>
            </div>
            <span className="text-[#FBFAF8] text-[38px] font-bold  leading-[45.6px] ">
              :
            </span>
            <div className="flex flex-col gap-[5px]">
              <div className="flex">
                <span className=" text-[#FBFAF8] text-[38px] font-bold  leading-[45.6px]">
                  {countDownTime.minutes.charAt(0)}
                </span>
                <span className=" text-[#FBFAF8] text-[38px] font-bold   leading-[45.6px]">
                  {countDownTime.minutes.charAt(1)}
                </span>
              </div>
              <p className=" text-[12px]">Minutes</p>
            </div>
            <span className="text-[#FBFAF8] text-[38px] font-bold  leading-[45.6px]">
              :
            </span>
            <div className="flex flex-col gap-[5px]">
              <div className="flex">
                <span className=" text-[#FBFAF8] text-[38px] font-bold  leading-[45.6px]">
                  {countDownTime.seconds.charAt(0)}
                </span>
                <span className=" text-[#FBFAF8] text-[38px] font-bold   leading-[45.6px]">
                  {countDownTime.seconds.charAt(1)}
                </span>
              </div>
              <p className=" text-[12px]">Seconds</p>
            </div>
          </div>
          {isPlaceBid && (
            <button className="mt-[20px] font-semibold w-full h-[60px] flex items-center justify-center bg-[#A259FF] rounded-[20px]">
              {" "}
              Place Bid
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer1;
