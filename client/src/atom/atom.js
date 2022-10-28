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
  effects_UNSTABLE: [persistAtom]

});

// 질문 데이터(질문 갯수)
export const questionCountState = atom({
  key: "questionCountState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const tagState = atom({
    key : "tagState",
    default : [],
    effects_UNSTABLE: [persistAtom],

})



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
