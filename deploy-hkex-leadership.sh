#!/bin/bash

# HKEX Leadership Webpage Deployment Script

echo "🚀 HKEX Leadership Webpage - Deployment Script"
echo "=============================================="

# Check if we're in the correct directory
if [ ! -f "hkex-leadership.html" ]; then
    echo "❌ Error: hkex-leadership.html not found. Please run this script from the project root directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📊 HKEX Leadership files found: ✅"

# Check required files
required_files=("hkex-leadership.html" "hkex-leadership-data.js" "hkex-leadership-script.js")
missing_files=()

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
    echo "❌ Missing required files:"
    printf '%s\n' "${missing_files[@]}"
    exit 1
fi

echo "✅ All required files present"

# Create deployment directory
echo "📦 Creating deployment package..."
mkdir -p hkex-leadership-deploy

# Copy essential files
cp hkex-leadership.html hkex-leadership-deploy/index.html
cp hkex-leadership-data.js hkex-leadership-deploy/
cp hkex-leadership-script.js hkex-leadership-deploy/

# Copy photos if they exist
if [ -d "reports/photos" ]; then
    echo "📸 Copying photos..."
    mkdir -p hkex-leadership-deploy/reports/photos
    cp -r reports/photos/* hkex-leadership-deploy/reports/photos/
fi

# Copy hkex-images if they exist
if [ -d "hkex-images" ]; then
    echo "🖼️ Copying HKEX images..."
    cp -r hkex-images hkex-leadership-deploy/
fi

echo "📊 Deployment package created successfully!"

# Display deployment options
echo ""
echo "🎯 Deployment Options:"
echo "1. GitHub Pages (Free, Recommended)"
echo "2. Netlify (Drag & Drop)"
echo "3. Vercel (GitHub Integration)"
echo "4. Local Server (Testing)"

read -p "Choose deployment option (1-4): " deploy_option

case $deploy_option in
    1)
        echo "📦 Preparing GitHub Pages deployment..."
        cd hkex-leadership-deploy
        
        # Initialize git if not already done
        if [ ! -d ".git" ]; then
            git init
            echo "# HKEX Leadership Webpage" > README.md
            echo "" >> README.md
            echo "Interactive webpage showcasing HKEX Board Members and Management Committee with official data from HKEX website." >> README.md
            echo "" >> README.md
            echo "## Features" >> README.md
            echo "- Official HKEX leadership information" >> README.md
            echo "- Interactive member cards with popup details" >> README.md
            echo "- LinkedIn profiles and official photos" >> README.md
            echo "- Responsive design for all devices" >> README.md
        fi
        
        git add .
        git commit -m "Deploy HKEX Leadership Webpage with updated official data"
        
        echo ""
        echo "🔗 GitHub Pages Setup Instructions:"
        echo "1. Create a new repository on GitHub (e.g., 'hkex-leadership')"
        echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/hkex-leadership.git"
        echo "3. Run: git push -u origin main"
        echo "4. Go to repository Settings → Pages"
        echo "5. Set Source to 'Deploy from a branch' and select 'main'"
        echo "6. Your site will be available at: https://YOUR_USERNAME.github.io/hkex-leadership"
        ;;
    2)
        echo "📦 Preparing Netlify deployment..."
        cd hkex-leadership-deploy
        
        # Create netlify.toml for configuration
        cat > netlify.toml << EOF
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
EOF
        
        echo ""
        echo "🔗 Netlify Deployment Instructions:"
        echo "1. Visit https://netlify.com and sign up/login"
        echo "2. Drag and drop the 'hkex-leadership-deploy' folder to Netlify"
        echo "3. Your site will be deployed instantly with a random URL"
        echo "4. You can customize the URL in site settings"
        ;;
    3)
        echo "📦 Preparing Vercel deployment..."
        cd hkex-leadership-deploy
        
        # Create vercel.json for configuration
        cat > vercel.json << EOF
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/\$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
EOF
        
        echo ""
        echo "🔗 Vercel Deployment Instructions:"
        echo "1. Visit https://vercel.com and sign up/login"
        echo "2. Connect your GitHub account"
        echo "3. Push this folder to a GitHub repository"
        echo "4. Import the repository in Vercel"
        echo "5. Deploy automatically"
        ;;
    4)
        echo "📦 Starting local server for testing..."
        cd hkex-leadership-deploy
        
        # Try different methods to start a local server
        if command -v python3 &> /dev/null; then
            echo "🌐 Starting Python HTTP server on http://localhost:8000"
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            echo "🌐 Starting Python HTTP server on http://localhost:8000"
            python -m SimpleHTTPServer 8000
        elif command -v node &> /dev/null; then
            echo "🌐 Starting Node.js HTTP server on http://localhost:8000"
            npx http-server -p 8000
        else
            echo "❌ No suitable HTTP server found. Please install Python or Node.js"
            echo "📁 Files are ready in: $(pwd)"
            echo "🌐 You can open index.html directly in your browser"
        fi
        ;;
    *)
        echo "❌ Invalid option. Exiting."
        exit 1
        ;;
esac

echo ""
echo "🎉 HKEX Leadership Webpage Deployment Complete!"
echo "=============================================="
echo ""
echo "📊 Deployed Features:"
echo "   ✅ Interactive leadership cards"
echo "   ✅ Official HKEX data and photos"
echo "   ✅ LinkedIn profile links"
echo "   ✅ Responsive design"
echo "   ✅ Popup detail screens"
echo ""
echo "📁 Deployment files location: ./hkex-leadership-deploy/"
echo ""
echo "🎯 Next Steps:"
echo "   1. Test the deployed website"
echo "   2. Share the URL with stakeholders"
echo "   3. Update data as needed from official HKEX sources"
echo ""
echo "🌐 Your HKEX Leadership webpage is ready to go live! 🚀"
