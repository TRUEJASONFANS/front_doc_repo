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

# git lfs 错误
```
Use git lfs logs last to view the log.
error: external filter 'git-lfs filter-process' failed
fatal: data/processed/career_builder/embedding.npy: smudge filter lfs failed
warning: Clone succeeded, but checkout failed.
// Skip smudge - We'll download binary files later in a faster batch
git lfs install --skip-smudge

// Do git clone here
git clone ...

// Fetch all the binary files in the new clone
git lfs pull

// Reinstate smudge
git lfs install --force
```
# X509 

```
x509: certificate signed by unknown authority
goroutine 16 [running]:
$ git config http.sslverify false
$ git clone ...
```

