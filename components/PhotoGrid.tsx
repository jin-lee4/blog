import Image from "next/image";

export default function PhotoGrid() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-1 items-center w-full">
          <Image
            className="rotate-12 h-auto w-full"
            src="/images/1.png"
            alt=""
            width='500'
            height='0'
          />
        <Image
            className="rotate-3 max-w-full h-auto"
            src="/images/2.png"
            alt=""
            width="500"
            height="100"
          />
        <Image
            className="-rotate-12 w-full h-auto"
            src="/images/4.png"
            alt=""
            width="500"
            height="0"
          />
      </div>
  );
}
