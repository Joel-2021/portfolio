export type Education = {
  institute: string;
  degree: string;
  duration: string;
  type: EducationType;
};

export enum EducationType {
  COLLEGE,
  SCHOOL,
}

export const educationList: Education[] = [
  {
    institute: "Padmashree Kruthartha Acharya College of Engineering",
    type: EducationType.COLLEGE,
    degree: "B.Tech",
    duration: "2018-22",
  },
  {
    institute: "Vikash Residential School",
    degree: "Higher Secondary Education",
    type: EducationType.SCHOOL,
    duration: "2016-18",
  },
];
