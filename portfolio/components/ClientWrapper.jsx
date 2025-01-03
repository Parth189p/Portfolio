'use client';

import { useEffect } from 'react';
import createTag from '@/utils/tagCreator';

export default function ClientWrapper({ children }) {
  useEffect(() => {
    const tag = createTag();
    if (typeof window !== 'undefined' && tag) {
      document.head.appendChild(tag);
    }
  }, []);

  return <>{children}</>;
}
