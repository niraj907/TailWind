export default function NewsLetter() {
  return (
    <div className="bg-[#cac6c6] p-4">
 <div className="max-w-[1200px] mx-auto md:flex justify-between py-[50px] items-center">
<div className="m-2">
    <h1 className="text-[25px] md:text-[40px] font-bold text-white font-serif	">Want to learn latest I.T skills?</h1>
    <p>Sign up to our newsletter and stay up to date.</p>
</div>
<div className="m-2">
<input type="text" className="mb-3 p-3 mr-3 text-slate-700 rounded"  placeholder="Enter Email" />
<button className='bg-black text-white p-3 rounded mt-[30px] '>Get Started</button>
<br />
<p>We care about the protection of your data Read our  <br /> <a href="" className="text-blue-500">Privacy Policy</a>
</p>
</div>
 </div>
    </div>
  )
}
