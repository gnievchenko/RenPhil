import { equipment } from "@/lib/equipment";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EquipmentExplorer } from "@/components/equipment-explorer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <EquipmentExplorer items={equipment} />
      </main>
      <Footer />
    </div>
  );
}
