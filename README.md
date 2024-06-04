
# 𐌷𐌴𐌽𐌲𐌹𐍃𐍄

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [𐌷𐌴𐌽𐌲𐌹𐍃𐍄](#%F0%90%8C%B7%F0%90%8C%B4%F0%90%8C%BD%F0%90%8C%B2%F0%90%8C%B9%F0%90%8D%83%F0%90%8D%84)
  - [Multi-App Dev (M.A.D.)](#multi-app-dev-mad)
  - [Hengist Layout](#hengist-layout)
  - [Thoughts & Plans](#thoughts--plans)
  - [To Do](#to-do)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

**NOTE** This is the repo for the next version of [𐌷𐌴𐌽𐌲𐌹𐍃𐍄](https://github.com/loveencounterflow/hengist), a
NodeJS application to organize testing and benchmarking of NodeJS projects. Nothing that is written herunder
is necessarily up to date

**pending MVP, docs, updates**

# 𐌷𐌴𐌽𐌲𐌹𐍃𐍄

## Multi-App Dev (M.A.D.)

## Hengist Layout

* apps
* assets
* individual project folders (each with `src/` and `lib/`, if you're so inclined and transpile stuff, or any
  other structure deemed suitable)

<pre>
┌─────────────────────────────────────────────────────╖
│ my-hengist                                          ║
│   ● package.json                                    ║
│   ● README.md                                       ║
│   ┌─────────────────────────────────────────────────────╖
│   │ .git                                                ║
│   ┌─────────────────────────────────────────────────────╖
│   │ node_modules                                        ║
│   ┌─────────────────────────────────────────────────────╖
│   │ apps                                                ║
│   │   ▸  ../path/to/my-project                          ║
│   │   ▸  ../other-path/to/that-other-project            ║
│   ┌─────────────────────────────────────────────────────╖
│   │ assets                                              ║
│   │   ▸  ../path/to/some-data.file                      ║
│   │   ●  image.png                                      ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ my-project                                          ║
│   │   │   ●  huge-data.file                                 ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ that-other-project                                  ║
│   │   │   ●  another-huge-data.file                         ║
│   ┌─────────────────────────────────────────────────────╖
│   │ my-project                                          ║
│   │   ● package.json                                    ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ node_modules                                        ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ src                                                 ║
│   │   │   ● main.coffee                                     ║
│   │   │   ● foobar.benchmark.coffee                         ║
│   │   │   ● silly.benchmark.coffee                          ║
│   │   │   ● arithmetic.test.coffee                          ║
│   │   │   ● silly.test.coffee                               ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ lib                                                 ║
│   │   │   ● main.js                                         ║
│   │   │   ● main.js.map                                     ║
│   ┌─────────────────────────────────────────────────────╖
│   │ that-other-project                                  ║
│   │   ● package.json                                    ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ node_modules                                        ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ src                                                 ║
│   │   │   ● main.coffee                                     ║
│   │   ┌─────────────────────────────────────────────────────╖
│   │   │ lib                                                 ║
│   │   │   ● main.js                                         ║
│   │   │   ● main.js.map                                     ║
</pre>


## Thoughts & Plans

* We continue to keep

  * benchmarks,
  * demos and
  * tests

  for the projects under `hengist/dev/$project_name`. This makes `hengist` a monorepo *for the dev code of
  the projects, but not for their production code*. Dependencies for stuff under `dev` will be kept in
  `hengist/node_modules` and be declared in `hengist/package.json`.

* To help subject-oriented development, `apps-$subject` folders such as `apps-dbay` and `apps-typesetting`
  are introduced. These contain symlinks to the projects that are relevent for the `$subject` (e.g.
  `typesetting`) at hand; they may also contain further material such as `README`s.


## To Do


* **[–]** Update tree representation: local development under `dev/` (which is included in Hengist git repo);
  external stuff (for which Hengist only provides tests and/or benchmarks and/or demos, experiments) is
  symlinked under `apps/` (and not included in Hengist git repo).
* **[+]** Implement a `prepare-commit-msg` git hook that prepends each commit with the names of the
  sub-projects affected. This works by retrieving the relative paths of all staged files with `git diff
  --cached --name-only` and then looking for the nearest `package.json` file for each part.








