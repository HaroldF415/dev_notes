# Dev_Notes

## 100 Days of Code

The proper way to set a `git commit` to a specific date and time is to use the:

```bash
export GIT_COMMITTER_DATE="2019-01-01 12:00:00"
```

then

```bash
git add .
```

then

```bash
git commit --date="2019-01-01 12:00:00" -m "Commit message"
```

then reset the `GIT_COMMITTER_DATE` to the current time:

```bash
unset GIT_COMMITTER_DATE
```

Finally, push the commit to the remote repository.

```bash
git push -f origin main
```
