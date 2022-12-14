import React, { useEffect, useState } from "react";
import { getMonth, getDate } from "date-fns";

import Filters from "./Filters";
import DialogSelect from "./DropDownRes";
import WeekSummery from "./WeekSummery";
import { week, deadline, deadlineType } from "../Utils/types";

type Props = {
  value: boolean;
  setLoading: (isLoading: boolean) => void;
};
const weeks = [
  { label: "week 1", startDate: "2023-01-02", endDate: "2023-01-06" },
  { label: "week 2", startDate: "2023-01-09", endDate: "2023-01-13" },
  { label: "week 3", startDate: "2023-01-16", endDate: "2023-01-20" },
  { label: "week 4", startDate: "2023-01-23", endDate: "2023-01-27" },
  { label: "week 5", startDate: "2023-01-30", endDate: "2023-02-03" },

  { label: "week 6", startDate: "2023-02-06", endDate: "2023-02-10" },
  { label: "week 7", startDate: "2023-02-13", endDate: "2023-02-17" },
  { label: "Mid exam", startDate: "2023-02-20", endDate: "2023-02-24" },
  { label: "week 9", startDate: "2023-02-27", endDate: "2023-03-03" },

  { label: "week 10", startDate: "2023-03-06", endDate: "2023-03-10" },
  { label: "week 11", startDate: "2023-03-13", endDate: "2023-03-17" },
  { label: "week 12", startDate: "2023-03-20", endDate: "2023-03-27" },
  { label: "week 13", startDate: "2023-03-27", endDate: "2023-03-31" },

  { label: "week 14", startDate: "2023-04-03", endDate: "2023-04-07" },
  { label: "Study leave", startDate: "2023-04-10", endDate: "2023-04-14" },
  { label: "Examination", startDate: "2023-04-17", endDate: "2023-04-21" },
  { label: "Vacation", startDate: "2023-04-24", endDate: "2023-04-28" },

  { label: "week 1", startDate: "2023-05-01", endDate: "2023-05-05" },
  { label: "week 2", startDate: "2023-05-08", endDate: "2023-05-12" },
  { label: "week 3", startDate: "2023-05-15", endDate: "2023-05-19" },
  { label: "week 4", startDate: "2023-05-22", endDate: "2023-05-26" },

  { label: "week 5", startDate: "2023-05-29", endDate: "2023-06-02" },
  { label: "week 6", startDate: "2023-06-05", endDate: "2023-06-09" },
  { label: "week 7", startDate: "2023-06-12", endDate: "2023-06-16" },
  { label: "Mid exam", startDate: "2023-06-19", endDate: "2023-06-23" },

  { label: "week 9", startDate: "2023-06-26", endDate: "2023-06-30" },
  { label: "week 10", startDate: "2023-07-03", endDate: "2023-07-07" },
  { label: "week 11", startDate: "2023-07-10", endDate: "2023-07-14" },
  { label: "week 12", startDate: "2023-07-17", endDate: "2023-07-21" },

  { label: "week 13", startDate: "2023-07-24", endDate: "2023-08-04" },
  { label: "week 14", startDate: "2023-07-31", endDate: "2023-08-11" },
  { label: "Study leave", startDate: "2023-08-07", endDate: "2023-08-11" },
  { label: "Examination", startDate: "2023-08-14", endDate: "2023-08-18" },

  { label: "Vacation", startDate: "2023-08-21", endDate: "2023-08-25" },
];

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function Calendar({ value, setLoading }: Props) {
  const [clicked, setClicked] = useState(false);
  const [week, setWeek] = useState(0);
  const [index, setIndex] = useState(0);
  // const [allWeekData, setAllWeekData] = useState<week[]>();

  // useEffect(() => {
  //   let weekData: week[] = [];
  //   weeks.forEach((week, index) => {
  //     fetch(`http://localhost:3000/api/getWeekData/${index}`)
  //       .then((res) => res.json())
  //       .then((data: week) => {
  //         weekData[index] = data;
  //       });
  //   });
  //   setAllWeekData(weekData);
  //   console.log("Printing all data");
  //   console.log(allWeekData);
  // }, []);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  function getDayFormat(date: string) {
    // console.log(getDay(new Date(date)));
    let dayPrefix;

    return `${getDate(new Date(date))} ${monthNames[getMonth(new Date(date))]}`;
  }

  // // const year = addYears(date, 1);
  // console.log(getDate(new Date("2023-01-09")));

  // function getWeeksDiff(startDate, endDate) {
  //   const msInWeek = 1000 * 60 * 60 * 24 * 7;

  //   return Math.round(Math.abs(endDate - startDate) / msInWeek);
  // }

  // console.log(getWeeksDiff(date, year));

  function getColor(item: deadline) {
    let color = "bg-pink-500";
    if (item.type === deadlineType.assignment) {
      color = "bg-blue-500";
    }
    if (item.type === deadlineType.lab) {
      color = "bg-yellow-500";
    }
    return color;
  }

  // function getAllDeadlines(index: number) {
  //   let weekData = allWeekData ? allWeekData[index];
  //   let deadlines: deadline[] = [];

  //   weekData.monday?.tasks?.forEach((deadline) => {
  //     deadlines.push(deadline);
  //   });
  //   weekData.tuesday?.tasks?.forEach((deadline) => {
  //     deadlines.push(deadline);
  //   });
  //   weekData.wednesday?.tasks?.forEach((deadline) => {
  //     deadlines.push(deadline);
  //   });
  //   weekData.thursday?.tasks?.forEach((deadline) => {
  //     deadlines.push(deadline);
  //   });
  //   weekData.friday?.tasks?.forEach((deadline) => {
  //     deadlines.push(deadline);
  //   });

  //   return deadlines;
  // }

  return (
    <div className="max-w-[1200px] mb-12 ">
      <div className="flex items-center justify-center gap-4 mb-6 ">
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full min-w-2"></div>{" "}
          <p className="px-3 text-sm dark:text-white md:text-md">
            Assignment Deadlines
          </p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
          <p className="px-3 text-sm dark:text-white md:text-md">
            Lab Schedules
          </p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>{" "}
          <p className="px-3 text-sm dark:text-white md:text-md">
            Other Deadlines
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="flex items-center col-span-2 mb-4">
          <div className="dark:text-white dark:border-white flex items-center justify-center h-10 border border-black rounded-md w-[12rem] border-1 mx-auto">
            Dates
          </div>
        </div>
        <div className="justify-between hidden gap-8 col-span-4 mb-2 lg:max-[2000px]:flex">
          <Filters setLoading={setLoading} />
        </div>
        <div className="justify-center flex col-span-4 mb-2 lg:max-[2000px]:hidden text-gray-400">
          <DialogSelect setLoading={setLoading} />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-1 sm:gap-2 md:gap-4 max-w-[1224px]">
        {value ? (
          <div className="flex col-span-6 space-x-4 animate-pulse">
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
            <div className="flex-1 py-1 space-y-6">
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-400 rounded"></div>
                  <div className="h-2 col-span-1 bg-gray-400 rounded"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded"></div>
              </div>
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-400 rounded"></div>
                  <div className="h-2 col-span-1 bg-gray-400 rounded"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded"></div>
              </div>
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-400 rounded"></div>
                  <div className="h-2 col-span-1 bg-gray-400 rounded"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded"></div>
              </div>
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-400 rounded"></div>
                  <div className="h-2 col-span-1 bg-gray-400 rounded"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {weeks.map((val, i) => (
              <>
                {/* {console.log(val.startDate, val.endDate)} */}
                <div className="flex items-center h-8 text-xs bg-gray-200 border border-gray-300 rounded-md md:text-sm dark:text-gray-300 dark:bg-darkTheme border-1 md:text-md">
                  <p className="mx-auto">{getDayFormat(val.startDate)}</p>
                </div>
                <div className="flex items-center h-8 text-xs bg-gray-200 border border-gray-300 rounded-md md:text-sm dark:text-gray-300 dark:bg-darkTheme border-1 md:text-md">
                  <p className="mx-auto">{getDayFormat(val.endDate)}</p>
                </div>
                <div
                  onClick={() => {
                    setClicked(!clicked);
                    setWeek(week);
                    setIndex(i);
                  }}
                  className={classNames(
                    val.label === "Vacation" &&
                      "bg-green-200 dark:bg-green-400 dark:text-black ",
                    val.label === "Examination" &&
                      "bg-red-200 dark:bg-red-400 dark:text-black ",
                    val.label === "Mid exam" &&
                      "bg-red-200 dark:bg-red-400 dark:text-black ",
                    val.label === "Study leave" &&
                      "bg-orange-200 dark:bg-orange-400 dark:text-black ",
                    "flex items-center h-8 col-span-4 bg-gray-200 border border-gray-300 rounded-md dark:text-gray-300 dark:bg-darkTheme border-1 cursor-pointer"
                  )}
                >
                  <div className="absolute px-3 flex flex-row">
                    {i === 0 ? (
                      <>
                        <div className="w-2 h-2 mx-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 mx-2 bg-pink-400 rounded-full"></div>
                        <div className="w-2 h-2 mx-2 bg-orange-400 rounded-full"></div>
                      </>
                    ) : i === 1 ? (
                      <>
                        <div className="w-2 h-2 mx-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 mx-2 bg-orange-400 rounded-full"></div>
                      </>
                    ) : i === 2 ? (
                      <>
                        <div className="w-2 h-2 mx-2 bg-orange-400 rounded-full"></div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="mx-auto cursor-pointer">{val.label}</p>{" "}
                </div>
                {clicked && index === i ? (
                  <WeekSummery {...{ weekNo: i + 1 }} />
                ) : null}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Calendar;
