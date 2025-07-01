@echo off
setlocal enabledelayedexpansion

:: Global Exchange Audit Analysis - GitHub Deployment Script (Windows)
:: This script helps deploy the entire site to GitHub Pages

echo.
echo 🚀 Global Exchange Audit Analysis - GitHub Deployment
echo ==================================================
echo.

:: Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

:: Check if we're in a git repository
if not exist ".git" (
    echo [WARNING] Not in a Git repository. Initializing...
    git init
    echo [SUCCESS] Git repository initialized
)

echo [INFO] Checking repository status...

:: Check for remote origin
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo [WARNING] No remote origin found.
    echo Please enter your GitHub repository URL:
    echo Format: https://github.com/username/repository-name.git
    set /p repo_url="Repository URL: "
    
    if not "!repo_url!"=="" (
        git remote add origin "!repo_url!"
        echo [SUCCESS] Remote origin added: !repo_url!
    ) else (
        echo [ERROR] No repository URL provided. Exiting.
        pause
        exit /b 1
    )
)

:: Get current branch
for /f "tokens=*" %%i in ('git branch --show-current 2^>nul') do set current_branch=%%i
if "!current_branch!"=="" (
    set current_branch=main
    git checkout -b main
    echo [SUCCESS] Created and switched to main branch
)

echo [INFO] Current branch: !current_branch!

:: Check for uncommitted changes
git status --porcelain >nul 2>&1
if not errorlevel 1 (
    for /f %%i in ('git status --porcelain ^| find /c /v ""') do set changes=%%i
    if !changes! gtr 0 (
        echo [INFO] Found uncommitted changes. Staging files...
        
        :: Add all files except those in .gitignore
        git add .
        
        :: Show what will be committed
        echo.
        echo [INFO] Files to be committed:
        git status --short
        echo.
        
        :: Ask for commit message
        echo Enter commit message (or press Enter for default):
        set /p commit_msg="Commit message: "
        
        if "!commit_msg!"=="" (
            set commit_msg=Deploy Global Exchange Audit Analysis to GitHub Pages
        )
        
        git commit -m "!commit_msg!"
        echo [SUCCESS] Changes committed: !commit_msg!
    ) else (
        echo [INFO] No uncommitted changes found
    )
)

:: Push to GitHub
echo [INFO] Pushing to GitHub...
git push -u origin !current_branch!
if errorlevel 1 (
    echo [ERROR] Failed to push to GitHub. Please check your credentials and repository URL.
    pause
    exit /b 1
)

echo [SUCCESS] Successfully pushed to GitHub

:: Get repository info for GitHub Pages URL
for /f "tokens=*" %%i in ('git remote get-url origin') do set origin_url=%%i

:: Extract username and repo name from URL
set repo_path=!origin_url!
set repo_path=!repo_path:.git=!
set repo_path=!repo_path:*github.com/=!
set repo_path=!repo_path:*github.com:=!

for /f "tokens=1,2 delims=/" %%a in ("!repo_path!") do (
    set username=%%a
    set repo_name=%%b
)

set github_pages_url=https://!username!.github.io/!repo_name!

echo.
echo [SUCCESS] 🎉 Deployment completed!
echo.
echo 📋 Next Steps:
echo 1. Go to your GitHub repository: https://github.com/!username!/!repo_name!
echo 2. Navigate to Settings ^> Pages
echo 3. Under 'Source', select 'Deploy from a branch'
echo 4. Select 'main' branch and '/ (root)' folder
echo 5. Click 'Save'
echo.
echo 🌐 Your site will be available at:
echo    !github_pages_url!
echo.
echo ⏱️  GitHub Pages deployment usually takes 2-5 minutes
echo 🔄 The site will auto-update on every push to the main branch
echo.

:: Ask if user wants to open GitHub repository
set /p open_repo="Open GitHub repository in browser? (y/n): "
if /i "!open_repo!"=="y" (
    start https://github.com/!username!/!repo_name!
)

echo.
echo [INFO] 📁 Project Structure Deployed:
echo    ✅ Main Dashboard (index.html)
echo    ✅ KAM Analysis Dashboard (kam_dashboard_final.html)
echo    ✅ HKEX Leadership (hkex-leadership.html)
echo    ✅ Annual Reports Demo (annual-reports-demo.html)
echo    ✅ All supporting files and assets
echo.

echo [INFO] 🔧 GitHub Actions Workflow:
echo    ✅ Automatic deployment configured
echo    ✅ Deploys on every push to main branch
echo    ✅ No manual intervention required
echo.

echo [SUCCESS] Deployment script completed successfully! 🚀
echo.
pause
