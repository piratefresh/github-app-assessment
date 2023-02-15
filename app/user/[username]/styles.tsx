"use client";
import { styled } from "@/stitches.confjg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$5",
  width: "$4xl",

  "@md": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
});

export const UserInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
  width: "100%",
});

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});

export const RepoCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  border: "$blueGray500 1px solid",
  borderRadius: "$md",
  padding: "$2",
});
