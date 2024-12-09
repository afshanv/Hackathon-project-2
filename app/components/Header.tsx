import React from "react";

// CartButton Component
const CartButton: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-3 items-start self-stretch my-auto text-center capitalize">
    <div className="flex gap-3 justify-center items-center px-4 py-3 bg-white rounded-lg">
      <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-none text-slate-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/e0ec22e9e03aa5e0847c26f58166d2398882f51933044d4cab99c87a72c291ca?apiKey=327e5b6545924a70ba03a6acff559d29&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
        />
        <div className="self-stretch my-auto">Cart</div>
      </div>
      <div className="flex flex-col self-stretch my-auto w-5 text-xs leading-none text-white">
        <div className="px-0.5 w-5 h-5 bg-cyan-700 rounded-full fill-cyan-700">
          {count}
        </div>
      </div>
    </div>
  </div>
);

export default function Header(){
return(
  // top header
  <div>
     <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-3.5 max-w-full text-sm text-white bg-[#272343] w-[1920px] max-md:px-5">
        <div className="flex gap-2 items-center self-stretch my-auto leading-none capitalize min-w-[240px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/95fa6678e87733c5eab1584f552121aae7336c3f56854b526a5515574e845b85?apiKey=327e5b6545924a70ba03a6acff559d29&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">Free shipping on all orders over $50</div>
        </div>
        <div className="flex gap-6 items-start self-stretch my-auto leading-tight text-center">
          
          <a href="/Faqs">Faqs</a>
          <a href="">Need Help</a>
        </div>
      </div> 
        
         
  {/* //main header */}
  <div className="flex flex-col items-center bg-white">
       {/* First section of the header */}
       <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-8 max-w-full text-sm leading-none capitalize bg-white shadow-sm min-h-[74px] w-[1920px] max-md:px-5">
         <div className="flex gap-8 items-center self-stretch my-auto font-medium whitespace-nowrap min-w-[240px] text-zinc-500">
           <a href="Home">Home</a>
           <a href="/Cart">Shop</a>
           <a href="/Product">Product</a>
           <a href="contact">Contact</a>
           <a href="/about">About</a>
         </div>
         <div className="flex gap-2 items-start self-stretch my-auto">
           <div className="text-zinc-500">Contact:</div>
           <div className="font-medium text-slate-800">(808) 555-0111</div>
         </div>
       </div>
       {/* Second section with logo and cart button */}
       <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-12 w-full font-medium whitespace-nowrap bg-gray-100 min-h-[144px] max-md:px-5 max-md:max-w-full">
         <div className="flex gap-2 items-center self-stretch my-auto text-2xl leading-tight text-slate-800">
           <img
             loading="lazy"
             src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/259fcc34e6ad494e687ddee27a5f14b0ca0a284d87c860651ae98204660f01c6?apiKey=327e5b6545924a70ba03a6acff559d29&"
             alt=""
             className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
           />
           <div className="self-stretch my-auto">Comforty</div>
         </div>
         <CartButton count={2} />
       </div>
  </div>


  </div>
);
};