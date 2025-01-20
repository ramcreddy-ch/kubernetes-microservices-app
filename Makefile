.PHONY: help lint template install upgrade delete

help:
	@echo "Kubernetes Microservices App CLI"
	@echo "  lint     - Run helm lint"
	@echo "  template - Render manifests locally"
	@echo "  install  - Install helm chart"
	@echo "  upgrade  - Upgrade helm chart"
	@echo "  delete   - Uninstall chart"

lint:
	helm lint charts/my-app

template:
	helm template charts/my-app

install:
	helm install my-app charts/my-app

upgrade:
	helm upgrade my-app charts/my-app

delete:
	helm uninstall my-app
