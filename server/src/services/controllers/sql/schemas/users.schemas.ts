export const dbTables = [`auths`, `web3auth`, `banned`];

// export const createTablesQueries = dbTables.map(
//   (e: string) =>
//     `CREATE ____${e}____ TABLE IF NOT EXISTS ____${e}____ (${authsInit})`
// );

export const initAuths = `
  __username__ VARCHAR(255),
  __token__ VARCHAR(1055),
  _name VARCHAR(255),
  _email VARCHAR(255),
  _phone VARCHAR(255),
  _pubkey VARCHAR(255),
  _pfp_ VARCHAR(255),
  _provider VARCHAR(255),
  _aggregator VARCHAR(255),
  _type VARCHAR(255),
  _dapp VARCHAR(255),
  _oauth VARCHAR(255),
  _oauth_id VARCHAR(255),
  _last_login BIGINT,
  _created_at BIGINT,
  PRIMARY KEY (__username__, __token__)
`;

// export const authsSchema = authsInit
//   .split(",")
//   .slice(0, -1)
//   .map((e) => e.split(" ")[2])
//   .slice(0, -1)
//   .join(", ");
