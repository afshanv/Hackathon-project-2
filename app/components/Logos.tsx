import * as React from "react";

// Define the PartnerImageProps type
interface PartnerImageProps {
  src: string;
  width: string;
  aspectRatio: string;
}

// Define the PartnerImage component
export const PartnerImage: React.FC<PartnerImageProps> = ({ src, width, aspectRatio }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt="Partner logo"
      className={`object-contain shrink-0 self-stretch my-auto ${aspectRatio} ${width}`}
    />
  );
};

// Main component with hardcoded partner images
export const PartnersSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-22 justify-between items-center w-[1250px] ml-72">
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/310fc37caa24cf986a35123f3cf8825d108b59c0897229ce9f00c4807abeaea0?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[85px]"
        aspectRatio="aspect-[0.98]"
      />
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/2f1e1aa82a790e8b7c31b6dcbb13dd6b9201ef05d3870c98bffd571ff6da515d?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[107px]"
        aspectRatio="aspect-[0.98]"
      />
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/3fd6007e72c3b3205c2219904d5e039a5711afa32e0d0422a17b80cea47ed7ad?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[135px]"
        aspectRatio="aspect-[0.97]"
      />
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/12b78f9af59394895b81547caf70885b9933432207719961c4bdc46ab409a560?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[63px]"
        aspectRatio="aspect-[0.97]"
      />
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/079be867c3c1ff9b99b7669155c7a86928d1bdd5b21ca2c9c538d75183936afb?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[98px]"
        aspectRatio="aspect-[0.97]"
      />
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/7da25e7cbde678de30f3c9414dc610c80116ce3b8b1fe29ef4f649f7fc8237da?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[113px]"
        aspectRatio="aspect-[0.98]"
      />
      <PartnerImage
        src="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/a396de4fb7dd4d734b7c8b82d483f2a4e523feb00bbbc6547fc160b953e6767a?apiKey=327e5b6545924a70ba03a6acff559d29&"
        width="w-[84px]"
        aspectRatio="aspect-[0.97]"
      />
    </div>
  );
};
