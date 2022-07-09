<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import julia from "svelte-highlight/languages/julia";
                        
    export let code;
    const prefix = "julia> ";

</script>

<CodeBlock language={julia} code={prefix + code}></CodeBlock>