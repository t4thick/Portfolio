# Git & GitHub Setup Guide

## Current Status ✅
- Git is initialized
- Files are committed
- Ready to push to GitHub!

---

## Step-by-Step: Connect to GitHub

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `portfolio` (or any name you want)
4. Description: "My professional portfolio website"
5. Choose: **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### Step 2: Copy Your Repository URL

After creating, GitHub will show you a URL like:
```
https://github.com/YOUR_USERNAME/portfolio.git
```

**Copy this URL!** You'll need it in the next step.

### Step 3: Connect Your Local Repo to GitHub

Run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `t4thick`:
```bash
git remote add origin https://github.com/t4thick/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Authenticate

When you push, GitHub will ask you to authenticate:
- Use **Personal Access Token** (recommended)
- Or use GitHub CLI

---

## 🔐 Getting a Personal Access Token

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it: "Portfolio Deployment"
4. Select scopes: **repo** (full control)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. When pushing, use the token as your password

---

## 📝 Quick Commands Reference

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Check remote
git remote -v
```

---

## 🚀 After Pushing to GitHub

Once your code is on GitHub, you can:
1. Deploy to Vercel (connects to GitHub automatically)
2. Share your code
3. Track changes
4. Collaborate with others

---

## 💡 Pro Tips

- **Commit often** with descriptive messages
- **Push regularly** to backup your work
- Use **branches** for new features
- **Pull before push** if working on multiple devices

---

## Need Help?

If you get errors:
- Make sure you're logged into GitHub
- Check your repository URL is correct
- Verify your Personal Access Token has `repo` scope
- Make sure the repository exists on GitHub

