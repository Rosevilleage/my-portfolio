import TopBarButton from "./TopBarButton";

export interface TopBarProps {
  onFullScreen: () => void;
  onClose: () => void;
  onHide: () => void;
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 px-2 py-1 bg-gray-800 min-h-2">
      <div className="flex justify-around w-[7%] ">
        {ButtonColors.map((color) => (
          <TopBarButton key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
