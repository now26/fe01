import UserProfile from "./UserProfile";
import ContentBanner from "./ContentBanner";
import CallButton from "./CallButton";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UserProfile />
        <div className="md:col-span-2 space-y-6">
          <ContentBanner />
          <CallButton />
          {children}
        </div>
      </div>
    </div>
  );
}
