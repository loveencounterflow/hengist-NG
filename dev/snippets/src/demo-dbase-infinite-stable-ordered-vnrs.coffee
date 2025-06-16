
###

* naming:
  * bi(nary)-vectorial numbers (BVNs)
  * pairs; paired row numbers

* 'infinitely' expandable (within boundaries given by datatype), stably-ordered indexing in database
  (specifically SQLite via [DBay]())
* no recursive CTEs are needed, `order by` with one or two fields is enough to reconstruct proper ordering
  of records before and after processing
* stably-ordered as they control ordering in a stable fashion
  * but volatile in the sense that after insertions and deletions VNRs must be re-written ('ironed') before
    new rows can be inserted at points where directly before insertions had taken place (but can insert
    around other points in table)
* using numerical values but format is friendly to serialization; in that case, must beforehand determine
  capacity; three digits as shown here can represent up to (10^3)-2 = 998 lines from which have to be
  subtracted the number of revision records whose numbering goes into the same space; using suitable
  characters for negative vs positive numbers, multiple numerical `nrX` fields can be combined into a single
  textual field that may serve as a single ordering criterion and a compact display

* fields:
  * `nr1`, `nr2`: VNR components
  * `oln`: 'orginal line', ID of line that 'caused' the current record; in a real application, this would
    have to identify file, line, column
  * `s`: 'stamped'; when `true`, record is obsolete (here written `X`); when `false`, record is active (here
    written `_`)
  * `data`: arbitrary data, stands in for whatever fields are needed; here special values:
    * (SOF): always represents Start Of File with nr1 set to constant `000`
    * (EOF): always represents End Of File with nr1 set to constant `999`

* records need a stable ID field, fields nr1, nr2 will always be volatile
* negative numbers to be used to insert before a given line


After reading a file, before further processing; `data` shows lines of a hypothetical MarkDown file; `nr1`
will correspond to line numbers in the file, but that correspondance is volatile. We use `A` ... `Z` for
arbitrary row IDs:

id  nr1  nr2  oln s data
A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     _ **bar**
D   +003 +000     _ wat
E   +999 +000     _ (EOF)

| id | nr1  | nr2  | oln | s |   data  |
|----|------|------|-----|---|---------|
| A  | +000 | +000 |     | _ | (SOF)   |
| B  | +001 | +000 |     | _ | foo     |
| C  | +002 | +000 |     | _ | **bar** |
| D  | +003 | +000 |     | _ | wat     |
| E  | +999 | +000 |     | _ | (EOF)   |

We want to turn the markup into HTML so have to convert the `**` double-asterisks into `<b>` tags. This
replaces the original line (the 'referent') so it gets 'stamped' (here shown by `X`). Just to keep HTML tags
apart from textual content, we split the line into three parts; in cases where that is not needed, we could
simply insert a monolithic compiled version.

We keep a reference to what we replace by setting the `oln` field to `C` (to which a text column number
could be added). The new entries keep the `nr1` field value of their referent value but count the `nr2`
field up to indicate their own local ordering relation. At this point we could still append to the end of
line `C` or prepend value by setting `nr2` to negative values; also all other lines can be processed without
introducing non-local changes. If we were to change the `<b>` tag into a `<span>` without overwriting,
though, there's no space left for that in our scheme:

A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     X **bar**
F   +002 +001 C   _ <b>
G   +002 +002 C   _ bar
H   +002 +003 C   _ </b>
D   +003 +000     _ wat
E   +999 +000     _ (EOF)

At some point it will be necessary to re-normalize our fields by what we call 'ironing'; this is
accomplished by simply iterating over `select * from T order by nr1, nr2`, setting `nr1` to their row
numbers and `nr2` to zero; care is taken to leave the first line as `nr1: 0` and the last as `nr1: 999`:

A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     X **bar**
F   +003 +000 C   _ <b>
G   +004 +000 C   _ bar
H   +005 +000 C   _ </b>
D   +006 +000     _ wat
E   +999 +000     _ (EOF)



A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     X **bar**
F   +003 +000 C   X <b>
I   +003 +001 F   _ <span>
G   +004 +000 C   _ bar
H   +005 +000 C   X </b>
J   +005 +001 H   _ </span>
D   +006 +000     _ wat
E   +999 +000     _ (EOF)


###
