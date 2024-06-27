import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Result = ({data}) => {

  const percentage = 67;
  
  useEffect(() => {
    debugger;
      window.$('.ui.accordion').accordion();
  }, []);

  return (
    <div>
      <h2>{data?.heading}</h2>

      <div className='circularProgress'>
        <div className='prog1'>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <span className='prgText1'><strong>Your score: {percentage}%</strong></span>
        </div>
        <div className='prog2'>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <span className='prgText2'><strong>Your score: {percentage}%</strong></span>
        </div>
      </div>

      <div className='mainReportHeader'>
          <div className='reportHeader'>
              <div className='reportHTitle'> 
                  <h3><span>Your Report</span></h3>
              </div>
              <button>
                <img src='mini-sim\src\assets\expand.png'></img>
                <img src='mini-sim\src\assets\collapse.png'></img>
              </button>
          </div>

          <div id='reportRetry'>
              <div className='retryattemtDiv'>
                <p id="retryattemptText">Number of attempts remaining: Unlimited</p>
              </div>
              <div className='retryButtonDiv'>
                  <button className='ui button' id='btnRetry'>Retry</button>
              </div>
          </div>
      </div>

      <div class="ui styled accordion">
  <div class="active title">
    <i class="dropdown icon"></i>
    What is a dog?
  </div>
  <div class="active content">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    What kinds of dogs are there?
  </div>
  <div class="content">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    How do you acquire a dog?
  </div>
  <div class="content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
</div>

    </div>
  )
}

export default Result
