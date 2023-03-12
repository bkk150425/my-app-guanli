export default {
    state: {
        isCollapse: false // 控制菜单的展开还是收起
    },
    mutations: {
        // 改变菜单的展开和收起
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}