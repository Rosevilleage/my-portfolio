const CONTENTS = {
  about: false,
  scraping: false,
  fitrace: false,
  cocktail: false,
  mealmory: false,
  portfolio: false,
  cuther: false,
};

const CONTENTS_LENG = 6;

const APPList = [
  "about",
  "scraping",
  "fitrace",
  "cuther",
  "cocktail",
  "mealmory",
  "portfolio",
] as const;

export { CONTENTS, CONTENTS_LENG, APPList };

type AppState = typeof CONTENTS;

type AppTitle = keyof AppState;

export type { AppState, AppTitle };
