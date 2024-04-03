import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-80 bg-slate-500 flex justify-between px-7 items-center">
      <div>
        <h2 className="text-fuchsia-800 font-bold text-3xl">Hello !</h2>
      </div>
      <div>
        <Image
          src={"/SamplePhoto_1.jpg"}
          alt="Sajad's Picture"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
