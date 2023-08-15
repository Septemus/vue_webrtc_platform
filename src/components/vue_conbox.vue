<template>
    <div class="con-box col-sm-6 right"
        >
        <vue_welcome></vue_welcome>
        <p><slot name="p_notice"></slot></p>
        <button  @click="movement"><slot name="b_notice"></slot></button>
    </div>
</template>
<script>
import vue_welcome from './vue_welcome'

export default {
    name: 'vue_toregister',
    props:['movement'],
    components: {
        vue_welcome
    }

}
</script>