import React from 'react';
import Question from './Question';
// import { QlistState } from '../../atom/atom';
import { getDataState } from '../../atom/atom';
import { useRecoilState } from 'recoil';

function QuestionList() {
  const [Qlist, setQlist] = useRecoilState(getDataState);
  return (
    <div>
      {Qlist.map((question) => (
        <Question
          key={question.questionId}
          questionId = {question.questionId}
          question={question}
        />
      ))}
    </div>
  );
}

export default QuestionList;
