import React from 'react'
import {Link , useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import Questions from './Questions'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
  
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate();
  
var questionsList = [
  {
    _id: 1,
    upVotes: 3,
    downvotes: 2,
    noOfAnswers: 2,
    QuestionTitle: "What is a functon?",
    QuestionBody: "It meant to be",
    QuestionTags: ["java","node js","react js","mongodb"],
    userPosted: "mano",
    askedOn:"Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "kumar",
      answeredOn: "Jan 2",
      userId : 2
    }]
  },
  {
    _id: 2,
    upVotes: 13,
    downVotes: 4,
    noOfAnswers: 3,
    QuestionTitle: "What is configureStore use?",
    QuestionBody: "It meant to be",
    QuestionTags: ["javascript","Redux","States","toolkit"],
    userPosted: "mano",
    askedOn:"Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "harsh",
      answeredOn: "Jan 12",
      userId : 2
    }]
  },
  {
    _id: 3,
    upVotes: 10,
    downVotes: 2,
    noOfAnswers: 1,
    QuestionTitle: "What are ES6 features?",
    QuestionBody: "It meant to be",
    QuestionTags: ["javaScript","ES^","react js","mongodb"],
    userPosted: "mano",
    askedOn:"Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "jill",
      answeredOn: "Jan 22",
      userId : 2
    }]
  },
  {
    _id: 4,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    QuestionTitle: "What are react hooks?",
    QuestionBody: "It meant to be",
    QuestionTags: ["javascript","REACTjs","react js","mongodb"],
    userPosted: "mano",
    askedOn:"Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "kumar",
      answeredOn: "Jan 2",
      userId : 2
    }]
  },
  {
    _id: 5,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    QuestionTitle: "What is a an anonymous functon?",
    QuestionBody: "It meant to be",
    QuestionTags: ["python","kotlin","flask",],
    userPosted: "mano",
    askedOn:"Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "Anish",
      answeredOn: "Jan 2",
      userId : 2
    }]
  },
  {
    _id: 6,
    upVotes: 30,
    downVotes: 2,
    noOfAnswers: 5,
    QuestionTitle: "What is OOPs concept?",
    QuestionBody: "It meant to be",
    QuestionTags: ["java","cpp","python","js"],
    userPosted: "mano",
    askedOn:"march 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "Rick",
      answeredOn: "march 2",
      userId : 2
    }]
  },
  {
    _id: 7,
    upVotes: 10,
    downVotes: 1,
    noOfAnswers: 0,
    QuestionTitle: "What is a object in js",
    QuestionBody: "It meant to be",
    QuestionTags: ["javascript","node js","react js","mongodb"],
    userPosted: "mano",
    askedOn:"april 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "Rishi",
      answeredOn: "april 2",
      userId : 2
    }]
  },
  {
    _id: 8,
    upVotes: 13,
    downVotes: 0,
    noOfAnswers: 0,
    QuestionTitle: "What is a RESTapi?",
    QuestionBody: "It meant to be",
    QuestionTags: ["API","RESTapi","js","mongodb"],
    userPosted: "mano",
    askedOn:"feb 25",
    answer : [{
      answerBody : "Answer",
      userAnswered : "kabir",
      answeredOn: "feb 26",
      userId : 2
    }]
  }
]


  const checkAuth = () =>{
    if(user === null){
      alert("login or signup to ask questions");
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1 style={{color
          :'red' , backgroundColor: 'peachpuff' , padding:'5px'}}>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div >
        {
          questionsList === null ? <h1>loading...</h1> : <> <p>{ questionsList.length} questions</p>
            <QuestionsList questionsList ={questionsList} />
          
          </>
        } 
      </div>
    </div>
  )
}

export default HomeMainbar