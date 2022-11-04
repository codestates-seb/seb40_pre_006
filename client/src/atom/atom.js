import { atom } from "recoil";
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

export const DetailQuestionInfoState = atom({
  key: "DetailQuestionInfoState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});


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

export const signUpEmailValueState = atom({
  key: "signUpEmailValueState",
  default: "",
});

export const signUpEmailMessageState = atom({
  key: "signUpEmailMessageState",
  default: "",
});

export const signUpEmailDuplicationState = atom({
  key: "signUpEmailDuplicationState",
  default: "",
});

export const signUpPasswordValueState = atom({
  key: "signUpPasswordValueState",
  default: "",
});

export const signUpPasswordMessageState = atom({
  key: "signUpPasswordMessageState",
  default: "",
});

export const signUpNameMessageState = atom({
  key: "signUpNameMessageState",
  default: "",
});

export const signUpResponseState = atom({
  key: "signUpResponseState",
  default: "",
});

export const signUpNameValueState = atom({
  key: "signUpNameValueState",
  default: "",
});

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
  key: "questionIdState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});



export const compareUserNameState = atom({
  //질문 클릭했을 때 해당 질문의 작성자(userName)
  key: "compareUserNameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});




// 로그인 관련 state


export const userNameState = atom({
  //로그인 후 받아오는 userName
  key: "userNameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});


export const LoginState = atom({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});


export const userIdState = atom({
  key: "userIdState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
})
