---
toc: true
layout: single
excerpt: "颜色使用"
title:  "颜色使用相关"
categories:
  - Unreal4
  - Record
  - Color
tags:
  - Unreal4
  - Record
  - Color
---

色彩相关的信息记录
<!--truncate-->

# 色彩的分类

* 无彩色

> ![无彩色](/img/blog_img/Unreal/color/无彩色.jpg) <br/>
> 无彩色是没有颜色的颜色，例如白色，黑色和灰色。

* 有彩色

> ![有彩色](/img/blog_img/Unreal/color/有彩色.jpg) <br/>
> 彩色是具有色彩的颜色，例如红色或蓝色。

## 色彩的三个属性

### 色相

> ![纯色](/img/blog_img/Unreal/color/纯色.jpg) <br/>
> 色相与明度和纯度无关，简单来说是指红色、蓝色等色彩的名称。  
> 将色相按波长进行循环排列，就形成了色相环。  
> 通常，我们把通过光谱显示的颜色氛围红色、黄色、蓝色、紫色等色相，而实际上在这几个色相之间还存在着无数不知名的颜色。  
> 色相与光线的波长大小密切相关，其中波长较长的色相为红色，波长较短的色相为蓝色，适中的波长为绿色。  
> 然而波长较长的红色与波长较短的紫色，人们从心理上就默认为是近似色，若把光谱中陈列的红色和紫色连接起来，就能够的得到所有颜色逐渐变化的渐变效果。

### 明度（亮度）

> ![明度](/img/blog_img/Unreal/color/明度.jpg) <br/>
> 人们看到的物体的颜色必须在具备光线的条件下，物体表面吸收或者反射光线的状态决定该物体的颜色。  
> 若某种物体能够吸收所有进入的光线，即不反射任何颜色，就形成了黑色。  
> 相反，若物体反射了所有进入的光线，则这些反射的光线就形成了白色。反射的光线强弱不同使物体所呈现的光亮不同，从而生成亮色与暗色，这就是色彩的明度。  
> 在我们对明度的学习中，讲黑白灰化成10个等级。  
> 比较明亮的称之为高明度，比较暗的称之为低明度，介于中间的成为中明度，有彩色中，黄色明度最高，紫色明度最低。

### 彩度（纯度、饱和度）

> ![彩度](/img/blog_img/Unreal/color/彩度.jpg) <br/>
> 纯度是指色彩中包含色相的程度，即色彩的鲜艳程度。  
> 色彩越接近纯色，说明纯度越高，色彩中混合的颜色越多，纯度越低。和明度不一样，纯度也分为高纯度、中纯度和低纯度。  
> 无彩色是不分纯度的。

## 简单总结

* 无色彩类：没有颜色的颜色，黑白灰。
* 有色彩类：具有颜色的颜色。
* 色相：不同的颜色。
* 亮度：  颜色的亮度。
* 饱和度：颜色的强度。

# 色彩的关系
 
 > ![互补色](/img/blog_img/Unreal/color/互补色.jpg) <br/>
 > 互补色：指色环对面180度的两种颜色互为补色，视觉效果鲜明，彰显个性活跃饱满。

 > ![对比色](/img/blog_img/Unreal/color/对比色.jpg) <br/>
 > 对比色：指24色环上相距120-150度之间的两种颜色，这种搭配既有对比又不失和谐。

 > ![邻近色](/img/blog_img/Unreal/color/邻近色.jpg) <br/>
 > 邻近色:色环中相差30-60度的颜色，比如红色和橙色、橙色和黄色、黄色和绿色。在统一中又有变化，视觉和谐悦目，比同色系搭配稍微生动些。

# PCCS色调图

色调是通过结合【**亮度**】和【**彩度**】来直观地表达色彩印象的色调。

 > ![tone](/img/blog_img/Unreal/color/tone.png) <br/>

# 色彩与感觉

![色彩与冷暖轻重](/img/blog_img/Unreal/color/色彩与冷暖轻重.jpg) <br/>
![色彩与情感1](/img/blog_img/Unreal/color/色彩与情感1.jpg) <br/>

