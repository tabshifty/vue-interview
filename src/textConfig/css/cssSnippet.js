const flex_center = 
`  /* 写在父容器中 */ 
  justify-content: center;
  align-items: center;
`
const flex_parant_md = 
`* __flex-direction__: row | row-reverse | column | column-reverse; 子元素排列方向
 * __flex-wrap__: nowrap | wrap | wrap-reverse; 控制换行
 * __flex-flow__: *flex-direction*和*flex-wrap*的简写
 * __justify-content__: flex-start | flex-end | center | space-between | space-around; 控制子项目在主轴上的对齐方式
 * __align-items__:  flex-start | flex-end | center | baseline | stretch;  控制子项目在交叉轴上如何对齐
 * **align-content**: flex-start | flex-end | center | space-between | space-around | stretch; 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
`
const flex_item_md = 
`* __order__: 定义子元素或者子容器的排列顺序。数值越小，排列越靠前，默认为0
 * __flex-grow__: 定义子元素或者子容器的放大比例，默认为0
 * __flex-shrink__: 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
 * __flex-basis__: 定义了在分配多余空间之前，项目占据的主轴空间。 浏览器根据这个属性，计算主轴是否有多余空间
 * __flex__: *flex-grow*, *flex-shrink* 和 *flex-basis*的简写
 * __align-self__: 允许单个项目有与其他项目不一样的对齐方式，可覆盖*align-items*属性
`
const css = {
    flex: {
        center:flex_center,
        parent_md: flex_parant_md,
        item_md: flex_item_md,
    }
}

export {css}