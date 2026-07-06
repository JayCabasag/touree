import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full rounded-lg border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent font-body-md p-4 placeholder:text-outline",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
