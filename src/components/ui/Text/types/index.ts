import { HTMLAttributes } from 'react';
import theme from 'src/global/themes';

export type ElementTypes = 'h1' | 'h2' | 'p';

enum FontSizeVariation {
  'sm' = '1.02rem', // 14px
  'md' = '1.125rem', // 18px
  'lg' = '2.25rem' // 36px
}

enum LineHeightVariation {
  'sm' = '16px',
  'md' = '21px',
  'lg' = '42px'
}

enum FontWeightVariation {
  'regular' = 400,
  'medium' = 500,
  'bold' = 700,
  'bolder' = 900
}

export enum VartiantTypes {
  'header',
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
    lineHeight: LineHeightVariation.lg,
    fontWeight: FontWeightVariation.bolder,
    fontSize: FontSizeVariation.lg,
    color: theme.colors.purple
  },

  title: {
    lineHeight: LineHeightVariation.lg,
    fontWeight: FontWeightVariation.bold,
    fontSize: FontSizeVariation.lg,
    color: theme.colors.black
  },

  button: {
    lineHeight: LineHeightVariation.md,
    fontWeight: FontWeightVariation.bold,
    fontSize: FontSizeVariation.md,
    color: theme.colors.pureWhite
  },

  paragraph: {
    lineHeight: LineHeightVariation.md,
    fontWeight: FontWeightVariation.regular,
    fontSize: FontSizeVariation.md,
    color: theme.colors.black
  },

  small: {
    lineHeight: LineHeightVariation.sm,
    fontWeight: FontWeightVariation.regular,
    fontSize: FontSizeVariation.sm,
    color: theme.colors.gray
  }
};

export interface TextBaseProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant: keyof typeof VartiantTypes;
  as?: ElementTypes;
}
