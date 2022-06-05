<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import javascript from "svelte-highlight/languages/javascript";
                            
    export let code;
    
</script>

<CodeBlock language={javascript} code={code}></CodeBlock>