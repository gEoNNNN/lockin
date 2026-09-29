"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { CheckCircleIcon, StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type PricingFrequency = "monthly" | "yearly";
const frequencies: PricingFrequency[] = ["monthly", "yearly"];

export interface Plan {
  name: string;
  info: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: {
    text: string;
    tooltip?: string;
  }[];
  btn: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
}

export interface PricingSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  plans: Plan[];
  heading: string;
  description?: string;
}

export function PricingSection({
  plans,
  heading,
  description,
  className,
  ...props
}: PricingSectionProps) {
  const [frequency, setFrequency] = useState<PricingFrequency>("monthly");

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center space-y-8",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#25211D] sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        {description && (
          <p className="text-sm leading-relaxed text-[#9A6A45] sm:text-base">
            {description}
          </p>
        )}
      </div>
      <PricingFrequencyToggle
        frequency={frequency}
        setFrequency={setFrequency}
      />
      <div className="grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} frequency={frequency} />
        ))}
      </div>
    </div>
  );
}

interface PricingFrequencyToggleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  frequency: PricingFrequency;
  setFrequency: (frequency: PricingFrequency) => void;
}

export function PricingFrequencyToggle({
  frequency,
  setFrequency,
  className,
  ...props
}: PricingFrequencyToggleProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-fit rounded-full border border-[#D8C8AD] bg-[#D8C8AD]/40 p-1",
        className
      )}
      {...props}
    >
      {frequencies.map((freq) => (
        <button
          key={freq}
          type="button"
          onClick={() => setFrequency(freq)}
          className={cn(
            "relative rounded-full px-4 py-1.5 text-sm capitalize text-[#25211D]",
            frequency === freq && "text-[#F5F1E8]"
          )}
        >
          {frequency === freq && (
            <motion.span
              layoutId="pricing-frequency-pill"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-[#25211D]"
            />
          )}
          <span className="relative z-10">{freq}</span>
        </button>
      ))}
    </div>
  );
}

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  plan: Plan;
  frequency: PricingFrequency;
}

export function PricingCard({
  plan,
  frequency,
  className,
  ...props
}: PricingCardProps) {
  const monthlyTotal = plan.price.monthly * 12;
  const yearlyDiscount = Math.max(
    0,
    Math.round(((monthlyTotal - plan.price.yearly) / monthlyTotal) * 100)
  );


  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-xl border border-[#D8C8AD] bg-[#F5F1E8] text-[#25211D] shadow-sm",
        plan.highlighted && "border-[#9A6A45] bg-[#D8C8AD]/25 shadow-lg",
        className
      )}
      {...props}
    >
      {plan.highlighted && (
        <BorderTrail
          className="bg-[#9A6A45]"
          size={100}
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
        />
      )}
      <div
        className={cn(
          "rounded-t-xl border-b border-[#D8C8AD] bg-[#F5F1E8] p-5",
          plan.highlighted && "bg-[#D8C8AD]/25"
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-medium">{plan.name}</h3>
          <div className="flex items-center gap-2">
            {plan.highlighted && (
              <span className="rounded-full border border-[#D8C8AD] bg-[#F5F1E8] px-2.5 py-0.5 text-xs font-medium text-[#25211D]">
                <StarIcon className="mr-1 inline size-3 fill-current" />
                Popular
              </span>
            )}
            {frequency === "yearly" && yearlyDiscount > 0 && (
              <span className="rounded-full bg-[#9A6A45] px-2.5 py-0.5 text-xs font-medium text-[#F5F1E8]">
                {yearlyDiscount}% off
              </span>
            )}
          </div>
        </div>
        <p className="mt-1 text-sm text-[#9A6A45]">{plan.info}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-medium tracking-tight">
            ${plan.price[frequency]}
          </span>
          <span className="text-sm text-[#9A6A45]">
            /{frequency === "monthly" ? "month" : "year"}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "space-y-4 px-5 py-7 text-sm",
          plan.highlighted && "bg-[#D8C8AD]/25"
        )}
      >
        <TooltipProvider delayDuration={200}>
          {plan.features.map((feature) => {
            const featureContent = (
              <span
                className={cn(
                  "flex items-center gap-2",
                  feature.tooltip &&
                    "cursor-help border-b border-dashed border-[#9A6A45]"
                )}
              >
                <CheckCircleIcon className="size-4 shrink-0 text-[#9A6A45]" />
                {feature.text}
              </span>
            );

            return (
              <div key={feature.text}>
                {feature.tooltip ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {featureContent}
                    </TooltipTrigger>
                    <TooltipContent>{feature.tooltip}</TooltipContent>
                  </Tooltip>
                ) : (
                  featureContent
                )}
              </div>
            );
          })}
        </TooltipProvider>
      </div>

      <div
        className={cn(
          "mt-auto w-full border-t border-[#D8C8AD] p-4",
          plan.highlighted && "bg-[#D8C8AD]/25"
        )}
      >
        <Button
          asChild
          className={cn(
            "w-full",
            plan.highlighted
              ? "bg-[#25211D] text-[#F5F1E8] hover:bg-[#9A6A45]"
              : "border border-[#9A6A45]/60 bg-[#F5F1E8]/60 text-[#25211D] hover:bg-[#F5F1E8]"
          )}
        >
          <Link href={plan.btn.href}>{plan.btn.text}</Link>
        </Button>
      </div>
    </div>
  );
}

interface BorderTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
}

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION: Transition = {
    repeat: Infinity,
    duration: 5,
    ease: "linear",
  };

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn("absolute aspect-square bg-[#9A6A45]", className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

export default PricingSection;
