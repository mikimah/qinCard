import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faFacebookMessenger,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState } from 'react';



function Home() {
  const words =["Hallo~ Qin at your service!","Ow! That wasn't nice of you...","Nyaw-!","Stop it!","I don't like that!","Ouch!","Hey!","Stop it!","Don't do that!"];
  const chatBubbleRef = useRef(null);
  const pfpRef = useRef(null);
  const explodeRef = useRef(null);
  const [timeClicked, setTimeClicked] = useState(0);

  function toggleAnimation() {
    const chatBubble = chatBubbleRef.current;
    if (!chatBubble ) return;
    if(timeClicked==8){ 
      explodeAva();
      chatBubble.style.transform = "scale(0)";
      chatBubble.classList.toggle("animate-pop-out");
      setTimeClicked(prev => prev+1);
    } else {
      chatBubble.style.transform = "scale(0)";
      chatBubble.classList.toggle("animate-pop-out");
       void chatBubble.offsetWidth; // ép reflow
      setTimeClicked(prev => prev+1);
      chatBubble.classList.toggle("animate-pop-out");
      chatBubble.style.transform = "scale(1)";
    }
   
  }

  function explodeAva() {
    const pfp = pfpRef.current;
    const explode = explodeRef.current;
    if (!pfp || !explode) return;
    explode.classList.toggle("hidden");
    pfp.classList.add("hidden");
    pfp.src = "new-image.jpg";
    pfp.classList.remove("h-[6.5rem]");
    pfp.classList.remove("w-[6.5rem]");
    pfp.classList.add("min-h-[6.5rem]");
    pfp.classList.add("min-w-[6.5rem]");
   
    setTimeout(() => {
       pfp.classList.remove("hidden");
      explode.classList.toggle("hidden");
    }, 2000);
  }
  
  return (
    <>
    <div className="p-2 w-[87%] h-[92%]">
        <div className="flex justify-center items-start flex-col  max-md:items-center border">
            <div  className='relative chat chat-start  h-[7rem] min-w-[7rem] border'>
              <img src="pfp.jpg" ref={pfpRef} onClick={timeClicked==9 ? null : () => toggleAnimation()} className="chat-image avatar h-[6.5rem] w-[6.5rem] p-1 rounded-[100%] border border-white hover:cursor-pointer max-md:h-[5rem] max-md:w-[5rem] max-md:absolute max-md:left-[50%] max-md:top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%]" alt="This is a pfp" />
              <img src="explode.jpg" ref={explodeRef} className='absolute top-[15%] scale-[2] hidden ' alt="explode picture" />
              <div className='max-md:absolute max-md:left-[105%]'>
                <div data-theme="light" ref={chatBubbleRef} className='chat-bubble bg-white rounded-2xl  pr-8 whitespace-nowrap animate-pop-out'>
                  <p className=' text-purple-500 font-Baloo2 font-bold max-md:text-[0.75rem]'>{words[timeClicked]}</p>
                </div>
              </div>
            </div>
            <h1 className="font-extrabold text-[3.85rem] mb-1 max-md:text-[3rem]">Qin</h1>
            <h1 className="text-[.99rem] font-[650] tracking-[1.1px] max-md:text-center max-md:text-[.80rem]">I'm a freelancer artist will go brrrrmm just for you. Nice to meet you my future client ♡</h1>
        </div>
        <div className="my-6 py-4 px-5 w-[100%] bg-white/40 rounded-full border border-white flex items-center justify-between font-bold text-[1.5rem] tracking-[1px] animate-slide-up delay-75 max-md:flex-col max-md:rounded-[2.5rem] max-md:py-3 max-md:px-4 ">
          <button className='bg-white rounded-full w-[50%]  py-2 hover:scale-[1.05] hover:cursor-pointer transition-[1s] max-md:w-[100%] max-md:text-[1.25rem] max-md:py-1.5'>Commission</button>
          <ul className='flex justify-around items-center h-[100%] w-[43%] max-md:w-[100%] max-md:mt-3 max-md:justify-center max-md:gap-[5%] border'>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s] max-md:text-[1.2rem] max-md:px-1.5 max-md:pt-1.5'><FontAwesomeIcon icon={faInstagram} /></li></a>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]  max-md:text-[1.2rem]  max-md:px-1.5 max-md:pt-1.5'><FontAwesomeIcon icon={faFacebookMessenger} /></li></a>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]  max-md:text-[1.2rem]  max-md:px-1.5 max-md:pt-1.5'><FontAwesomeIcon icon={faXTwitter} /></li></a>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]  max-md:text-[1.2rem]  max-md:px-1.5 max-md:pt-1.5'><FontAwesomeIcon icon={faEnvelope} /></li></a>
          </ul>
        </div>
        <hr />
        <button className='mt-5 p-1 px-1.5 rounded-2xl bg-gray-400 text-[.8rem] text-gray-200 duration-200 ease-in-out hover:scale-[1.08] hover:text-white hover:bg-linear-to-br from-blue-500 to-purple-500 '>Made with love :3</button>
    </div>
    </>
  )
}

export default Home