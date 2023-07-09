import { cva, VariantProps } from "class-variance-authority";
import { MechanismCategory } from "@/types/mechanism-category";
import * as React from "react";
import { CATEGORIES_BACKGROUNDS } from "@/config/categories";

const categoryVariants = cva("w-8 h-8 border-2 border-white rounded-full shadow-circle", {
  variants: {
    variant: CATEGORIES_BACKGROUNDS,
  },
});

type CategoryVariantProps = VariantProps<typeof categoryVariants>;

export interface CategoryProps extends React.HTMLAttributes<HTMLDivElement>, CategoryVariantProps {
  variant: MechanismCategory;
}

const CategoryCircle = React.forwardRef<HTMLDivElement, CategoryProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div className={categoryVariants({ variant, className })} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
CategoryCircle.displayName = "CategoryCircle";

export default CategoryCircle;
