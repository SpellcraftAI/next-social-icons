import { AnchorHTMLAttributes, FC } from "react";
import { icons } from "../../lib/icons";
import { Icon } from "./Icon";
import { Mask } from "./Mask";

export type Icons = typeof icons;
export type SelectedIcon = Icons[keyof Icons];
export type SelectIconProps = { icon: SelectedIcon };

// eslint-disable-next-line max-len
export interface SocialIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  platform: keyof typeof icons;
  size?: string | number;
  fgColor?: string;
  bgColor?: string;
  inverse?: boolean;
}

export const SocialIcon: FC<SocialIconProps> = ({
  platform,
  inverse,
  size = "48px",
  fgColor = inverse ? icons[platform].color : "white",
  bgColor = inverse ? "transparent" : icons[platform].color,
  ...overrides
}) => {
  const props: SocialIconProps = {
    fgColor,
    bgColor,
    platform,
    size,
    inverse,
  };

  return (
    <a {...overrides}>
      <svg viewBox="0 0 64 64" style={{
        // create circle
        borderRadius: "50%",
        // given size
        width: size,
        height: size,
        // center
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Icon {...props} />
        <Mask  {...props} />
      </svg>
    </a>
  );
};