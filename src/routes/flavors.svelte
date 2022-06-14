<script>
    import Caret from "$lib/Caret.svelte";
    import ExternalReference from "$lib/ExternalReference.svelte";

    export let codeBlocks;
</script>

<main class="flavors">
    <article>
        <header>
            <h4>flavors</h4>
        </header>
        <p>
            Leaving different platforms aside, it's super straightforward with <strong>Julia</strong> - there is only one Julia that runs Julia.
            So you just go to <ExternalReference href="https://julialang.org/downloads" text="downloads"/>
            (unless wanna build from <ExternalReference href="https://github.com/JuliaLang/julia" text="source"/> &#129299;)
            and pick the version.
        </p>
    </article>
    <Caret/>
</main>