---
toc: true
layout: single
excerpt: "Unreal4 2020秋季学习"
title:  "Unreal4 2020秋季学习"
categories:
  - Unreal4
  - Record
tags:
  - Unreal4
  - Record
---
2020秋季学习简单记录
<!--truncate-->

# 2020秋季学习挑战

**学习课程：**

* [构建游戏场景 - 侦探事务所](https://www.unrealengine.com/onlinelearning-courses/build-a-detectives-office-game-environment)
* [将蓝图转换为C++代码](https://www.unrealengine.com/onlinelearning-courses/converting-blueprints-to-c)
* [使用Quixel创建逼真动画](https://www.unrealengine.com/onlinelearning-courses/creating-photoreal-cinematics-with-quixel)
* [环境音效与程序化音效的设计](https://www.unrealengine.com/onlinelearning-courses/ambient-and-procedural-sound-design)
* [动态音频](https://www.unrealengine.com/onlinelearning-courses/dynamic-audio)

# 1. 构建游戏场景 - 侦探事务所

## 使用简报(Brief)进行汇总创意

> * **地点在哪个具体地点？**
> -> 纽约市
> * **场景描述，是什么类型的场景？**
> -> 私人住宅或者办公室
> * **空间作用是什么？**
> -> 侦探事务所
> * **谁使用此空间？**
> -> 大概40岁的疲于奔命的中年侦探
> * **谁使用此空间想达至什么目的？**
> -> 想解决一件绑架案
> * **场景当前大概是什么时间点发生的？**
> -> 大概90年代
> * **场景中的物品大概是什么时间点制作的？**
> -> 大概80年代
> * **当前是什么一天中的什么时间点？**
> -> 黄昏
> * **当前的天气是怎么样的？**
> -> 阴沉

### 根据上述简报整理关键字进行后续创意定形

> * 查找对应参考图片【室外场景， 室内场景， 服装， 小物品】等
> * 使用PureRef软件进行图片管理并缩小最终使用参考图片范围
> * 画出最简单的场景俯视图布局，应该尽量保持简单
> ![UE2020Fall_1_simple_map](/img/blog_img/Unreal/UE2020Fall_1_simple_map.png)
> * 最后使用情缘板整合确立最终的
>   * 美术风格
>   * 游戏主题
>   * 场景结构

## 命名规范与文件夹结构管理

> * 静态网格: SM_
> 例： SM_Bookcase
> * 纹理: T_
>   * 漫反射：_D
>   * 法线：_N
>   * Mask: _M
> 例： T_Bookcase_D
> * 材质：M_
> * 材质实例：MI_
> * 文件夹结构
> ![UE2020Fall_1_folder_stuct.png](/img/blog_img/Unreal/UE2020Fall_1_folder_stuct.png)
> * 制作资源列表，用于安排开发进度，也可记录像某纹理属于哪个模型等信息方便管理

## UE项目初始准备流程

> * 以第一人称模版为基础进行项目建立
> * 了解简单的世界大纲操作与文件夹结构管理
> * 编辑第一人称角色中的内容，修改设置中使用的HUD，模型与发射功能

## 空间原型制作循环部分

> * 使用其它软件或者UE内的BSP绘制空间草图
> * 原型空间草图FBX导入时，可不选择【自动生成碰撞】与 【自动生成光照UV】
> * 测试【空间大小】，如果不合适，再循环第一步
> * 空间原型制作应该只关注空间比例感，不要过于追求细节

## 空间原型分区域制作细节部分循环

> * 利用之前定义好的命名与结构规范进行分区域细节模型制作
> * 在DDC里进行制作碰撞体，碰撞体名字要以"UCX_"作为前缀，多个block的时候要以"_01"，"_02"做后缀
>   * 或者直接在UE里生成。个人认为这种方式更方便一点，除非生成的碰撞体十分不合适或者过于复杂
> * 制作主材质，把纹理作为参数制作以主材质派生的实例材质
> * 进行纹理导入MASK纹理（遮挡、粗糙度和金属感）时，记得要设置压缩设置为【MASK】和【不勾选sRGB】
>   * Mask纹理，也有叫ASMR(RGBA顺序不固定)
>     * Ambient Occlusion
>     * Specular
>     * Metallic
>     * Roughness
> * 对于每一个区域的模型循环上述流程
> * 在制作每一个模型的时候，制作资源列表，记录各资源情况（更好的管理资源）
>   * 模型名字
>   * 模型原点位置（有部分模型的位置由DDC管理时这样可以更好的识别哪些模型在世界坐标的位置）
>   * 模型类型
>   * 模型纹理列表
> * 场景情感表达
>   * 大物品：建筑物框定场景使用定位和地点
>   * 中物品：书桌，灯之类展示场景的用途
>   * 中型小型道具：凌乱的文件夹，散落的药片等描述或暗示人物性格，刻画人物的心理状态
> * 场景布置时不一定需要任何东西都要对齐，这样看起来更有现实感

## 添加光照

> * 添加【自发光材质】乘上亮度，使用聚光灯+点光源【无阴影】来模拟GI
> * 使用 Ctrl+L+LeftBtn 可创建对应鼠标位置颜色的灯光
> * 使用色卡来控制整体光照颜色，然后进行光照贴图烘焙（如果是自己制作光照贴图UV记得不可重叠）
> * 光照贴图密度ALT+o可查看，大小为绿色为刚好
> * 添加重要光照体积 和 光照门户使场景光照更自然
> * 反射捕获球的分辨率在项目设置中的 渲染里设置，默认是128
> * 添加大气雾与后期处理体积进行气氛定调

## END of Alpha pass

课程至此结束，未来可能继续添加互动性和声音到场景中

> * 添加室外的远景
> * 添加和编辑天空盒
> * 添加动画资源
> * 添加蓝图功能让玩家可以拾取某些资源
> * 添加一些带铰链的门和滑门
> * 添加环境音效和循环音效
> * 添加玩家脚步声和语音
> * 最后设置持久关卡层制作关卡流加载

# 2. 将蓝图转换为C++代码

课程主要着重于

> * 在虚幻中使用C++
> * 转换蓝图于C++
> * 蓝图与C++结合使用

## 蓝图与C++

> * 蓝图
>   * 编译更快，简单功能实现更快捷
>   * 简单的功能更容易理解
>   * 有友好提示和更适合设计师与美术人员
> * C++
>   * 性能更强，因为蓝图都需要在虚拟机中运行（但蓝图一般不会是性能问题点。可结合调试工具查看具体问题）
>   * 可以访问任何API，因为蓝图基础功能都需要C++提供功能，所以有一定限制
>   * 版本控制更方便（蓝图更难控制一点，因二进制文件，不过后续会有更好的对比工具）

## 基础项目结构

![UE2020Fall_2_Architecture](/img/blog_img/Unreal/UE2020Fall_2_Architecture.jpg)



# 3. 使用Quixel创建逼真动画

# 4. 环境音效与程序化音效的设计

# 5. 动态音频
