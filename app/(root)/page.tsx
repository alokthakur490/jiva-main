import Services from "@/components/Services";
import data from "@/constants/data";

export default function Home() {
  return (
    <div>
      <Services services={data.services} />
    </div>
  );
}
