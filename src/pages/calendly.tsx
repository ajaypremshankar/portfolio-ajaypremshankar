import React, { useEffect } from 'react';

const Calendly: React.FC = () => {

  useEffect(() => {
    window.location.href = "https://calendly.com/ajaypremshankar/connect-with-ajay-prem-shankar";
  }, []);
  
  return (
    <div></div>
  );
};

export default Calendly;
