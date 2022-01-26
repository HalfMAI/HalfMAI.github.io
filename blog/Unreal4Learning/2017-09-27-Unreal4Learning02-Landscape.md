---
layout: single
excerpt: "Unreal4 学习记录 Landscape相关"
title:  "Unreal4 学习记录-Landscape相关"
categories:
  - Unreal4
  - Landscape
tags:
  - Unreal4
  - Landscape
---
 <!--truncate-->

###### 关于Landscape

技术指导:
https://docs.unrealengine.com/latest/INT/Engine/Landscape/TechnicalGuide/index.html


###### Shader部分
- Landscape的Scale单位为cm。大小为 scale\*quards\*sections\*components。
  - X-scale of 500, 7x7 quads, 1x1 section per component and 16x16 components
  - 500cm x 7quads x  1 sections x 16components = 560m

- Landscape需要包含多层Layer才可以在Paint多层layer。
  ![](/img/blog_img/Unreal/LandscapeMultiLayerInfo.jpg)
  ![](/img/blog_img/Unreal/LandscapeMultiLayer.jpg)
- LandscapeCoords可以控制layer的UV。当导入的高度图与当前Landscape大小不一样时计数公式为:
  - (Landscape大小 - 高度图大小) / 2 / Landscape大小。得到UV的偏移值。
  ![](/img/blog_img/Unreal/unreal_LandscapeCoords_size.jpg)
- 如果要做FlatShading需要用AbsoluteWorldPosition，DDX，DDY进行Cross求出当面的法线。
  ![](/img/blog_img/Unreal/LandscapeFlatNormal.jpg)
