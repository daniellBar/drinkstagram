import { Skeleton as MuiSkeleton } from "@mui/material";
import { ElementType } from "react";
import { COLORS } from "../../../globalStyles";

interface SkeletonProps {
  count: number;
  height?: number | string;
  width?: number | string;
  variant?: "circular" | "rectangular" | "rounded" | "text";
  wrapper?: ElementType;
}

export const Skeleton = ({
  count,
  width,
  height,
  variant = "rectangular",
  wrapper: Wrapper = "div",
}: SkeletonProps) => {
  return (
    <>
      {new Array(count).fill(0).map((_, index) => (
        <div key={index}>
          <Wrapper>
            <MuiSkeleton
              variant={variant}
              sx={{
                backgroundColor: COLORS.GREY_7,
                opacity: 0.5,
                height,
                width,
              }}
            />
          </Wrapper>
        </div>
      ))}
    </>
  );
};
