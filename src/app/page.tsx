import { Invitation } from "@/components/Invitation";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Card className="w-96 p-4 space-y-4">
        <Invitation />
      </Card>
    </div>
  );
}
