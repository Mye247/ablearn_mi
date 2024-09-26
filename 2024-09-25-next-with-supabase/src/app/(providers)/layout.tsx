/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { PropsWithChildren, useEffect } from "react";
import AuthProvider from "./_providers/auth.provider";
import { TanstackQueryProvider } from "./_providers/tanstack-query.provider";

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </TanstackQueryProvider>
  );
}

export default ProvidersLayout;
