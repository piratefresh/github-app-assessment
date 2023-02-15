import { styled, css } from "@/stitches.confjg";

export const Th = styled("th", {
  textAlign: "left",
});

export const ItemsCenter = styled("div", {
  display: "flex",

  cursor: "pointer",
});
export const Td = styled("td", {
  py: "$2",
});

export const UserCell = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const icon = css({
  height: "$5",
  width: "$5",
});
