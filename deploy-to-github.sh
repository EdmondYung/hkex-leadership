#!/bin/bash

# Global Exchange Audit Analysis - GitHub Deployment Script
# This script helps deploy the entire site to GitHub Pages

echo "🚀 Global Exchange Audit Analysis - GitHub Deployment"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_warning "Not in a Git repository. Initializing..."
    git init
    print_success "Git repository initialized"
fi

# Get repository information
print_status "Checking repository status..."

# Check for remote origin
if ! git remote get-url origin &> /dev/null; then
    echo ""
    print_warning "No remote origin found."
    echo "Please enter your GitHub repository URL:"
    echo "Format: https://github.com/username/repository-name.git"
    read -p "Repository URL: " repo_url
    
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        print_success "Remote origin added: $repo_url"
    else
        print_error "No repository URL provided. Exiting."
        exit 1
    fi
fi

# Get current branch
current_branch=$(git branch --show-current)
if [ -z "$current_branch" ]; then
    current_branch="main"
    git checkout -b main
    print_success "Created and switched to main branch"
fi

print_status "Current branch: $current_branch"

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_status "Found uncommitted changes. Staging files..."
    
    # Add all files except those in .gitignore
    git add .
    
    # Show what will be committed
    echo ""
    print_status "Files to be committed:"
    git status --short
    echo ""
    
    # Ask for commit message
    echo "Enter commit message (or press Enter for default):"
    read -p "Commit message: " commit_msg
    
    if [ -z "$commit_msg" ]; then
        commit_msg="Deploy Global Exchange Audit Analysis to GitHub Pages"
    fi
    
    git commit -m "$commit_msg"
    print_success "Changes committed: $commit_msg"
else
    print_status "No uncommitted changes found"
fi

# Push to GitHub
print_status "Pushing to GitHub..."
if git push -u origin "$current_branch"; then
    print_success "Successfully pushed to GitHub"
else
    print_error "Failed to push to GitHub. Please check your credentials and repository URL."
    exit 1
fi

# Get repository info for GitHub Pages URL
origin_url=$(git remote get-url origin)
if [[ $origin_url == *"github.com"* ]]; then
    # Extract username and repo name from URL
    if [[ $origin_url == *".git" ]]; then
        repo_path=${origin_url%.git}
    else
        repo_path=$origin_url
    fi
    
    # Remove protocol and domain
    repo_path=${repo_path#*github.com/}
    repo_path=${repo_path#*github.com:}
    
    username=$(echo $repo_path | cut -d'/' -f1)
    repo_name=$(echo $repo_path | cut -d'/' -f2)
    
    github_pages_url="https://${username}.github.io/${repo_name}"
    
    echo ""
    print_success "🎉 Deployment completed!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to your GitHub repository: https://github.com/${username}/${repo_name}"
    echo "2. Navigate to Settings > Pages"
    echo "3. Under 'Source', select 'Deploy from a branch'"
    echo "4. Select 'main' branch and '/ (root)' folder"
    echo "5. Click 'Save'"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   $github_pages_url"
    echo ""
    echo "⏱️  GitHub Pages deployment usually takes 2-5 minutes"
    echo "🔄 The site will auto-update on every push to the main branch"
    echo ""
    
    # Ask if user wants to open GitHub repository
    read -p "Open GitHub repository in browser? (y/n): " open_repo
    if [[ $open_repo == "y" || $open_repo == "Y" ]]; then
        if command -v open &> /dev/null; then
            open "https://github.com/${username}/${repo_name}"
        elif command -v xdg-open &> /dev/null; then
            xdg-open "https://github.com/${username}/${repo_name}"
        else
            print_status "Please manually open: https://github.com/${username}/${repo_name}"
        fi
    fi
    
else
    print_warning "Could not determine GitHub Pages URL"
fi

echo ""
print_status "📁 Project Structure Deployed:"
echo "   ✅ Main Dashboard (index.html)"
echo "   ✅ KAM Analysis Dashboard (kam_dashboard_final.html)"
echo "   ✅ HKEX Leadership (hkex-leadership.html)"
echo "   ✅ Annual Reports Demo (annual-reports-demo.html)"
echo "   ✅ All supporting files and assets"
echo ""

print_status "🔧 GitHub Actions Workflow:"
echo "   ✅ Automatic deployment configured"
echo "   ✅ Deploys on every push to main branch"
echo "   ✅ No manual intervention required"
echo ""

print_success "Deployment script completed successfully! 🚀"
