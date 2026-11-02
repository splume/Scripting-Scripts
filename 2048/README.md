# 2048 · Scripting 适配版

在 Scripting 脚本列表中点击「2048」运行。可在棋盘上上下左右滑动，也可以点方向按钮；外接键盘支持方向键。

- 完全离线，包含原版两段音效，默认关闭音效。
- 自动保存棋盘、得分、最高分及音效开关至当前脚本的 Storage。
- 支持撤销上一步（仅当前运行期间）、新游戏确认、达到2048后继续挑战。
- 保留所提供 JSBox 版本中新方块 2 / 4 各 50% 的概率。
- 修正原版无效滑动也生成方块的问题；仅有效移动生成新方块。

## 来源与适配说明

原链接：https://xteko.com/install?id=89&lang=zh-Hans
源代码包：https://github.com/cyanzhong/xTeko/raw/master/extension-scripts/2048.box

原脚本使用 JSBox 专属 $objc / $define 和 SpriteKit，不能直接在 Scripting 中运行。本版改用 Scripting 的 WebViewController 和 Storage，重写触屏界面与游戏逻辑，不再依赖 JSBox。

玩法敬 Gabriele Cirulli 的2048；参考所提供的 scripting 版本适配。原项目说明提及玩法受 Asher Vollmer 的 Threes 启发。原包 README 保留在 ORIGINAL-README.md；音效取自所提供原包，原有权利归原权利人。
