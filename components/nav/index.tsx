"use client";
import { css, styled } from "@/stitches.confjg";
import Link from "next/link";

const StyledNav = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  px: "$5",
  py: "$2",
});

const ButtonGroup = styled("div", {
  display: "flex",
  gap: "$2",
});

const icon = css({
  height: "$5",
  width: "$5",
});

export const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">
        <h1>React Contributors</h1>
      </Link>
    </StyledNav>
  );
};
