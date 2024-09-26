import image13 from '../assets/image13.jpg';

export default function Eperts() {
  return (
    <div className="max-w-[1200px]  my-10 m-auto p-6 md:grid grid-cols-2">
   <div className=" col-span-1 md:w-[90%]">
<img className='w-[100%]' src={image13} alt="image" />
   </div>
   <div className= "col-span-1 flex flex-col  justify-center">
<h2 className='text-blue-500 font-bold my-2 md:text-3xl font-mono'>LEARN FROM EXPERTS</h2>
<p className='my-2 font-serif text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni odit ipsum eum exercitationem mollitia id adipisci illum ipsam dolor! ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis corrupti quaerat reiciendis adipisci distinctio incidunt suscipit libero impedit magni.</p>
 <button className='w-[40%] md:w-[30%] bg-black text-white p-3 rounded my-2'>Get Started</button>
   </div>
    </div>
  )
}
