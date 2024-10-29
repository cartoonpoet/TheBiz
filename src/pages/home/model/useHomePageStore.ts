import {create} from "zustand";

interface HomeState {
    menuList: string[];
    keyword: string;
    activeTab: number[];
    setKeyword: (keyword: string) => void;
    setActiveTab: (activeTab: number[]) => void;
}

const init = {
    menuList: new Array(4).fill('메뉴'),
    keyword: '',
    activeTab: []
}

export const useHomePageStore = create<HomeState>((set) => {
    return ({
        ...init,
        setKeyword: (keyword: string) => set({keyword}),
        setActiveTab: (activeTab) => set({activeTab}),
    });
});