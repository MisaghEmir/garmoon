import Prodact from '../components/Prodact'
import { pasta } from '../config/data'

function Pasta() {
  return (
    <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
      {pasta.map((item, index) => (
        <div key={index}>
          <Prodact item={item} />
        </div>
      ))}
    </div>
  )
}

export default Pasta