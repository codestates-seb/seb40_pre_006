import React from 'react';
import Question from './Question';
import { QlistState } from '../../atom/atom';
import { useRecoilState } from 'recoil';

function QuestionList() {
  const [Qlist, setQlist] = useRecoilState(QlistState);

  return (
    <div>
      {Qlist.map((question) => (
        <Question
          key={question.questionId}
          question={question}
        />
      ))}
    </div>
  );
}

export default QuestionList;
