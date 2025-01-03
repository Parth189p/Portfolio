'use client';

import { useEffect } from 'react';
import createTag from '@/utils/tagCreator';

export default function TagManager() {
  useEffect(() => {
    const tag = createTag();
    if (tag) {
      document.head.appendChild(tag);
    }
  }, []);

  return null;
}
