@echo off
echo Building the project...
npm run build

echo.
echo Build complete! 
echo.
echo === MANUAL DEPLOYMENT STEPS ===
echo.
echo 1. Go to your GitHub repository: https://github.com/waquaralam1/portfolio
echo 2. Click on "uploading an existing file" or drag and drop all files
echo 3. Upload all files from this folder (except node_modules)
echo 4. Commit the files with message: "Initial portfolio upload"
echo 5. Go to Settings > Pages
echo 6. Select "Deploy from a branch" 
echo 7. Choose "main" branch and "/ (root)" folder
echo 8. Click Save
echo.
echo Your site will be available at: https://waquaralam1.github.io/portfolio/
echo.
pause
