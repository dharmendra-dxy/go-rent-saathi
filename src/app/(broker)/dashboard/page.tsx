import { getOrganizations } from "@/actions/organization.action";
import LogoutButton from "@/components/auth/logout-button";
import { CreateOrganizationForm } from "@/components/forms/create-organization-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { authClient } from "@/lib/auth-client";
import { UI_ROUTES } from "@/utils/ui-routes";
import Link from "next/link";

const BrokerDashboardPage = async () => {
  // const { data: organizations } = authClient.useListOrganizations();
  const organizations = await getOrganizations();
  return (
    <div className="space-y-4">
      <div className="mt-22">
        <h1>All Organizations:</h1>
        {organizations?.map((org) => (
          <Link href={`${UI_ROUTES.DASHBOARD}/${UI_ROUTES.org(org?.slug).ORGANIZATION}`}>
            <Button>{org?.name}</Button>
          </Link>
        ))}
      </div>

      <div className="h-screen w-full flex flex-col space-y-3 items-center justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Organization</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Organization</DialogTitle>
              <DialogDescription>
                Create a new organization to get started.
              </DialogDescription>
            </DialogHeader>
            <CreateOrganizationForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BrokerDashboardPage;
