"use client";

import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Organization } from "@/db/schema";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";
import { UI_ROUTES } from "@/utils/ui-routes";

interface OrganizationSwitcherProps {
  organizations: Organization[];
}

const OrganizationSwitcher = ({ organizations }: OrganizationSwitcherProps) => {
  // getActiveOrganization:
  const { data: activeOrganization } = authClient.useActiveOrganization();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleChangeOrganization = async (organizationId: string) => {
    setLoading(true);
    try {
      // set an organization to active:
      const { error } = await authClient.organization.setActive({
        organizationId,
      });

      if (error) {
        console.error(error);
        toast.error("Failed to switch organization");
        return;
      }

      toast.success("Organization switched successfully");
      if(activeOrganization) router.push(`${UI_ROUTES.org(activeOrganization?.slug).ORGA}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to switch organization");
    }
    setLoading(false);
  };

  useEffect(()=> {
    if(activeOrganization) router.push(`${UI_ROUTES.org(activeOrganization?.slug).ORGA}`);
  }, [activeOrganization])

  return (
    <Select
      onValueChange={handleChangeOrganization}
      value={activeOrganization?.id}
    >
      <SelectTrigger className="w-45">
        {loading ? <Spinner /> : <SelectValue placeholder="Organization" />}
      </SelectTrigger>
      <SelectContent>
        {organizations.map((organization) => (
          <SelectItem key={organization.id} value={organization.id}>
            {organization.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default OrganizationSwitcher;
