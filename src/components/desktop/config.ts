const CONTENTS = {
  about: false,
  cocktail: false,
  todo: false,
  portfolio: false,
};

const CONTENTS_LENG = 4;

const APPList = ["about", "cocktail", "todo", "portfolio"] as const;

export { CONTENTS, CONTENTS_LENG, APPList };

type AppState = typeof CONTENTS;

type AppTitle = keyof AppState;

export type { AppState, AppTitle };
