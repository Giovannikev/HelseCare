import Aside from './Aside';
import Ordonance from './Ordonance'


export default function MedicalDashboard() {
  

  return (
    <div className="relative min-h-screen bg-gray-900 flex">
      <Aside />
      <Ordonance />
      
    </div>
  );
}
