Deployment instructions

1) Local commit and push (create GitHub repo or provide token):

  git init
  git add .
  git commit -m "Initial commit"

  # Create repo on GitHub (use GitHub CLI) - or create via web UI
  gh repo create <your-username>/<repo-name> --public --source=. --remote=origin
  git push -u origin main

2) Vercel

- Connect Vercel to the GitHub repository via the Vercel dashboard.
- In Project Settings -> Environment Variables add:
  - MONGO_URL
  - DB_NAME
  - CORS_ORIGINS (optional)
- Set the root to the repository (Vercel will use `vercel.json` to build both projects).
- Trigger a deploy.

Notes:
- The backend uses FastAPI and expects `MONGO_URL` and `DB_NAME` environment variables.
- If you want me to create the GitHub repo and push, provide a Personal Access Token (repo scope) and confirm.
- If you want me to trigger Vercel deploys programmatically, provide a Vercel token and confirm.
