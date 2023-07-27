/** Reusable types */

export type SelectOption = {
  id: string | number;
  name: string;
}

export type SchoolType = SelectOption & {
  name: string;
  domain: string[];
  country: string;
  web_pages: string[];
  alpha_two_code: string;
  'state-province': string;
}

export type Education = {
  school: string;
  degree: string;
  fieldStudy: string;
  grade: string;
  description: string;
  startMonthDate: SelectOption | undefined;
  startYearDate: SelectOption | undefined;
  endMonthDate: SelectOption | undefined;
  endYearDate: SelectOption | undefined;
}