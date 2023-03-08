
//syntax object
let syntax = {
  "absolute-size": {
    "syntax": "xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large"
  },
  "alpha-value": {
    "syntax": "<number> | <percentage>"
  },
  "angle-percentage": {
    "syntax": "<angle> | <percentage>"
  },
  "angular-color-hint": {
    "syntax": "<angle-percentage>"
  },
  "angular-color-stop": {
    "syntax": "<color> && <color-stop-angle>?"
  },
  "angular-color-stop-list": {
    "syntax": "[ <angular-color-stop> [, <angular-color-hint>]? ]# , <angular-color-stop>"
  },
  "animateable-feature": {
    "syntax": "scroll-position | contents | <custom-ident>"
  },
  "attachment": {
    "syntax": "scroll | fixed | local"
  },
  "attr()": {
    "syntax": "attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )"
  },
  "attr-matcher": {
    "syntax": "[ '~' | '|' | '^' | '$' | '*' ]? '='"
  },
  "attr-modifier": {
    "syntax": "i | s"
  },
  "attribute-selector": {
    "syntax": "'[' <wq-name> ']' | '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'"
  },
  "auto-repeat": {
    "syntax": "repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )"
  },
  "auto-track-list": {
    "syntax": "[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat>\n[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?"
  },
  "baseline-position": {
    "syntax": "[ first | last ]? baseline"
  },
  "basic-shape": {
    "syntax": "<inset()> | <circle()> | <ellipse()> | <polygon()>"
  },
  "bg-image": {
    "syntax": "none | <image>"
  },
  "bg-layer": {
    "syntax": "<bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>"
  },
  "bg-position": {
    "syntax": "[ [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] | [ center | [ left | right ] <length-percentage>? ] && [ center | [ top | bottom ] <length-percentage>? ] ]"
  },
  "bg-size": {
    "syntax": "[ <length-percentage> | auto ]{1,2} | cover | contain"
  },
  "blur()": {
    "syntax": "blur( <length> )"
  },
  "blend-mode": {
    "syntax": "normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity"
  },
  "box": {
    "syntax": "border-box | padding-box | content-box"
  },
  "brightness()": {
    "syntax": "brightness( <number-percentage> )"
  },
  "calc()": {
    "syntax": "calc( <calc-sum> )"
  },
  "calc-sum": {
    "syntax": "<calc-product> [ [ '+' | '-' ] <calc-product> ]*"
  },
  "calc-product": {
    "syntax": "<calc-value> [ '*' <calc-value> | '/' <number> ]*"
  },
  "calc-value": {
    "syntax": "<number> | <dimension> | <percentage> | ( <calc-sum> )"
  },
  "cf-final-image": {
    "syntax": "<image> | <color>"
  },
  "cf-mixing-image": {
    "syntax": "<percentage>? && <image>"
  },
  "circle()": {
    "syntax": "circle( [ <shape-radius> ]? [ at <position> ]? )"
  },
  "clamp()": {
    "syntax": "clamp( <calc-sum>#{3} )"
  },
  "class-selector": {
    "syntax": "'.' <ident-token>"
  },
  "clip-source": {
    "syntax": "<url>"
  },
  "color": {
    "syntax": "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
  },
  "color-stop": {
    "syntax": "<color-stop-length> | <color-stop-angle>"
  },
  "color-stop-angle": {
    "syntax": "<angle-percentage>{1,2}"
  },
  "color-stop-length": {
    "syntax": "<length-percentage>{1,2}"
  },
  "color-stop-list": {
    "syntax": "[ <linear-color-stop> [, <linear-color-hint>]? ]# , <linear-color-stop>"
  },
  "combinator": {
    "syntax": "'>' | '+' | '~' | [ '||' ]"
  },
  "common-lig-values": {
    "syntax": "[ common-ligatures | no-common-ligatures ]"
  },
  "compat": {
    "syntax": "searchfield | textarea | push-button | button-bevel | slider-horizontal | checkbox | radio | square-button | menulist | menulist-button | listbox | meter | progress-bar"
  },
  "composite-style": {
    "syntax": "clear | copy | source-over | source-in | source-out | source-atop | destination-over | destination-in | destination-out | destination-atop | xor"
  },
  "compositing-operator": {
    "syntax": "add | subtract | intersect | exclude"
  },
  "compound-selector": {
    "syntax": "[ <type-selector>? <subclass-selector>* [ <pseudo-element-selector> <pseudo-class-selector>* ]* ]!"
  },
  "compound-selector-list": {
    "syntax": "<compound-selector>#"
  },
  "complex-selector": {
    "syntax": "<compound-selector> [ <combinator>? <compound-selector> ]*"
  },
  "complex-selector-list": {
    "syntax": "<complex-selector>#"
  },
  "conic-gradient()": {
    "syntax": "conic-gradient( [ from <angle> ]? [ at <position> ]?, <angular-color-stop-list> )"
  },
  "contextual-alt-values": {
    "syntax": "[ contextual | no-contextual ]"
  },
  "content-distribution": {
    "syntax": "space-between | space-around | space-evenly | stretch"
  },
  "content-list": {
    "syntax": "[ <string> | contents | <image> | <quote> | <target> | <leader()> ]+"
  },
  "content-position": {
    "syntax": "center | start | end | flex-start | flex-end"
  },
  "content-replacement": {
    "syntax": "<image>"
  },
  "contrast()": {
    "syntax": "contrast( [ <number-percentage> ] )"
  },
  "counter()": {
    "syntax": "counter( <custom-ident>, <counter-style>? )"
  },
  "counter-style": {
    "syntax": "<counter-style-name> | symbols()"
  },
  "counter-style-name": {
    "syntax": "<custom-ident>"
  },
  "counters()": {
    "syntax": "counters( <custom-ident>, <string>, <counter-style>? )"
  },
  "cross-fade()": {
    "syntax": "cross-fade( <cf-mixing-image> , <cf-final-image>? )"
  },
  "cubic-bezier-timing-function": {
    "syntax": "ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)"
  },
  "deprecated-system-color": {
    "syntax": "ActiveBorder | ActiveCaption | AppWorkspace | Background | ButtonFace | ButtonHighlight | ButtonShadow | ButtonText | CaptionText | GrayText | Highlight | HighlightText | InactiveBorder | InactiveCaption | InactiveCaptionText | InfoBackground | InfoText | Menu | MenuText | Scrollbar | ThreeDDarkShadow | ThreeDFace | ThreeDHighlight | ThreeDLightShadow | ThreeDShadow | Window | WindowFrame | WindowText"
  },
  "discretionary-lig-values": {
    "syntax": "[ discretionary-ligatures | no-discretionary-ligatures ]"
  },
  "display-box": {
    "syntax": "contents | none"
  },
  "display-inside": {
    "syntax": "flow | flow-root | table | flex | grid | ruby"
  },
  "display-internal": {
    "syntax": "table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container"
  },
  "display-legacy": {
    "syntax": "inline-block | inline-list-item | inline-table | inline-flex | inline-grid"
  },
  "display-listitem": {
    "syntax": "<display-outside>? && [ flow | flow-root ]? && list-item"
  },
  "display-outside": {
    "syntax": "block | inline | run-in"
  },
  "drop-shadow()": {
    "syntax": "drop-shadow( <length>{2,3} <color>? )"
  },
  "east-asian-variant-values": {
    "syntax": "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]"
  },
  "east-asian-width-values": {
    "syntax": "[ full-width | proportional-width ]"
  },
  "element()": {
    "syntax": "element( <id-selector> )"
  },
  "ellipse()": {
    "syntax": "ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )"
  },
  "ending-shape": {
    "syntax": "circle | ellipse"
  },
  "env()": {
    "syntax": "env( <custom-ident> , <declaration-value>? )"
  },
  "explicit-track-list": {
    "syntax": "[ <line-names>? <track-size> ]+ <line-names>?"
  },
  "family-name": {
    "syntax": "<string> | <custom-ident>+"
  },
  "feature-tag-value": {
    "syntax": "<string> [ <integer> | on | off ]?"
  },
  "feature-type": {
    "syntax": "@stylistic | @historical-forms | @styleset | @character-variant | @swash | @ornaments | @annotation"
  },
  "feature-value-block": {
    "syntax": "<feature-type> '{' <feature-value-declaration-list> '}'"
  },
  "feature-value-block-list": {
    "syntax": "<feature-value-block>+"
  },
  "feature-value-declaration": {
    "syntax": "<custom-ident>: <integer>+;"
  },
  "feature-value-declaration-list": {
    "syntax": "<feature-value-declaration>"
  },
  "feature-value-name": {
    "syntax": "<custom-ident>"
  },
  "fill-rule": {
    "syntax": "nonzero | evenodd"
  },
  "filter-function": {
    "syntax": "<blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <saturate()> | <sepia()>"
  },
  "filter-function-list": {
    "syntax": "[ <filter-function> | <url> ]+"
  },
  "final-bg-layer": {
    "syntax": "<'background-color'> || <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>"
  },
  "fit-content()": {
    "syntax": "fit-content( [ <length> | <percentage> ] )"
  },
  "fixed-breadth": {
    "syntax": "<length-percentage>"
  },
  "fixed-repeat": {
    "syntax": "repeat( [ <positive-integer> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )"
  },
  "fixed-size": {
    "syntax": "<fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )"
  },
  "font-stretch-absolute": {
    "syntax": "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | <percentage>"
  },
  "font-variant-css21": {
    "syntax": "[ normal | small-caps ]"
  },
  "font-weight-absolute": {
    "syntax": "normal | bold | <number>"
  },
  "frequency-percentage": {
    "syntax": "<frequency> | <percentage>"
  },
  "general-enclosed": {
    "syntax": "[ <function-token> <any-value> ) ] | ( <ident> <any-value> )"
  },
  "generic-family": {
    "syntax": "serif | sans-serif | cursive | fantasy | monospace"
  },
  "generic-name": {
    "syntax": "serif | sans-serif | cursive | fantasy | monospace"
  },
  "geometry-box": {
    "syntax": "<shape-box> | fill-box | stroke-box | view-box"
  },
  "gradient": {
    "syntax": "<linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()> | <conic-gradient()>"
  },
  "grayscale()": {
    "syntax": "grayscale( <number-percentage> )"
  },
  "grid-line": {
    "syntax": "auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]"
  },
  "historical-lig-values": {
    "syntax": "[ historical-ligatures | no-historical-ligatures ]"
  },
  "hsl()": {
    "syntax": "hsl( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )"
  },
  "hsla()": {
    "syntax": "hsla( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsla( <hue>, <percentage>, <percentage>, <alpha-value>? )"
  },
  "hue": {
    "syntax": "<number> | <angle>"
  },
  "hue-rotate()": {
    "syntax": "hue-rotate( <angle> )"
  },
  "id-selector": {
    "syntax": "<hash-token>"
  },
  "image": {
    "syntax": "<url> | <image()> | <image-set()> | <element()> | <paint()> | <cross-fade()> | <gradient>"
  },
  "image()": {
    "syntax": "image( <image-tags>? [ <image-src>? , <color>? ]! )"
  },
  "image-set()": {
    "syntax": "image-set( <image-set-option># )"
  },
  "image-set-option": {
    "syntax": "[ <image> | <string> ] <resolution>"
  },
  "image-src": {
    "syntax": "<url> | <string>"
  },
  "image-tags": {
    "syntax": "ltr | rtl"
  },
  "inflexible-breadth": {
    "syntax": "<length> | <percentage> | min-content | max-content | auto"
  },
  "inset()": {
    "syntax": "inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )"
  },
  "invert()": {
    "syntax": "invert( <number-percentage> )"
  },
  "keyframes-name": {
    "syntax": "<custom-ident> | <string>"
  },
  "keyframe-block": {
    "syntax": "<keyframe-selector># {\n  <declaration-list>\n}"
  },
  "keyframe-block-list": {
    "syntax": "<keyframe-block>+"
  },
  "keyframe-selector": {
    "syntax": "from | to | <percentage>"
  },
  "leader()": {
    "syntax": "leader( <leader-type> )"
  },
  "leader-type": {
    "syntax": "dotted | solid | space | <string>"
  },
  "length-percentage": {
    "syntax": "<length> | <percentage>"
  },
  "line-names": {
    "syntax": "'[' <custom-ident>* ']'"
  },
  "line-name-list": {
    "syntax": "[ <line-names> | <name-repeat> ]+"
  },
  "line-style": {
    "syntax": "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
  },
  "line-width": {
    "syntax": "<length> | thin | medium | thick"
  },
  "linear-color-hint": {
    "syntax": "<length-percentage>"
  },
  "linear-color-stop": {
    "syntax": "<color> <color-stop-length>?"
  },
  "linear-gradient()": {
    "syntax": "linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )"
  },
  "mask-layer": {
    "syntax": "<mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <geometry-box> || [ <geometry-box> | no-clip ] || <compositing-operator> || <masking-mode>"
  },
  "mask-position": {
    "syntax": "[ <length-percentage> | left | center | right ] [ <length-percentage> | top | center | bottom ]?"
  },
  "mask-reference": {
    "syntax": "none | <image> | <mask-source>"
  },
  "mask-source": {
    "syntax": "<url>"
  },
  "masking-mode": {
    "syntax": "alpha | luminance | match-source"
  },
  "matrix()": {
    "syntax": "matrix( <number>#{6} )"
  },
  "matrix3d()": {
    "syntax": "matrix3d( <number>#{16} )"
  },
  "max()": {
    "syntax": "max( <calc-sum># )"
  },
  "media-and": {
    "syntax": "<media-in-parens> [ and <media-in-parens> ]+"
  },
  "media-condition": {
    "syntax": "<media-not> | <media-and> | <media-or> | <media-in-parens>"
  },
  "media-condition-without-or": {
    "syntax": "<media-not> | <media-and> | <media-in-parens>"
  },
  "media-feature": {
    "syntax": "( [ <mf-plain> | <mf-boolean> | <mf-range> ] )"
  },
  "media-in-parens": {
    "syntax": "( <media-condition> ) | <media-feature> | <general-enclosed>"
  },
  "media-not": {
    "syntax": "not <media-in-parens>"
  },
  "media-or": {
    "syntax": "<media-in-parens> [ or <media-in-parens> ]+"
  },
  "media-query": {
    "syntax": "<media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?"
  },
  "media-query-list": {
    "syntax": "<media-query>#"
  },
  "media-type": {
    "syntax": "<ident>"
  },
  "mf-boolean": {
    "syntax": "<mf-name>"
  },
  "mf-name": {
    "syntax": "<ident>"
  },
  "mf-plain": {
    "syntax": "<mf-name> : <mf-value>"
  },
  "mf-range": {
    "syntax": "<mf-name> [ '<' | '>' ]? '='? <mf-value>\n| <mf-value> [ '<' | '>' ]? '='? <mf-name>\n| <mf-value> '<' '='? <mf-name> '<' '='? <mf-value>\n| <mf-value> '>' '='? <mf-name> '>' '='? <mf-value>"
  },
  "mf-value": {
    "syntax": "<number> | <dimension> | <ident> | <ratio>"
  },
  "min()": {
    "syntax": "min( <calc-sum># )"
  },
  "minmax()": {
    "syntax": "minmax( [ <length> | <percentage> | <flex> | min-content | max-content | auto ] , [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )"
  },
  "named-color": {
    "syntax": "transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen"
  },
  "namespace-prefix": {
    "syntax": "<ident>"
  },
  "ns-prefix": {
    "syntax": "[ <ident-token> | '*' ]? '|'"
  },
  "number-percentage": {
    "syntax": "<number> | <percentage>"
  },
  "numeric-figure-values": {
    "syntax": "[ lining-nums | oldstyle-nums ]"
  },
  "numeric-fraction-values": {
    "syntax": "[ diagonal-fractions | stacked-fractions ]"
  },
  "numeric-spacing-values": {
    "syntax": "[ proportional-nums | tabular-nums ]"
  },
  "nth": {
    "syntax": "<an-plus-b> | even | odd"
  },
  "opacity()": {
    "syntax": "opacity( [ <number-percentage> ] )"
  },
  "overflow-position": {
    "syntax": "unsafe | safe"
  },
  "outline-radius": {
    "syntax": "<length> | <percentage>"
  },
  "page-body": {
    "syntax": "<declaration>? [ ; <page-body> ]? | <page-margin-box> <page-body>"
  },
  "page-margin-box": {
    "syntax": "<page-margin-box-type> '{' <declaration-list> '}'"
  },
  "page-margin-box-type": {
    "syntax": "@top-left-corner | @top-left | @top-center | @top-right | @top-right-corner | @bottom-left-corner | @bottom-left | @bottom-center | @bottom-right | @bottom-right-corner | @left-top | @left-middle | @left-bottom | @right-top | @right-middle | @right-bottom"
  },
  "page-selector-list": {
    "syntax": "[ <page-selector># ]?"
  },
  "page-selector": {
    "syntax": "<pseudo-page>+ | <ident> <pseudo-page>*"
  },
  "paint()": {
    "syntax": "paint( <ident>, <declaration-value>? )"
  },
  "perspective()": {
    "syntax": "perspective( <length> )"
  },
  "polygon()": {
    "syntax": "polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )"
  },
  "position": {
    "syntax": "[ [ left | center | right ] || [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]? | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]"
  },
  "pseudo-class-selector": {
    "syntax": "':' <ident-token> | ':' <function-token> <any-value> ')'"
  },
  "pseudo-element-selector": {
    "syntax": "':' <pseudo-class-selector>"
  },
  "pseudo-page": {
    "syntax": ": [ left | right | first | blank ]"
  },
  "quote": {
    "syntax": "open-quote | close-quote | no-open-quote | no-close-quote"
  },
  "radial-gradient()": {
    "syntax": "radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )"
  },
  "relative-selector": {
    "syntax": "<combinator>? <complex-selector>"
  },
  "relative-selector-list": {
    "syntax": "<relative-selector>#"
  },
  "relative-size": {
    "syntax": "larger | smaller"
  },
  "repeat-style": {
    "syntax": "repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}"
  },
  "repeating-linear-gradient()": {
    "syntax": "repeating-linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )"
  },
  "repeating-radial-gradient()": {
    "syntax": "repeating-radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )"
  },
  "rgb()": {
    "syntax": "rgb( <percentage>{3} [ / <alpha-value> ]? ) | rgb( <number>{3} [ / <alpha-value> ]? ) | rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? )"
  },
  "rgba()": {
    "syntax": "rgba( <percentage>{3} [ / <alpha-value> ]? ) | rgba( <number>{3} [ / <alpha-value> ]? ) | rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? )"
  },
  "rotate()": {
    "syntax": "rotate( [ <angle> | <zero> ] )"
  },
  "rotate3d()": {
    "syntax": "rotate3d( <number> , <number> , <number> , [ <angle> | <zero> ] )"
  },
  "rotateX()": {
    "syntax": "rotateX( [ <angle> | <zero> ] )"
  },
  "rotateY()": {
    "syntax": "rotateY( [ <angle> | <zero> ] )"
  },
  "rotateZ()": {
    "syntax": "rotateZ( [ <angle> | <zero> ] )"
  },
  "saturate()": {
    "syntax": "saturate( <number-percentage> )"
  },
  "scale()": {
    "syntax": "scale( <number> , <number>? )"
  },
  "scale3d()": {
    "syntax": "scale3d( <number> , <number> , <number> )"
  },
  "scaleX()": {
    "syntax": "scaleX( <number> )"
  },
  "scaleY()": {
    "syntax": "scaleY( <number> )"
  },
  "scaleZ()": {
    "syntax": "scaleZ( <number> )"
  },
  "self-position": {
    "syntax": "center | start | end | self-start | self-end | flex-start | flex-end"
  },
  "shape-radius": {
    "syntax": "<length-percentage> | closest-side | farthest-side"
  },
  "skew()": {
    "syntax": "skew( [ <angle> | <zero> ] , [ <angle> | <zero> ]? )"
  },
  "skewX()": {
    "syntax": "skewX( [ <angle> | <zero> ] )"
  },
  "skewY()": {
    "syntax": "skewY( [ <angle> | <zero> ] )"
  },
  "sepia()": {
    "syntax": "sepia( <number-percentage> )"
  },
  "shadow": {
    "syntax": "inset? && <length>{2,4} && <color>?"
  },
  "shadow-t": {
    "syntax": "[ <length>{2,3} && <color>? ]"
  },
  "shape": {
    "syntax": "rect(<top>, <right>, <bottom>, <left>)"
  },
  "shape-box": {
    "syntax": "<box> | margin-box"
  },
  "side-or-corner": {
    "syntax": "[ left | right ] || [ top | bottom ]"
  },
  "single-animation": {
    "syntax": "<time> || <timing-function> || <time> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ]"
  },
  "single-animation-direction": {
    "syntax": "normal | reverse | alternate | alternate-reverse"
  },
  "single-animation-fill-mode": {
    "syntax": "none | forwards | backwards | both"
  },
  "single-animation-iteration-count": {
    "syntax": "infinite | <number>"
  },
  "single-animation-play-state": {
    "syntax": "running | paused"
  },
  "single-transition": {
    "syntax": "[ none | <single-transition-property> ] || <time> || <timing-function> || <time>"
  },
  "single-transition-property": {
    "syntax": "all | <custom-ident>"
  },
  "size": {
    "syntax": "closest-side | farthest-side | closest-corner | farthest-corner | <length> | <length-percentage>{2}"
  },
  "step-position": {
    "syntax": "jump-start | jump-end | jump-none | jump-both | start | end"
  },
  "step-timing-function": {
    "syntax": "step-start | step-end | steps(<integer>[, <step-position>]?)"
  },
  "subclass-selector": {
    "syntax": "<id-selector> | <class-selector> | <attribute-selector> | <pseudo-class-selector>"
  },
  "supports-condition": {
    "syntax": "not <supports-in-parens> | <supports-in-parens> [ and <supports-in-parens> ]* | <supports-in-parens> [ or <supports-in-parens> ]*"
  },
  "supports-in-parens": {
    "syntax": "( <supports-condition> ) | <supports-feature> | <general-enclosed>"
  },
  "supports-feature": {
    "syntax": "<supports-decl> | <supports-selector-fn>"
  },
  "supports-decl": {
    "syntax": "( <declaration> )"
  },
  "supports-selector-fn": {
    "syntax": "selector( <complex-selector> )"
  },
  "symbol": {
    "syntax": "<string> | <image> | <custom-ident>"
  },
  "target": {
    "syntax": "<target-counter()> | <target-counters()> | <target-text()>"
  },
  "target-counter()": {
    "syntax": "target-counter( [ <string> | <url> ] , <custom-ident> , <counter-style>? )"
  },
  "target-counters()": {
    "syntax": "target-counters( [ <string> | <url> ] , <custom-ident> , <string> , <counter-style>? )"
  },
  "target-text()": {
    "syntax": "target-text( [ <string> | <url> ] , [ content | before | after | first-letter ]? )"
  },
  "time-percentage": {
    "syntax": "<time> | <percentage>"
  },
  "timing-function": {
    "syntax": "linear | <cubic-bezier-timing-function> | <step-timing-function>"
  },
  "track-breadth": {
    "syntax": "<length-percentage> | <flex> | min-content | max-content | auto"
  },
  "track-list": {
    "syntax": "[ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?"
  },
  "track-repeat": {
    "syntax": "repeat( [ <positive-integer> ] , [ <line-names>? <track-size> ]+ <line-names>? )"
  },
  "track-size": {
    "syntax": "<track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( [ <length> | <percentage> ] )"
  },
  "transform-function": {
    "syntax": "<matrix()> | <translate()> | <translateX()> | <translateY()> | <scale()> | <scaleX()> | <scaleY()> | <rotate()> | <skew()> | <skewX()> | <skewY()> | <matrix3d()> | <translate3d()> | <translateZ()> | <scale3d()> | <scaleZ()> | <rotate3d()> | <rotateX()> | <rotateY()> | <rotateZ()> | <perspective()>"
  },
  "transform-list": {
    "syntax": "<transform-function>+"
  },
  "translate()": {
    "syntax": "translate( <length-percentage> , <length-percentage>? )"
  },
  "translate3d()": {
    "syntax": "translate3d( <length-percentage> , <length-percentage> , <length> )"
  },
  "translateX()": {
    "syntax": "translateX( <length-percentage> )"
  },
  "translateY()": {
    "syntax": "translateY( <length-percentage> )"
  },
  "translateZ()": {
    "syntax": "translateZ( <length> )"
  },
  "type-or-unit": {
    "syntax": "string | color | url | integer | number | length | angle | time | frequency | cap | ch | em | ex | ic | lh | rlh | rem | vb | vi | vw | vh | vmin | vmax | mm | Q | cm | in | pt | pc | px | deg | grad | rad | turn | ms | s | Hz | kHz | %"
  },
  "type-selector": {
    "syntax": "<wq-name> | <ns-prefix>? '*'"
  },
  "var()": {
    "syntax": "var( <custom-property-name> , <declaration-value>? )"
  },
  "viewport-length": {
    "syntax": "auto | <length-percentage>"
  },
  "wq-name": {
    "syntax": "<ns-prefix>? <ident-token>"
  }
}
