import dummyImage from "../assets/dummy-img1.jpg"

var PageData = {
   "page1": {
        pageId : "page1",
        pageType : "screen",
        heading : "Welcome to Screen Page.",
        image : dummyImage,
        pageDescription : `<p>Mike is a new production manager at Tri State Dairy. Mike was hired while in Afghanistan on the last days of his tour with the Army. All of Mike’s contact with Tri State, including his interviews, has taken place over the Internet.</p> 
        <p>Before taking this position, Mike was a captain in the U.S. Army’s quartermaster branch, where his duties included the purchasing, distribution, and maintenance of equipment. Mike’s new boss, Jim, was impressed by his experience and he felt that with Mike’s officer training and military background he would be able to handle the demands of a production manager position.</p>
        <p>Mike must learn about the company and his role as a manager while determining which management skills he can bring over from his previous role.</p>
        <p>Before taking this position, Mike was a captain in the U.S. Army’s quartermaster branch, where his duties included the purchasing, distribution, and maintenance of equipment. Mike’s new boss, Jim, was impressed by his experience and he felt that with Mike’s officer training and military background he would be able to handle the demands of a production manager position.</p>
        <p><em>Click <strong>Next</strong> to begin your challenge. Good luck!</em></p>`,
        nextPageId : 'page2',
        isStartPage : true,
        isVisited: false,
        transcriptData : (
                <div>
                    <h2>Welcome to Screen Page.</h2>
                    <p>Mike is a new production manager at Tri State Dairy. Mike was hired while in Afghanistan on the last days of his tour with the Army. All of Mike’s contact with Tri State, including his interviews, has taken place over the Internet.</p> 
                    <p>Before taking this position, Mike was a captain in the U.S. Army’s quartermaster branch, where his duties included the purchasing, distribution, and maintenance of equipment. Mike’s new boss, Jim, was impressed by his experience and he felt that with Mike’s officer training and military background he would be able to handle the demands of a production manager position.</p>
                    <p>Mike must learn about the company and his role as a manager while determining which management skills he can bring over from his previous role.</p>
                    <p>Before taking this position, Mike was a captain in the U.S. Army’s quartermaster branch, where his duties included the purchasing, distribution, and maintenance of equipment. Mike’s new boss, Jim, was impressed by his experience and he felt that with Mike’s officer training and military background he would be able to handle the demands of a production manager position.</p>
                </div>
        )
    },
    "page2" : {
        pageId: "page2",
        pageType: "question",
        heading : "Welcome to Question Page.",
        image : dummyImage,
        pageDescription : `<p>Mike is a new production manager at Tri State Dairy. Mike was hired while in Afghanistan on the last days of his tour with the Army. All of Mike’s contact with Tri State, including his interviews, has taken place over the Internet.</p> 
        <p>Before taking this position, Mike was a captain in the U.S. Army’s quartermaster branch, where his duties included the purchasing, distribution, and maintenance of equipment. Mike’s new boss, Jim, was impressed by his experience and he felt that with Mike’s officer training and military background he would be able to handle the demands of a production manager position.</p>
        <p>Mike must learn about the company and his role as a manager while determining which management skills he can bring over from his previous role.</p>
        <p><em>Select an option from the choices below and click <strong>Submit</strong>.</em></p>`,
        optionType: "radio",
        selectedOptionId: null,
        isQuestionAttempted: false,
        options: [
            {
                optionId: "option1",
                optionText: "Chart his intended career path within the company so that he has a plan to get promoted.",
                feedback : "This is incorrect choice.",
                score : 0
            },
            {
                optionId: "option2",
                optionText: "Begin thinking of ways to make his production line more productive.",
                feedback : "This is okay choice.",
                score : 3
            },
            {
                optionId: "option3",
                optionText: "Set up a meeting with employees in his production line.",
                feedback : "This is the best choice.",
                score : 5
            }
        ],
        // selectedOption: null,
        nextPageId : "page3",
        isStartPage : false,
        isVisited: false,
        transcriptData : (
            <div>
                <h2>Welcome to Question Page.</h2>
                <p>Mike is a new production manager at Tri State Dairy. Mike was hired while in Afghanistan on the last days of his tour with the Army. All of Mike’s contact with Tri State, including his interviews, has taken place over the Internet.</p> 
                <p>Before taking this position, Mike was a captain in the U.S. Army’s quartermaster branch, where his duties included the purchasing, distribution, and maintenance of equipment. Mike’s new boss, Jim, was impressed by his experience and he felt that with Mike’s officer training and military background he would be able to handle the demands of a production manager position.</p>
                <p>Mike must learn about the company and his role as a manager while determining which management skills he can bring over from his previous role.</p>
            </div>
    )
    }, 
    "page3" : {
        pageId: "page3",
        pageType: "result",
        heading: "Results",
        nextPageId : null,
        isStartPage : false,
        isLastPage : true,
        isVisited: false
    }
}

export var abtSimPageData = (
    <div className="abtSimContent">
        <h2>About This Simulation</h2>
        <p>In this simulation, you will be given a business situation or challenge and asked to make a series of decisions. As in any business situation, there are multiple approaches, resulting outcomes, and solutions for every situation. To provide you with an authentic real-world business experience, we have designed this simulation with multiple decision choices that lead you down different scenario paths. For this reason, the paths you take and your overall experience will be different than that of your fellow students. After clicking the Submit button for each decision, you will find out whether you made the best choice, an OK choice, a choice that was really not the best, or an incorrect choice. In addition, you will be given specific feedback on the decision you made.</p>
        <h3>A few key points about this simulation:</h3>
        <ul>
            <li>At certain points within this simulation, you will arrive at Mentoring Moment segments. These segments provide an opportunity for you to practice your decision making and learn more about a particular topic. Any interactivity completed in Mentoring Moments does not count toward the simulation grade you earn.</li>
            <li>As you work through the simulation, the progress bar at the top of your screen will show the percentage of the scenario you have completed.</li>
            <li>You can navigate to previous points within this simulation by clicking on the expandable menu in the top left corner of your screen (the three bars). You cannot, however, go backward in the simulation and change a decision that has already been submitted. At the end of this simulation, you will receive a percentage score based on the decisions you made, a summary of each situation and the choice you made, and a link to the eText for additional information on that topic.</li>
        </ul>
        <div className="btnClose">
            <button id="btnAbtSimClose">Close</button>
        </div>
        
    </div>
);

export default PageData
