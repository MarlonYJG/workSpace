/*
 * @Author: Marlon
 * @Date: 2020-11-22 21:46:47
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 21:47:47
 * @Description: 表单
 */
import EleFormDialog from './src/main';

/* istanbul ignore next */
EleFormDialog.install = function (Vue) {
    Vue.component(EleFormDialog.name, EleFormDialog);
};

export default EleFormDialog;
