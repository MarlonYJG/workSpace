/*
 * @Author: Marlon
 * @Date: 2020-11-22 21:46:47
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 21:47:47
 * @Description: table
 */
import EleTable from './src/main';

/* istanbul ignore next */
EleTable.install = function (Vue) {
    Vue.component(EleTable.name, EleTable);
};

export default EleTable;
