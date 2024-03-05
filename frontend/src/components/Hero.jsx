import Heroleft from './Heroleft';
import Heroright1 from './Heroright1';
import Heroright2 from './Heroright2';

const Hero = ()=>{
  return (
    <div className="grid grid-cols-10 p-5">
           <div className="col-span-7"> 
              <Heroleft/> {/* Apply col-span-7 directly to Heroleft */}
           </div>  
           <div className="col-span-3">
             <Heroright1/>
             <Heroright2/>
           </div>
        </div>
  )
}
 export default Hero;