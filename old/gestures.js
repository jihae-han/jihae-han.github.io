function lock(e) {};
function move(e) {};
function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };
function lock(e) { x0 = unify(e).clientX };


_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);


