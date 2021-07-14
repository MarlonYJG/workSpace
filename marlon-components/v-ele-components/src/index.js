/*
 * @Author: Marlon
 * @Date: 2020-11-22 21:49:06
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 22:00:02
 * @Description:
 */
import EleTable from '../packages/table/index.js';
import EleFormDig from '../packages/formDialog/index.js';

const components = [
    EleTable,
    EleFormDig
]


const install = function (vue) {
    /* istanbul ignore if */
    if (install.installed) return;
    /*eslint-disable*/
    components.map((component) => {
        vue.component(component.name, component);
    });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    EleTable,
}
