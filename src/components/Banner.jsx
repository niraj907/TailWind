import Typewriter from "./Typewriter";

export default function Banner() {
  return (
    <div className="bg-[#cac6c6] w-full py-[100px]">
      <div className="max-w-[1200px] my-[10px] mx-auto text-center font-bold">
        <div className="text-[18px] md:text-3xl md:p-[16px]">
          Learn with us
        </div>
        <h2 className="text-[30px] md:text-[80px] md:p-[18px]">Grow with us.</h2>
        <div className="text-[25px] md:text-[50px]">
          Learn <Typewriter text={['Web Development', 'Digital Marketing', 'Ethical Hacking']} delay={100} />         
        </div>
        <button className='bg-black text-white p-3 rounded mt-[30px] '>Get Started</button>
      </div>
    </div>
  );
}
