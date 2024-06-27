import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './CSS/layout.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ScreenPage from './Components/ScreenPage'
import QuestionPage from './Components/QuestionPage'
import PageData, { abtSimPageData } from './Components/PageData'
import Result from './Components/Result'

function App() {
  const [currentPageData, setCurrentPageData] = useState(null); // Store loaded current page data.
  const [allPageData, setAllPageData] = useState(PageData) // All page data.
  const [isAboutSimOpen, setIsAboutSimOpen] = useState(false); // Initially set about sim content hidden.
  const [isTransOpen, setIsTransOpen] = useState(false); //Initially set transcript content hidden.

  const visitedPages = Object?.values(allPageData)?.filter((page)=>page.isVisited);

  const handleAboutSim = ()=>{
    setIsAboutSimOpen(false); // When we click the close button here we set abt sim to false.
    }

// This useEffect() will be executed only once when the App component is rendered for the first time.
  useEffect(()=>{
    debugger;
    let pagedata = Object.values(allPageData)?.find((page)=>page?.isStartPage); // Find start page from all page data.
    setCurrentPageData(pagedata);
  },[]);

// When page loads we mark the page as visited. (For progress bar)
  useEffect(()=>{
    if ( currentPageData && (currentPageData?.isVisited == false) ) {
      
      setAllPageData((prevPageData)=>(
        {
          ...prevPageData,
          [currentPageData?.pageId] : {
            ...currentPageData,
            isVisited : true
          }
        }
      ))
      setCurrentPageData((currentPage) => (
        {
          ...currentPage,
          isVisited : true
        }
      ))
      
    }
  },[currentPageData])

// Add click event for about sim close btn.
  useEffect(()=>{
      if(isAboutSimOpen && document.querySelector("#btnAbtSimClose")) {
        document.querySelector("#btnAbtSimClose").addEventListener("click",handleAboutSim)
      }
      return ()=>{  //Here we have remove the event listener.
        if(document.querySelector("#btnAbtSimClose")) {
          document.querySelector("#btnAbtSimClose").removeEventListener("click",handleAboutSim)
          }
      }
  }, [isAboutSimOpen]);
  
  
  return (
    <>
      <Header allPageData={allPageData} setCurrentPageData={setCurrentPageData} setIsAboutSimOpen={setIsAboutSimOpen} setIsTransOpen={setIsTransOpen}/>
      
      <div id='wrapper'>
          {
            isAboutSimOpen
            ? <div>{abtSimPageData}</div> : ""
          }

          {
            isTransOpen
            ? 
            <div className='transcriptContent'>
              {
                visitedPages?.map((page)=>{
                  let transData = page.transcriptData
                  return (
                    <>
                    {transData}
                    <p></p>
                    {
                      (page.pageType == "question" && page.isQuestionAttempted && page.selectedOptionId) ?
                      <p>{page?.options?.find((option)=>option?.optionId == page.selectedOptionId)?.optionText}</p>
                      : ""
                    }
                    </>
                  )
                })
              }
              <div className='btnClose'>
                <button id='btnTransClose' onClick={()=>setIsTransOpen(false)}>Close</button>
              </div>
            </div> 
            : ""
          }

          {
            currentPageData?.pageType == "screen" ? 
            <ScreenPage data={currentPageData} setData={setCurrentPageData}/>
            :
            currentPageData?.pageType == "question" ?
            <QuestionPage data={currentPageData} setData={setCurrentPageData} setAllPageData={setAllPageData}/>
            :
            <Result data={currentPageData}/>
          }
      </div>
      
      <Footer currentPageData={currentPageData} setCurrentPageData={setCurrentPageData} allPageData={allPageData} setAllPageData={setAllPageData} setIsAboutSimOpen={setIsAboutSimOpen} setIsTransOpen={setIsTransOpen}/> 
      {/* <Result /> */}
    </>
  )
}

export default App
