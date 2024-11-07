import { Invitation } from "@/components/Invitation";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#fef6ed]">
      <Card className="w-[28rem] bg-[#f6e6d4]">
        <img src="https://utfs.io/f/AR95GDbqfmiL67vj7DaxG5jmiqyXaIwh1Y2ZnsMOocBEUFkp" />
        <Invitation />
      </Card>
    </div>
  );
}
