#!/bin/bash

# BellaVita Clone - Startup Script
# This script starts all services needed for the application

echo "🚀 Starting BellaVita Clone..."

# Set Java Home
export JAVA_HOME=/Users/vikki/Library/Java/JavaVirtualMachines/jbr-17.0.14/Contents/Home

# Navigate to project root
cd /Users/vikki/IdeaProjects/BellaVitaClone

# Step 1: Start PostgreSQL
echo "📦 Starting PostgreSQL Docker container..."
docker-compose up -d

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
sleep 5

# Step 2: Start Backend
echo "☕ Starting Spring Boot backend..."
./gradlew bootRun &
BACKEND_PID=$!

# Wait for backend to start
echo "⏳ Waiting for backend to start (30 seconds)..."
sleep 30

# Step 3: Start Frontend
echo "⚛️ Starting React frontend..."
cd webapp
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ All services started!"
echo ""
echo "📍 Access points:"
echo "   - Frontend:  http://localhost:5173"
echo "   - Backend:   http://localhost:8080"
echo "   - API Docs:  http://localhost:8080/api/products"
echo ""
echo "👤 Default Users:"
echo "   - Admin: admin@bellavita.com / admin123"
echo "   - User:  user@bellavita.com / user123"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for both processes
wait

