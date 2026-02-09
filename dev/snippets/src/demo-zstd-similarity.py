

#===========================================================================================================
debug = print

#===========================================================================================================
def demo_1():
  from compression.zstd import ZstdCompressor, ZstdDict

  tacos = b"taco burrito tortilla salsa guacamole cilantro lime " * 50
  zd_tacos = ZstdDict(tacos, is_raw=True)
  comp_tacos = ZstdCompressor(zstd_dict=zd_tacos)

  tennis = b"racket court serve volley smash lob match game set " * 50
  zd_tennis = ZstdDict(tennis, is_raw=True)
  comp_tennis = ZstdCompressor(zstd_dict=zd_tennis)

  input_text = b"I ordered three tacos with extra guacamole"

  print( len(comp_tacos.compress(input_text, mode=ZstdCompressor.FLUSH_FRAME)) )
  # 43
  print( len(comp_tennis.compress(input_text, mode=ZstdCompressor.FLUSH_FRAME)) )
  # 51

#===========================================================================================================
from compression.zstd import ZstdCompressor, ZstdDict

#===========================================================================================================
class ZstdClassifier:

    def __init__(
        self,
        window: int = 1 << 20,
        level: int = 22,
        # rebuild_every: int = 5
        rebuild_every: int = 1
    ):
        self.window = window
        self.level = level
        self.rebuild_every = rebuild_every
        self.buffers: dict[str, bytes] = {}
        self.compressors: dict[str, ZstdCompressor] = {}
        self.since_rebuild: dict[str, int] = {}

    def learn(self, label: str, text: bytes ):

        # Simply append the text to the buffer for
        # this label, and drop the oldest bytes if
        # the buffer is full.
        buf = self.buffers.get(label, b"") + text
        if len(buf) > self.window:
            buf = buf[-self.window:]
        self.buffers[label] = buf

        # Delete the compressor for this label, if we
        # have seen enough new data since the last
        # time the compressor was built.
        n = self.since_rebuild.get(label, 0) + 1
        if n >= self.rebuild_every:
            print( 'Ωzstd___2', f"rebuild {label}")
            self.compressors.pop(label, None)
            self.since_rebuild[label] = 0
        else:
            self.since_rebuild[label] = n

    def classify(self, text: bytes) -> str | None:

        # Can't classify if we don't have at
        # least two classes to compare.
        if len(self.buffers) < 2:
            return None

        # (Re-)build compressors for all classes.
        for label in self.buffers:
            if label in self.compressors:
                continue
            self.compressors[label] = ZstdCompressor(
                level=self.level,
                zstd_dict=ZstdDict(
                    self.buffers[label],
                    is_raw=True
                )
            )

        # argmin: find the label whose compressor
        # produces the smallest compressed
        # size for the input text.
        best_label = None
        best_size = 0x7FFFFFFF
        mode      = ZstdCompressor.FLUSH_FRAME
        R         = []
        max_size  = 0
        for label, comp in self.compressors.items():
          size = len( comp.compress( text, mode ) )
          R.append( { 'size': size, 'label': label } )
        R = sorted( R, key = ( lambda d: d[ 'size' ] ), reverse = False )
        # for label, comp in self.compressors.items():
        #     size = len(comp.compress(text, mode))
        #     if size < best_size:
        #         best_size = size
        #         best_label = label
        # return { 'size': best_size, 'label': best_label, }
        return R

#===========================================================================================================
def demo_2():
  classifier    = ZstdClassifier()
  multiplier    = 100
  training_set  = {
    'tennis': b"racket court serve volley smash lob match game set",
    'space':  b"space spaceship star bridge captain warp drive",
    'tacos':  b"taco burrito tortilla salsa guacamole cilantro lime",
    }
  for label, text in training_set.items():
    classifier.learn( label, ( text + b" " ) * multiplier )
  probes = [
    b"tacos",
    b"tacos guacamole",
    b"I ordered three tacos with extra guacamole",
    b"that's a nice match",
    b"serve a nice match",
    b"racket court serve",
    b"he is a captain",
    b"he is a captain on a spaceship",
    b"he is a captain on a spaceship with a warp drive",
    ]
  for probe in probes:
    print( classifier.classify( probe ), probe )
  return None

#===========================================================================================================
if __name__ == '__main__':
  demo_2()

