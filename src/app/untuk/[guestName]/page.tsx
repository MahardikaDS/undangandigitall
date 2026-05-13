import InvitationClient from "@/components/InvitationClient";

export default async function GuestPage({
  params,
}: {
  params: Promise<{ guestName: string }>;
}) {
  const resolvedParams = await params;
  // Decode the URL parameter so that special characters are handled
  const guestName = decodeURIComponent(resolvedParams.guestName);

  return <InvitationClient guestName={guestName} />;
}
