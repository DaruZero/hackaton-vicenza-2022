#!/bin/bash
cd /home/ec2-user
# docker-compose up -d

ENV="production"
FRONTEND_URI="hack-frontend"
BACKEND_URI="hack-backend"

FRONTEND="frontend"
BACKEND="backend"
# ENV_FILE="./env_files/prod.env"
BACKEND_PORT="3000"
FRONTEND_PORT="80"

docker stop $FRONTEND
docker stop $BACKEND

docker rm $FRONTEND
docker rm $BACKEND

docker image prune -f
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 495849476805.dkr.ecr.eu-west-1.amazonaws.com

docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$FRONTEND_URI:$FRONTEND
docker pull 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_URI:$BACKEND

docker run --name $FRONTEND -d --network hack -e SERVER_NAME=$FRONTEND 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$FRONTEND_URI:$FRONTEND
docker run --name $BACKEND -d --network hack -e SERVER_NAME=$BACKEND 495849476805.dkr.ecr.eu-west-1.amazonaws.com/$BACKEND_URI:$BACKEND