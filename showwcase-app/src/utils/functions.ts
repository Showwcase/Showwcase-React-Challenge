/** Reusable utility functions */

import { SelectOption } from "src/utils/types"
import { Months } from "src/utils/data"

export const getCurrentMonth = () => {
  const currentMonthIndex = new Date().getMonth() + 1;
  return Months.find(m => m.id === currentMonthIndex);
}

export const getYears = (type: "before" | "after") => {
  const year = new Date().getFullYear();
  const result:SelectOption[] = []
  
  Array.from( new Array(44), (v, i) => {
    const value = type == "after" ? year+i : year-i;
    result.push({
      id: i+1,
      name: String(value),
    })
  })

  if (type == 'before') {
    return result.sort((a: any, b: any) => a.id - b.id)
  } else {
    return result
  }
};