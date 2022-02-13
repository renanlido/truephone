import { HTMLAttributes } from 'react';
import theme from 'src/global/themes';

export type ElementTypes = 'h1' | 'h2' | 'p';

enum FontSizeVariation {
  'sm' = '1.4rem', // 14px
  'md' = '1.8rem', // 18px
  'lg' = '2.4rem', // 24px
  'xl' = '3.6rem' // 36px
}

enum FontSizeVariationVw {
  'sm' = '0.7450771687067589vw', // 14px
  'md' = '0.9579563597658329vw', // 18px
  'lg' = '1.2772751463544438vw', // 24px
  'xl' = '1.9159127195316659vw' // 36px
}

enum LineHeightVariation {
  'sm' = '16px',
  'md' = '21px',
  'lg' = '42px'
}

enum LineHeightVariationVW {
  'sm' = '0.8515167642362959vw', // 16px
  'md' = '1.1176157530601383vw', // 21px
  'lg' = '2.2352315061202765vw'
}

enum FontWeightVariation {
  'regular' = 400,
  'medium' = 500,
  'bold' = 700,
  'bolder' = 900
}

export enum VartiantTypes {
  'header',
  'subtitle',
  'title',
  'button',
  'paragraph',
  'small'
}

type VariantProps = {
  lineHeight: string;
  fontWeight: number;
  fontSize: string;
  color: string;
};

type VariantObject = {
  [key in keyof typeof VartiantTypes]: VariantProps;
};

export const Variants: VariantObject = {
  header: {
    lineHeight: `clamp(30px,1rem + ${LineHeightVariationVW.lg} ,${LineHeightVariation.lg})`,
    fontWeight: FontWeightVariation.bolder,
    fontSize: `clamp(3rem, 1rem + ${FontSizeVariationVw.xl}, ${FontSizeVariation.xl})`,
    color: theme.colors.purple
  },

  title: {
    lineHeight: `clamp(30px,1rem + ${LineHeightVariationVW.lg} ,${LineHeightVariation.lg})`,
    fontWeight: FontWeightVariation.bold,
    fontSize: `clamp(3rem, 1rem + ${FontSizeVariationVw.xl}, ${FontSizeVariation.xl})`,
    color: theme.colors.black
  },

  subtitle: {
    lineHeight: `clamp(30px,1rem + ${LineHeightVariationVW.lg} ,${LineHeightVariation.lg})`,
    fontWeight: FontWeightVariation.bold,
    fontSize: `clamp(1.4rem, 1rem + ${FontSizeVariationVw.lg}, ${FontSizeVariation.lg})`,
    color: theme.colors.black
  },

  button: {
    lineHeight: `clamp(18.5px,1rem + ${LineHeightVariationVW.md} ,${LineHeightVariation.md})`,
    fontWeight: FontWeightVariation.bold,
    fontSize: `clamp(0.8rem, 1rem + ${FontSizeVariationVw.md}, ${FontSizeVariation.md})`,
    color: theme.colors.pureWhite
  },

  paragraph: {
    lineHeight: `clamp(18.5px,1rem + ${LineHeightVariationVW.md} ,${LineHeightVariation.md})`,
    fontWeight: FontWeightVariation.regular,
    fontSize: `clamp(0.8rem, 1rem + ${FontSizeVariationVw.md}, ${FontSizeVariation.md})`,
    color: theme.colors.black
  },

  small: {
    lineHeight: `clamp(14px,1rem + ${LineHeightVariationVW.sm} ,${LineHeightVariation.sm})`,
    fontWeight: FontWeightVariation.regular,
    fontSize: `clamp(0.6rem, 1rem + ${FontSizeVariationVw.sm}, ${FontSizeVariation.sm})`,
    color: theme.colors.gray
  }
};

export interface TextBaseProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant: keyof typeof VartiantTypes;
  type?: string | React.ComponentType<any>;
}
