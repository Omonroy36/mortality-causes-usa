export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Favorite {
  name: string;
  slug: string;
  id: number;
}

export interface Row {
  jurisdiction_of_occurrence: number;
  year: number;
  month: number;
  all_cause: number;
  natural_cause: number;
  septicemia: number;
  malignant_neoplasms: number;
  diabetes_mellitus: number;
  alzheimer_disease: number;
  influenza_and_pneumonia: number;
  chronic_lower_respiratory: number;
  other_diseases_of_respiratory: number;
  nephritis_nephrotic_syndrom: number;
  symptoms_signs_and_abnormal: number;
  diseases_of_heart: number;
  cerebrovascular_diseases: number;
  accidents_unintentional: number;
  motor_vehicle_accidents: number;
  intentional_self_harm_suicide: number;
  assault_homicide: number;
  drug_overdose: number;
}

export type Causes =
  | "jurisdiction_of_occurrence"
  | "year"
  | "month"
  | "all_cause"
  | "natural_cause"
  | "septicemia"
  | "malignant_neoplasms"
  | "diabetes_mellitus"
  | "alzheimer_disease"
  | "influenza_and_pneumonia"
  | "chronic_lower_respiratory"
  | "other_diseases_of_respiratory"
  | "nephritis_nephrotic_syndrom"
  | "symptoms_signs_and_abnormal"
  | "diseases_of_heart"
  | "cerebrovascular_diseases"
  | "accidents_unintentional"
  | "motor_vehicle_accidents"
  | "intentional_self_harm_suicide"
  | "assault_homicide"
  | "drug_overdose";

export interface Column {
  id: Causes;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface Query  {
  year: string;
  tag: Causes;
}