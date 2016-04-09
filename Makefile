bin:
	gulp site

.PHONY: server build build-forever clean
server:
	gulp dev-server
build: bin
build-forever: server
clean:
	rm -rf bin
