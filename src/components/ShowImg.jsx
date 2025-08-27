import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

function ShowImg({ imgSrc, onToggleImg }) {
  return (
    <div className="flex justify-center items-center fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/50 z-1 h-[100%] w-[100%]">
      <img className="max-w-[17rem] opacity-0 animate-[slide-up_.75s_ease-out_forwards] min-md:max-w-[30rem]" src={imgSrc} alt="Displayed" />
      <button className="absolute top-2 right-2 text-3xl hover:text-white hover:cursor-pointer transition-[1s] min-md:text-5xl">
        <FontAwesomeIcon onClick={() => onToggleImg("")} icon={faXmark} />
      </button>
    </div>
  );
}

export default ShowImg;
