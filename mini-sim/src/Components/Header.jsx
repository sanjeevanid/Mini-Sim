import React, {useState, useEffect, useRef} from 'react';

const Header = ({allPageData, setCurrentPageData, setIsAboutSimOpen, setIsTransOpen}) => {

      const [progress, setProgress] = useState(0);  // State for progress bar.
      const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for menu button
      const [focusedIndex, setFocusedIndex] = useState(0); // State for menu button li items.

      const ulRef = useRef(null);

    // Key function for menu button li items start.
      const handleKeyDown = (event) => {
        if (ulRef.current) {
          const items = ulRef.current.children;
          if (event.key === 'ArrowDown') {
            setFocusedIndex((prevIndex) => (prevIndex + 1) % items.length);
          } else if (event.key === 'ArrowUp') {
            setFocusedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
          }
          // else if(event.key == "Enter"){
          //   debugger
          //   setCurrentPageData(allPageData[Array.from(ulRef.current.children).find((item)=>item.classList.contains("focused")).getAttribute("data-pageid")])
          // }
        }
      }
      // useEffect() executes when isMenuOpen value changes.
      useEffect(() => {
        setFocusedIndex(0);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        }
      }, [isMenuOpen]);

     // useEffect() executes when focused index is changed.
      useEffect(() => {
        if (ulRef.current && isMenuOpen) {
          const items = ulRef.current.children;
          if (items[focusedIndex]) {
            // items[focusedIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            let anchor = items[focusedIndex].querySelector("a")
            anchor.setAttribute("tabindex","-1");
            anchor.focus();
          }
        }
      }, [isMenuOpen,focusedIndex]);

    // Key event for menu button li items end.

      const visitedPages = Object?.values(allPageData)?.filter((page)=>page.isVisited);
    
      const updateProgress = () => {    // Function for calculating progress value.
        let totalPages = Object?.values(allPageData)?.length;
        
        let totalVisitedPages = visitedPages.length;
        if(totalVisitedPages == 1){
          totalVisitedPages = 0
        }
        const calculateProgress = (totalVisitedPages / totalPages) * 100;
          setProgress(calculateProgress);
      };
   
      useEffect(() => {    // Call the function when page loaded.
          updateProgress();
      }, [allPageData]);

    // Executes when we click outside the menu.
      useEffect(() => {
        function handleMenuClick(e) {
          if (!(e.target.classList.contains("menuImg") || e.target.classList.contains("menuBtn"))) {
              setIsMenuOpen(false);
          }
        }
        document.addEventListener('click', handleMenuClick);
          return () => {
              document.removeEventListener('click', handleMenuClick);
          };
      }, []);

  return (
    <div className='mxWidth' id='header-content'>
      <div id='header-title'>
        <img className='LogoImg' src='src/assets/logo.png' alt='Logo' />
        <h1 className='TitleHeader'>Mini Sim Demo Structure</h1>
      </div>

      <div className='header-container'>
        <div className='menu_button'>
          <button className={`ui button menuBtn ${ isMenuOpen ? 'active' : '' }`} onClick={ () => setIsMenuOpen(!isMenuOpen) }>
            <img className='menuImg' src='src/assets/menu.png' alt='Menu' draggable="false" />
          </button>
          <div className='blankDiv' style={ isMenuOpen ? {display: 'block'} : {display: 'none'} }></div>
          <ul id='appMenuList' style={ isMenuOpen ? {display: 'block'} : {display: 'none'} } ref={ulRef}>
            {
              visitedPages?.map( (page, index) => (
                <li key={index} className={`${focusedIndex == index ? 'focused' : ''}`} data-pageid={page.pageId} onClick={()=>setCurrentPageData(page)} onKeyDown={(e)=>{
                  if(e.key === 'Enter'){
                    setCurrentPageData(page)
                  }
                }}><a>{page.heading}</a></li>
              ))
            }
           
          </ul>
        </div>

        <div className='progress_container'>
          <div className='ui tiny progress'>
            <div className='bar' style={{width:  `${progress}%` }}>
              <div className='progress'></div>
              <div id="progressInnrDiv">Progress {isNaN(progress) ? 0 : Math.round(progress)} %</div>
            </div>
          </div>
        </div>

        <div className='pageaction'>
            <ul>
                {/* <li>
                    <button className='ui button'>
                        <img src='src/assets/play.png' alt='Play' />
                    </button>
                </li> */}
                <li>
                    <button className='ui button transBtn' onClick={()=> {
                          setIsTransOpen((prevValue)=>!prevValue)  //Sets transcript value to true for open data.
                          setIsAboutSimOpen(false)
                        }
                      }>
                        <img src='src/assets/transcript.png' alt='Transcript' draggable="false" />
                    </button>
                </li>
                <li>
                    <button className='ui button abtSimBtn' onClick={()=>{
                        setIsAboutSimOpen((prevValue)=>!prevValue)  //Sets about sim value to true for open data.
                        setIsTransOpen(false)
                      }
                    }> 
                        <img src='src/assets/info.png' alt='Info' draggable="false" />
                    </button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
