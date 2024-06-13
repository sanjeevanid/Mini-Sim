import React, {useState, useEffect} from 'react';

const Header = ({allPageData, setCurrentPageData}) => {

      const [progress, setProgress] = useState(0);  // State for progress bar.
      const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for menu button

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
   
    // Call the function when page loaded.
      useEffect(() => {
          updateProgress();
      }, [allPageData]);

      useEffect(() => {
        function handleMenuClick(e) {
          debugger;
          // if (!(window.$(e.target).closest(".menuBtn")))
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
            <img className='menuImg' src='src/assets/menu.png' alt='Menu' />
          </button>
          <div className='blankDiv'></div>
          <ul id='appMenuList' style={ isMenuOpen?{display: 'block'}:{display: 'none'} }>
            {
              visitedPages?.map( (page, index) => (
                <li key={index} onClick={()=>setCurrentPageData(page)}><a>{page.heading}</a></li>
              ))
            }
           
          </ul>
        </div>

        {/* <div className='progress_container'>
          <div className='ui tiny progress'>
            <div className='bar'>
              <div className='progress'></div>
              <div id="progressInnrDiv">Progress 0%</div>
            </div>
          </div>
        </div> */}

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
                <li>
                    <button className='ui button'>
                        <img src='src/assets/play.png' alt='Play' />
                    </button>
                </li>
                <li>
                    <button className='ui button'>
                        <img src='src/assets/transcript.png' alt='Transcript' />
                    </button>
                </li>
                <li>
                    <button className='ui button'>
                        <img src='src/assets/info.png' alt='Info' />
                    </button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
