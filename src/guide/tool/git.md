# Git

# 如何查看某一行的历史纪录

```shell
# 查看版本
git blame -L 150,+11 -- filename

# 查看某一行历史
git log --pretty=short -u -L 155,155:filename
```