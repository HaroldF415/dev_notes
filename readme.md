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

## Resources

[Adding a New Path to the command line](https://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/)
[How to Create Dynamic Components in React](https://www.educative.io/answers/how-to-create-dynamic-components-in-react)
[Graph Traversal Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/GraphTraversal.html)
[Declaritive vs Imperative Programming](https://www.educative.io/blog/declarative-vs-imperative-programming)
[Breath First Search](https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/tutorial/)
