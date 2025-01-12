import BorrowedPieChart from "@/components/BorrowedPieChart";
import BRLineChart from "@/components/BRLineChart";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-5 justify-center">
      <BorrowedPieChart />
        <BRLineChart />
    </div>
  );
}
