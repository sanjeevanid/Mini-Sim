import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './CSS/layout.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ScreenPage from './Components/ScreenPage'
import QuestionPage from './Components/QuestionPage'
import PageData from './Components/PageData'
import Result from './Components/Result'

function App() {
  const [currentPageData,setCurrentPageData] = useState(null);
  // const [isNextEnabled, setisNextEnabled] = useState(true);
  // const [isPrevEnabled, setisPrevEnabled] = useState(true);
  const [allPageData,setAllPageData] = useState(PageData)
 
  useEffect(()=>{
    let pagedata = Object.values(allPageData)?.find((page)=>page?.isStartPage);
    setCurrentPageData(pagedata);
    // setisPrevEnabled(false);
  },[])

  // useEffect(()=>{
  //   if(currentPageData){
  //     if(!currentPageData?.isStartPage){
  //       setisPrevEnabled(true);
  //       setisNextEnabled(false);
  //     } 
  //     else{
  //       setisPrevEnabled(false);
  //       setisNextEnabled(true);
  //     }
  //     if (currentPageData?.isLastPage) {
  //       setisNextEnabled(false);
  //     }
  //   }
  // },[currentPageData])

  useEffect(()=>{
    if (currentPageData && !currentPageData?.isVisited) {
      
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
  return (
    <>
      <Header allPageData={allPageData} setCurrentPageData={setCurrentPageData}/>
      {
        currentPageData?.pageType == "screen" ? 
        <ScreenPage data={currentPageData} setData={setCurrentPageData}/>
        :
        <QuestionPage data={currentPageData} setData={setCurrentPageData} setAllPageData={setAllPageData}/>
      }
      <Footer currentPageData={currentPageData} setCurrentPageData={setCurrentPageData} allPageData={allPageData} setAllPageData={setAllPageData}/> 
      <Result />
    </>
  )
}

export default App
