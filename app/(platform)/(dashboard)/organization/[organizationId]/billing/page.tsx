import { checkSubscription } from "@/lib/subscription";

import { Separator } from "@/components/ui/separator";

import { Info } from "../_components/info";
import { SubscriptionButton } from "./_components/subscription-button";
import Image from "next/image";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <div className="flex items-center justify-center flex-col gap-y-2">
        <Image
          src="/subscribe.svg"
          alt="hero"
          height={512}
          width={512}
          className="object-cover"
        />
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default BillingPage;
