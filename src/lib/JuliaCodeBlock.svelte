<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import julia from "svelte-highlight/languages/julia";
                        
    export let code;
    export let inline;
    
</script>

<CodeBlock language={julia} code={code} inline={inline}></CodeBlock>