import React, {useEffect, useState} from 'react';
import './scrollButton.css';
  
const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    if (window.scrollY > 300){
      setVisible(true)
    } 
    else{
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  }, [])
  
  return (
    <div onClick={scrollToTop} className={visible ? 'sb201Container fadeInUp' : 'sb201Container sb201Hidden'}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}
  
export default ScrollButton;