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
    pfp.src = "new-image.jpg";
    setTimeout(() => {
      explode.classList.toggle("hidden");
    }, 2000);
  }
  
  return (
    <>
    <div className="p-2 w-[87%] h-[92%]">
        <div className="flex justify-center items-start flex-col ">
            <div  className='relative chat chat-start'>
              <img src="pfp.jpg" ref={pfpRef} onClick={timeClicked==9 ? null : () => toggleAnimation()} className="chat-image avatar h-[6.5rem] w-[6.5rem] p-1 rounded-[100%] border border-white hover:cursor-pointer" alt="This is a pfp" />
              <img src="explode.jpg" ref={explodeRef} className='absolute right-[20%] top-1.5 scale-[1.3] hidden' alt="explode picture" />
              <div>
                <div data-theme="light" ref={chatBubbleRef} className='chat-bubble bg-white rounded-2xl animate-pop-out pr-8 whitespace-nowrap'>
                  <p className=' text-purple-500 font-Baloo2 font-bold '>{words[timeClicked]}</p>
                </div>
              </div>
            </div>
            <h1 className="font-extrabold text-[3.85rem] mb-1">Qin</h1>
            <h1 className="text-[.99rem] font-[650] tracking-[1.1px]">I'm a freelancer artist will go brrrrmm just for you. Nice to meet you my future client ♡</h1>
        </div>
        <div className="my-6 py-4 px-5 bg-white/40 rounded-full border border-white flex items-center justify-between font-bold text-[1.5rem] tracking-[1px]">
          <a href="https://www.youtube.com/watch?v=Idf7U6WQKdc" target='_blank'><button className='bg-white rounded-full px-22 py-2 hover:scale-[1.05] hover:cursor-pointer transition-[1s]'>Commission</button></a>
          <ul className='flex justify-around items-center h-[100%] w-[43%] '>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]'><FontAwesomeIcon icon={faInstagram} /></li></a>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]'><FontAwesomeIcon icon={faFacebookMessenger} /></li></a>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]'><FontAwesomeIcon icon={faXTwitter} /></li></a>
            <a href="" target='_blank'><li className='text-[2rem] bg-white px-2 pt-2 text-center rounded-full hover:scale-[1.05] hover:bg-purple-500/10 transition-[1s]'><FontAwesomeIcon icon={faEnvelope} /></li></a>
          </ul>
        </div>
        <hr />
        <button className='mt-5 p-1 px-1.5 rounded-2xl bg-gray-400 text-[.8rem] text-gray-200 duration-200 ease-in-out hover:scale-[1.08] hover:text-white hover:bg-linear-to-br from-blue-500 to-purple-500'>Made with love :3</button>
    </div>
    </>
  )
}

export default Home