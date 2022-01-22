---
layout: single
excerpt: "Unreal4 学习记录 调试相关"
title:  "Unreal4 学习记录-调试"
categories:
  - Unreal4 
  - Debug
tags:
  - Unreal4 
  - Debug
---

调试相关记录
<!--truncate-->

###### 关于C++崩溃时的调试
- ***在UE_Editor执行时，崩溃时会生成调用堆栈在剪贴板上***
- crashReport的文件夹里有`log`和`minidump`。只要调试的`PDB文件`还在，直接打开就可以看到错误的代码

###### 断言
运行时断言宏类型
- 停止执行
- Debug版并停止执行
- 不停止并报告错误

![](/img/blog_img/Unreal/build_debug_define.jpg)


---


**check(expression);**
- false时停止执行，只在build(Do_CHECK=1)时执行

**checkf(expression, ...);**
- check崩溃时，可以log信息在生成的调用堆栈上

**verify(expression);**
**verifyf(expression, ...);**
- 和check一样，但无论是否build都会执行

**checkCode(expression);**
- check的可以运行代码的版本，使用do/while去执行(为什么？)

```js
checkCode( 
	if( Object->HasAnyFlags( RF_PendingKill ) ) { 
		UE_LOG(LogUObjectGlobals, Fatal, TEXT("Object %s is part of root set though has been marked RF_PendingKill!"), *Object->GetFullName() ); 
	} 
);
```

**checkNoEntry();**
- check的用于设置代码调用异常的地方

```js
switch (MyEnum)
{
    case MyEnumValue:
        break;
    default:
        checkNoEntry();
        break;
}
```

**checkNoReentry();** / **checkNoRecursion();**
- 用于检查某些函数只被调用一次，调用多次就崩。

**unimplemented();**
- 用于检查子类是否override父类的函数

```js
class FNoImpl
{
    virtual void DoStuff()
    {
        // 必须对此进行覆写
        unimplemented();
    }
};
```

启用 DO_GUARD_SLOW 后，断言宏的第二类才会执行。DO_GUARD_SLOW 通常只在调试版本中启用，但也可针对项目进行修改。它们的运行较为缓慢，在开发或发布版本中不需要进行许多无谓的检查。这些宏的执行与较快的宏并无差异。这些宏是 checkSlow()、checkfSlow() 和 verifySlow()。
```
checkSlow(List->HasCycle());
checkfSlow(Class->IsA(AActor::StaticClass()), TEXT("Class (%s) is wrong type"), Class->GetName());
verifySlow(LastValue == Current);
```
---

**bool ensure(expression);**
- 应用不会崩溃，会输出信息到Crash文件夹里的log，而且只会调用一次。

**ensureMsg(expression, message);** 4.9抛弃，现使用 ** ensureMsgf(expression, message, ...); ** 代替
- 应用不会崩溃，会输出信息到Crash文件夹里的log，而且只会调用一次。

```js
ensureMsgf(this->PhysicsHandle != nullptr,
		*FString::Printf(TEXT("%s: PhysicsHandle NOT FOUND!"), 
		*GetOwner()->GetName())
	);
```

**ensureAlways()**
- 同上面的ensure，但会鉴定多次

**ensureMsgfAlways()**
- 同上面的ensureMsgf，但会鉴定多次