> 冷暖感受  
> ![冷暖](/img/blog_img/Unreal/color/冷暖.jpg) <br/>
>  
> * 暖色给人的印象是生动的，激情的，有表现力的，给人感觉在空间位置靠前。
> * 冷色给人的印象是谨慎的，冷静的，产生平静感，给人感觉在空间位置靠后。

> 重量感  
> ![重量感](/img/blog_img/Unreal/color/重量感.jpg) <br/>
>  
> * 轻色：一般为明度高，冷色。
> * 重色：一般为明度低，暖色。

> 前进色与后退色  
> ![前进后退](/img/blog_img/Unreal/color/前进后退.jpg) <br/>
>  
> * 前进色：一般是暖色或者明度和纯度都较高，给人一种视觉上靠近观者的感觉。
> * 后退色：一般是冷色或者明度和纯度都较低，给人一种视觉上远离观者的感觉。

> 体积感  
>  
> ![膨胀收缩](/img/blog_img/Unreal/color/膨胀收缩.jpg) <br/>
>  
> * 膨胀色一般是前进色和暖色，明度较高。
> * 收缩色一般是后退色和冷色，明度较低。

> 兴奋沉稳  
>  
> ![兴奋沉稳](/img/blog_img/Unreal/color/兴奋沉稳.jpg) <br/>
>  
> * 温暖和高度饱和的颜色给人以兴奋的感觉。
> * 凉爽的颜色给人以沉稳的感觉。

## 其它相关关系

![色彩与情感2](/img/blog_img/Unreal/color/色彩与情感2.jpg) <br/>

# 颜色与应用

## 配色方式

### 类似色相 不同色调

![配色1](/img/blog_img/Unreal/color/配色1.jpg) <br/>

### 邻近色相 相同色调

![配色2](/img/blog_img/Unreal/color/配色2.jpg) <br/>

### 相同色相 不同亮度

![配色3](/img/blog_img/Unreal/color/配色3.jpg) <br/>

### 不同色相 相同色调
  
![配色4](/img/blog_img/Unreal/color/配色4.jpg) <br/>

### 无彩色使用情况

中性色（也称无彩色）：黑、白、灰、金、银与任何色彩之间都能独立承担缓冲与补色平衡的角色，在任何不协调的色彩之间，只要间隙1条中性色条就能使色彩统一起来。

![无彩色使用1](/img/blog_img/Unreal/color/无彩色使用1.jpg) <br/>
![无彩色使用2](/img/blog_img/Unreal/color/无彩色使用2.jpg) <br/>

## 色彩分配比例（只用于参考）

![色彩分配比例](/img/blog_img/Unreal/color/色彩分配比例.jpg) <br/>

## 网页与配色

<https://zhuanlan.zhihu.com/p/20907635>  

## UX与配色

### 高吸引力的颜色

> ![吸引力](/img/blog_img/Unreal/color/吸引力.jpg) <br/>

* 高彩度
* 高明度
* 暖色居多

### 高可见性的颜色

> ![可见性1](/img/blog_img/Unreal/color/可见性1.jpg) <br/>
> ![可见性2](/img/blog_img/Unreal/color/可见性2.jpg) <br/>

* 前景与背景明度差异大的颜色
* 尽量使用对比色

### 高区分度的颜色

> ![区分度1](/img/blog_img/Unreal/color/区分度1.jpg) <br/>
> ![区分度2](/img/blog_img/Unreal/color/区分度2.jpg) <br/>

* 采用【对比色】做分类区分

### 同颜色组合中特出对比

> ![明度对比](/img/blog_img/Unreal/color/明度对比.jpg) <br/>
> ![组合中对比](/img/blog_img/Unreal/color/组合中对比.jpg) <br/>

* 采用【明度】做区分，明度越【高】越重要

# 引用相关

## 参考资料

<https://zhuanlan.zhihu.com/p/20907635>  
<https://zhuanlan.zhihu.com/p/112863581>  
<https://www.zcool.com.cn/article/ZODM3MTIw.html>  
<https://game-ui.net/?p=1153>  
<http://rock77.fc2web.com/main/color/color1-12.html>  

## 颜色盘网站

<https://geenes.app/>  
<https://color.adobe.com/zh/create/color-wheel>  
<https://paletton.com/>  
<https://uigradients.com/#Christmas>

## UX使用相关

<https://uxmovement.com/category/forms/>
