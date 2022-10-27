import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const asideFocusState = atom({
    key : 'asideFocusState',
    default : '/',
    effects_UNSTABLE: [persistAtom]
});

export const isAskState = atom({
    key : 'isAskState',
    default : '/'
})

export const headerToggleState = atom({
  key: "headerToggleState",
  default: false,
});

export const QlistState = atom({
  key: "QlistState",
  default: [
    {
      questionId: "1",
      title: "6조 FE 화이팅",
      questionBody: "내용 1",
      questionTagList: [{ tagName: "java" }, { tagName: "c++" }],
      name: "김코딩",
      voteCount: 1,
      answerCount: 2,
      createdAt: "2022년 10월 26일 16시",
    },
    {
      questionId: "2",
      title: "6조 BE 화이팅",
      questionBody: "내용 2",
      questionTagList: [{ tagName: "javascript" }, { tagName: "react" }],
      name: "박해커",
      voteCount: 3,
      answerCount: 4,
      createdAt: "2022년 10월 26일 18시",
    },
    {
      questionId: "3",
      title: "6조 화이팅",
      questionBody: "내용 3",
      questionTagList: [{ tagName: "array" }, { tagName: "object" }],
      name: "박해커",
      voteCount: 5,
      answerCount: 18,
      createdAt: "2022년 10월 26일 19시",
    },
  ],
});

export const headerClickState = atom({
  key: "headerClickState",
  default: false,
});

export const getDataState = atom({
  key: "getDataState",
  default: [],
});


export const questionOptionFocusState = atom({
    key : 'questionOptionFocusState',
    default : 1,
    effects_UNSTABLE : [persistAtom]
})

export const questionCountState = atom({
    key : 'questionCountState',
    default : 0,
    effects_UNSTABLE : [persistAtom]
})