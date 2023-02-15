"use client";
import { styled } from "@/stitches.confjg";

export const Button = styled("button", {
  // reset all styles
  all: "unset",
  padding: "$2",
  fontWeight: "$medium",
  alignItems: "center",
  borderRadius: "$md",
  cursor: "pointer",

  variants: {
    size: {
      sm: {
        px: "$3",
        py: "$2",
      },
    },
  },
});
