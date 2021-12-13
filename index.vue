<template>
    <div>
        <slot>기본값</slot>
        <slot name="namedSlot">
        </slot>
        <div id="box1">
            <input type="text" v-model="boxName" placeholder="id">
            <br>
            <input type="text" v-model="boxTitle" placeholder="title">
            <button @click="newBox">create children</button>
            <br><br>
            클릭한 자식 컴포넌트<br>
            <span v-if="childData">{{childData.id}}</span>
            <span v-if="childData">{{childData.title}}</span>
        </div>
        <box-comp :items="items" @getChildData="getChild"></box-comp>
    </div>

</template>

<script>
    import boxComp from './boxComp';
    export default{
        name: 'index',
        data() {
            return {
                userData: 'data Sample',
                items: [
                ],
                boxName: null,
                boxTitle: null,
                childData: null,
            }
        },
        methods:{
            newBox(){
                this.items.push({id:this.boxName,title:this.boxTitle})
            },
            getChild(value){
                console.log(value)
                this.childData = value;
            }
        },
        components:{
            boxComp,
        }
    }
</script>

<style scoped>
    #box1{width: 500px; background-color: #eaeaea; position: relative; border-left: 4px solid #ff6666; padding: 5px; margin-bottom: 5px }
    #box1::after{position: absolute; left:-12px; width: 20px; height: 20px; top: 20px; content: '!'; text-align: center;
        border-radius: 100%; color: #eaeaea; font-weight: bold; background-color: #ff6666; opacity: 0; transition: 0.5s}
    #box1:hover::after{opacity: 1; transition: 0.5s} 
</style>
