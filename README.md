# morse-react-native
> react-native 组件库

## expo_dev
> 融合expo项目进行开发

### 无法解析本地相对路径下的包 
> Unable to resolve module `XXXX` from `XXX.js`: XXXX could not be found within the project.
将缺失的包安装到example下，例如缺失theming包

```shell
yarn add theming
```

### yarn workspace

```shell
# 向 morse-react-native 添加 npm包
yarn workspace morse-react-native add|remove xxx -D

# 向yarn workspace 根目录添加 npm包
yarn add xxx -W
```

### lerna
> https://github.com/lerna/lerna

#### 常见
```shell

# 从@morse-react-native/theme包中移除theme
lerna exec 'yarn remove theme' --scope=@morse-react-native/theme

# 安装 npm包theme 到指定的包中
lerna add theming packages/theme
lerna add theme --scope=@morse-react-native/theme

# 创建package
lerna create xxx
```

#### add
> 使用package.json中的name名称

```shell
# Adds the module-1 package to the packages in the 'prefix-' prefixed folders
lerna add module-1 packages/prefix-*

# Install module-1 to module-2
lerna add module-1 --scope=module-2

# Install module-1 to module-2 in devDependencies
lerna add module-1 --scope=module-2 --dev

# Install module-1 to module-2 in peerDependencies
lerna add module-1 --scope=module-2 --peer

# Install module-1 in all modules except module-1
lerna add module-1

# Install babel-core in all modules
lerna add babel-core
```

#### clean

```shell
# 从所有的package中移除node_module
lerna clean
```

## example

### init

```shell
expo init example
```

## TODO

### 主题 

### 组件

1. Image
2. Animated

### 编写自动构建命令

### 生成创建包的模板
