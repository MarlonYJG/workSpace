/*
 * @Author: Marlon
 * @Date: 2020-11-22 21:49:06
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 22:52:38
 * @Description: 
 */
import ELine from '../packages/line/index.js';


const components = [
    ELine
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
    ELine,
}

