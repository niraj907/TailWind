import { FaUserLarge, FaUsers } from "react-icons/fa6";
import { BiUserCheck } from "react-icons/bi";

export default function Plans() {
  return (
    <div className='py-[100px] px-6'>
      <div className='max-w-[1200px] mx-auto md:grid grid-cols-3 gap-[20px] text-center'>
        <div className="shadow-xl my-4 min-h-[500px]  hover:scale-105 duration-500 cursor-pointer ">
          <FaUserLarge className="text-[40px] mx-[50%]" />

          <h2 className="text-[25px] md:text-[30px] font-bold m-5 font-sans">Web Development</h2>
          <h1 className="text-2xl font-bold m-5">$149</h1>
          <p className="m-5">Lorem ipsum dolor sit.</p>
          <hr  className="mx-8"/>
          <p className="m-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, reprehenderit.</p>
          <hr  className="mx-8"/>
<p className="m-5">Lorem ipsum dolor sit amet consectetur.</p>
<hr  className="mx-8"/>
<button className='w-[40%] md:w-[30%] bg-[#10ac84] text-white p-3 rounded my-5'>Get Started</button>
     
        </div>

        <div className="shadow-xl my-4 min-h-[500px] bg-gray-100   hover:scale-105 duration-500 cursor-pointer">
          <FaUsers className="text-[40px] mx-[50%]" />
          <h2 className="text-[25px] md:text-[30px] font-bold m-5 font-sans">Digital Marketing</h2>
          <h1 className="text-2xl font-bold m-5">$149</h1>
          <p className="m-5">Lorem ipsum dolor sit.</p>
          <hr  className="mx-8"/>
          <p className="m-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, reprehenderit.</p>
          <hr  className="mx-8"/>
<p className="m-5">Lorem ipsum dolor sit amet consectetur.</p>
<hr  className="mx-8"/>
<button className='w-[40%] md:w-[30%] bg-[black] text-[#10ac84] p-3 rounded my-5'>Get Started</button>
   
        </div>
        <div className="shadow-xl my-4 min-h-[500px]  hover:scale-105 duration-500 cursor-pointer ">
          <BiUserCheck className="text-[40px] mx-[50%]" />
          <h2 className="text-[25px] md:text-[30px] font-bold m-5 font-sans">App Development</h2>
          <h1 className="text-2xl font-bold m-5">$149</h1>
          <p className="m-5">Lorem ipsum dolor sit.</p>
          <hr  className="mx-8"/>
          <p className="m-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, reprehenderit.</p>
          <hr  className="mx-8"/>
<p className="m-5">Lorem ipsum dolor sit amet consectetur.</p>
<hr  className="mx-8"/>
<button className='w-[40%] md:w-[30%] bg-[#10ac84] text-white p-3 rounded my-5'>Get Started</button>
   
        </div>
      </div>
    </div>
  );
}
