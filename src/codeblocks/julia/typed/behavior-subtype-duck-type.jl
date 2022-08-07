abstract type Bird end

struct Duck <: Bird
    sound::String
    Duck() = new("quack")
end

struct Silence
    sound::String
    Silence() = new("sound of silence")
end

sound(it::Bird) = "bird: $(it.sound)"
sound(it) = "any: $(it.sound)"