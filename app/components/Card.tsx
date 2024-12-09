type CardProps = {
    title: string;
    imageUrl: string;
    productCount?: number; // Optional for categories
    price?: number;        // Optional for featured products
    originalPrice?: number; // Optional for featured products
    badge?: { text: string, bgColor: string }; // Optional for featured products
  };
  
  const Card: React.FC<CardProps> = ({ title, imageUrl, productCount, price, originalPrice, badge }) => {
    return (
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex relative flex-col pt-80 leading-none text-white capitalize rounded-xl min-h-[424px] max-md:pt-24 max-md:mt-6 max-md:max-w-full">
          <img loading="lazy" src={imageUrl} alt={`${title} image`} className="object-cover absolute inset-0 size-full" />
          
          {/* Optional Badge */}
          {badge && (
            <div className={`absolute top-5 left-5 px-2.5 py-1.5 ${badge.bgColor} rounded`}>
              {badge.text}
            </div>
          )}
  
          <div className="flex relative flex-col p-5 rounded-none bg-black bg-opacity-70 max-md:max-w-full">
            <div className="text-xl font-semibold">{title}</div>
  
            {/* Conditional rendering based on the section */}
            {productCount && <div className="mt-2 text-sm opacity-70">{productCount} Products</div>}
            {price && (
              <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
                <div className="self-stretch my-auto text-lg font-semibold text-slate-800">${price}</div>
                {originalPrice && <div className="self-stretch my-auto text-sm text-zinc-400">${originalPrice}</div>}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
export default Card;  