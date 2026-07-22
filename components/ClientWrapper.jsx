"use client";

import dynamic from 'next/dynamic';

const ClientLayout = dynamic(() => import('./ClientLayout'), { ssr: false });

export default function ClientWrapper({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
