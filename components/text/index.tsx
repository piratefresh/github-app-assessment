"use client";
import { styled } from "@/stitches.confjg";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontFamily: "$sans",
  display: "block",

  variants: {
    weight: {
      normal: {
        fontWeight: "$normal",
      },
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "1.125rem",
      },
      md: {
        fontSize: "$md",
        lineHeight: "1.25rem",
      },
      base: {
        fontSize: "$base",
        lineHeight: "1.5rem",
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "1.75rem",
      },
      xl: {
        fontSize: "$xl",
        lineHeight: "1.875rem",
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: "2rem",
      },
      "3xl": {
        fontSize: "$3xl",
        lineHeight: "2.375rem",
      },
      "4xl": {
        fontSize: "$4xl",
        lineHeight: "2.75rem",
        letterSpacing: "-2%",
      },
      "5xl": {
        fontSize: "$5xl",
        lineHeight: "3.75rem",
        letterSpacing: "-2%",
      },
      "6xl": {
        fontSize: "$6x;",
        lineHeight: "4.5rem",
        letterSpacing: "-2%",
      },
      "7xl": {
        fontSize: "$7xl",
        lineHeight: "5.625rem",
        letterSpacing: "-2%",
      },
    },
    variant: {
      red: {
        color: "$red11",
      },
      crimson: {
        color: "$crimson11",
      },
      pink: {
        color: "$pink11",
      },
      purple: {
        color: "$purple11",
      },
      violet: {
        color: "$violet11",
      },
      indigo: {
        color: "$indigo11",
      },
      blue: {
        color: "$blue11",
      },
      cyan: {
        color: "$cyan11",
      },
      teal: {
        color: "$teal11",
      },
      green: {
        color: "$green11",
      },
      lime: {
        color: "$lime11",
      },
      yellow: {
        color: "$yellow11",
      },
      orange: {
        color: "$orange11",
      },
      gold: {
        color: "$gold11",
      },
      bronze: {
        color: "$bronze11",
      },
      offset: {
        color: "$gray500",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
  defaultVariants: {
    size: "base",
    variant: "contrast",
  },
});
