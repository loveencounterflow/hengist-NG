(function() {
  /*

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
  * possible to devise a line-oriented text file format that can represent the original document and all
    changes in a (barely, for sure) human-readable format

* fields:
  * **`bvn1`**, **`bvn2`**: BVN components; after reading the file and before any changes, `bvn1` equals the
    line number and `bvn2` equals zero; after changes and ironing of BVNs, line numbers and `bvn1` values
    will start to drift apart.
  * **`oln`**: 'orginal line', ID of line that 'caused' the current record; in a real application, this
    would have to identify file, line, column
  * **`s`**: 'stamped'; when `true`, record is obsolete (here written `X`); when `false`, record is active
    (here written `_`)
  * **`data`**: arbitrary data, stands in for whatever fields are needed; here special values:
    * (SOF): always represents Start Of File with `bvn1` set to constant `000`
    * (EOF): always represents End Of File with `bvn1` set to constant `999`

* records need a stable ID field, fields bvn1, bvn2 will always be volatile
* negative numbers to be used to insert before a given line

* **After reading a file, before further processing**: `data` shows lines of a hypothetical MarkDown file;
  `bvn1` will correspond to line numbers in the file, but that correspondance is volatile. We use `A` ...
  `Z` for arbitrary row IDs:

```
id  bvn1 bvn2 oln s data
A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     _ **bar**
D   +003 +000     _ wat
E   +999 +000     _ (EOF)
```

We want to turn the markup into HTML so have to convert the `**` double-asterisks into `<b>` tags. This
replaces the original line (the 'referent') so it gets 'stamped' (here shown by `X`). Just to keep HTML tags
apart from textual content, we split the line into three parts; in cases where that is not needed, we could
simply insert a monolithic compiled version.

We keep a reference to what we replace by setting the `oln` field to `C` (to which a text column number
could be added). The new entries keep the `bvn1` field value of their referent value but count the `bvn2`
field up to indicate their own local ordering relation. At this point we could still append to the end of
line `C` or prepend value by setting `bvn2` to negative values; also all other lines can be processed without
introducing non-local changes. If we were to change the `<b>` tag into a `<span>` without overwriting,
though, there's no space left for that in our scheme.

* **After some changes, before ironing**:

```
id  bvn1 bvn2 oln s data
A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     X **bar**
F   +002 +001 C   _ <b>
G   +002 +002 C   _ bar
H   +002 +003 C   _ </b>
D   +003 +000     _ wat
E   +999 +000     _ (EOF)
```

**After first ironing**: At some point it will be necessary to re-normalize our fields by what we call
'ironing'; this is accomplished by simply iterating over `select * from T order by bvn1, bvn2`, setting
`bvn1` to their row numbers and `bvn2` to zero; care is taken to leave the first line as `bvn1: 0` and the
last as `bvn1: 999`:

```
id  bvn1 bvn2 oln s data
A   +000 +000     _ (SOF)
B   +001 +000     _ foo
C   +002 +000     X **bar**
F   +003 +000 C   _ <b>
G   +004 +000 C   _ bar
H   +005 +000 C   _ </b>
D   +006 +000     _ wat
E   +999 +000     _ (EOF)
```

**After some further changes**: Now we introduce another change in the same location using the same
procedures; observe how line `J` points back to line `H` which in turn points back to line `C`; with proper
indexing (not shown here), we could attribute the origin of this and any other part down the line to
line&nbsp;2, `**bar**`, specifically columns&nbsp;6,&nbsp;7 of that line so because we're using a proper
database we gain full traceability with high granularity.

```
id  bvn1 bvn2 oln s data
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
```

 */


}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tZGJhc2UtaW5maW5pdGUtc3RhYmxlLW9yZGVyZWQtdm5ycy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0hHO0VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuIyMjXG5cbiogbmFtaW5nOlxuICAqIGJpKG5hcnkpLXZlY3RvcmlhbCBudW1iZXJzIChCVk5zKVxuICAqIHBhaXJzOyBwYWlyZWQgcm93IG51bWJlcnNcblxuKiAnaW5maW5pdGVseScgZXhwYW5kYWJsZSAod2l0aGluIGJvdW5kYXJpZXMgZ2l2ZW4gYnkgZGF0YXR5cGUpLCBzdGFibHktb3JkZXJlZCBpbmRleGluZyBpbiBkYXRhYmFzZVxuICAoc3BlY2lmaWNhbGx5IFNRTGl0ZSB2aWEgW0RCYXldKCkpXG4qIG5vIHJlY3Vyc2l2ZSBDVEVzIGFyZSBuZWVkZWQsIGBvcmRlciBieWAgd2l0aCBvbmUgb3IgdHdvIGZpZWxkcyBpcyBlbm91Z2ggdG8gcmVjb25zdHJ1Y3QgcHJvcGVyIG9yZGVyaW5nXG4gIG9mIHJlY29yZHMgYmVmb3JlIGFuZCBhZnRlciBwcm9jZXNzaW5nXG4qIHN0YWJseS1vcmRlcmVkIGFzIHRoZXkgY29udHJvbCBvcmRlcmluZyBpbiBhIHN0YWJsZSBmYXNoaW9uXG4gICogYnV0IHZvbGF0aWxlIGluIHRoZSBzZW5zZSB0aGF0IGFmdGVyIGluc2VydGlvbnMgYW5kIGRlbGV0aW9ucyBWTlJzIG11c3QgYmUgcmUtd3JpdHRlbiAoJ2lyb25lZCcpIGJlZm9yZVxuICAgIG5ldyByb3dzIGNhbiBiZSBpbnNlcnRlZCBhdCBwb2ludHMgd2hlcmUgZGlyZWN0bHkgYmVmb3JlIGluc2VydGlvbnMgaGFkIHRha2VuIHBsYWNlIChidXQgY2FuIGluc2VydFxuICAgIGFyb3VuZCBvdGhlciBwb2ludHMgaW4gdGFibGUpXG4qIHVzaW5nIG51bWVyaWNhbCB2YWx1ZXMgYnV0IGZvcm1hdCBpcyBmcmllbmRseSB0byBzZXJpYWxpemF0aW9uOyBpbiB0aGF0IGNhc2UsIG11c3QgYmVmb3JlaGFuZCBkZXRlcm1pbmVcbiAgY2FwYWNpdHk7IHRocmVlIGRpZ2l0cyBhcyBzaG93biBoZXJlIGNhbiByZXByZXNlbnQgdXAgdG8gKDEwXjMpLTIgPSA5OTggbGluZXMgZnJvbSB3aGljaCBoYXZlIHRvIGJlXG4gIHN1YnRyYWN0ZWQgdGhlIG51bWJlciBvZiByZXZpc2lvbiByZWNvcmRzIHdob3NlIG51bWJlcmluZyBnb2VzIGludG8gdGhlIHNhbWUgc3BhY2U7IHVzaW5nIHN1aXRhYmxlXG4gIGNoYXJhY3RlcnMgZm9yIG5lZ2F0aXZlIHZzIHBvc2l0aXZlIG51bWJlcnMsIG11bHRpcGxlIG51bWVyaWNhbCBgbnJYYCBmaWVsZHMgY2FuIGJlIGNvbWJpbmVkIGludG8gYSBzaW5nbGVcbiAgdGV4dHVhbCBmaWVsZCB0aGF0IG1heSBzZXJ2ZSBhcyBhIHNpbmdsZSBvcmRlcmluZyBjcml0ZXJpb24gYW5kIGEgY29tcGFjdCBkaXNwbGF5XG4gICogcG9zc2libGUgdG8gZGV2aXNlIGEgbGluZS1vcmllbnRlZCB0ZXh0IGZpbGUgZm9ybWF0IHRoYXQgY2FuIHJlcHJlc2VudCB0aGUgb3JpZ2luYWwgZG9jdW1lbnQgYW5kIGFsbFxuICAgIGNoYW5nZXMgaW4gYSAoYmFyZWx5LCBmb3Igc3VyZSkgaHVtYW4tcmVhZGFibGUgZm9ybWF0XG5cbiogZmllbGRzOlxuICAqICoqYGJ2bjFgKiosICoqYGJ2bjJgKio6IEJWTiBjb21wb25lbnRzOyBhZnRlciByZWFkaW5nIHRoZSBmaWxlIGFuZCBiZWZvcmUgYW55IGNoYW5nZXMsIGBidm4xYCBlcXVhbHMgdGhlXG4gICAgbGluZSBudW1iZXIgYW5kIGBidm4yYCBlcXVhbHMgemVybzsgYWZ0ZXIgY2hhbmdlcyBhbmQgaXJvbmluZyBvZiBCVk5zLCBsaW5lIG51bWJlcnMgYW5kIGBidm4xYCB2YWx1ZXNcbiAgICB3aWxsIHN0YXJ0IHRvIGRyaWZ0IGFwYXJ0LlxuICAqICoqYG9sbmAqKjogJ29yZ2luYWwgbGluZScsIElEIG9mIGxpbmUgdGhhdCAnY2F1c2VkJyB0aGUgY3VycmVudCByZWNvcmQ7IGluIGEgcmVhbCBhcHBsaWNhdGlvbiwgdGhpc1xuICAgIHdvdWxkIGhhdmUgdG8gaWRlbnRpZnkgZmlsZSwgbGluZSwgY29sdW1uXG4gICogKipgc2AqKjogJ3N0YW1wZWQnOyB3aGVuIGB0cnVlYCwgcmVjb3JkIGlzIG9ic29sZXRlIChoZXJlIHdyaXR0ZW4gYFhgKTsgd2hlbiBgZmFsc2VgLCByZWNvcmQgaXMgYWN0aXZlXG4gICAgKGhlcmUgd3JpdHRlbiBgX2ApXG4gICogKipgZGF0YWAqKjogYXJiaXRyYXJ5IGRhdGEsIHN0YW5kcyBpbiBmb3Igd2hhdGV2ZXIgZmllbGRzIGFyZSBuZWVkZWQ7IGhlcmUgc3BlY2lhbCB2YWx1ZXM6XG4gICAgKiAoU09GKTogYWx3YXlzIHJlcHJlc2VudHMgU3RhcnQgT2YgRmlsZSB3aXRoIGBidm4xYCBzZXQgdG8gY29uc3RhbnQgYDAwMGBcbiAgICAqIChFT0YpOiBhbHdheXMgcmVwcmVzZW50cyBFbmQgT2YgRmlsZSB3aXRoIGBidm4xYCBzZXQgdG8gY29uc3RhbnQgYDk5OWBcblxuKiByZWNvcmRzIG5lZWQgYSBzdGFibGUgSUQgZmllbGQsIGZpZWxkcyBidm4xLCBidm4yIHdpbGwgYWx3YXlzIGJlIHZvbGF0aWxlXG4qIG5lZ2F0aXZlIG51bWJlcnMgdG8gYmUgdXNlZCB0byBpbnNlcnQgYmVmb3JlIGEgZ2l2ZW4gbGluZVxuXG5cbiogKipBZnRlciByZWFkaW5nIGEgZmlsZSwgYmVmb3JlIGZ1cnRoZXIgcHJvY2Vzc2luZyoqOiBgZGF0YWAgc2hvd3MgbGluZXMgb2YgYSBoeXBvdGhldGljYWwgTWFya0Rvd24gZmlsZTtcbiAgYGJ2bjFgIHdpbGwgY29ycmVzcG9uZCB0byBsaW5lIG51bWJlcnMgaW4gdGhlIGZpbGUsIGJ1dCB0aGF0IGNvcnJlc3BvbmRhbmNlIGlzIHZvbGF0aWxlLiBXZSB1c2UgYEFgIC4uLlxuICBgWmAgZm9yIGFyYml0cmFyeSByb3cgSURzOlxuXG5gYGBcbmlkICBidm4xIGJ2bjIgb2xuIHMgZGF0YVxuQSAgICswMDAgKzAwMCAgICAgXyAoU09GKVxuQiAgICswMDEgKzAwMCAgICAgXyBmb29cbkMgICArMDAyICswMDAgICAgIF8gKipiYXIqKlxuRCAgICswMDMgKzAwMCAgICAgXyB3YXRcbkUgICArOTk5ICswMDAgICAgIF8gKEVPRilcbmBgYFxuXG5XZSB3YW50IHRvIHR1cm4gdGhlIG1hcmt1cCBpbnRvIEhUTUwgc28gaGF2ZSB0byBjb252ZXJ0IHRoZSBgKipgIGRvdWJsZS1hc3Rlcmlza3MgaW50byBgPGI+YCB0YWdzLiBUaGlzXG5yZXBsYWNlcyB0aGUgb3JpZ2luYWwgbGluZSAodGhlICdyZWZlcmVudCcpIHNvIGl0IGdldHMgJ3N0YW1wZWQnIChoZXJlIHNob3duIGJ5IGBYYCkuIEp1c3QgdG8ga2VlcCBIVE1MIHRhZ3NcbmFwYXJ0IGZyb20gdGV4dHVhbCBjb250ZW50LCB3ZSBzcGxpdCB0aGUgbGluZSBpbnRvIHRocmVlIHBhcnRzOyBpbiBjYXNlcyB3aGVyZSB0aGF0IGlzIG5vdCBuZWVkZWQsIHdlIGNvdWxkXG5zaW1wbHkgaW5zZXJ0IGEgbW9ub2xpdGhpYyBjb21waWxlZCB2ZXJzaW9uLlxuXG5XZSBrZWVwIGEgcmVmZXJlbmNlIHRvIHdoYXQgd2UgcmVwbGFjZSBieSBzZXR0aW5nIHRoZSBgb2xuYCBmaWVsZCB0byBgQ2AgKHRvIHdoaWNoIGEgdGV4dCBjb2x1bW4gbnVtYmVyXG5jb3VsZCBiZSBhZGRlZCkuIFRoZSBuZXcgZW50cmllcyBrZWVwIHRoZSBgYnZuMWAgZmllbGQgdmFsdWUgb2YgdGhlaXIgcmVmZXJlbnQgdmFsdWUgYnV0IGNvdW50IHRoZSBgYnZuMmBcbmZpZWxkIHVwIHRvIGluZGljYXRlIHRoZWlyIG93biBsb2NhbCBvcmRlcmluZyByZWxhdGlvbi4gQXQgdGhpcyBwb2ludCB3ZSBjb3VsZCBzdGlsbCBhcHBlbmQgdG8gdGhlIGVuZCBvZlxubGluZSBgQ2Agb3IgcHJlcGVuZCB2YWx1ZSBieSBzZXR0aW5nIGBidm4yYCB0byBuZWdhdGl2ZSB2YWx1ZXM7IGFsc28gYWxsIG90aGVyIGxpbmVzIGNhbiBiZSBwcm9jZXNzZWQgd2l0aG91dFxuaW50cm9kdWNpbmcgbm9uLWxvY2FsIGNoYW5nZXMuIElmIHdlIHdlcmUgdG8gY2hhbmdlIHRoZSBgPGI+YCB0YWcgaW50byBhIGA8c3Bhbj5gIHdpdGhvdXQgb3ZlcndyaXRpbmcsXG50aG91Z2gsIHRoZXJlJ3Mgbm8gc3BhY2UgbGVmdCBmb3IgdGhhdCBpbiBvdXIgc2NoZW1lLlxuXG4qICoqQWZ0ZXIgc29tZSBjaGFuZ2VzLCBiZWZvcmUgaXJvbmluZyoqOlxuXG5gYGBcbmlkICBidm4xIGJ2bjIgb2xuIHMgZGF0YVxuQSAgICswMDAgKzAwMCAgICAgXyAoU09GKVxuQiAgICswMDEgKzAwMCAgICAgXyBmb29cbkMgICArMDAyICswMDAgICAgIFggKipiYXIqKlxuRiAgICswMDIgKzAwMSBDICAgXyA8Yj5cbkcgICArMDAyICswMDIgQyAgIF8gYmFyXG5IICAgKzAwMiArMDAzIEMgICBfIDwvYj5cbkQgICArMDAzICswMDAgICAgIF8gd2F0XG5FICAgKzk5OSArMDAwICAgICBfIChFT0YpXG5gYGBcblxuKipBZnRlciBmaXJzdCBpcm9uaW5nKio6IEF0IHNvbWUgcG9pbnQgaXQgd2lsbCBiZSBuZWNlc3NhcnkgdG8gcmUtbm9ybWFsaXplIG91ciBmaWVsZHMgYnkgd2hhdCB3ZSBjYWxsXG4naXJvbmluZyc7IHRoaXMgaXMgYWNjb21wbGlzaGVkIGJ5IHNpbXBseSBpdGVyYXRpbmcgb3ZlciBgc2VsZWN0ICogZnJvbSBUIG9yZGVyIGJ5IGJ2bjEsIGJ2bjJgLCBzZXR0aW5nXG5gYnZuMWAgdG8gdGhlaXIgcm93IG51bWJlcnMgYW5kIGBidm4yYCB0byB6ZXJvOyBjYXJlIGlzIHRha2VuIHRvIGxlYXZlIHRoZSBmaXJzdCBsaW5lIGFzIGBidm4xOiAwYCBhbmQgdGhlXG5sYXN0IGFzIGBidm4xOiA5OTlgOlxuXG5gYGBcbmlkICBidm4xIGJ2bjIgb2xuIHMgZGF0YVxuQSAgICswMDAgKzAwMCAgICAgXyAoU09GKVxuQiAgICswMDEgKzAwMCAgICAgXyBmb29cbkMgICArMDAyICswMDAgICAgIFggKipiYXIqKlxuRiAgICswMDMgKzAwMCBDICAgXyA8Yj5cbkcgICArMDA0ICswMDAgQyAgIF8gYmFyXG5IICAgKzAwNSArMDAwIEMgICBfIDwvYj5cbkQgICArMDA2ICswMDAgICAgIF8gd2F0XG5FICAgKzk5OSArMDAwICAgICBfIChFT0YpXG5gYGBcblxuKipBZnRlciBzb21lIGZ1cnRoZXIgY2hhbmdlcyoqOiBOb3cgd2UgaW50cm9kdWNlIGFub3RoZXIgY2hhbmdlIGluIHRoZSBzYW1lIGxvY2F0aW9uIHVzaW5nIHRoZSBzYW1lXG5wcm9jZWR1cmVzOyBvYnNlcnZlIGhvdyBsaW5lIGBKYCBwb2ludHMgYmFjayB0byBsaW5lIGBIYCB3aGljaCBpbiB0dXJuIHBvaW50cyBiYWNrIHRvIGxpbmUgYENgOyB3aXRoIHByb3BlclxuaW5kZXhpbmcgKG5vdCBzaG93biBoZXJlKSwgd2UgY291bGQgYXR0cmlidXRlIHRoZSBvcmlnaW4gb2YgdGhpcyBhbmQgYW55IG90aGVyIHBhcnQgZG93biB0aGUgbGluZSB0b1xubGluZSZuYnNwOzIsIGAqKmJhcioqYCwgc3BlY2lmaWNhbGx5IGNvbHVtbnMmbmJzcDs2LCZuYnNwOzcgb2YgdGhhdCBsaW5lIHNvIGJlY2F1c2Ugd2UncmUgdXNpbmcgYSBwcm9wZXJcbmRhdGFiYXNlIHdlIGdhaW4gZnVsbCB0cmFjZWFiaWxpdHkgd2l0aCBoaWdoIGdyYW51bGFyaXR5LlxuXG5gYGBcbmlkICBidm4xIGJ2bjIgb2xuIHMgZGF0YVxuQSAgICswMDAgKzAwMCAgICAgXyAoU09GKVxuQiAgICswMDEgKzAwMCAgICAgXyBmb29cbkMgICArMDAyICswMDAgICAgIFggKipiYXIqKlxuRiAgICswMDMgKzAwMCBDICAgWCA8Yj5cbkkgICArMDAzICswMDEgRiAgIF8gPHNwYW4+XG5HICAgKzAwNCArMDAwIEMgICBfIGJhclxuSCAgICswMDUgKzAwMCBDICAgWCA8L2I+XG5KICAgKzAwNSArMDAxIEggICBfIDwvc3Bhbj5cbkQgICArMDA2ICswMDAgICAgIF8gd2F0XG5FICAgKzk5OSArMDAwICAgICBfIChFT0YpXG5gYGBcblxuXG4jIyNcbiJdfQ==
//# sourceURL=../src/demo-dbase-infinite-stable-ordered-vnrs.coffee