---
title:  "Bump Offset and Parallax Occlusion Mapping"
tags: ["Material", "Shader", "Unreal Engine", "Ben Cloward"]
---

![ParallaxOcclusionMapping](/img/blog_img/BenClowardMaterial/03/ParallaxOcclusionMapping.png) <br/>
Parallax Occlusion Mapping
<!--truncate-->

## 学习地址
Bump Offset and Parallax Occlusion Mapping - UE4 Materials 101 - Episode 8

https://www.youtube.com/watch?v=wc0StMr3CQo&list=PL78XDi0TS4lFlOVKsNC6LR4sCQhetKJqs&index=9

## 学习重点

1.使用MASK采样类型，Texture也需要使用非sRGB线性空间进行BumpOffset或ParallaxOcclusionMapping

![mask](/img/blog_img/BenClowardMaterial/03/mask.png)

2.MASK图片的尺寸不用太大，最好模糊一点，这里使用的是256

3.BumpOffset 比 ParallaxOcclusionMapping消耗更小，155 vs 192

## 具体效果
### BumpOffset
![BumpOffset](/img/blog_img/BenClowardMaterial/03/BumpOffset.png)

### ParallaxOcclusionMapping
![ParallaxOcclusionMapping](/img/blog_img/BenClowardMaterial/03/ParallaxOcclusionMapping.png)


## 节点预览
![节点全图](/img/blog_img/BenClowardMaterial/03/result_all_node.png)