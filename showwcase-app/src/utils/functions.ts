/** Reusable utility functions */

import { SelectOption } from "src/utils/types";
import { Months } from "src/utils/data";

export const getCurrentMonth = () => {
  const currentMonthIndex = new Date().getMonth() + 1;
  return Months.find(m => m.id === currentMonthIndex);
}

export const getYears = (type: "start" | "end" | "expected") => {
  const year = new Date().getFullYear();
  const result:SelectOption[] = [];
  
  //Determine the number of years to show
  Array.from( new Array(44), (v, i) => {
    let value;

    switch (type) {
      case "start":
        value = year-i;
        break;
      case "end":
        value = year+i;
        break;
      case "expected":
        value = (year+5) - i;
        break;
      default:
        break;
    }

    result.push({
      id: i+1,
      name: String(value),
    });
  })

  return result;
};