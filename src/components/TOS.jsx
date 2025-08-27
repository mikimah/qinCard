import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function TOS({onToggle}){
    const appNum =1;
    return(<div className="gap-5 flex flex-col justify-center items-center max-w-[45rem]">
        <hr className="w-[100%] border min-md:w-[80%] animate-[slide-up_.75s_ease-out_forwards] opacity-0"/>
        <h1 className="animate-[slide-up_.75s_ease-out_.2s_forwards] opacity-0 font-extrabold min-md:text-4xl">.˚⋆ TERM OF SERVICES ⋆˚.</h1>
        <h3 className="animate-[slide-up_.75s_ease-out_.4s_forwards] opacity-0 font-bold min-md:text-2xl ">✧ Will draw ✧</h3>
        <p className='animate-[slide-up_.75s_ease-out_.6s_forwards] opacity-0 text-center max-md:text-[.75rem]'>OCs and fanarts, OC x Canon
Real people photograph in my style
BL / GL / BG</p>
        <h3 className='animate-[slide-up_.75s_ease-out_.8s_forwards] opacity-0 font-bold min-md:text-2xl'>✧ Won't draw ✧</h3>
        <p className='animate-[slide-up_.75s_ease-out_1s_forwards] opacity-0 text-center max-md:text-[.75rem]'>Furries/animals (kemonomimi are okay), realistic art style, mechas, heavy armor, furries, elders, macho/muscular figures, extreme gore/sexual</p>
        <hr className="w-[70%] border min-md:w-[60%] animate-[slide-up_.75s_ease-out_1.2s_forwards] opacity-0"/>
        <div className=' flex flex-col gap-5 max-md:text-[.75rem]'>
        <p className='animate-[slide-up_.75s_ease-out_1.4s_forwards] opacity-0'>- <span className='font-bold'>No urgent commission</span> (if there is no agreement in the first place), I am working on it while completing my schoolwork, please do understand.</p>
        <p className='animate-[slide-up_.75s_ease-out_1.6s_forwards] opacity-0'>- <span className='font-bold'>WORKFLOW:</span> Direct message - You submit commission requests - I'll give you the total price for your commission - Deal - 50% payment or full payment has been paid - I start working and send you the sketch - Revision/adjustment & deal - Coloring phase + Final touches - Give you the results + Minor revision - DONE</p>
        <p className='animate-[slide-up_.75s_ease-out_1.8s_forwards] opacity-0'>- <span className='font-bold'>Adjustment max: 3 times</span>. I will show you a sketch first before continuing to finish the drawing. I won't make any major edit or revision after the final work is done. If you want major revision, please state it when it’s still on sketch phase.</p>
        <p className='animate-[slide-up_.75s_ease-out_2s_forwards] opacity-0'>- I accept payment through <span className='font-bold'>Paypal</span> US$ (or bank accounts if you live in Vietnam).</p>
        <p className='animate-[slide-up_.75s_ease-out_2.2s_forwards] opacity-0'>- Once the payment is made, there is <span className='font-bold'>no refund</span> (unless I can’t finish your commission or in a certain condition).</p>
        <p className='animate-[slide-up_.75s_ease-out_2.4s_forwards] opacity-0'>- This commission price is for <span className='font-bold'>non commercial/personal purpose</span> only. Commercial fee will vary on the usage of the art. Final price may be multiplied x2, x3, ... Please contact me for more details.</p>
        <p className='animate-[slide-up_.75s_ease-out_2.6s_forwards] opacity-0'>- <span className='font-bold'>Deadline:</span> 1 to 2 months from the date of receiving the payment. If I fail to complete it, you will receive 100% of the money back.</p>
        <p className='animate-[slide-up_.75s_ease-out_2.8s_forwards] opacity-0'>- By ordering my commission means you <span className='font-bold'>agree</span> with my <span className='font-bold'>Terms of service</span>, agreeing that I have the rights to use your commission order as part of my portfolio. I will use it as samples for my future commission or add it on my digital/physical portfolio if needed (with watermark), you can ask your commission to not be posted publicly. Please credit me if you use the commissioned artwork.</p>
        </div>
        <hr className="w-[70%] border  min-md:w-[60%] animate-[slide-up_.75s_ease-out_3s_forwards] opacity-0"/>
        <button onClick={() => onToggle(appNum)} className='animate-[slide-up_.75s_ease-out_3.2s_forwards] opacity-0 bg-white rounded-full font-bold text-2xl p-2 pb-1.5 hover:scale-[1.1] hover:bg-purple-200/50 transition-[1s] min-md:text-3xl min-md:p-3 min-md:pb-2.5'><FontAwesomeIcon icon={faArrowLeft} /></button>
        <div className='animate-[slide-up_.75s_ease-out_3.4s_forwards] opacity-0 h-auto  w-[100%] flex justify-center min-md:justify-start'>
        <button className='p-1 px-1.5 rounded-2xl bg-gray-400 text-[.5rem] text-gray-200 duration-200 ease-in-out hover:scale-[1.08] hover:text-white hover:bg-linear-to-br from-blue-500 to-purple-500 min-md:text-[.75rem]'>Made with love :3</button>
        </div>
    </div>);
}

export default TOS;