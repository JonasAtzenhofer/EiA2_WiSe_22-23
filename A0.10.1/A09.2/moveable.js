var A010_2;
(function (A010_2) {
    class Moveable {
        position;
        velocity;
        update;
        constructor(_position, _velocity) {
            this.position = _position.copy();
            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new A010_2.Vector(0, 0);
            this.update = true;
        }
    }
    A010_2.Moveable = Moveable;
})(A010_2 || (A010_2 = {}));
//# sourceMappingURL=moveable.js.map