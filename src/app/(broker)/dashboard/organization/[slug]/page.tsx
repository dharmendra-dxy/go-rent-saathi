import { getOrganizationBySlug } from "@/actions/organization.action";
import { getUsers } from "@/actions/users";
import AllUsers from "@/components/broker/all-users";
import MembersTable from "@/components/broker/members-table";

const OrganizationSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const organization = await getOrganizationBySlug(slug);

  // get all the users not in our members:
  const users = await getUsers(organization?.id ?? "");
  console.log("Users: ", users);

  return (
    <div className="mt-16 space-y-4">
      <p>Name : {organization?.name} </p>
      <p>ID : {organization?.id}</p>
      <p>Slug : {organization?.slug}</p>

      <div className="p-8">
        <div className="bg-gray-200/50 p-4 rounded-lg">
          {JSON.stringify(organization, null, 4)}
        </div>
      </div>

      <div className="mt-12 mx-auto max-w-4xl">
        <p className="font-bold">Memebers Table</p>
          <MembersTable members={organization?.members ?? []} />
           <AllUsers organizationId={organization?.id || ""} users={users?.data} />
      </div>
    </div>
  );
};

export default OrganizationSlugPage;
