---
layout: single
excerpt: "Blender学习记录"
title:  "Blender学习"
categories:
  - Bleander
tags:
  - Bleander
---
 <!--truncate-->

基本上带方向的移动，按x，y，z可以选定轴shift+XYZ 是反选定轴。
右键选择多个obj时，像make parent之类的合并操作等，都是应用到最后的obj上。
进入Paint模式可以把顶点分为顶点组。
所有资源都需要有物体使用者才会被保留，可以用Fake Users来保留。
- - -
贝塞尔曲线
Ctrl+LMB添加顶点， v设置顶点间曲线(分起始终点两个)，Alt+C 转换为Mesh。
属性设置：
lerp的顶点密度。
设置其它Mesh沿着曲线生成/扭曲。
- - -

基本操作，基本上记住了操作就能记住大部分东西了:
- x = 删除
- g = 移动、 r = 旋转、s = 缩放
- e = 挤出、 i = 在平面内插入平面
- k = 切割， 再按e可以断线另外切， 空格确认。
- shift+B = 平滑边缘，会细分面、 ctrl+shift+B = 平滑顶点
- ctrl+R = loop cut
- shift+A = 添加XXXX
- w = 杂项键，用途比较多。像细分，删除重复顶点等。
- g，g = 在线内移动顶点
- b、c、ctrl + LMB = 选物
- p = parent Obj 层级的操作，合并/分离等。