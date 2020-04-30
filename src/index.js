import PageLoaderComponent from './components/page-loader.vue';
import LoaderModule from './modules/loader';

const PageLoader = {
    install(Vue, options) {
        Vue.component('page-loader', PageLoaderComponent);
        if (!options.hasOwnProperty('store')) {
            console.warn('[sadrix-vue-page-loader]', 'For correct registration and kepp useability of this plugin you need to pase app vuex store instance as an option property.')
        } else if (typeof options.store !== 'object') {
            console.warn('[sadrix-vue-page-loader]', 'Option [store] prop should be obeject. You passed [' + typeof options.store + ']');
        } else {
            const store = options.store;
            store.registerModule('pageLoader', LoaderModule);
            Vue.prototype.$showPageLoader = (timeout = 10000) => {
                store.dispatch('pageLoader/show', timeout);
            }
            Vue.prototype.$hidePageLoader = () => {
                store.dispatch('pageLoader/hide');
            }
            console.log('[sadrix-vue-page-loader]', 'Installed successfully!');
        }
    }
};

export default PageLoader;