const CONTENTS = {
  about: false,
  scraping: false,
  fitrace: false,
  cocktail: false,
  mealmory: false,
  portfolio: false,
  cuther: false,
  rlt: false,
  "find-mat": false,
};

const CONTENTS_LENG = 8;

const APPList = [
  "about",
  "scraping",
  "fitrace",
  "cuther",
  "cocktail",
  "mealmory",
  "portfolio",
  "rlt",
  "find-mat",
] as const;

export { CONTENTS, CONTENTS_LENG, APPList };

type AppState = typeof CONTENTS;

type AppTitle = keyof AppState;

export type { AppState, AppTitle };
