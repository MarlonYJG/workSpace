/*
 * @Author: Marlon
 * @Date: 2020-11-22 22:44:54
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 22:47:16
 * @Description: 
 */
import ELine from './src/main';

/* istanbul ignore next */
ELine.install = function (Vue) {
    Vue.component(ELine.name, ELine);
};

export default ELine;
