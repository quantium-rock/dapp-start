/* @/global/utils/index.ts */

import "./json.utils";
import "./sql.utils";
import "./time.utils";

/*** GLOBAL UTILS ***/

export async function sleepSeconds(seconds: number): Promise<void> {
  return new Promise((resolve: any) => setTimeout(resolve, seconds * 1000));
}

export async function waitSeconds(
  seconds: number,
  answer: boolean,
  callback?: () => Promise<boolean>
): Promise<boolean> {
  let i = 0;
  while (!answer || !callback) {
    i++;
    if (i > seconds) return false;
    await sleepSeconds(1); // wait 1 second.
  }
  return true;
}

export function shortWallet(pubkey: string, n: number): string {
  return pubkey.slice(0, n) + ".." + pubkey.slice(-n);
}

export function tailwindMarkWallet(address: string, wallet: string): string {
  if (wallet == address)
    return "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 border-y border-green-500";
  else return "";
}

export function formatNumber(number: number): string {
  const nf = Intl.NumberFormat();
  return nf.format(number).replace(",", " ");
}

export function formatPercentage(num: number): string {
  if (num > 1 || num < -1)
    throw new Error(
      "Number must be from -1 to 1 to be considered a percentage input num!"
    );
  const split = String(num).split(".");
  if (split.length === 1) {
    return split[0] + ".00%";
  } else if (split.length === 2) {
    if (String(split[1]).length === 0) {
      return split[0] + ".00%";
    } else if (String(split[1]).length === 1) {
      return split[0] + "." + split[1] + "0%";
    } else if (String(split[1]).length === 2) {
      return split[0] + "." + split[1] + "%";
    } else {
      return split[0] + "." + split[1].slice(0, 2) + "%";
    }
  } else {
    return "ERROR: formatNumber() utils -> invalid input num!";
  }
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
