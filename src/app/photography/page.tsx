import Image from "next/image";
import Navbar from "../../../components/Navbar";

export default function Photography() {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <Navbar />
        <h2 className="page-title">Photography</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full"
              src="/images/5.JPG"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full"
              src="/images/6.JPG"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/7.JPG"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/8.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/23.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/10.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/11.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/12.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/14.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* formatting is weird */}
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/19.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/27.JPG"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/16.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/17.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/28.JPG"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/20.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/21.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/22.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/9.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/24.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/26.JPG"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/18.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/15.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
