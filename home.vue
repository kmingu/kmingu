<template>
    <div>
        <div id="asd">
            <index>
                슬롯1
                <template v-slot="namedSlot">
                    이름있는 슬롯
                </template>
            </index>
            <index>슬롯2</index>
        </div>
    </div>
</template>
<script>
import index from './index';


export default{
    name: 'home',
    components: {
        index
    },
    data(){
        return {
            data1 : "dataaaa"
        }
    }
}
</script>
<style scoped>

</style>


