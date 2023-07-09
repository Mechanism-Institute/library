import { cva, VariantProps } from "class-variance-authority";
import { MechanismCategory } from "@/types/mechanism-category";
import * as React from "react";

const variant: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  budgeting: "bg-teal",
  liquidity: "bg-blue",
  "economic-design": "bg-purple",
  "value-allocation": "bg-yellow",
  fundraising: "bg-green",
  governance: "bg-brown",
  identity: "bg-pink",
};

const categoryVariants = cva(
  [
    "font-gotham rounded-3xl border-2 border-white text-white",
    "px-3 py-2 inline-flex gap-1 items-center",
  ],
  {
    variants: {
      variant,
    },
  },
);

const labels: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  budgeting: "Budgeting",
  liquidity: "Liquidity",
  "economic-design": "Economic Design",
  "value-allocation": "Value Allocation",
  fundraising: "Fundraising",
  governance: "Governance",
  identity: "Identity",
};

type CategoryVariantProps = VariantProps<typeof categoryVariants>;

export interface CategoryProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    CategoryVariantProps {
  variant: MechanismCategory;
}

const Category = React.forwardRef<HTMLSpanElement, CategoryProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span
        className={categoryVariants({ variant, className })}
        ref={ref}
        {...props}
      >
        {labels[variant]}
        {children}
      </span>
    );
  },
);
Category.displayName = "Category";

export default Category;
