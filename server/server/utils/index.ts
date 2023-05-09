import "./json.utils";
import "./sql.utils";
import "./time.utils";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
