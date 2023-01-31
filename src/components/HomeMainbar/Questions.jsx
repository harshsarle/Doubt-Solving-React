import React from 'react'
import {Link} from 'react-router-dom'
import './HomeMainbar.css'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
               <div className='display-votes-ans'>
                              <p>{question.upVotes}</p>
                              <p>votes</p>

               </div>
               <div className='display-votes-ans'>
                              <p>{question.noOfAnswers}</p>
                              <p>answers</p>

               </div>
               <div className="display-question-details">
                <Link to={`/Questions/${question._id}`} className='question-title-link'>
                  {question.QuestionTitle}
                </Link>
                <div className="display-tags-time">
                  <div className="display-tags">
                    {
                      question.QuestionTags.map((tag)=>(
                          <p key={tag}>{tag}</p>
                      ))
                    }
                  </div>
                  <div className="display-time">
                    asked {question.askedOn} {question.userPosted}
                  </div>
                </div>
               </div>

    </div>
  )
}

export default Questions