#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "installing dependencies"
# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements/production.txt

echo "building frontend"
# build Vite frontend
cd frontend
npm install
npm run build
cd ..

echo "collecting static files"

# Convert static asset files
python manage.py collectstatic --no-input --clear

echo "applying migrations"

# Apply any outstanding database migrations
python manage.py migrate