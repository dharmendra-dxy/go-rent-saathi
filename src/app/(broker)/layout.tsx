import { BrokerNavbar } from '@/components/broker/broker-navbar';
import React from 'react'

export default function BrokerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BrokerNavbar/>
      {children}
    </div>
  );
}