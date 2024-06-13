import React, { useEffect, useState } from 'react'
import PageData from './PageData';

const QuestionPage = ({data,setData,setAllPageData}) => {

  const [selectedOption, setSelectedOption] = useState(null);
  
  let selected_option_score = data?.options?.find((option) => option.optionId === data?.selectedOptionId)?.score

  const handleChange = (optionId) => {
    // setSelectedOption(event.target.id);
    setData((prevData)=>(
      {
        ...prevData,
        selectedOptionId : optionId
      }
    ))
  };

  const handleSubmit = () => {
    setData((prevData)=>(
      {
        ...prevData,
        isQuestionAttempted : true
      }
    ))
  }
 useEffect(()=>{
  if(data?.isQuestionAttempted){
    // let newPageData = {
    //   ...PageData,
    //   [data.pageId] : {
    //     ...data
    //   }
    // }
    setAllPageData((prevPageData)=>(
      {
        ...prevPageData,
        [data.pageId] : {
          ...data
        }
      }
    ))
  }
 },[data?.isQuestionAttempted])
 
  return (
    <div id='wrapper'>
      <h2>{data?.heading}</h2>

      <div className='src-img'>
        <img className='dummy-img' src={data?.image} />
      </div>

      <div dangerouslySetInnerHTML={{__html: data?.pageDescription}}>
        
    </div>

      <div className={`option-group ${!(data?.isQuestionAttempted)  ? '' : 'disabled'}`}>
         {/* {
            data?.options.map((option, index) => (
            <div className='option'>
                <label>
                    <input type={data?.optionType} id={option?.optionId} data-score={option?.score}/>
                    <span className="option-text" dangerouslySetInnerHTML={{__html: option?.optionText}}></span>
                </label>
             </div>
             ))
                  
         } */}
         {
            data?.options.map((option) => (
              <div className={`option ${data.selectedOptionId === option.optionId ? 'selectedOption' : ''}`} key={option.optionId}>
                <label>
                  <input 
                    type={data?.optionType} 
                    name="group" // Ensure all radio buttons have the same name
                    id={option?.optionId} 
                    data-score={option?.score}
                    checked={data.selectedOptionId === option?.optionId}
                    onChange={()=>handleChange(option?.optionId)}
                  />
                  <span className="option-text" dangerouslySetInnerHTML={{__html: option?.optionText}}></span>
                </label>
              </div>
            ))
      }
      </div>

      <div className={`btnSubmit ${(data?.selectedOptionId && !data?.isQuestionAttempted)  ? '' : 'disabled'}`} >
            <button className='SubmitBtn' onClick={handleSubmit}>Submit</button>
      </div>

      {data?.isQuestionAttempted && (
        <div className={`feedback ${(selected_option_score == 0) ? 'incorrOptionFb' : (selected_option_score == 3)? 'okayOptionFb' : 'bestOptionFb'}`}>
            <p>{data?.options?.find((option) => option.optionId === data?.selectedOptionId)?.feedback}</p>

        </div>
      )}

    </div>
  )
}

export default QuestionPage
