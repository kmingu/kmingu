<template>
    <div>
        <ul id="itemBox" v-for="(item,i) in items">
            <li>{{i+1}}:{{item.id}}</li>
            <li>{{item.title}}</li>
            <li><button @click="parseData(item)">전달</button></li>
        </ul>
    </div>

</template>

<script>
    export default{
        name: 'box-comp',
        props:{
            items: {
                id: Number,
                title: String
            },
        },
        data() {
            return {
                childData: "childDataasdasd"
            }
        },
        methods:{
            parseData(v){
                this.$emit('getChildData',v);
            }
        }
    }
</script>

<style scoped>
    #itemBox{list-style-type: none; padding: 10px; width: 480px; border-radius: 3px; background-color: #ff6666; margin: 5px; box-shadow: 2px 2px 5px #aaa}
    li{}
</style>
