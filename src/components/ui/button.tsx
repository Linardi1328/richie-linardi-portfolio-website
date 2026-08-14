import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = {
  primary:
    "border-accent bg-accent text-primary-dark hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-border-strong bg-surface text-text-primary hover:border-context-accent hover:bg-surface-elevated",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:bg-surface-muted hover:text-text-primary",
};

const buttonSizes = {
  sm: "min-h-9 px-3 py-2 text-sm",
  md: "min-h-11 px-4 py-2.5 text-sm",
  lg: "min-h-12 px-5 py-3 text-base",
};

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

type ButtonStyleProps = {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

function buttonClassName({
  className,
  variant = "primary",
  size = "md",
}: ButtonStyleProps) {
  return cn(
    "inline-flex items-center justify-center rounded-button border font-semibold transition-[background-color,border-color,color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] active:translate-y-px",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps;

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonClassName({ className, variant, size }),
        "disabled:pointer-events-none disabled:opacity-45",
      )}
      type={type}
      {...props}
    />
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> &
  ButtonStyleProps;

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={buttonClassName({ className, variant, size })}
      {...props}
    />
  );
}
