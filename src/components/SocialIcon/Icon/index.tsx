import { FC } from "react";
import { SocialIconProps } from "..";
import { icons } from "../../../lib/icons";

export const Icon: FC<SocialIconProps> = ({
  platform,
  fgColor,
}) => {
  const selectedIcon = icons[platform];
  const { icon } = selectedIcon;

  return (
    <g
      style={{
        fill: fgColor,
      }}
    >
      <path d={icon} />
    </g>
  );
};