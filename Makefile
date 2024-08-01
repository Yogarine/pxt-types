all: build

@PHONY: build
build: src/pxt-common-packages copy-lib node_modules/typescript/bin/tsc
	npx tsc --build
	#npx tsc --project src/pxt-common-packages/libs/tsconfig.json --declaration --emitDeclarationOnly --excludeFiles "*/test.ts" --module 'es2015' --outFile types.d.ts

@PHONY: copy-lib
copy-lib: src/pxt lib lib/ext-typescript
	cp src/pxt/libs/pxt-common/*.d.ts lib/
	cp src/pxt/pxtcompiler/ext-typescript/lib/*.d.ts lib/ext-typescript/

src/pxt src/pxt-common-packages:
	git submodule update --init $@

lib lib/ext-typescript:
	mkdir -p $@

node_modules/typescript/bin/tsc:
	npm install
