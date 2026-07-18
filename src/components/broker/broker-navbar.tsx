import { getOrganizations } from "@/actions/organization.action";
import LogoutButton from "../auth/logout-button";
import OrganizationSwitcher from "./organization-switcher";
import CreateOrganizationButton from "./create-organization-button";


export async function BrokerNavbar() {
  const organizations = await getOrganizations();

  return (
    <header className="absolute top-0 right-0 flex w-full items-center justify-between p-4 border-b border-gray-700">
      <OrganizationSwitcher organizations={organizations} />
      <div className="flex items-center gap-2">
        <LogoutButton />
        <CreateOrganizationButton/>
      </div>
    </header>
  );
}