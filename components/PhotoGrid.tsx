import Image from "next/image";

export default function PhotoGrid() {
    const img = '../images/polaroid.JPG'

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/img"
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/img"
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
