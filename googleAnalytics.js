import { useEffect } from 'react';
const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-CCQ3VPR2Z3`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config',"G-CCQ3VPR2Z3");
    return () => {
      // Clean up the script if necessary
      document.head.removeChild(script);
    };
  }, []);
  return null;
};
export default GoogleTagManager;
