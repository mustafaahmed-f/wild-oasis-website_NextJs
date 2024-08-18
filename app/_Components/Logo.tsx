import Image from "next/image";

function Logo() {
  return (
    <div className="">
      <Image src="/logo-light.png" alt="Logo" width={100} height={100} />
    </div>
  );
}

export default Logo;
