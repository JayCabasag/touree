"use client";

import { Menu } from "@base-ui/react/menu";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dropdownTriggerVariants = cva(
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-white hover:bg-primary/90 data-popup-open:bg-primary/90",
        outline:
          "border-outline-variant bg-background text-foreground hover:bg-muted data-popup-open:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        tonal:
          "border-transparent bg-primary-container text-on-primary-container hover:bg-primary-container/80 data-popup-open:bg-primary-container/80",
        ghost:
          "border-transparent hover:bg-muted data-popup-open:bg-muted dark:hover:bg-muted/50",
      },
      size: {
        default: "h-12 px-4",
        sm: "h-8 px-3 text-[0.8rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 px-6",
        icon: "size-9 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const dropdownItemVariants = cva(
  "flex items-center gap-3 px-4 py-3 text-sm text-foreground outline-none transition-colors cursor-pointer data-highlighted:bg-muted [&_svg]:size-4 [&_svg]:text-primary",
);

type ChatOption = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type DropdownProps = VariantProps<typeof dropdownTriggerVariants> & {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  chevron?: boolean;
  options: ChatOption[];
};

function Dropdown({
  className,
  variant = "outline",
  size = "default",
  label = "Chat with Elena",
  icon,
  chevron = true,
  options,
}: DropdownProps) {
  return (
    <Menu.Root>
      <Menu.Trigger
        data-slot="chat-dropdown-trigger"
        className={cn(dropdownTriggerVariants({ variant, size, className }))}
      >
        {icon}
        {label}
        {chevron && (
          <span className="material-symbols-outlined transition-transform duration-200 group-data-popup-open:rotate-180">
            expand_more
          </span>
        )}
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8}>
          <Menu.Popup
            data-slot="chat-dropdown-popup"
            className="w-56 overflow-hidden rounded-xl border border-outline-variant/30 bg-white shadow-lg outline-none z-50"
          >
            {options.map((option, i) => (
              <Menu.Item
                key={option.href + option.label}
                render={<a href={option.href} />}
                className={cn(
                  dropdownItemVariants(),
                  i > 0 && "border-t border-outline-variant/10",
                )}
              >
                {option.icon}
                <span>{option.label}</span>
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export { Dropdown, dropdownTriggerVariants, dropdownItemVariants };
