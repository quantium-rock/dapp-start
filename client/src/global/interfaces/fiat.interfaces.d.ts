/* @/global/interfaces/fiat.interfaces.d.ts */

/*** FIAT CURRENCY INTERFACES ***/

export default interface IFiat {
  eur: IFiatTicket; // EUR ticket.
  usd: IFiatTicket; // USD ticket.
  gbp: IFiatTicket; // GBP ticket.
  chf: IFiatTicket; // CHF ticket.
  cny: IFiatTicket; // CNY ticket.
  jpy: IFiatTicket; // JPY ticket.
  hkd: IFiatTicket; // HKD ticket.
  sgd: IFiatTicket; // SGD ticket.
  aud: IFiatTicket; // AUD ticket.
  cad: IFiatTicket; // CAD ticket.
  nzd: IFiatTicket; // NZD ticket.
  nok: IFiatTicket; // NOK ticket.
  sek: IFiatTicket; // SEK ticket
  krw?: IFiatTicket; // KRW ticket.
  rub?: IFiatTicket; // RUB ticket.
  brl?: IFiatTicket; // BRL ticket.
  inr?: IFiatTicket; // INR ticket.
  mxn?: IFiatTicket; // MXN ticket.
  idr?: IFiatTicket; // IDR ticket.
  try?: IFiatTicket; // TRY ticket.
  zar?: IFiatTicket; // ZAR ticket.
  thb?: IFiatTicket; // THB ticket.
  php?: IFiatTicket; // PHP ticket.
  myr?: IFiatTicket; // MYR ticket.
  pln?: IFiatTicket; // PLN ticket.
  dkk?: IFiatTicket; // DKK ticket.
  huf?: IFiatTicket; // HUF ticket.
  czk?: IFiatTicket; // CZK ticket.
  ils?: IFiatTicket; // ILS ticket.
  clp?: IFiatTicket; // CLP ticket.
  cop?: IFiatTicket; // COP ticket.
  ars?: IFiatTicket; // ARS ticket.
  twd?: IFiatTicket; // TWD ticket.
  pkr?: IFiatTicket; // PKR ticket.
  uah?: IFiatTicket; // UAH ticket.
  egp?: IFiatTicket; // EGP ticket.
  vnd?: IFiatTicket; // VND ticket.
  ngn?: IFiatTicket; // NGN ticket.
  zar?: IFiatTicket; // ZAR ticket.
  kes?: IFiatTicket; // KES ticket.
  ghs?: IFiatTicket; // GHS ticket.
  pen?: IFiatTicket; // PEN ticket.
  irr?: IFiatTicket; // IRR ticket.
  qar?: IFiatTicket; // QAR ticket.
  kwd?: IFiatTicket; // KWD ticket.
  omr?: IFiatTicket; // OMR ticket.
  bhd?: IFiatTicket; // BHD ticket.
  jod?: IFiatTicket; // JOD ticket.
  lbp?: IFiatTicket; // LBP ticket.
  crc?: IFiatTicket; // CRC ticket.
  svc?: IFiatTicket; // SVC ticket.
  nio?: IFiatTicket; // NIO ticket.
  pyg?: IFiatTicket; // PYG ticket.
  uyu?: IFiatTicket; // UYU ticket.
  dop?: IFiatTicket; // DOP ticket.
  bbd?: IFiatTicket; // BBD ticket.
  ttd?: IFiatTicket; // TTD ticket.
  xcd?: IFiatTicket; // XCD ticket.
  bsd?: IFiatTicket; // BSD ticket.
  bmd?: IFiatTicket; // BMD ticket.
  fjd?: IFiatTicket; // FJD ticket.
  sbd?: IFiatTicket; // SBD ticket.
  vef?: IFiatTicket; // VEF ticket.
}

export interface IFiatTicket {
  ccy: string; // forex symbol.
  country: string; // ccy country.
  amount: int; // ccy amount.
  price: number; // ccy price.
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
