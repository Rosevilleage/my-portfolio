import App from "./App";
import HiddenApp from "./HiddenApp";

const isOpenAPP = {
  about: false,
  cocktail: false,
  todo: true,
  portfolio: false,
};

const isHidenAPP = {
  about: true,
  cocktail: true,
  todo: true,
  portfolio: true,
};

interface AppState {
  about: boolean;
  cocktail: boolean;
  todo: boolean;
  portfolio: boolean;
}

interface DocProps {
  isOpenApp: AppState;
  isHiddenApp: AppState;
}

const APPList = ["about", "cocktail", "todo", "portfolio"] as const;
// {isOpenApp, isHiddenApp}: DocProps
export default function Doc() {
  // state
  return (
    <div className="flex items-start justify-around min-w-[250px] w-max mx-auto mt-0.5 h-[54px] pt-2 pr-2 rounded-xl bg-opacity-32 backdrop-blur-md bg-gray-600">
      <div className="flex items-start justify-around w-[220px]">
        {APPList.map((app) => (
          <App key={app} title={app} isOpen={isOpenAPP[app]} />
        ))}
      </div>
      <div className=" w-0.5 rounded-sm h-5/6 bg-slate-400" />
      <div className="flex items-start justify-around">
        {APPList.map((app) => (
          <HiddenApp key={app} title={app} isHidden={isHidenAPP[app]} />
        ))}
      </div>
    </div>
  );
}
