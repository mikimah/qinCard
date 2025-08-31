import pic1 from '../assets/study.png';
import pic2 from '../assets/occ.png';
import pic3 from '../assets/Cia.png';
import pic4 from '../assets/Nyul.png';
import pic5 from '../assets/Shiro.png';
import chibi1 from '../assets/chibi2.png';

function Menu({ onToggle, onToggleImg }) {
  const appNum=0;
  const appNum2=2;
 


  return (
    <div className=" flex flex-col justify-center items-center gap-5  max-w-[45rem]">
      <h1 className="animate-[slide-up_.75s_ease-out_forwards] opacity-0 font-extrabold min-md:text-4xl">.˚⋆ Menu ⋆˚.</h1>
      <hr className="animate-[slide-up_.75s_ease-out_.2s_forwards] opacity-0 border w-[80%]"/>
      <div className=" grid grid-flow-col grid-rows-3 min-md:grid-rows-1 min-md:grid-cols-3 gap-5">
        <div className=" p-2 flex flex-col justify-around items-center gap-2">
          <div className="animate-[slide-up_.75s_ease-out_.4s_forwards] opacity-0 flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold min-md:text-2xl">✧ Full color ✧</h3>
          <table className="table-auto border-collapse border  ">
            <tbody className="divide-y-1">
               <tr className="divide-x-1 bg-purple-500/30">
              <th className="p-1 text-[.75rem] min-md:text-[1rem]">Head</th>
              <th className="p-1 text-[.75rem] min-md:text-[1rem]">Bust up</th>
              <th className="p-1 text-[.75rem] min-md:text-[1rem]">Halfbody</th>
              <th className="p-1 text-[.75rem] min-md:text-[1rem]">Fullbody</th>
            </tr>
            <tr className="divide-x-1">
              <td className="p-1 text-[.5rem] min-md:text-[.8rem]">35$</td>
              <td className="p-1 text-[.5rem] min-md:text-[.8rem]">40$</td>
              <td className="p-1 text-[.5rem] min-md:text-[.8rem]">50$</td>
              <td className="p-2 text-[.5rem] min-md:text-[.8rem]">Coming soon</td>
            </tr>
            </tbody>
          </table>
          <p className="max-md:text-[.75rem]">+ Only 1 character with head commission</p>
          <p className="max-md:text-[.75rem]">+ Bust up: 30$ for additional character</p>
          <p className="max-md:text-[.75rem]">+ Halfbody: 45$ for additional character</p>
          </div>
          <img onClick={() => onToggleImg(pic1)} src={pic1} className="hover:scale-[1.03] hover:cursor-zoom-in transition-[1s] animate-[slide-up_.75s_ease-out_.6s_forwards] opacity-0 max-md:max-w-[12rem] rounded-2xl " alt="pic1" />
        </div>
        <div className=" p-2 pb-0 flex justify-around flex-col items-center gap-5 min-md:justify-center">
          <img onClick={() => onToggleImg(pic2)} src={pic2} className="hover:scale-[1.03] hover:cursor-zoom-in transition-[1s] animate-[slide-up_.75s_ease-out_.8s_forwards] opacity-0 max-md:max-w-[12rem] rounded-2xl" alt="pic2" />
          <img onClick={() => onToggleImg(pic3)} src={pic3} className="hover:scale-[1.03] hover:cursor-zoom-in transition-[1s] animate-[slide-up_.75s_ease-out_1s_forwards] opacity-0 max-md:max-w-[12rem] rounded-2xl" alt="pic3" />
        </div>
        <div className="p-2  flex flex-col justify-around  items-center gap-5 min-md:justify-center">
          <img onClick={() => onToggleImg(pic4)} src={pic4} className="hover:scale-[1.03] hover:cursor-zoom-in transition-[1s] animate-[slide-up_.75s_ease-out_1.2s_forwards] opacity-0 max-md:max-w-[12rem] rounded-2xl min-md:h-[18rem]" alt="pic4" />
          <img onClick={() => onToggleImg(pic5)} src={pic5} className="hover:scale-[1.03] hover:cursor-zoom-in transition-[1s] animate-[slide-up_.75s_ease-out_1.4s_forwards] opacity-0 max-md:max-w-[12rem] rounded-2xl" alt="pic5" />
        </div>
      </div>
      <hr className="border w-[80%] animate-[slide-up_.75s_ease-out_1.6s_forwards] opacity-0"/>
      <div className="gap-5 grid grid-flow-col grid-rows-2 min-md:grid-rows-1 min-md:grid-cols-3"> 
        <div className="max-md:hidden"></div>
        <div className="flex justify-center items-center"><img onClick={() => onToggleImg(chibi1)} className="hover:scale-[1.03] hover:cursor-zoom-in transition-[1s] animate-[slide-up_.75s_ease-out_1.8s_forwards] opacity-0 max-md:max-w-[12rem]" src={chibi1} alt="pic6" /></div>
        <div className=" flex flex-col justify-center items-center gap-5 animate-[slide-up_.75s_ease-out_2s_forwards] opacity-0">
          <h1 className="font-bold min-md:text-2xl">✧ Chibi ✧</h1>
          <table className="table-auto border-collapse border  w-[80%] ">
            <tbody className="divide-y-1">
              <tr className="divide-x-1 bg-purple-500/30 ">
              <th className="p-1 text-[.75rem]  min-md:text-[1rem]">Head</th>
              <th className="p-1 text-[.75rem]  min-md:text-[1rem]">Fullbody</th>
            </tr>
            <tr className="divide-x-1">
              <td className="p-1 text-[.5rem]  min-md:text-[.8rem]">10$</td>
              <td className="p-1 text-[.5rem]  min-md:text-[.8rem]">25$</td>
            </tr>
            </tbody>
          </table>
          <p className="max-md:text-[.75rem]">+ Only 1 character with head commission</p>
          <p className="max-md:text-[.75rem]">+ Fullbody: 20$ for additional character</p>
        </div>
      </div>
      <div className="animate-[slide-up_.75s_ease-out_2.2s_forwards] opacity-0 flex justify-around items-center w-[90%]">
        <button onClick={() => onToggle(appNum)} className="bg-white font-bold rounded-full w-[40%]  py-1.5  text-[1.05rem] tracking-[1px] hover:scale-[1.02] hover:cursor-pointer transition-[1s]  min-md:py-2 min-md:text-[1.35rem]">Home</button>
        <button onClick={() => onToggle(appNum2)} className="bg-white font-bold rounded-full w-[40%]  py-1.5  text-[1.05rem] tracking-[1px] hover:scale-[1.02] hover:cursor-pointer transition-[1s]  min-md:py-2 min-md:text-[1.35rem]">T.O.S</button>
      </div>
       <div className='animate-[slide-up_.75s_ease-out_2.4s_forwards] opacity-0 h-auto  w-[100%] flex justify-center min-md:justify-start min-md:mt-4'>
            <button className='p-1 px-1.5 rounded-2xl bg-gray-400 text-[.5rem] text-gray-200 duration-200 ease-in-out hover:scale-[1.08] hover:text-white hover:bg-linear-to-br from-blue-500 to-purple-500 min-md:text-[.75rem]'>Made with love :3</button>
        </div>
    </div>
  );
}

export default Menu;