

function Mid({ onToggle }) {
    const appNum=2;
    const appNum2=3;
  return (
    <div className="flex flex-col justify-center items-center gap-5  max-w-[42rem] ">
        <div className="flex flex-col justify-center items-center gap-5 min-md:flex-row ">
            <img src="chicken.png" className=" max-h-[15rem] animate-[slide-up_.75s_ease-out_forwards] opacity-0" alt="if yo seeing this then your search engine is done bro." />
            <div className=" flex flex-col justify-center items-center gap-5 min-md:w-[50%]">
              <p className="opacity-0 text-[.8rem] tracking-[1px] min-md:text-[.9rem] text-center animate-[slide-up_.75s_ease-out_.2s_forwards]">Thank you for stopping by! Please take a look at my T.O.S carefully before placing an order. Reach me through Instagram, Facebook, X or my email!</p>
                <hr className="w-[100%] border animate-[slide-up_.75s_ease-out_.4s_forwards] opacity-0 " />
                <div className="flex flex-col  w-[100%]">
                    <button onClick={() => onToggle(appNum)} className="opacity-0 animate-[slide-up_.75s_ease-out_.6s_forwards] bg-white font-bold rounded-full w-[100%]  py-1.5 mb-2 text-[1.05rem] tracking-[1px] hover:scale-[1.02] hover:cursor-pointer transition-[1s]  min-md:py-2 min-md:text-[1.35rem]">T.O.S</button>
                    <button onClick={() => onToggle(appNum2)} className="opacity-0 animate-[slide-up_.75s_ease-out_.8s_forwards] bg-white font-bold rounded-full w-[100%]  py-1.5 mb-2 text-[1.05rem] tracking-[1px] hover:scale-[1.02] hover:cursor-pointer transition-[1s]  min-md:py-2 min-md:text-[1.35rem]">Menu</button>
                </div>
            </div>
        </div>
        <div className='animate-[slide-up_.75s_ease-out_1s_forwards] opacity-0 h-auto  w-[100%] flex justify-center min-md:justify-start min-md:mt-4'>
            <button className='p-1 px-1.5 rounded-2xl bg-gray-400 text-[.5rem] text-gray-200 duration-200 ease-in-out hover:scale-[1.08] hover:text-white hover:bg-linear-to-br from-blue-500 to-purple-500 min-md:text-[.75rem]'>Made with love :3</button>
        </div>
    </div>
  );
}

export default Mid;