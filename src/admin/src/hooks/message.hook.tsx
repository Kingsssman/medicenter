import { useCallback } from 'react';
declare const window: any;

export const useMessage = () => {
  return useCallback(text => {
    if (window.M && text) {
      window.M.toast({ html: text });
    }
  }, []);
};
