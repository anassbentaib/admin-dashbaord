"use client";

import StoreModals from "@/components/modals/store-modals";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModals />
    </>
  );
};
