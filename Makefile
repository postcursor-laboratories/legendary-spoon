bin:
	gulp site
bin-forever:
	gulp transform-on-my-watch
build: bin
build-forever: bin-forever
clean:
	rm -rf bin
