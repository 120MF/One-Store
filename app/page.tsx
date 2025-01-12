import BorrowedPieChart from "@/components/BorrowedPieChart";
import BRLineChart from "@/components/BRLineChart";
import BRButtonGroup from "@/components/BRButtonShortcut";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-5 justify-center">
      <BRButtonGroup />
      <BorrowedPieChart />
      <BRLineChart />
    </div>
  );
}
