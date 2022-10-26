import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();


export const asideFocusState = atom({
    key : 'asideFocusState',
    default : 1,
    effects_UNSTABLE: [persistAtom]
});

export const headerToggleState = atom({
    key : 'headerToggleState',
    default : false,
})
    