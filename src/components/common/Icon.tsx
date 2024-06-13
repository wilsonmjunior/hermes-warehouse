import * as PhosphorIcons from "phosphor-react-native";

const IconSets = {
  PhosphorIcons,
};

export type IconSetsKeys = keyof typeof IconSets;

type PhosphorIconsKeys = keyof typeof PhosphorIcons;

export type IconType = PhosphorIconsKeys;

interface IconProps {
  name: IconType;
  size?: number;
  color?: string;
}

export function Icon({
  name,
  size = 24,
  color = "black",
}: IconProps) {
  const IconComponent = PhosphorIcons[name as PhosphorIconsKeys];

  return <IconComponent size={size} color={color} />;
}
