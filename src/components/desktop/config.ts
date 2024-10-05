const CONTENTS = {
  about: false,
  scraping: false,
  fitrace: false,
  cocktail: false,
  mealmory: false,
  portfolio: false,
};

const CONTENTS_LENG = 4;

const APPList = [
  "about",
  "scraping",
  "fitrace",
  "cocktail",
  "mealmory",
  "portfolio",
] as const;

export { CONTENTS, CONTENTS_LENG, APPList };

type AppState = typeof CONTENTS;

type AppTitle = keyof AppState;

export type { AppState, AppTitle };
