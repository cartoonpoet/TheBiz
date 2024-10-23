import {create} from "zustand";
import {MenuType} from 'entities/menu/model/model'

interface HomeState {
    menuList: MenuType[]
}

const init = {
    menuList: new Array(4).fill('메뉴')
}

export const useHomePageStore = create<HomeState>((set) => ({
    ...init,
}));