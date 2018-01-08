<template>
    <div>
        <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 350 : ''" :size="tableSize" :data="tableData3" :columns="tableColumns3"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData3: [
                    {
                        name: '唐玉琴',
                        age: 18,
                        address: '北京[海淀]',
                        date: '2018-01-01'
                    },
                    {
                        name: '王帅',
                        age: 24,
                        address: '天津[东城]',
                        date: '2018-01-02'
                    },
                    {
                        name: '小虎',
                        age: 30,
                        address: '河南[洛阳]',
                        date: '2018-01-03'
                    },
                    {
                        name: '祝贺说',
                        age: 26,
                        address: '山西[太原]',
                        date: '2018-01-04'
                    },
                    {
                        name: '卢凯珊',
                        age: 18,
                        address: '河北[邯郸]',
                        date: '2018-01-05'
                    },
                    {
                        name: '刘鹏春',
                        age: 24,
                        address: '日本[东京]',
                        date: '2018-01-06'
                    },
                    {
                        name: '刘家豪',
                        age: 30,
                        address: '美国[洛杉矶]',
                        date: '2018-01-06'
                    },
                    {
                        name: '雨菲',
                        age: 26,
                        address: '北京[丰台]',
                        date: '2018-01-10'
                    }
                ],
                showBorder: true,
                showStripe: true,
                showHeader: true,
                showIndex: true,
                showCheckbox: true,
                fixedHeader: true,
                tableSize: 'default'
            }
        },
        computed: {
            tableColumns3 () {
                let columns = [];
                if (this.showCheckbox) {
                    columns.push({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    })
                }
                if (this.showIndex) {
                    columns.push({
                        type: 'index',
                        width: 60,
                        align: 'center'
                    })
                }
                columns.push({
                    title: '日期',
                    key: 'date',
                    sortable: true
                });
                columns.push({
                    title: '姓名',
                    key: 'name'
                });
                columns.push({
                    title: '年龄',
                    key: 'age',
                    sortable: true,
                    filters: [
                        {
                            label: '大于25',
                            value: 1
                        },
                        {
                            label: '小于25',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    }
                });
                columns.push({
                    title: '地址',
                    key: 'address',
                    filters: [
                        {
                            label: '日本',
                            value: '日本'
                        },
                        {
                            label: '美国',
                            value: '美国'
                        },
                        {
                            label: '北京',
                            value: '北京'
                        }
                    ],
                    filterMethod (value, row) {
                        return row.address.indexOf(value) > -1;
                    }
                });
                return columns;
            }
        }
    }
</script>
<style scoped>

</style>
