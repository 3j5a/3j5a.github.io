"Java JavaScript Julia" |> lowercase |> collect |> 
                        chs -> reduce(function(dict, ch) haskey(dict, ch) ? (dict[ch] += 1; dict) : dict end, 
                                      chs, init = Dict('j' => 0, 'a' => 0)) |> 
                        collect |> 
                        jaPairs -> map(jaPair -> string(jaPair[2], jaPair[1]), jaPairs) |> 
                        join