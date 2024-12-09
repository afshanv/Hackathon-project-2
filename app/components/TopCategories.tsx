import Card from "./Card";
const TopCategories: React.FC = () => {
    return (
      <div className="flex overflow-hidden flex-col">
        <div className="flex flex-wrap gap-10 justify-between items-center px-72 w-full text-3xl font-semibold leading-none capitalize text-slate-800 max-md:px-5 max-md:max-w-full">
          <div className="self-stretch my-auto">Top categories</div>
        </div>
        <div className="self-center mt-10 w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Card
              title="Wing Chair"
              productCount={3584}
              imageUrl="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/743938bb3f47e164417a4f7dedb489609cac80c9036caf85dc91ec31bac4ab11?apiKey=327e5b6545924a70ba03a6acff559d29&"
            />
            <Card
              title="Wooden Chair"
              productCount={157}
              imageUrl="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/608a5d296f29b6516114af7e9c3105697b715de610378a68f63275805f6ce8d5?apiKey=327e5b6545924a70ba03a6acff559d29&"
            />
            <Card
              title="Desk Chair"
              productCount={154}
              imageUrl="https://cdn.builder.io/api/v1/image/assets/327e5b6545924a70ba03a6acff559d29/e4fe1f589bb570ddb32370f6c2c8b53e8062621a898ea012a97045ef9638e874?apiKey=327e5b6545924a70ba03a6acff559d29&"
            />
          </div>
        </div>
      </div>
    );
  };
  export default TopCategories;
  