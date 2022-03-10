MAKEFLAGS += --silent

verify:
	./scripts/verify.sh

build:
	./scripts/build.sh

rebuild-fake-api-gateway:
	./scripts/rebuildfakeapigateway.sh

start-docker:
	./scripts/startdocker.sh

stop-docker:
	./scripts/stopdocker.sh

setup-infra:
	./scripts/setupinfra.sh

dev:
	$(MAKE) start-docker
	./scripts/dev.sh

start:
	$(MAKE) stop
	$(MAKE) start-docker
	$(MAKE) build
	./scripts/start.sh

stop:
	./scripts/stop.sh
	$(MAKE) stop-docker

acceptance:
	yarn cypress:open
