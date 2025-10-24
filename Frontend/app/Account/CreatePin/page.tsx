"use client";

import SetPinCom from "components/SetPinComp";
import { Suspense } from "react";



const SetPin: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetPinCom />
    </Suspense>  );
};

export default SetPin;
