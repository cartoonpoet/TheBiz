import {create} from "zustand";
import {MenuType} from 'entities/menu/model/model'

interface HomeState {
    menuList: string[];
    keyword: string;
    setKeyword: (keyword: string) => void;
}

const init = {
    menuList: new Array(4).fill('메뉴'),
    keyword: ''
}

export const useHomePageStore = create<HomeState>((set) => {
    return ({
        ...init,
        setKeyword: (keyword: string) => set(state => ({keyword}))

    });
});