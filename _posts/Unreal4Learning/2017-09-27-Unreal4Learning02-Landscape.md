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

###### 关于Landscape


###### Shader部分
- Landscape的Scale单位为cm。大小为 scale\*quards\*components。
- Landscape需要包含多层Layer才可以在Paint多层layer。
- LandscapeCoords可以控制layer的UV。
- 如果要做FlatShading需要用AbsoluteWorldPosition，DDX，DDY进行Cross求出当面的法线。

![]({{ site.url }}{{ site.baseurl }}
/assets/images/Unreal/LandscapeMultiLayer.jpg)
![]({{ site.url }}{{ site.baseurl }}
/assets/images/Unreal/LandscapeMultiLayerInfo.jpg)
![]({{ site.url }}{{ site.baseurl }}
/assets/images/Unreal/LandscapeFlatNormal.jpg)

