# Learning Beyond Class

## [How Can I Remove a commit on GitHub?](https://stackoverflow.com/questions/448919/how-can-i-remove-a-commit-on-github)

Scenario:
A classmate of mine had made some changes to a repo they worked on.
They made two commits, on their local branch and pushed it to their remote branch.
They then realized that they had made a mistake and wanted to remove the commit from both their local and remote branch.

Solution:

```js
git reset --hard HEAD~1
```

Let's break down what the `git` command above is doing:

- `reset` - resets the current branch to a specific commit
- `--hard` - resets the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.
- `HEAD~1` - the commit to reset to. `HEAD` is a pointer to the current branch (ie the most recent commit), and `~1` is the previous commit.

This command will remove the last commit from the current branch, and reset the index and working tree to that state. Since the commit that needed to be removed was already pushed to the remote branch, we need to force push the changes we have just made to the remote branch.

```js
git push -f origin main
```

Let's also break down the git command above:

- `push` - push changes to remote branch
- `-f` - force push. This is required because we have removed a commit from the remote branch.
- `origin` - the remote repository
- `main` - the remote branch

These commands will remove the last commit from the current branch, and reset the index and working tree to that state. Since the commit that needed to be removed was already pushed to the remote branch, we need to force push the changes we have just made to the remote branch.

## [Git Rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

While looking up the solution for the problem above I encountered the term `git rebase`. I had never heard of it before, so I decided to look it up and research what it does.

The `git rebase` is one out of two git utilities/commands that are used for integrating/changing the history of a git repository or merging changes from one branch to another branch, If what I understood is to be believed.

I think before even understanding this concept of `git rebase`, I believe it is important to understand the concept of `git merge` first.

The documentation for `git merge` is [here](https://git-scm.com/docs/git-merge).

This command allows us to combine or `merge` changes from different branches. When we merge two branches, `git` creates a new commit that includes changes from both branches.

I think a good example to understand what `git merge` does is to look at the following diagram:
