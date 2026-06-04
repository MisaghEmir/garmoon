import Prodact from "../components/Prodact";
import { berger } from "../config/data";


function Berger() {
  return (
    <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
      {berger.map((item, index) => (
        <div key={index}>
          <Prodact item={item} />
        </div>
      ))}
    </div>
  )
}

export default Berger