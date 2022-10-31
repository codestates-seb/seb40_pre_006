import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const asideFocusState = atom({
  key: "asideFocusState",
  default: "/",
  effects_UNSTABLE: [persistAtom],
});

export const isAskState = atom({
  key: "isAskState",
  default: "/",
});

export const headerToggleState = atom({
  key: "headerToggleState",
  default: false,
});

export const headerClickState = atom({
  key: "headerClickState",
  default: false,
});

export const questionOptionFocusState = atom({
  key: "questionOptionFocusState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

// 질문 데이터
export const getDataState = atom({
  key: "getDataState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 질문 데이터(질문 갯수)
export const questionCountState = atom({
  key: "questionCountState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const tagState = atom({
  key: "tagState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const questionTitleValueState = atom({
  key: "questionTitleValuetState",
  default: "",
});

export const questionContentValueState = atom({
  key: "questionContentValueState",
  default: "",
});

// export const questionTagValueState = atom({
//   key: "questionTagValueState",
//   default: "",
// });
{
  /**





























  */
}

// 성훈님

  export const DetailQuestionInfoState = atom({
    key: "DetailQuestionInfoState",
    default: "",
    // effects_UNSTABLE: [persistAtom],
  });


  export const LoginState = atom({
    key : "LoginState",
    default : true,
  })

  export const QuestionIdState = atom({
    key : "QuestionIdState",
    default : "",
  })
































































































// 채은님

export const questionTagValueState = atom({
  key: "questionTagValueState",
  default: [],
});

export const questionBtn1ClickState = atom({
  key: "questionBtn1ClickState",
  default: true,
});

export const questionBtn2ClickState = atom({
  key: "questionBtn2ClickState",
  default: true,
});

export const questionBtn3ClickState = atom({
  key: "questionBtn3ClickState",
  default: true,
});

export const answerContentValueState = atom({
  key: "answerContentValueState",
  default: "",
});
{
  /**






































































*/
}
// 세비님

export const pageSizeState = atom({
  key: "pageSizeState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const pageState = atom({
  key: "pageState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const getAnswerState = atom({
  key: "getAnswerState",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});

export const questionIdState = atom({
  key: "getAnswerState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
