<script>
    import JavaCodeBlock from "$lib/JavaCodeBlock.svelte";
    import JavaScriptCodeBlock from "$lib/JavaScriptCodeBlock.svelte";
    import JuliaCodeBlock from "$lib/JuliaCodeBlock.svelte";
    import Tombstone from "$lib/Tombstone.svelte";
                                                                                                                                                                
    const codeJs = `"Java JavaScript Julia".toLowerCase().split("")
                       .reduce((a, b) => a[b] !== undefined ? (a[b] += 1, a) : a, 
                        {j: 0, a: 0, _: function() {return \`\${this.j}j\${this.a}a\`}})
                       ._(); `

    const codeJava = `"Java JavaScript Julia".toLowerCase().chars()
                       .filter(ch -> ch == 'j' || ch == 'a')
                       .boxed()
                       .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.toList()))
                       .entrySet().stream()
                       .map(jaEntry -> jaEntry.getValue().size() + Character.toString(jaEntry.getKey()))
                       .collect(Collectors.joining())`    

    const codeJulia = `"Java JavaScript Julia" |> lowercase |> collect |> 
                        chs -> reduce(function(dict, ch) haskey(dict, ch) ? (dict[ch] += 1; dict) : dict end, 
                                      chs, init = Dict('j' => 0, 'a' => 0)) |> 
                        collect |> 
                        jaPairs -> map(jaPair -> string(jaPair[2], jaPair[1]), jaPairs) |> 
                        join`

    export let codeBlocks;

    </script>

<svelte:head>
  <style>
    .about code.hljs {
    font-size: 0.6em;
}
</style>
</svelte:head>

<main class="about">
    <h4>about</h4>
    <p>Java, JavaScript, Julia Reflective Journal.</p>
    <JavaCodeBlock code={codeBlocks.java[0].code}/>
    <JavaScriptCodeBlock code={codeBlocks.javascript[0].code}/>
    <JuliaCodeBlock code={codeBlocks.julia[0].code}/>
    <Tombstone/>
</main>
