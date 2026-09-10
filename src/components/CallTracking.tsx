'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export default function CallTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a');
      const href = link?.getAttribute('href');

      if (!href || !href.startsWith('tel:')) return;

      sendGAEvent('event', 'click_to_call', {
        page_location: window.location.href,
        phone_number: href,
      });
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
