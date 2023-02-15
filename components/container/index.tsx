"use client";
import { styled } from "@/stitches.confjg";

export const Container = styled("main", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "$4",

  "@md": {
    width: "100%",
  },
});
