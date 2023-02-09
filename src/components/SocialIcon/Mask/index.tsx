import { FC } from "react";
import { SocialIconProps } from "..";
import { icons } from "../../../lib/icons";

export const Mask: FC<SocialIconProps> = ({
  platform,
  bgColor,
}) => {
  const selectedIcon = icons[platform];
  const { mask } = selectedIcon;

  return (
    <g
      style={{
        fill: bgColor,
      }}
    >
      <path d={mask} />
    </g>
  );
};