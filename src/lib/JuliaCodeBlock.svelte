<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import julia from "svelte-highlight/languages/julia";
                        
    export let code;
    
</script>

<CodeBlock language={julia} code={code}></CodeBlock>