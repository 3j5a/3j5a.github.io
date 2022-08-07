up() = println("move on up")
left() = println("everybody's looking left")
right() = println("what the hell is happening right")
down() = println("dont let me down")

Direction = Union{typeof(left), typeof(right), typeof(down), typeof(up)}

move(direction::Direction, steps::Int) = foreach(step -> direction(), 1:steps)