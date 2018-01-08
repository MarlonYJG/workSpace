<template>
    <div class="layout">
        <Row type="flex" class="h">
            <Col span="5" class="layout-menu-left">
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" @on-select="go">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            数据概览
                        </template>
                        <MenuItem name="1-1">应用概览</MenuItem>
                        <MenuItem name="1-2">用户分布趋势</MenuItem>
                        <MenuItem name="1-3">渠道分析</MenuItem>
                        <MenuItem name="1-4">用户留存分析</MenuItem>
                        <MenuItem name="1-5">用户质量评估</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            用户探索
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            用户行为探索
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                      <template slot="title">
                        <Icon type="soup-can-outline"></Icon>
                        产品业务分析
                      </template>
                      <MenuItem name="4-1">23</MenuItem>
                      <MenuItem name="4-2">24</MenuItem>
                    </Submenu>
                    <Submenu name="5">
                      <template slot="title">
                        <Icon type="compass"></Icon>
                        数据探索
                      </template>
                      <MenuItem name="5-1">23</MenuItem>
                      <MenuItem name="5-2">234</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="19">
                <div class="layout-header">
                  <div class="lt">
                    <template>
                      <Select v-model="model1" style="width:200px;background:red;" placeholder="请选择产品名称">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                    </template>
                  </div>
                  <div class="lt">
                    <template>
                      <Cascader :data="data" v-model="value1" placeholder="应用平台及版本" trigger="hover"></Cascader>
                    </template>
                  </div>
                
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Home</BreadcrumbItem>
                        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                        <BreadcrumbItem>iView</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <keep-alive>
                        <router-view></router-view>
                      </keep-alive>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                value1: [],
                data: [{
                    value: 'ios',
                    label: 'IOS',
                    children: [
                        {
                            value: '1.0',
                            label: 'v-1.0'
                        },
                        {
                            value: '1.2',
                            label: 'v-1.2'
                        },
                        {
                            value: '1.3',
                            label: 'v-1.3'
                        }
                    ]
                }, {
                    value: 'android',
                    label: 'Android',
                    children: [
                        {
                            value: '2.0',
                            label: 'v-2.0'
                        },
                        {
                            value: '2.2',
                            label: 'v-2.2'
                        },
                        {
                            value: '2.3',
                            label: 'v-2.3'
                        }
                    ],
                }],

            }
        },
        methods:{
            go(name){
                switch (name) {
                    case '1-1':
                        this.$router.push({path:'/'})
                        break;
                    case '1-2':
                        this.$router.push({path:'page_1_2'})
                        break;
                    case '1-3':
                        this.$router.push({path:'page_1_3'})
                        break;
                    case '1-4':
                        this.$router.push({path:'page_1_4'})
                        break;
                    case '1-5':
                        this.$router.push({path:'page_1_5'})
                        break;
                    case '2-1':
                        this.$router.push({path:'page_2'})
                        break;
                    case '2-2':
                        this.$router.push({path:'page_2_2'})
                        break;
                    case '3-1':
                        this.$router.push({path:'page_3'})
                        break;
                    case '3-2':
                        this.$router.push({path:'page_3_2'})
                        break;
                    case '4-1':
                        this.$router.push({path:'page_4'})
                        break;
                    case '4-2':
                        this.$router.push({path:'page_4_2'})
                        break;
                    case '5-1':
                        this.$router.push({path:'page_5'})                        
                        break;
                    case '5-2':
                        this.$router.push({path:'page_5_2'})
                        break;
                    default:
                        break;
                }
                // console.log(name)//this.$router.go('/login');//其中login是你定义的一个路由模块
            }
        }
    }
</script>
<style>
    .layout{
        border: 1px solid #1c2438;
        background: #495060;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
        background-color: #5b6270;
        border: 2px double #80848f;
    }
    .layout-content{
        min-height: 900px;
        margin: 15px;
        overflow: hidden;
        background: #495060;
        border-radius: 4px;
        border: 2px solid #80848f;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #bbbec4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #495060;
        box-shadow: 0 1px 1px rgba(0,0,0,.5);
        padding: 13px 70px;
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .h{
      min-height: 1000px;
    }
    .lt{
      float: left;
      width: 200px;
      height: 32px;
      margin-right: 25px;
    }
</style>