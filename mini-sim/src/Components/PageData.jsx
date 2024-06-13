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
        isPageVisited: false
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
        selectedOption: null,
        nextPageId : "page3",
        isStartPage : false,
        isPageVisited: false
    }, 
    "page3" : {
        pageId: "page3",
        pageType: "screen",
        heading: "Result Page",
        nextPageId : null,
        isStartPage : false,
        isLastPage : true,
        isPageVisited: false
    }
}

export default PageData
