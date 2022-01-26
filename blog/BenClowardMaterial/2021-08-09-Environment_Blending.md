---
title:  "Environment Blending"
tags: ["Material", "Shader", "Unreal Engine", "Ben Cloward"]
---

![Environment Blending](/img/blog_img/BenClowardMaterial/02/result.png) <br/>
Environment Blending
<!--truncate-->

## 学习地址
Environment Blending - UE4 Materials 101 - Episode 6

https://www.youtube.com/watch?v=QwVDlS8uiYg&list=PL78XDi0TS4lFlOVKsNC6LR4sCQhetKJqs&index=7

## 学习重点

1.使用TransformVector把法线从切线空间 转换到世界空间

![TransformVector](/img/blog_img/BenClowardMaterial/02/TransformVector.png)

2.使用Z方向的 -0.5 * 对比 +0.5 来控制

![sub_contrast_add](/img/blog_img/BenClowardMaterial/02/sub_contrast_add.png)

3.使用reroute进行对临时输出节点命名

![rerouted](/img/blog_img/BenClowardMaterial/02/rerouted.png)


## 具体效果
![Environment Blending](/img/blog_img/BenClowardMaterial/02/result.png)

## 节点预览
![节点全图](/img/blog_img/BenClowardMaterial/02/fullNode.png)