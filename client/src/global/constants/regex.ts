export const usernameRegex = new RegExp(
  /^[a-zA-Z0-9_$.]+/ // Only allow alphanumeric characters, underscores, dollar and dots
);

export const sqlRegex = new RegExp(
  /(\s*([\0\b'"\n\r\t%_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[=><=!~]+.+)|(let\s+.+[=]\s*.*)|(begin\s*.*\s*end)|(\s*[/*]+\s*.*\s*[*/]+)|(\s*(--)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[;]\s*)*)+)/i
);

export const jsonRegex = new RegExp(
  /^[a-zA-Z0-9_$.]+$/ // Only allow alphanumeric characters, underscores, dollar signs, and dots (for accessing nested fields)
);

export const jsRegex = new RegExp(
  /^[a-zA-Z0-9_]+$/ // Only allow alphanumeric characters and underscores
);

export const tsRegex = new RegExp(
  /^[a-zA-Z0-9_]+$/ // Only allow alphanumeric characters and underscores
);

export const pyRegex = new RegExp(
  /^[a-zA-Z0-9_]+$/ // Only allow alphanumeric characters and underscores
);

export const bashRegex = new RegExp(
  /^[a-zA-Z0-9_]+$/ // Only allow alphanumeric characters and underscores
);

export const javaRegex = new RegExp(
  /^[a-zA-Z0-9_]+$/ // Only allow alphanumeric characters and underscores
);

export const htmlRegex = new RegExp(
  /&[a-z0-9]+;/gi // Matches HTML entities, such as &lt;, &gt;, &amp;, etc.
);

export const htmlTagsRegex = new RegExp(
  /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi // Matches opening and closing HTML tags
);

export const emailRegex = new RegExp(
  /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
);

export const phoneRegex = new RegExp(
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
);

export const creditCardRegex = new RegExp(
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
);

export const btcWwalletRegex = new RegExp(
  /^?[0-9a-fA-F]{40}$/ // Bitcoin wallet address
);

export const ethWwalletRegex = new RegExp(
  /^(0x)?[0-9a-fA-F]{40}$/ // Ethereum wallet address
);
export const solWalletRegex = new RegExp(
  /^?[0-9a-fA-F]{55}$/ // Solana wallet address
);

export const dateRegex = new RegExp(/^\d{4}-\d{2}-\d{2}$/); // YYYY-MM-DD

export const timeRegex = new RegExp(/^\d{2}:\d{2}:\d{2}$/); // HH:MM:SS

export const ipRegex = new RegExp(
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
);

export const ipv4Regex = new RegExp(
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
);

export const ipv6Regex = new RegExp(
  /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
);

export const hexRegex = new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/);

export const rgbRegex = new RegExp(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

export const rgbaRegex = new RegExp(
  /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/
);

export const hslRegex = new RegExp(/^hsl\((\d+),\s*(\d+),\s*(\d+)\)$/);

export const hslaRegex = new RegExp(
  /^hsla\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/
);

const REGEX = {
  username: usernameRegex,
  sql: sqlRegex,
  json: jsonRegex,
  js: jsRegex,
  ts: tsRegex,
  py: pyRegex,
  bash: bashRegex,
  java: javaRegex,
  html: htmlRegex,
  htmlTags: htmlTagsRegex,
  email: emailRegex,
  phone: phoneRegex,
  creditCard: creditCardRegex,
  ethWallet: ethWwalletRegex,
  solWallet: solWalletRegex,
  date: dateRegex,
  time: timeRegex,
  ip: ipRegex,
  ipv4: ipv4Regex,
  ipv6: ipv6Regex,
  hex: hexRegex,
  rgb: rgbRegex,
  rgba: rgbaRegex,
  hsl: hslRegex,
  hsla: hslaRegex,
};

export default REGEX;
