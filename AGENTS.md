# Project Agents

## GitHub Push Agent

Use this workflow when the user asks to publish, push, deploy, or send changes to GitHub.

### Repository

- Remote: `origin`
- Branch: `master`
- Push target: `origin master`
- GitHub Pages deploys from the existing GitHub Actions workflow after push.

### Preflight

- Check the current branch with `git branch --show-current`.
- Check pending changes with `git status --short`.
- Review the diff before staging with `git diff`.
- Do not stage unrelated temporary files such as `tmp_check*.py`.

### Verification

- Run `npm.cmd run build` before claiming the change is ready.
- If the build fails, stop and report the failure instead of committing or pushing.

### Commit

- Stage only files related to the completed task.
- Use a concise commit message that describes the actual change.
- Do not amend, squash, reset, or rewrite history unless the user explicitly asks.

### Push

- Push with `git push origin master`.
- After pushing, report the commit hash and the pushed range.

### Project-Specific Notes

- Question data lives in `src/data/questions.json`.
- Question images live in `public/question-images/`.
- When adding a question image, add both the image file and the matching `image` / `imageAlt` fields.
- Keep answers to the user in Slovak unless they ask otherwise.
