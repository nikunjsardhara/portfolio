import { Button } from "../Button/Button";

export const Hero = () => {
    return (
      <div className='max-w-full mx-auto pt-[60px]'>
        <div className='flex items-center ml-[50px]'>
            <div className='bg-[#1c1c1c] max-w-[60px] rounded-full pt-[24px] pl-[21px] h-[60px] w-[60px]'>
                <div className="bg-[#908f8f] h-[2px] w-[20px]"></div>
                <div className="bg-[#908f8f] h-[2px] w-[10px] mt-[7px]"></div>
            </div>
            <div className="ml-[15px] items-center">
                <div className='text-[#ffffff] font-bold text-[17px] leading-none'>
                    Nikunj<br/>
                    Sardhara<span className="text-[#ddf457]">.</span>
                </div>
            </div>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <div className='h-[400px] w-[400px] border-t-4 border-l-4 border-r-4 rounded-t-full overflow-hidden shadow-[0px_0px_200px_rgba(105,105,105)]'>
                <img src={"/assets/nikunj.png"} />
            </div>
            <div className='flex justify-center text-center text-[60px] text-white leading-normal font-bold z-[1] shadow-[10px_10px_40px_rgba(0,0,0)]'>
                Hey, It's Nikunj Sardhara.
            </div>
            <div className='flex justify-center text-center text-[60px] text-white leading-normal font-bold z-[0]'>
                Full stack Developer
            </div>
            <div className='text-center text-[20px] text-white z-[0]'>
                I've been working as a full stack&nbsp;<b>web developer</b>&nbsp;for 7 years.<br/>
                I am based in&nbsp;<b>India</b>.
            </div>
            <div className="mt-5">
                <Button color="#e4ff45">Hire me</Button>
            </div>
        </div>
      </div>
    );
  };