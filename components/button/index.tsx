"use client";
import { styled } from "@/stitches.confjg";

export const Button = styled("button", {
  // reset all styles
  all: "unset",
  display: "inline-flex",
  padding: "$2",
  fontWeight: "$semibold",
  alignItems: "center",
  borderRadius: "$md",
  border: "$gray500 1px solid",
  cursor: "pointer",
  color: "$hiContrast",

  variants: {
    size: {
      sm: {
        px: "12px",
        py: "8px",

        fontSize: "$sm",
      },
      md: {
        px: "16px",
        py: "10px",

        fontSize: "$sm",
      },
      lg: {
        px: "18px",
        py: "10px",

        fontSize: "$md",
      },
      xl: {
        px: "20px",
        py: "12px",
        fontSize: "$md",
      },
      "2xl": {
        px: "28px",
        py: "16px",
        fontSize: "$xl",
      },
    },
  },
});

Button.displayName = "Button";
