import { jsonRegex } from "../global/constants/regex";

export function jsonInjectionFilter(text: string): string {
  if (!text.match(jsonRegex)) {
    return text.replace(/ /g, "");
  }
  return "JSON INJECTION DETECTED";
}
