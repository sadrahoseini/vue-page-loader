export default {
    namespace: true,
    state: {
        active: false,
        progress: 0,
        transition: 3
    },
    getters: {
        page_loader_active: state => {
            return state.active;
        },
        page_loader_progress: state => {
            return state.progress;
        },
        page_loader_transition: state => {
            return state.transition;
        }
    },
    actions: {
        'pageLoader/show'({state}, timeout = 10000) {
            state.active = true;
            state.transition = 0;
            state.progress = 0;
            let interval = setInterval(() => {
                if (state.progress < 20) {
                    state.progress += 20;
                    state.transition = 3;
                } else if (state.progress < 50) {
                    state.progress += 12;
                } else if (state.progress < 70) {
                    state.progress += 10;
                } else if (state.progress < 90) {
                    state.progress += 7;
                } else if (state.progress < 95) {
                    state.progress += 3;
                } else {
                    clearInterval(interval);
                    return;
                }
            }, timeout / 10);
        },
        'pageLoader/hide'({state}) {
            setTimeout(() => {
                state.transition = 0;
                state.progress = 100;
                setTimeout(() => {
                    state.active = false;
                    state.progress = 0;
                }, 800);
            }, 200);
        }
    }
};