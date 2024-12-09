const FeaturedImage: React.FC<{ imageSrc: string, badge?: { text: string, bgColor: string } }> = ({ imageSrc, badge }) => {
    return (
      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex relative flex-col items-start px-5 pt-5 pb-64 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-md aspect-square max-md:pb-24 max-md:mt-6">
          <img
            loading="lazy"
            src={imageSrc}
            alt="Featured product"
            className="object-cover absolute inset-0 size-full"
          />
          {badge && (
            <div className={`relative gap-2.5 px-2.5 py-1.5 ${badge.bgColor} rounded`}>
              {badge.text}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProductCard: React.FC<{ title: string, price: number, originalPrice?: number, iconSrc: string, textColor?: string }> = ({
    title,
    price,
    originalPrice,
    iconSrc,
    textColor = "text-slate-800"
  }) => {
    return (
      <div className="flex flex-1 gap-3">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className={`text-base leading-tight ${textColor}`}>{title}</div>
          <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
            <div className="self-stretch my-auto text-lg font-semibold text-slate-800">
              ${price}
            </div>
            {originalPrice && (
              <div className="self-stretch my-auto text-sm text-zinc-400">
                ${originalPrice}
              </div>
            )}
          </div>
        </div>
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} product icon`}
          className="object-contain shrink-0 my-auto w-11 rounded-none aspect-square"
        />
      </div>
    );
  };
  
  const FeaturedProducts: React.FC = () => {
    return (
      <div className="flex overflow-hidden flex-col items-center">
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch px-72 w-full text-3xl font-semibold leading-none capitalize text-slate-800 max-md:px-5 max-md:max-w-full">
          <div className="self-stretch my-auto">Featured Products</div>
          <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px]" />
        </div>
        <div className="mt-10 w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <FeaturedImage
              imageSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/ccc2567e80730a5c72cc6b382d4e166c193b388f4abd168ad8af795cc7040d63?apiKey=327e5b6545924a70ba03a6acff559d29&"
              badge={{ text: "New", bgColor: "bg-emerald-600" }}
            />
            <FeaturedImage
              imageSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/1c8331e985c31f21e0360aeba6242f8741c5a1ebf0b80a02a41ed2213936250f?apiKey=327e5b6545924a70ba03a6acff559d29&"
              badge={{ text: "Sales", bgColor: "bg-orange-400" }}
            />
            <FeaturedImage
              imageSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/10bd2957620bc6ed7450175e0dfc00eefc093a8c7e1e934b22037da44eb5ba06?apiKey=327e5b6545924a70ba03a6acff559d29&"
            />
            <FeaturedImage
              imageSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/d584b9c87501c568928733769705e39b3a305670bc201b0122bd447e8c2a7d3a?apiKey=327e5b6545924a70ba03a6acff559d29&"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-3.5 w-full capitalize max-w-[1320px] max-md:max-w-full">
          <ProductCard
            title="Library Stool Chair"
            price={20}
            originalPrice={39}
            iconSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/057d73d86e3dcaed962995bdb268f26da42d5c21277a05d3f72ee64db5b8d94c?apiKey=327e5b6545924a70ba03a6acff559d29&"
          />
          <ProductCard
            title="Library Stool Chair"
            price={20}
            originalPrice={39}
            iconSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/77d658394a80fc8c3e3c90936332fa390478af09873e3052bec92125363fcf56?apiKey=327e5b6545924a70ba03a6acff559d29&"
          />
          <ProductCard
            title="Library Stool Chair"
            price={20}
            iconSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/68c7ba793d32fd58d6ca3dfe0104c29b7e48ad91e727b1a390320dcd73717b6c?apiKey=327e5b6545924a70ba03a6acff559d29&"
          />
          <ProductCard
            title="Library Stool Chair"
            price={20}
            iconSrc="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/507cd32b229506f4e7281a8191d25e93959b84118904de77df448ccb87004ae7?apiKey=327e5b6545924a70ba03a6acff559d29&"
          />
        </div>
      </div>
    );
  };
  export default FeaturedProducts