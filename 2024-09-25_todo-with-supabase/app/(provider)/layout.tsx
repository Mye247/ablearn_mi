import React from "react";
import AuthProvider from "./_provider/auth.provider";
import { TanStackQueryProvider } from "./_provider/tanstackQuery.provider";

function ProviderLayout({ children }: { children: React.ReactNode }) {
  return (
    <TanStackQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </TanStackQueryProvider>
  );
}

export default ProviderLayout;
