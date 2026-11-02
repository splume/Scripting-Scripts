# Scripting Scripts

面向 [Scripting](https://github.com/thompsonsj/Scripting) 的脚本集合。

本仓库用于整理和分享可在 iPhone、iPad 上运行的 Scripting 脚本。脚本以独立子目录组织，每个脚本目录包含自己的 `script.json` 和入口文件，方便通过 Scripting 的“导入远程脚本”功能直接连接安装。

## 通过 Scripting 导入

在 Scripting 中打开“导入远程脚本”，粘贴本仓库地址：

```text
https://github.com/splume/Scripting-Scripts
```

也可以直接连接指定脚本目录：

```text
https://github.com/splume/Scripting-Scripts/tree/master/2048
```

## 目录结构

```text
Scripting-Scripts/
└── 2048/
    ├── script.json
    ├── index.tsx
    ├── index.html
    ├── game.js
    ├── README.md
    └── assets/
```

## 脚本列表

- [2048](./2048/)：离线 2048 游戏，支持触屏操作、自动保存、最高分和撤销一步。

## 说明

本仓库中的脚本面向 Scripting 运行环境适配，代码和资源均按各脚本目录内的说明维护。欢迎提出建议或提交改进。

## 许可与致谢

各脚本的来源、适配说明和相关致谢请参阅对应目录中的 README。2048 项目页面标注了原作及参考来源。

