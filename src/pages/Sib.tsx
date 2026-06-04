import Prodact from "../components/Prodact";
import { sib } from "../config/data";

function Sib() {
  return (
      <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
      {sib.map((item, index) => (
        <div key={index}>
          <Prodact item={item} />
        </div>
      ))}
    </div>
  )
}

export default Sib