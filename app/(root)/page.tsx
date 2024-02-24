import Services from "@/components/Services";
import data from "@/constants/data";
import MapDisease from "@/components/Map";
import style from "@/styles/Map.module.css";
import HeartForm from "../heart_disease/page";
function Home() {
  return (
    <div>
      <Services services={data.services} />
      <div className={style.mapContainer}>
        <MapDisease />
      </div>
      <HeartForm />
    </div>
  );
}
export default Home;
