"use client";
import { styled } from "@/stitches.confjg";
import Image from "next/image";

export const Avatar = styled(Image, {
  variants: {
    rounded: {
      true: {
        borderRadius: "$full",
      },
    },
  },
});
