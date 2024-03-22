### Hexlet tests and linter status:
[![Actions Status](https://github.com/1aS5i-dekYon/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/1aS5i-dekYon/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/56d7c39feabb867cbe17/maintainability)](https://codeclimate.com/github/1aS5i-dekYon/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/56d7c39feabb867cbe17/test_coverage)](https://codeclimate.com/github/1aS5i-dekYon/frontend-project-46/test_coverage)


# Generate Differences!
This is a utility that finds differences between two files.

If you write `gendiff -h`, you will receive help about the gendiff utility.

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           display help for command
```

If you write `gendiff` and `filepaths of two files`,  you will get a list of differences between them:

[![gendiff with filpaths](https://asciinema.org/a/3cRvnNoajW55RCmEKskJuAri5.svg)](https://asciinema.org/a/3cRvnNoajW55RCmEKskJuAri5)

You can also do this with `.yaml` and `.yml` file extension.

[![gendiff wz .yaml](https://asciinema.org/a/vqLONXr9AgkWfdmrXLIBDZo5V.svg)](https://asciinema.org/a/vqLONXr9AgkWfdmrXLIBDZo5V)

If you need to check nested files, it can do this too!

[![gendiff-nested](https://asciinema.org/a/xf3K59KGWIdBuUJyxgMuFECVB.svg)](https://asciinema.org/a/xf3K59KGWIdBuUJyxgMuFECVB)

genDiff can show the result of the difference in a flat view (text). You just need to write this entry:

```
gendiff -f plain <filepath1> <filepath2>
```

Here is the result of this command:

[![gensiff-plain](https://asciinema.org/a/iLil0qN1NKGwrJsiRwiJWCG1t.svg)](https://asciinema.org/a/iLil0qN1NKGwrJsiRwiJWCG1t)

If you need output in a structured format such as json. Write this entry:

```
gendiff -f json <filepath1> <filepath2>
```

Here is the result of this command:

[![gendiff-json](https://asciinema.org/a/nxE4yBsNRFEUCIyMPTSBhxeaG.svg)](https://asciinema.org/a/nxE4yBsNRFEUCIyMPTSBhxeaG)