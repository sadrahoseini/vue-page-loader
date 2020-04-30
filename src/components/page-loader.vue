<template>
    <div id="sadrix-page-loader" v-show="active" :style="styles"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'page-loader',
    props: {
        color: {
            type: String,
            default: '#2196f3'
        },
        rtl: {
            type: Boolean,
            default: false
        },
        height: {
            type: Number,
            default: 3
        }
    },
    computed: {
        styles() {
            return {
                position: 'fixed',
                top: '0',
                right: this.rtl ? '0' : 'inherit',
                left: !this.rtl ? '0' : 'inherit',
                height: this.height + 'px',
                width: this.progress + '%',
                transition: this.transition + 's ease-out',
                backgroundColor: this.color,
            }
        },
        ...mapState({
            active: state => state.pageLoader.active,
            progress: state => state.pageLoader.progress,
            transition: state => state.pageLoader.transition,
        }),
    },
    mounted() {
        console.log('[sadrix-vue-page-loader]', 'Component loaded!');
    }
}
</script>