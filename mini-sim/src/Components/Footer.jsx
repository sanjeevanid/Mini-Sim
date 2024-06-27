import React from 'react'
import PageData from './PageData';

const Footer = ({currentPageData, setCurrentPageData, allPageData, setAllPageData, setIsAboutSimOpen, setIsTransOpen}) => {

  // Navigate to next page.
    const loadNextPage = ()=> {
        let nextPageId = currentPageData?.nextPageId;
        let nextPageData = Object.values(allPageData).find((page)=>page.pageId == nextPageId);
        
        setCurrentPageData(nextPageData)
        setIsAboutSimOpen(false)  //Close about sim content on next click if it is open.
        setIsTransOpen(false)     //Close transcript content on next click if it is open.
    }

  // Navigate to previous page.
    const loadPrevPage = ()=>{
        let currentPageId = currentPageData?.pageId;
        let prevPageData = Object.values(allPageData).find((page)=>page.nextPageId == currentPageId);
        setCurrentPageData(prevPageData)
        setIsAboutSimOpen(false)  //Close about sim content on prev click if it is open.
        setIsTransOpen(false)     //Close transcript content on prev click if it is open.
    }
    
  return (
    <div class="footer-navigation">
      <div class="footer-container">
          <div class="prev">
              <button id="linkprevious" className={`${currentPageData?.isStartPage ? 'disabled' : ''}`} disabled={currentPageData?.isStartPage} onClick={loadPrevPage}>
                  <img class="prevImg" src="src/assets/back-button.png" aria-hidden="true" alt="" />
                  <span>Previous</span>
              </button>
          </div>
          <div class="next">
              <button id="linknext" className={`${(!currentPageData?.isStartPage && !currentPageData?.isQuestionAttempted) ? 'disabled' : ''}`} disabled={!currentPageData?.isStartPage && !currentPageData?.isQuestionAttempted} onClick={loadNextPage}>
                  <span>Next</span>
                  <img class="nextImg" src="src/assets/next-button.png" aria-hidden="true" alt="" />
              </button>
          </div>
      </div>
  </div>

  )
}

export default Footer
