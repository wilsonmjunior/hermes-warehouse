import React from "react";
import * as PhosphorIcons from "phosphor-react-native";

export type IconType = keyof typeof PhosphorIcons;

interface IconProps {
  name: IconType;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color = "black" }: IconProps) {
  const IconComponent = PhosphorIcons[name] as React.ComponentType<{
    size: number;
    color: string;
    style?: object;
  }>;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
}
