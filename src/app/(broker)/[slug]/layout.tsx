import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function BrokerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("slug --> ", slug);

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin");

  const org = await auth.api.getFullOrganization({
    query: { organizationSlug: slug },
    headers: await headers(),
  });

  console.log("org: ======> ", org);

  if (!org) redirect("/");

  const isMember = org.members.some((m) => m.userId === session.user.id);
  if (!isMember) redirect("/");

  return <>{children}</>;
}