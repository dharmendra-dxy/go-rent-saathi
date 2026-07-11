import { UI_ROUTES } from "@/utils/ui-routes";
import { boolean } from "better-auth";
import Image from "next/image";
import Link from "next/link";

interface LogoProps  {
  displayName? : boolean,
}

const Logo = ({displayName=false}: LogoProps) => {
  return (
    <Link href={UI_ROUTES.BASE}>
      <div className="flex items-center gap-2">
      <div className="flex size-12 items-center justify-center rounded-md">
        <Image src="/logo.png" alt="logo" height={200} width={200} />
      </div>
      {displayName && <p className="font-semibold">Go Rent Saathi.</p>}
      </div>
    </Link>
  );
};

export default Logo;
