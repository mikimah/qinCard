import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faXTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState,useEffect } from 'react';
import pfp from '../assets/pfp.jpg';
import explodeImg from '../assets/explode.jpg';

function Home2({ onToggle }) {
  const appNum = 1;
  const words =["Hallo~ Qin at your service!","Ow! That wasn't nice of you...","Nyaw-!","UwU","I don't like that!","Oof!","I don't feel so good...","*explode.mp3*"];
  const chatBubbleRef = useRef(null);
  const pfpRef = useRef(null);
  const explodeRef = useRef(null);
  const [timeClicked, setTimeClicked] = useState(0);

  function toggleAnimation() {
    const chatBubble = chatBubbleRef.current;
    if (!chatBubble ) return;
    setTimeClicked(prev => prev+1);
    chatBubble.classList.toggle("animate-pop-out");
    void chatBubble.offsetWidth; // ép reflow
    chatBubble.classList.toggle("animate-pop-out");
    if(timeClicked==6){
      triggerExplosion();
    }
  }

  function triggerExplosion() {
    const pfp = pfpRef.current;
    const explode = explodeRef.current;
    if (!pfp || !explode) return;
    explode.classList.toggle("hidden");
    setTimeout(() => {pfp.src="new-image.jpg"},1000);
    setTimeout(() => {explode.classList.toggle("hidden");}, 2000);
  }

  useEffect(()=>{
    const chatBubble = chatBubbleRef.current;
    if (!chatBubble ) return;
    setTimeout(() => {chatBubble.classList.add("animate-pop-out")}, 2200);
  },[]);

  return (
    <div className='flex flex-col justify-center items-center gap-5 max-w-[47rem]'>
      <div className="flex flex-col justify-center items-center gap-2 min-md:items-start">
        <div className=' flex justify-center items-center flex-col'>
        <div className='relative chat chat-start animate-[slide-up_.75s_ease-out_.2s_forwards] opacity-0  w-[5rem] h-[5rem] min-md:w-[6.5rem] min-md:h-[6.5rem]'>
          <img ref={pfpRef} onClick={timeClicked == 7 ? null : ()=>toggleAnimation()} className="   hover:cursor-pointer w-[5rem] h-[5rem]  rounded-full box-border border border-white p-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-md:w-[6.5rem] min-md:h-[6.5rem]" src={pfp} alt="This is a pfp" />
          <img src={explodeImg} ref={explodeRef} alt="explosion image" className='hidden absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
          <div ref={chatBubbleRef} className='absolute left-[110%] opacity-0'>
            <div data-theme="light" className='chat-bubble bg-white rounded-2xl pl-2 pr-4'>
              <pre className='text-[.45rem] text-purple-500 font-Baloo2 font-bold min-md:text-[1rem] min-md:pr-2'>{words[timeClicked]}</pre>
            </div>
          </div>
        </div>
         
        <h1 className="animate-[slide-up_.75s_ease-out_.4s_forwards] opacity-0 font-extrabold text-[1.75rem] tracking-[1px] min-md:text-[4rem] ">Qin</h1>
        </div>
        <p className="animate-[slide-up_.75s_ease-out_.6s_forwards] opacity-0 font-bold max-md:text-center text-[.80rem] tracking-[1px] min-md:text-[1.2rem]">I'm a freelancer artist will go brrrrmm just for you. Nice to meet you my future client ♡</p>
      </div>
      <div className='animate-[slide-up_.75s_ease-out_.8s_forwards] opacity-0 w-[100%] bg-white/40 rounded-3xl border border-white flex flex-col items-center justify-center font-bold p-2 min-md:flex-row min-md:justify-between min-md:p-4 min-md:rounded-full'>
        <button onClick={() => onToggle(appNum)} className='bg-white rounded-full w-[100%]  py-1.5 mb-2 text-[1.05rem] tracking-[1px] hover:scale-[1.02] hover:cursor-pointer transition-[1s] min-md:w-[62%] min-md:mb-0 min-md:py-2 min-md:text-[1.35rem]'>Commission</button>
        <ul className=' flex justify-center items-center gap-2 min-md:w-[35%] min-md:justify-around '>
            <a target='_blank' href="https://www.instagram.com/qinzzz7?igsh=OXFxZmZ1aGhoODNu&utm_source=qr"><li className='bg-white rounded-full px-1.5 pt-1.5 text-[1.25rem] hover:scale-[1.2] hover:bg-purple-500/10 transition-[1s] min-md:text-[1.5rem] min-md:px-2 min-md:pt-2 min-md:pb-0.5'><FontAwesomeIcon icon={faInstagram} /></li></a>
            <a target='_blank' href="https://www.facebook.com/share/1B5RfGVnXt/?mibextid=wwXIfr"><li className='bg-white rounded-full px-1.5 pt-1.5 text-[1.25rem] hover:scale-[1.2] hover:bg-purple-500/10 transition-[1s] min-md:text-[1.5rem] min-md:px-2 min-md:pt-2 min-md:pb-0.5'><FontAwesomeIcon icon={faFacebook} /></li></a>
            <a target='_blank' href="https://x.com/qinngu?s=21"><li className='bg-white rounded-full px-1.5 pt-1.5 text-[1.25rem] hover:scale-[1.2] hover:bg-purple-500/10 transition-[1s] min-md:text-[1.5rem] min-md:px-2 min-md:pt-2 min-md:pb-0.5'><FontAwesomeIcon icon={faXTwitter} /></li></a>
            <a target='_blank' href="mailto:qqin175@gmail.com"><li className='bg-white rounded-full px-1.5 pt-1.5 text-[1.25rem] hover:scale-[1.2] hover:bg-purple-500/10 transition-[1s] min-md:text-[1.5rem] min-md:px-2 min-md:pt-2 min-md:pb-0.5'><FontAwesomeIcon icon={faEnvelope} /></li></a>
        </ul>
      </div>
      <hr className='animate-[slide-up_.75s_ease-out_1s_forwards] opacity-0 w-[100%] border font-extrabold text-4xl'/>
      <div className='animate-[slide-up_.75s_ease-out_1.2s_forwards] opacity-0 h-auto  w-[100%] flex justify-center min-md:justify-start'>
        <button className='p-1 px-1.5 rounded-2xl bg-gray-400 text-[.5rem] text-gray-200 duration-200 ease-in-out hover:scale-[1.08] hover:text-white hover:bg-linear-to-br from-blue-500 to-purple-500 min-md:text-[.75rem]'>Made with love :3</button>
      </div>
      
    </div>
  );
}

export default Home2;