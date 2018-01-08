<template>
    <div>
        <Table border :columns="columns7" :data="data6" :loading="false"></Table>
        <div style="margin:10px;">
            <div style="float:right;">
                <Page :style="bg" :total="100" :current="1"  @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data6:this.mockTableData1(),
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('div', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                bg:{
                    
                }
            }
        },
        methods: {
            mockTableData1 (){
                let data=[];
                for (let i = 0; i < 7; i++) {
                    data.push({
                        name: 'Jon Snow'+Math.floor(Math.random () * 100 + 1),
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    })                    
                }
                return data
            },
            show (index) {
                // this.$Modal
                this.$Modal.info({
                    title: '用户基本信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`,
                    style:{
                        height:'200px',
                        border:'1px solid red'
                    }
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },

            changePage (Page){
                // console.log(Page)
                this.data6 = this.mockTableData1();
            }
        }
    }
</script>
<style scoped>


</style>
