# 轱辘 - 一个 Vue UI 组件
作者：Dolores-2B

[![Build Status](https://travis-ci.org/AlyciaHathaway/Dolores-gulu.svg?branch=master)](https://travis-ci.org/AlyciaHathaway/Dolores-gulu)

## 介绍
这是我在学习 Vue 过程中造的一个轱辘

## 开始使用
1. 安装

    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after {box-sizing: border-box}
    ```
    IE 8 及以上浏览器支持
    
    还需要修改默认颜色等变量（后续会改为 SCSS 变量）
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-background: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器支持

2. 安装 gulu
    ```
    npm i --save dolores-gulu
    ```
3. 引入 gulu
    ```
    import {Button, ButtonGroup, Icon} from 'dolores-gulu'
    import 'dolores-gulu/dist/index.css'
    
    export default {
        name: 'app',
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    ```
4. 引入 SVG symbols

    ```
    <script src="//at.alicdn.com/t/font_814127_1muqat4rr4l.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

