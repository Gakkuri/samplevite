#!/usr/bin/env bash
# Exit on error
set -o errexit

# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements/production.txt

# build Vite frontend
cd frontend
npm install
npm run build
cd ..

# Convert static asset files
python manage.py collectstatic --no-input --clear

# Apply any outstanding database migrations
python manage.py migrate