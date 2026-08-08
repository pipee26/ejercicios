# 💪 健身训练数据集

<div align="center">

<p align="center">
  <a href="./README.md">English</a> · <strong>简体中文</strong>
</p>

<p>
  <img src="videos/0025-EIeI8Vf.gif" width="120" alt="杠铃卧推" />
  <img src="videos/0043-qXTaZnJ.gif" width="120" alt="杠铃深蹲" />
  <img src="videos/0032-ila4NZS.gif" width="120" alt="杠铃硬拉" />
  <img src="videos/0652-lBDjFxJ.gif" width="120" alt="引体向上" />
  <img src="videos/0294-NbVPDMW.gif" width="120" alt="哑铃弯举" />
  <img src="videos/0334-DsgkuIt.gif" width="120" alt="哑铃侧平举" />
</p>

**一个全面、开箱即用的健身训练数据集，包含 1,324 个训练动作——每个动作均配有动画 GIF、180×180 缩略图，以及类别、身体部位、器械、目标肌群、协同肌群等数据，并提供 10 种语言的分步动作说明（英语、西班牙语、意大利语、土耳其语、俄语、中文、印地语、波兰语、韩语、法语）。**

[![Exercises](https://img.shields.io/badge/Exercises-1324-blue?style=flat-square)](data/exercises.json)
[![Animation GIFs](https://img.shields.io/badge/Animation%20GIFs-1324-brightgreen?style=flat-square)](videos/)
[![Thumbnails](https://img.shields.io/badge/Thumbnails-1324-orange?style=flat-square)](images/)
[![Languages](https://img.shields.io/badge/Languages-10-green?style=flat-square)](#-overview)
[![Mobile App](https://img.shields.io/badge/App-LogPress-111111?style=flat-square&logo=react)](https://github.com/hasaneyldrm/logpress-public)
[![License](https://img.shields.io/badge/License-MIT%20%2B%20media%20terms-blue?style=flat-square)](LICENSE)

</div>

> **📱 为 [LogPress](https://github.com/hasaneyldrm/logpress-public) 应用提供数据支持**——一款 AI 辅助健身追踪器；本数据集是其训练动作数据层。正在开发你自己的健身应用？直接将其集成到你的后端即可。

---

## 📦 数据源

**本仓库提供：**

- 1,324 个训练动作，包含类别、身体部位、器械、目标肌群与协同肌群数据
- 每个动作均配有动画 GIF + 180×180 缩略图（媒体内容 © [Gym visual](https://gymvisual.com/)——详见[许可证](#-许可证与使用条款)）
- 10 种语言的逐步动作说明（🇬🇧 英语、🇪🇸 西班牙语、🇮🇹 意大利语、🇹🇷 土耳其语、🇷🇺 俄语、🇨🇳 中文、🇮🇳 印地语、🇵🇱 波兰语、🇰🇷 韩语、🇫🇷 法语）
- 交互式浏览器（`index.html`）与开发者配置指南（`setup.html`）

---

## 📋 目录

- [数据源](#-数据源)
- [总览](#-总览)
- [交互式浏览器与开发者配置](#-交互式浏览器与开发者配置)
- [文件结构](#-文件结构)
- [统计信息](#-统计信息)
- [数据模式](#-数据模式)
- [示例动作](#-示例动作)
- [使用示例](#-使用示例)
- [许可证与使用条款](#-许可证与使用条款)

---

## 🔍 总览

本数据集是一个精心整理的 **1,324 个健身训练动作**合集，适用于教育与研究目的。它覆盖了广泛的肌群、器械类型和动作类别——非常适合以下场景：

- 开发健身或锻炼计划应用程序
- 涉及动作识别或推荐的机器学习项目
- 健康与保健研究
- 教学演示与原型开发

每个训练动作条目包含：

| 字段 | 说明 |
|---|---|
| 唯一 ID | 数字标识符（如 `"0001"`） |
| 名称 | 完整的描述性动作名称 |
| 类别 | 主要目标身体部位 |
| 目标肌群 | 具体的目标肌肉 |
| 协同肌群 | 辅助/协同肌肉 |
| 器械 | 所需器械（或 `body weight` 表示自重训练） |
| 动作说明 | 每个动作的逐步操作指南 |
| 支持语言 | 🇬🇧 英语 · 🇪🇸 西班牙语 · 🇮🇹 意大利语 · 🇹🇷 土耳其语 · 🇷🇺 俄语 · 🇨🇳 中文 · 🇮🇳 印地语 · 🇵🇱 波兰语 · 🇰🇷 韩语 · 🇫🇷 法语 |
| 媒体 | 每个动作配有 180×180 缩略图（`image`）+ 动画 GIF（`gif_url`）——媒体内容 © Gym visual，详见[许可证](#-许可证与使用条款) |

---

## 🖥️ 交互式浏览器与开发者配置

本仓库包含两个开箱即用的 HTML 工具——无需服务器，在浏览器中直接打开即可使用。

> **注意：** 浏览器会显示每个练习的 180×180 缩略图和动画 GIF，以及相应的元数据和说明。
### `index.html` — 动作浏览器

一个完全运行在客户端的动作浏览器，具备以下功能：
- 支持在所有 1,324 个动作中进行实时搜索
- 可按类别、器械和目标肌群进行筛选
- 无限滚动网格布局
- 点击任意卡片可查看完整详情，以及英语、西班牙语、意大利语、土耳其语、俄语、中文、印地语、波兰语、韩语、法语等 10 种语言的动作说明

### `setup.html` — 开发者配置指南

将数据集集成到您自己的应用程序中的分步指南：

1. **数据库配置** ——提供 SQL Server、PostgreSQL、MySQL 与 SQLite 的 `CREATE TABLE` SQL 语句。可直接在浏览器中生成包含全部 1,324 条 INSERT 语句的 `.sql` 文件。
2. **API 集成** ——可直接复制粘贴的客户端代码，支持 **JavaScript、Python、C#、Java、PHP、Go 与 cURL**，展示如何调用你的后端 API。输入你的 API 基地址，所有示例会实时更新。
3. **向大语言模型提问** ——提供结构化的提示词（可选择你的框架 + 数据库），可直接粘贴到 ChatGPT、Claude 或 Gemini 中，一次性生成完整的、可用于生产环境的 REST API。支持 Express.js、FastAPI、ASP.NET Core、Spring Boot、Laravel 和 Gin。

---

## 📂 文件结构

```
exercises-dataset/
├── data/
│   ├── exercises.json        # 完整数据集——1,324 条训练动作记录（JSON 数组）
│   └── exercises.schema.json # JSON Schema（2020-12），描述每条记录的结构
├── images/                  # 1,324 张 180×180 缩略图（© Gym visual）
├── videos/                  # 1,324 个 180×180 动画 GIF（© Gym visual）
├── index.html               # 交互式动作浏览器（纯客户端，无需服务器）
├── setup.html               # 开发者配置指南（数据库导入 + API 集成）
├── NOTICE.md                # 媒体归属与许可证条款
├── README.md                # 英文版 README
└── README.zh-CN.md          # 中文版 README（本文件）
```

### 核心文件

- **`data/exercises.json`** ——主要数据文件。一个包含 1,324 个训练动作对象的 JSON 数组，带有完整的元数据。`image` / `gif_url` 字段指向本地的 180×180 资源，每条记录均包含 `attribution` 字段；`media_id` 存储原始媒体引用 ID。
- **`data/exercises.schema.json`** ——一份 [JSON Schema](https://json-schema.org/)（Draft 2020-12），明确定义了每个字段的类型与约束。可使用任意标准 JSON Schema 校验器来验证数据集或你自己的补充数据。
- **`images/`、`videos/`** ——180×180 缩略图与动画 GIF（© [Gym visual](https://gymvisual.com/)，经授权使用）。
- **`index.html`** ——独立的动作浏览器，在任何现代浏览器中直接打开即可使用。
- **`setup.html`** ——开发者指南，涵盖数据库配置、API 集成以及借助大语言模型生成后端代码。
- **`LICENSE`、`NOTICE.md`** ——MIT（代码/数据）+ Gym visual 媒体使用条款。

---

## 📊 统计信息

| 指标 | 数量 |
|---|---|
| 训练动作总数 | **1,324** |
| 教学语言 | **10** |

### 按身体部位划分

| 身体部位 | 动作数量 |
|---|---|
| 上臂 | 292 |
| 大腿 | 227 |
| 背部 | 203 |
| 腰部 | 169 |
| 胸部 | 163 |
| 肩部 | 143 |
| 小腿 | 59 |
| 前臂 | 37 |
| 有氧运动 | 29 |
| 颈部 | 2 |

### 按器械分布

| 器械 | 动作数量 |
|---|---|
| 自重 | 325 |
| 哑铃 | 294 |
| 绳索器械（龙门架） | 157 |
| 杠铃 | 154 |
| 杠杆式器械 | 81 |
| 弹力带 | 54 |
| 史密斯机 | 48 |
| 壶铃 | 41 |
| 负重 | 36 |
| 健身球 | 28 |
| EZ 杠铃 | 23 |
| 其他 | 83 |

> **注意：** 约 25% 的训练动作完全无需器械——非常适合居家健身类应用。

---

## 🗂️ 数据模式

`data/exercises.json` 中的每条记录遵循以下结构。仓库同时提供一份机器可读的 [JSON Schema](data/exercises.schema.json) 用于数据校验。

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | `string` | 唯一数字标识符（如 `"0001"`） |
| `name` | `string` | 完整的动作名称（如 `"3/4 Sit-up"`） |
| `category` | `string` | 身体部位类别（如 `"upper arms"`、`"chest"`、`"back"`） |
| `body_part` | `string` | 同 `category`——目标身体部位 |
| `equipment` | `string` | 所需器械（如 `"dumbbell"`、`"body weight"`） |
| `instructions.en` | `string` | 完整的英语逐步动作说明 |
| `instructions.es` | `string` | 完整的西班牙语逐步动作说明 |
| `instructions.it` | `string` | 完整的意大利语逐步动作说明 |
| `instructions.tr` | `string` | 完整的土耳其语逐步动作说明 |
| `instructions.ru` | `string` | 完整的俄语逐步动作说明 |
| `instructions.zh` | `string` | 完整的中文逐步动作说明 |
| `instructions.hi` | `string` | 完整的印地语逐步动作说明 |
| `instructions.pl` | `string` | 完整的波兰语逐步动作说明 |
| `instructions.ko` | `string` | 完整的韩语逐步动作说明 |
| `instructions.fr` | `string` | 完整的法语逐步动作说明 |
| `instruction_steps.<lang>` | `array[string]` | 将同一说明拆分为按顺序排列的步骤数组，每种语言各一份（`en`、`es`、`it`、`tr`、`ru`、`zh`、`hi`、`pl`、`ko`、`fr`） |
| `muscle_group` | `string` | 主要协同肌群 |
| `secondary_muscles` | `array[string]` | 参与发力的其他肌肉 |
| `target` | `string` | 主要目标肌肉（如 `"biceps"`、`"pectoralis major"`） |
| `media_id` | `string` | 原始媒体引用 ID（如 `"2gPfomN"`） |
| `image` | `string` | 180×180 缩略图路径（如 `"images/0001-2gPfomN.jpg"`） |
| `gif_url` | `string` | 180×180 动画 GIF 路径（如 `"videos/0001-2gPfomN.gif"`） |
| `attribution` | `string` | 媒体版权声明——`"© Gym visual — https://gymvisual.com/"` |
| `created_at` | `string` | 记录创建时间的 ISO 8601 时间戳 |

### 示例记录

```json
{
  "id": "0001",
  "name": "3/4 sit-up",
  "category": "waist",
  "body_part": "waist",
  "equipment": "body weight",
  "instructions": {
    "en": "Lie flat on your back with your knees bent and feet flat on the ground. Place your hands behind your head with your elbows pointing outwards. Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle. Pause for a moment at the top, then slowly lower your upper body back down to the starting position. Repeat for the desired number of repetitions.",
    "es": "Túmbate sobre tu espalda con las rodillas flexionadas y los pies apoyados en el suelo. ...",
    "it": "Sdraiati sulla schiena con le ginocchia piegate e i piedi appoggiati a terra. ...",
    "tr": "Sırt üstü yatın, dizlerinizi bükün ve ayaklarınızı yere düz koyun. ...",
    "ru": "Лягте на спину, согните колени и поставьте ступни на землю. ...",
    "zh": "平躺，膝盖弯曲，双脚平放在地上。...",
    "hi": "अपने घुटनों को मोड़कर और पैरों को ज़मीन पर सपाट रखते हुए अपनी पीठ के बल लेट जाएँ।...",
    "pl": "Połóż się płasko na plecach, ugnij kolana i oprzyj stopy płasko na pod ...",
    "ko": "등을 바닥에 누워 무릎을 구부리고 발을 바닥에 붙입니다. ...",
    "fr": "Allonge-toi sur le dos, les genoux fléchis et les pieds à plat au sol. ..."
  },
  "muscle_group": "hip flexors",
  "secondary_muscles": ["hip flexors", "lower back"],
  "target": "abs",
  "media_id": "2gPfomN",
  "image": "images/0001-2gPfomN.jpg",
  "gif_url": "videos/0001-2gPfomN.gif",
  "attribution": "© Gym visual — https://gymvisual.com/",
  "created_at": "2026-03-18T12:31:32.854798+00:00"
}
```

---

## 🎬 示例动作

> 每个示例均附带 180×180 缩略图（`image`）和动画 GIF（`gif_url`），© [Gym visual](https://gymvisual.com/)。

### 1 — 杠铃卧推 · 胸部

<img src="videos/0025-EIeI8Vf.gif" width="150" align="right" alt="杠铃卧推" />

> **器械：** 杠铃 · **目标肌群：** 胸大肌 · **协同肌群：** 肱三头肌、肩部（三角肌） · **媒体 ID：** `EIeI8Vf`

杠铃卧推是胸部训练的基石，也是力量举"三大项"之一。平躺在卧推凳上，将负重杠铃下放至胸前，再爆发力推起。它同时募集胸大肌、肱三头肌和三角肌前束发力，是提升上肢推力与胸肌维度的最高效动作。

**关键要领：** 起杠前先收紧并下沉肩胛骨。双脚踏实地面，下背部自然拱起，握距与肩同宽。控制杠铃缓慢下放至胸部中央，然后通过脚后跟发力向上推起。

### 2 — 杠铃硬拉 · 大腿 / 背部

<img src="videos/0032-ila4NZS.gif" width="150" align="right" alt="杠铃硬拉" />

> **器械：** 杠铃 · **目标肌群：** 臀大肌 · **协同肌群：** 腘绳肌、下背部 · **媒体 ID：** `ila4NZS`

杠铃硬拉被广泛认为是最全面的全身力量训练动作。它几乎调动后链的所有主要肌肉——臀大肌、腘绳肌和下背部——同时对上背部、斜方肌和握力也提出了极高要求。正确的脊柱排列与核心支撑技术对于训练效果和安全性都至关重要。

**关键要领：** 将杠铃置于脚掌中部正上方。以髋关节为轴俯身，双手在腿外侧握杠，收紧核心，整个提拉过程中使杠铃紧贴小腿。将地板"蹬开"，在顶点收紧臀大肌、充分伸展髋关节完成锁定。

### 3 — 杠铃深蹲 · 大腿

<img src="videos/0043-qXTaZnJ.gif" width="150" align="right" alt="杠铃深蹲" />

> **器械：** 杠铃 · **目标肌群：** 臀大肌 · **协同肌群：** 股四头肌、腘绳肌、小腿、核心 · **媒体 ID：** `qXTaZnJ`

杠铃深蹲常被称为"训练动作之王"，要求整个下肢与核心协调发力。相比半程深蹲，蹲至大腿低于水平面能最大化臀大肌和腘绳肌的激活程度。它是几乎所有力量与增肌计划的基础动作。

**关键要领：** 杠铃置于上斜方肌（高杠）或三角肌后束（低杠）处。下蹲前收紧核心，膝盖朝向与脚尖一致，臀部向后坐，下降直至大腿低于水平面。通过全脚掌发力站起。

### 4 — 哑铃弯举 · 上臂

<img src="videos/0294-NbVPDMW.gif" width="150" align="right" alt="哑铃弯举" />

> **器械：** 哑铃 · **目标肌群：** 肱二头肌 · **协同肌群：** 前臂 · **媒体 ID：** `NbVPDMW`

哑铃弯举是最受认可的手臂孤立训练动作。单侧独立训练有助于发现并纠正左右肢体的力量不平衡。旋后握法（掌心朝上）能在动作顶点最大化肱二头肌的收缩。

**关键要领：** 站直身体，肘部紧贴身体两侧。弯举时旋转手腕至掌心朝上，在顶点收紧，控制下落，避免借力摆动。不要借助肩部或下背部的惯性。

### 5 — 引体向上 · 背部

<img src="videos/0652-lBDjFxJ.gif" width="150" align="right" alt="引体向上" />

> **器械：** 自重 · **目标肌群：** 背阔肌 · **协同肌群：** 肱二头肌、前臂 · **媒体 ID：** `lBDjFxJ`

引体向上是上肢拉力训练的黄金标准自重动作。它主要发展背阔肌——塑造令人梦寐以求的 V 型倒三角身材——同时也能大量调动肱二头肌、三角肌后束和核心稳定肌群。难度可从弹力带辅助的初级版本，逐步提升到负重的进阶版本。

**关键要领：** 正手悬吊，握距与肩同宽或略宽。通过下沉肩胛骨，让背阔肌主导发力来启动动作，然后将胸部拉向横杆。每次动作之间完全下放，保持完整的运动幅度。

### 6 — 哑铃侧平举 · 肩部

<img src="videos/0334-DsgkuIt.gif" width="150" align="right" alt="哑铃侧平举" />

> **器械：** 哑铃 · **目标肌群：** 三角肌 · **协同肌群：** 斜方肌 · **媒体 ID：** `DsgkuIt`

哑铃侧平举是打造肩部宽度的首选孤立训练动作。它直接针对三角肌中束（外侧头），这正是决定肩部宽度的关键肌肉。有控制的节奏和严格的动作规范远比使用的重量更为重要。

**关键要领：** 站立，整个过程中肘部保持微屈。将哑铃向身体两侧举起，直至手臂与地面平行——不要举得更高。以肘部引领动作，而非手腕。缓慢控制下落，最大化肌肉张力时间。

---

## 🚀 使用示例

### Python ——加载与筛选

```python
import json

with open("data/exercises.json", "r", encoding="utf-8") as f:
    exercises = json.load(f)

print(f"Total exercises loaded: {len(exercises)}")

# 按类别筛选
chest_exercises = [ex for ex in exercises if ex["category"] == "chest"]
print(f"Chest exercises: {len(chest_exercises)}")
# -> Chest exercises: 163

# 按器械筛选
bodyweight = [ex for ex in exercises if ex["equipment"] == "body weight"]
print(f"Bodyweight exercises: {len(bodyweight)}")
# -> Bodyweight exercises: 325

# 获取所有不重复的类别
categories = sorted({ex["category"] for ex in exercises})
print("Categories:", categories)

# 访问多语言动作说明
ex = exercises[0]
print(ex["instructions"]["en"])  # 英语
print(ex["instructions"]["es"])  # 西班牙语
print(ex["instructions"]["it"])  # 意大利语
print(ex["instructions"]["tr"])  # 土耳其语
print(ex["instructions"]["ru"])  # 俄语
print(ex["instructions"]["zh"])  # 中文
print(ex["instructions"]["hi"])  # 印地语
print(ex["instructions"]["pl"])  # 波兰语
print(ex["instructions"]["ko"])  # 韩语
print(ex["instructions"]["fr"])  # 法语
```

### Python ——使用 Pandas 加载

```python
import json
import pandas as pd

with open("data/exercises.json", "r", encoding="utf-8") as f:
    data = json.load(f)

df = pd.DataFrame(data)

# 按动作数量排名的热门类别
print(df["category"].value_counts().head(10))

# 所有以大腿为目标肌群的杠铃动作
barbell_quads = df[(df["equipment"] == "barbell") & (df["category"] == "upper legs")]
print(barbell_quads[["name", "target", "equipment"]])
```

### JavaScript / Node.js

```js
const exercises = require("./data/exercises.json");

console.log(`Total exercises: ${exercises.length}`);

// 仅筛选自重训练动作
const bodyweight = exercises.filter(ex => ex.equipment === "body weight");
console.log(`Bodyweight exercises: ${bodyweight.length}`);
// -> Bodyweight exercises: 325

// 按类别分组
const byCategory = exercises.reduce((acc, ex) => {
  acc[ex.category] = (acc[ex.category] || []);
  acc[ex.category].push(ex);
  return acc;
}, {});

// 访问多语言动作说明
const ex = exercises[0];
console.log(ex.instructions.en); // 英语
console.log(ex.instructions.es); // 西班牙语
console.log(ex.instructions.it); // 意大利语
console.log(ex.instructions.tr); // 土耳其语
console.log(ex.instructions.ru); // 俄语
console.log(ex.instructions.zh); // 中文
console.log(ex.instructions.hi); // 印地语
console.log(ex.instructions.pl); // 波兰语
console.log(ex.instructions.ko); // 韩语
console.log(ex.instructions.fr); // 法语
```

### TypeScript ——类型安全用法

```typescript
interface Exercise {
  id: string;
  name: string;
  category: string;
  body_part: string;
  equipment: string;
  instructions: {
    en: string;
    es: string;
    it: string;
    tr: string;
    ru: string;
    zh: string;
    hi: string;
    pl: string;
    ko: string;
    fr: string;
  };
  instruction_steps: {
    en: string[];
    es: string[];
    it: string[];
    tr: string[];
    ru: string[];
    zh: string[];
    hi: string[];
    pl: string[];
    ko: string[];
    fr: string[];
  };
  muscle_group: string;
  secondary_muscles: string[];
  target: string;
  media_id: string;
  image: string;
  gif_url: string;
  attribution: string;
  created_at: string;
}

import exercises from "./data/exercises.json";
const data = exercises as Exercise[];

const randomWorkout: Exercise[] = data.slice(0, 6);
console.log("First 6 exercises:", randomWorkout.map(e => e.name));
```

---

## 📄 许可证与使用条款

本仓库是一个**开发者配置向导与结构化训练数据集**——包含训练动作元数据、多语言动作说明翻译，以及 180×180 训练动作媒体资源。

- **代码、工具、数据集结构与动作说明文本**依据 [MIT 许可证](LICENSE) 发布。
- **训练动作媒体资源（图片与 GIF）版权归 [Gym visual](https://gymvisual.com/)** 所有，**经授权**以 180×180 分辨率在本仓库重新分发——详见 [`NOTICE.md`](NOTICE.md) 与 [`LICENSE`](LICENSE) 中的媒体例外条款。请保留 `© Gym visual — https://gymvisual.com/` 的版权归属声明。媒体资源的再利用须遵守 [Gym visual 的使用条款与条件](https://gymvisual.com/content/3-terms-and-conditions-of-use)；在复用媒体资源前，请自行获取相应授权。
- 本仓库**不**声称拥有基础训练动作内容或媒体资源的所有权。
