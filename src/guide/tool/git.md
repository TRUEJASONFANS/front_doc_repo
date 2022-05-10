# Git

# 如何查看某一行的历史纪录

```shell
# 查看版本
git blame -L 150,+11 -- filename

# 查看某一行历史
git log --pretty=short -u -L 155,155:filename

# 查看某文件版本历史
git log --follow -p 文件
```
# 添加gogs 远程仓库地址
```
git remote add gogs {urls}
git push gogs --all
```