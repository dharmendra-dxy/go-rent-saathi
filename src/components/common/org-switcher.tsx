"use client";

import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Building2 } from "lucide-react";

export function OrgSwitcher() {
  const { data: organizations, isPending } = authClient.useListOrganizations();
  const { data: activeOrg } = authClient.useActiveOrganization();

  if (isPending) {
    return <div className="h-9 w-40 animate-pulse rounded-md bg-muted" />;
  }

  if (!organizations || organizations.length === 0) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span className="flex items-center gap-2 truncate">
            <Building2 className="size-4 shrink-0" />
            {activeOrg?.name ?? organizations[0].name}
          </span>
          <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {organizations.map((org) => (
          <DropdownMenuItem key={org.id} disabled className="cursor-default">
            {org.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}