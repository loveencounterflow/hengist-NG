
These lines are going to be overwritten by the `replace-above` command


<!-- <<</replace-above 'header.md'>>> -->
-----------------------------------------------------------

> Above horizontal ruler is contents of `header.md`

# Main File

This file demonstrates interpolation facility of Bric-A-Brac:

## Part One

-----------------------------------------------------------
<!-- <<<insert 'part1.md'>>> -->
-----------------------------------------------------------

## Part Two

-----------------------------------------------------------
<!-- <<<insert 'part2.md'>UNIQUE56>> -->
-----------------------------------------------------------
<!-- <<< looks similar >>> -->

## The Footer

> Below horizontal ruler is contents of `footer.md`

-----------------------------------------------------------
<!-- <<<replace-below 'footer.md'>>> -->

These lines are going to be overwritten by the `replace-below` command


