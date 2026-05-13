import InvitationClient from "@/components/InvitationClient";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const to = typeof resolvedParams.to === "string" ? resolvedParams.to : null;

  return <InvitationClient guestName={to} />;
}
