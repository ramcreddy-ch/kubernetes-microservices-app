# Kubernetes Microservices App

A complete microservices deployment on Kubernetes with Helm, Prometheus, and Grafana.

## Architecture

```
┌────────────┐      ┌──────────────┐
│  Ingress   │─────▶│   Frontend   │
└────────────┘      │   (React)    │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │   Backend    │
                    │   (Python)   │
                    └──────────────┘
```

## Features

- **Frontend**: React application served via Nginx
- **Backend**: Python Flask API
- **Kubernetes**: Deployments, Services, Ingress, ConfigMaps
- **Helm**: Packaged application for easy deployment
- **Monitoring**: Prometheus scraping configuration

## Prerequisites

- Kubernetes Cluster (Minikube, Docker Desktop, or Cloud)
- kubectl
- Helm

## Quick Start

### 1. Build Docker Images

```bash
# Build Frontend
docker build -t frontend:latest ./app/frontend

# Build Backend
docker build -t backend:latest ./app/backend
```

### 2. Deploy with raw Manifests

```bash
kubectl apply -f k8s/configmaps/
kubectl apply -f k8s/deployments/
kubectl apply -f k8s/ingress.yaml
```

### 3. Deploy with Helm

```bash
helm install my-app ./helm/microservices-chart
```

## Monitoring

The project includes Prometheus configuration to scrape metrics from the application pods.

## Access

- Frontend: http://localhost
- API: http://localhost/api/data

## Author

Ramchandra Chintala
