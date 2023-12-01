"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";
import { stripeRedirect } from "@/actions/stripe-redirect";

type SubscriptionButtonProps = {
  isPro: boolean;
};
export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const proModal = useProModal();
  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      toast.dismiss();
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    if (isPro) {
      execute({});
      toast.loading("Redirecting...");
    } else proModal.onOpen();
  };
  return (
    <Button variant="primary" disabled={isLoading} onClick={onClick}>
      {isPro ? "Manage subscription" : "Upgrade to pro"}
    </Button>
  );
};
