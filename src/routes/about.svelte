<script>
    import JavaCodeBlock from "$lib/JavaCodeBlock.svelte";
    import JavaScriptCodeBlock from "$lib/JavaScriptCodeBlock.svelte";
    import JuliaCodeBlock from "$lib/JuliaCodeBlock.svelte";
    import Tombstone from "$lib/Tombstone.svelte";
                    
    export let codeBlocks;

</script>

<svelte:head>
  <style>
    .about code.hljs {
    font-size: 0.6em;
}
</style>
</svelte:head>

<main>
    <article class="about">
        <header>
            <h4>about</h4>
        </header>
        <p>Java, JavaScript, Julia Reflective Journal.</p>
        <JavaCodeBlock code={codeBlocks.java[0].code}/>
        <JavaScriptCodeBlock code={codeBlocks.javascript[0].code}/>
        <JuliaCodeBlock code={codeBlocks.julia[0].code}/>
    </article>
    <Tombstone/>
</main>
