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

> * 查找对应参考图片【室外场景, 室内场景, 服装, 小物品】等
> * 使用PureRef软件进行图片管理并缩小最终使用参考图片范围
> * 画出最简单的场景俯视图布局,应该尽量保持简单
> ![UE2020Fall_1_simple_map](/assets/images/Unreal/UE2020Fall_1_simple_map.png)
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
> ![UE2020Fall_1_folder_stuct.png](/assets/images/Unreal/UE2020Fall_1_folder_stuct.png)
> * 制作资源列表,用于安排开发进度,也可记录像某纹理属于哪个模型等信息方便管理

## UE项目初始准备流程

> * 以第一人称模版为基础进行项目建立
> * 了解简单的世界大纲操作与文件夹结构管理
> * 编辑第一人称角色中的内容,修改设置中使用的HUD,模型与发射功能

## 空间原型制作循环部分

> * 使用其它软件或者UE内的BSP绘制空间草图
> * 原型空间草图FBX导入时,可不选择【自动生成碰撞】与 【自动生成光照UV】
> * 测试【空间大小】,如果不合适,再循环第一步
> * 空间原型制作应该只关注空间比例感,不要过于追求细节

# 2. 将蓝图转换为C++代码

# 3. 使用Quixel创建逼真动画

# 4. 环境音效与程序化音效的设计

# 5. 动态音频
